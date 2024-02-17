<script lang="ts">
    /**
     * This component is used to render an album miniature.
     */
    import { Component, Prop, Vue, toNative } from 'vue-facing-decorator';
    import type { Album } from '@/types';

    @Component({ name: 'fd-album-miniature' })
    class AlbumMiniature extends Vue {
        /**
         * The parameters for this component are:
         * @param {Album} album - An album description object.
         */
        @Prop album!: Album;
    }

    export default toNative(AlbumMiniature);
</script>

<template>
    <div class="thumbnail-container">
        <router-link :to="`/${album.type}/${album.id}`">
            <!-- Render the thumbnail image. -->
            <div>
                <img :src="album.url" />
            </div>

            <!-- Render the caption text. -->
            <div class="caption">
                {{ album.caption }}
            </div>
        </router-link>
    </div>
</template>
