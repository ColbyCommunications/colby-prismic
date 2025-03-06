import { CustomType, SharedSlice } from '@prismicio/types-internal/lib/customtypes';
import { createClient, createBulkTransaction } from '@prismicio/custom-types-client';
import { Environment, createSliceMachineManager } from '@slicemachine/manager';
import fs from 'node:fs/promises';
import 'dotenv/config';
import path from 'path';

// This function diffs local and remote models, and then pushes updates from local to remote, it does not handle screenshots
const main = async (repo) => {
    console.log(`${repo}==============`);
    const token = await getAuthToken();

    const client = createClient({
        repositoryName: repo,
        token: '',
        fetchOptions: {
            headers: {
                'User-Agent': 'sm-api',
                Authorization: `Bearer ${token}`,
            },
        },
    });

    const { customTypes, slices } = await extractModels(repo);

    const [existingCustomTypes, existingSharedSlices] = await Promise.all([
        client.getAllCustomTypes(),
        client.getAllSharedSlices(),
    ]);

    const bulkTransaction = createBulkTransaction({ deleteDocuments: true });
    bulkTransaction.fromDiff(
        { customTypes: existingCustomTypes, slices: existingSharedSlices },
        { customTypes, slices }
    );

    await client.bulk(bulkTransaction);
};

const extractModels = async (repo) => {
    try {
        const manager = createSliceMachineManager({ cwd: process.cwd() });
        const config = await manager.project.getSliceMachineConfig();
        const adapterName = await manager.project.getAdapterName();

        switch (adapterName) {
            case '@slicemachine/adapter-next':
            case '@slicemachine/adapter-nuxt':
            case '@slicemachine/adapter-sveltekit': {
                console.log(`Types ==============`);
                const specificCustomTypes = await readModels({
                    path: path.join(process.cwd(), `./${repo}/customtypes`),
                    fileName: 'index.json',
                });
                const generalCustomTypes = await readModels({
                    path: path.join(process.cwd(), `./customtypes`),
                    fileName: 'index.json',
                });

                console.log(`Slices ==============`);
                const generalSlices = await readModels({
                    path: path.join(process.cwd(), `./slices`),
                    fileName: 'model.json',
                });
                const specificSlices = await readModels({
                    path: path.join(process.cwd(), `./${repo}/slices`),
                    fileName: 'model.json',
                });

                const customTypes = generalCustomTypes.concat(specificCustomTypes);
                const slices = generalSlices.concat(specificSlices);

                return { customTypes, slices };
                // return { specificCustomTypes, specificSlices };
            }
            default:
                throw new UnsupportedAdapterError(adapterName);
        }
    } catch {
        throw new Error('An error occurred reading local models');
    }
};

const readModels = async ({ path: dirPath, fileName }) => {
    const entries = await fs.readdir(dirPath, { recursive: true, withFileTypes: true });
    console.log(entries);
    const results = [];

    for (const entry of entries) {
        if (entry.name !== fileName || entry.isDirectory()) continue;
        const contents = await fs.readFile(path.join(entry.path, entry.name), 'utf8');
        results.push(JSON.parse(contents));
    }
    console.log(results);
    return results;
};

class UnsupportedAdapterError extends Error {
    constructor(adapterName) {
        super('Slice Machine adapter is not supported.');
        this.name = 'UnsupportedAdapterError';
        this.adapterName = adapterName;
    }
}

const getAuthToken = async () => {
    // const { CMSRP_EMAIL: email, CMSRP_PWD: password } = process.env;
    const authResponse = await fetch('https://auth.prismic.io/login', {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        body: JSON.stringify({ email: 'xxx', password: 'xxx' }),
    });
    return authResponse.text();
};

const repos = ['colbyrepo2'];
for (const repo of repos) {
    main(repo);
}
