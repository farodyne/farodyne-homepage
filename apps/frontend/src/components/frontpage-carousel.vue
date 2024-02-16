<script lang="ts">
    /**
     * This component implements the wide image carousel that is used in the landing page
     * for the site. To maintain a nice user experience, the images of the carousel are
     * sequencially preloaded to avoid a slow rendering of the initial image. As the saying
     * goes, you only get one chance to provide a nice first impression.
     */
    import { Component, Vue, toNative } from 'vue-facing-decorator';
    import { AlbumImage } from 'farodyne-common';
    import { CarouselImage } from '@/models';
    import { BackendApi, Utils } from '@/utils';

    @Component({ name: 'fd-frontpage-carousel' })
    class FrontpageCarousel extends Vue {
        interval: number = 0;
        images: CarouselImage[] = [];

        // Component creation hook.
        created() {
            this.loadCarouselImages();
        }

        /**
         * Clears the potentially initiated interval used to slowly display the
         * images in the carousel.
         */
        clearInterval() {
            if (this.interval) {
                window.clearInterval(this.interval);
            }
        }

        /**
         * Makes the currently indexed carousel image visible.
         */
        showCarouselImage(index: number) {
            this.images.forEach((image, i) => {
                if (index !== i) {
                    image.hide();
                } else {
                    image.show();
                }
            });
        }

        /**
         * Starts the image carousel.
         */
        startCarousel(index = 0) {
            this.clearInterval();
            this.showCarouselImage(index);

            // Start the carousel.
            this.interval = window.setInterval(() => {
                index = (index + 1) % this.images.length;
                this.showCarouselImage(index);
            }, 10000);
        }

        /**
         * Preload the carousel images.
         */
        preloadImages(images: AlbumImage[]) {
            images.forEach(async (image) => {
                const loadedImage: CarouselImage = await Utils.loadImage(image);

                if (loadedImage) {
                    this.images.push(loadedImage);

                    // When we have an image loaded, start the carousel.
                    if (this.images.length === 1) {
                        this.startCarousel();
                    }
                }
            });
        }

        /**
         * Loads the frontpage images and starts the carousel.
         */
        async loadCarouselImages() {
            try {
                this.preloadImages(await new BackendApi().getCarouselImages());
            } catch (error) {
                console.error('Failed to get frontpage images from server.');
            }
        }

        /**
         * Computed with path to backdrop image.
         */
        get backdropUrl() {
            return Utils.fullImagePath('/frontpage/carousel-images/backdrop.webp');
        }
    }

    export default toNative(FrontpageCarousel);
</script>

<template>
    <div id="carousel-container">
        <img :src="backdropUrl" />

        <div id="images" v-for="image in images" :key="image.url" oncontextmenu="return false;">
            <img :src="image.url" :class="{ visible: image.visible, transparent: !image.visible }" />
        </div>

        <div id="image-bottom-gradient" />
    </div>
</template>

<style lang="scss" scoped>
    @import '@/styles/vars.scss';

    #carousel-container {
        height: auto;
        margin-top: $navbar-desktop-height;
        position: relative;
        width: 100%;

        @media #{$mobile} {
            margin-top: $navbar-mobile-height;
        }

        img {
            transition: all 3s ease-in-out;
            width: 100%;
        }

        #images {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 10;

            & .visible {
                opacity: 1;
            }

            & .transparent {
                opacity: 0;
            }
        }

        #image-bottom-gradient {
            background-image: linear-gradient(to top, $primary-background-color, rgba(0, 0, 0, 0));
            position: absolute;
            height: 25%;
            bottom: 0;
            width: 100%;
            z-index: 50;
        }
    }
</style>
