<script lang="ts">
    /**
     * The view used to display a particular section of the homepage. A section is for
     * example the section of landscape photography, or the one for fantasy images.
     */
    import { Component, Vue } from 'vue-facing-decorator';
    import { AlbumMiniature } from 'farodyne-common';
    import { BackendApi, Utils } from '@/utils';

    @Component
    export default class SectionComponent extends Vue {
        albumMiniatures!: AlbumMiniature[];

        // The "created" hook for this view.
        async created() {
            const type = this.$route.path.substring(1);

            try {
                this.albumMiniatures = await new BackendApi().getSection(type);
            } catch (error) {
                console.error(`Failed to get section "${type}" from server.`);
            }
        }

        // Computed for the backdrop image use in this section.
        get backdropUrl() {
            const type = this.$route.path.substring(1);
            return Utils.fullImagePath(`/backdrops/${type}.webp`);
        }
    }
</script>

<template>
    <div>
        <!-- Render the section backdrop. -->
        <div class="backdrop">
            <img :src="backdropUrl" />
            <div class="gradient"></div>
        </div>

        <!-- Render the section miniatures. -->
        <div class="section-container">
            <div v-if="albumMiniatures" class="section">
                <div v-for="albumMiniature in albumMiniatures" :key="albumMiniature.id">
                    <fd-album-miniature :album-miniature="albumMiniature" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '@/styles/vars.scss';

    .backdrop {
        opacity: 0.35;
        position: fixed;
        top: $navbar-desktop-height;
        width: 100%;
        z-index: -1;

        .gradient {
            background-image: linear-gradient(to bottom, rgba(255, 0, 0, 0), $primary-background-color);
            position: absolute;
            height: 50%;
            bottom: 0;
            width: 100%;
        }

        img {
            filter: grayscale(0.35);
            width: 100%;
        }
    }

    .section-container {
        display: flex;
        margin-top: $navbar-desktop-height;
        justify-content: center;
        padding-top: 4rem;
        width: 100%;

        .section {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            max-width: $desktop-breakpoint;
        }
    }
</style>
