<script setup lang="ts">
    import { components } from '~/slices';

    const prismic = usePrismic();
    const route = useRoute();

    const config = useRuntimeConfig();
    const siteName = config.public.siteName;

    const { data: event } = useAsyncData(route.params.uid as string, () =>
        prismic.client.getByUID('alumni_events', route.params.uid as string)
    );

    console.log(event);

    useHead({
        title: prismic.asText(event.value?.data.title),
    });
</script>

<template>
    <SliceZone wrapper="main" :slices="event?.data.slices ?? []" :components="components" />
</template>
