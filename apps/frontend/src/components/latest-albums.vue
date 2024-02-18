<script lang="ts">
    /**
     * This component implements the functionality to fetch and display the album
     * miniatures for the latest albums from the server.
     */
    import { Component, Vue, toNative } from 'vue-facing-decorator';
    import { AlbumMiniature } from 'farodyne-common';
    import { BackendApi } from '@/utils';

    @Component({ name: 'fd-latest-albums' })
    class LatestAlbumsComponent extends Vue {
        albumMiniatures!: AlbumMiniature[];

        // Component creation hook.
        async created() {
            try {
                this.albumMiniatures = await new BackendApi().getLatestAlbums(3);
            } catch (error) {
                console.error('Failed to get latest albums from server.', error);
            }
        }
    }

    export default toNative(LatestAlbumsComponent);
</script>

<template>
    <div class="latest-albums-container">
        <div class="latest-albums">
            <h2>Latest albums</h2>
            <div class="album-miniatures">
                <div v-for="(miniature, index) in albumMiniatures" :key="index">
                    <fd-album-miniature :album-miniature="miniature" />
                </div>
            </div>
            <div class="copyright">All images and videos © Federico Engler</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '@/styles/vars.scss';

    .latest-albums-container {
        position: relative;

        .latest-albums {
            align-items: center;
            top: -12rem;
            color: $primary-font-color;
            display: flex;
            flex-direction: column;
            position: absolute;
            z-index: 5;
            width: 100%;

            h2 {
                font-family: $handwriting-font;
                font-size: 3.2rem;
                font-weight: 100;
                margin: 1rem;
                text-shadow: 1px 1px 3px black;
            }

            .album-miniatures {
                display: flex;
                flex-wrap: wrap;
                justify-content: space-around;
            }

            .copyright {
                filter: opacity(60%);
                font-family: $menu-font;
                font-size: 1.4rem;
            }
        }
    }
</style>
