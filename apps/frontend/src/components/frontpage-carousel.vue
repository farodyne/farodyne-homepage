<script lang="ts">
    /**
     * This component implements the wide image carousel that is used in the landing page
     * for the site. To maintain a nice user experience, the images of the carousel are
     * sequencially preloaded to avoid a slow rendering of the initial image. As the saying
     * goes, you only get one chance to provide a nice first impression.
     */
    import { Component, Vue, toNative } from 'vue-facing-decorator';
    // import { BackendApi, Utils, settings } from '@/utils';
    // import { AlbumImage } from '@/types';

    @Component({ name: 'fd-frontpage-carousel' })
    class FrontpageCarousel extends Vue {}

    export default toNative(FrontpageCarousel);
</script>

<template>
    <div id="carousel-container">
        <div class="gradient" />
        <img src="https://farodyne.com/media/frontpage/frontpage-1.webp" />
    </div>
</template>

<style lang="scss" scoped>
    @import '@/styles/vars.scss';

    #carousel-container {
        margin-top: $navbar-height;
        position: relative;

        img {
            filter: sepia(10%);
            width: 100%;
        }

        .gradient {
            background-image: linear-gradient(to top, $primary-background-color, rgba(0, 0, 0, 0));
            position: absolute;
            height: 20%;
            bottom: 0;
            width: 100%;
            z-index: 3;
        }
    }
</style>
