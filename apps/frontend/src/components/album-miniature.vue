<script lang="ts">
    /**
     * This component is used to render an album miniature.
     */
    import { Component, Prop, Vue, toNative } from 'vue-facing-decorator';
    import { AlbumMiniature } from 'farodyne-common';

    @Component({ name: 'fd-album-miniature' })
    class AlbumMiniatureComponent extends Vue {
        @Prop albumMiniature!: AlbumMiniature;
    }

    export default toNative(AlbumMiniatureComponent);
</script>

<template>
    <div class="album-miniature-container">
        <router-link :to="`/${albumMiniature.type}/${albumMiniature.id}`">
            <div>
                <img :src="albumMiniature.url" />
            </div>

            <div class="caption">
                {{ albumMiniature.caption }}
            </div>
        </router-link>
    </div>
</template>

<style lang="scss" scoped>
    @import '@/styles/vars.scss';

    .album-miniature-container {
        border: 1px solid #666;
        border-radius: 1rem;
        margin: 0 3.6rem 4rem 3.6rem;
        overflow: hidden;
        position: relative;
        transition-duration: $transition-duration;

        @include box-shadow(0 0 3rem 0 $shadow-color);

        .caption {
            background-color: black;
            bottom: 0;
            color: $primary-font-color;
            font-family: $menu-font;
            font-size: 1.6rem;
            font-weight: bold;
            padding: 4px;
            position: absolute;
            text-align: center;
            width: 100%;
        }

        a {
            text-decoration: none;
        }

        img {
            filter: saturate(75%);
            height: 140px;
            transition-duration: $transition-duration;
            width: 270px;

            &:hover {
                filter: saturate(100%);
                transform: scale(1.08);
            }
        }

        &:hover {
            @include box-shadow(0 0 2rem 0 $navlink-active-color);
        }
    }
</style>
