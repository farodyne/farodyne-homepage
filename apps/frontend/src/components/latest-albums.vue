<script lang="ts">
    /**
     * This component implements the functionality to fetch and display the thumbnails
     * for the latest and newest albums on the server.
     */
    import { Component, Vue, toNative } from 'vue-facing-decorator';
    import { BackendApi } from '@/utils';
    import { AlbumImage } from 'farodyne-common';

    @Component({ name: 'fd-latest-albums' })
    class LatestAlbums extends Vue {
        // The array of album miniatures.
        albumMiniatures!: AlbumImage[];

        // Component creation hook.
        async created() {
            try {
                this.albumMiniatures = await new BackendApi().getLatestAlbums(3);
            } catch (error) {
                console.error(`Failed to get latest albums from server.`);
            }
        }
    }

    export default toNative(LatestAlbums);
</script>

<template>
    <div id="latest-albums">
        <div class="miniatures">
            <div v-for="miniature in albumMiniatures" :key="miniature.id">
                <!--
                <fd-album-thumbnail :album="album" />
                -->
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '@/styles/vars.scss';
</style>
