<script setup lang="ts">
    import { components } from '~/slices';

    const prismic = usePrismic();
    const route = useRoute();

    const config = useRuntimeConfig();
    const siteName = config.public.siteName;

    // let pageType = '';
    // if (siteName === 'colby.edu') {
    //     pageType = 'page';
    // } else if (siteName === 'colby.edu') {
    //     pageType = 'alumni_page';
    // }
    console.log(route.params.path[route.params.path.length - 2]);
    const { data: page } = useAsyncData(
        route.params.path[route.params.path.length - 2] as string,
        () =>
            prismic.client.getByUID(
                'page',
                route.params.path[route.params.path.length - 2] as string
            )
    );

    useHead({
        title: prismic.asText(page.value?.data.title),
    });
</script>

<template>
    <SliceZone wrapper="main" :slices="page?.data.slices ?? []" :components="components" />
</template>
