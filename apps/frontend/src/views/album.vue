<script lang="ts">
    /**
     * This component implements the view used to present an individual album. The
     * album ID is provided as a path parameter and used to fetch the album details
     * from the backend service.
     */
    import { Component, Vue } from 'vue-facing-decorator';
    import type { Album } from 'farodyne-common';
    import { BackendApi } from '@/utils';

    @Component
    export default class PageAlbum extends Vue {
        album!: Album;

        // The "created" hook for this view.
        async created() {
            const { id } = this.$route.params;

            try {
                this.album = await new BackendApi().getAlbum(id as string);
            } catch (error) {
                console.error(`Failed to get album "${id}" from server.`);
            }
        }

        // Computed for the max-with size of the album.
        get maxWidth() {
            return `max-width: ${this.album?.width}px;`;
        }
    }
</script>

<template>
    <div v-if="album" class="album-container">
        <div class="content" :style="maxWidth">
            <h1>{{ album.caption }}</h1>
            <!-- Render the album videos. -->
            <!--
        <div class="video" v-for="(video, i) in album.videos" :key="i">
            
            <img :src="`${contentBase}/backdrops/video.png`" />

            <iframe :src="video.url" frameborder="0" allowfullscreen></iframe>
        </div>
                    -->

            <!-- Render the album images. -->

            <div class="image" v-for="(image, i) in album.images" :key="i" oncontextmenu="return false;">
                <v-lazy-image :src="image.url" />
                <div class="caption">{{ image.caption }}</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '@/styles/vars.scss';

    .album-container {
        display: flex;
        justify-content: center;
        margin-top: $navbar-desktop-height;

        h1 {
            color: $primary-font-color;
            font-family: $handwriting-font;
            font-size: 6rem;
            font-weight: 100;
            margin: 3rem 0 0 0;
            text-align: center;
        }

        .content {
            display: flex;
            flex-direction: column;

            .video,
            .image {
                height: auto;
                margin: 2rem 1rem 3rem 1rem;

                img {
                    width: 100%;
                    @include box-shadow(0 0 2.4rem 0 $shadow-color);
                }
            }
        }

        /**
        .video {
            position: relative;

            iframe {
                position: absolute;
                left: 2rem;
                height: calc(100% - 5rem);
                top: 2rem;
                width: calc(100% - 4rem);
                z-index: 10;
            }
        }
         */

        .caption {
            // color: $secondary-foreground-color;
            // font-size: $font-size-sm;
            text-align: center;
        }
    }
</style>
