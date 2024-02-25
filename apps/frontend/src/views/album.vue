<script lang="ts">
    /**
     * This component implements the view used to present an individual album. The
     * album ID is provided as a path parameter and used to fetch the album details
     * from the backend service.
     */
    import { Component, Vue, toNative } from 'vue-facing-decorator';
    import type { Album } from 'farodyne-common';
    import { BackendApi } from '@/utils';

    @Component
    class AlbumComponent extends Vue {
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

    export default toNative(AlbumComponent);
</script>

<template>
    <div v-if="album" class="album-container">
        <div class="content" :style="maxWidth">
            <h1>{{ album.caption }}</h1>

            <!-- Render the album videos. -->
            <div class="video" v-for="(video, i) in album.videos" :key="i">
                <img src="https://farodyne.com/media/backdrops/video.png" />

                <iframe :src="video.url" frameborder="0" allowfullscreen></iframe>
            </div>

            <!-- Render the album images. -->
            <div class="image" v-for="(image, i) in album.images" :key="i" oncontextmenu="return false;">
                <v-lazy-image :src="image.url" />
                <div class="caption-container" :class="{ 'right-text': i % 2 === 1 }">
                    <div class="caption">{{ image.caption }}</div>
                </div>
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
            font-size: 4rem;
            font-weight: 100;
            margin: 2rem 0 0 0;
            text-align: center;
        }

        .content {
            display: flex;
            flex-direction: column;

            .video,
            .image {
                border: 1px solid $frame-color;
                border-radius: 0.7rem;
                height: auto;
                margin: 2rem 1rem 3rem 1rem;
                overflow: hidden;
                position: relative;

                @include box-shadow(0 0 2.4rem 0 $shadow-color);

                img {
                    width: 100%;
                }
            }
        }

        .video {
            position: relative;

            iframe {
                height: 100%;
                left: 0;
                position: absolute;
                top: 0;
                width: 100%;
                z-index: 10;
            }
        }

        .caption-container {
            bottom: 0;
            color: $primary-font-color;
            display: flex;
            font-family: $menu-font;
            font-size: 1.6rem;
            position: absolute;
            width: 100%;

            .caption {
                background-color: rgba(0, 0, 0, 0.5);
                padding: 0.2rem 1rem;
            }
        }

        .right-text {
            justify-content: right;
        }
    }
</style>
