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
        <img src="https://farodyne.com/media/frontpage/frontpage-1.webp" />
    </div>
</template>

<style lang="scss" scoped>
    @import '@/styles/vars.scss';

    #carousel-container {
        // width: 100%;
        @include box-shadow(0px 0px 20px 0px $shadow-color);

        img {
            //border-top: 2px solid #b5b5b5;
            // border-bottom: 2px solid #b5b5b5;
            box-sizing: border-box;
            filter: sepia(20%);
            width: 100%;
        }
    }
</style>
