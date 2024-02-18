<script lang="ts">
    /**
     * This component implements the functionality to fetch and display the thumbnails
     * for the latest and newest albums on the server.
     */
    import { Component, Vue, toNative } from 'vue-facing-decorator';
    import { AlbumMiniature } from 'farodyne-common';
    import { BackendApi } from '@/utils';

    @Component({ name: 'fd-latest-albums' })
    class LatestAlbumsComponent extends Vue {
        // The array of album miniatures.
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
    <div class="latest-albums">
        <h2>Latest albums</h2>
        <div class="album-miniatures">
            <div v-for="(miniature, index) in albumMiniatures" :key="index">
                <fd-album-miniature :album-miniature="miniature" />
            </div>
        </div>
        <div class="copyright">All images and videos © Federico Engler</div>
    </div>
</template>

<style lang="scss" scoped>
    @import '@/styles/vars.scss';

    .latest-albums {
        color: $primary-font-color;
        display: flex;
        flex-direction: column;
        align-items: center;

        h2 {
            font-family: $handwriting-font;
            font-size: 4rem;
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
            filter: opacity(65%);
            font-family: $menu-font;
            font-size: 1.4rem;
            margin-top: 4rem;
        }
    }
</style>
