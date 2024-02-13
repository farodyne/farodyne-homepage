<script lang="ts">
    /**
     * The component that implements the navigation bar in the frontend.
     */
    import { Component, Vue, toNative } from 'vue-facing-decorator';
    import { Routes } from '@/constants';

    @Component({ name: 'fd-navbar' })
    class Navbar extends Vue {
        navbarLinks = [Routes.home, Routes.trips, Routes.fantasy, Routes.misc];
        Routes = Routes;
    }

    export default toNative(Navbar);
</script>

<template>
    <div id="navbar-backdrop">
        <div class="gradient"></div>
    </div>
    <nav>
        <div class="logo">Federico Engler</div>
        <div class="links">
            <router-link v-for="link in navbarLinks" :to="`/${link}`">
                <div class="link">
                    <div class="icon">
                        <fd-home-icon v-if="link === Routes.home" />
                        <fd-trips-icon v-if="link === Routes.trips" />
                        <fd-fantasy-icon v-if="link === Routes.fantasy" />
                        <fd-misc-icon v-if="link === Routes.misc" />
                    </div>
                    <div class="text">
                        {{ link }}
                    </div>
                </div>
            </router-link>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
    @import '@/styles/vars.scss';

    $navlink-color: #7ba4c6;
    $navlink-active-color: #52c5e1;
    $navlink-hover-color: #a6c4db;
    $transition-duration: 0.3s;

    #navbar-backdrop {
        background-color: $primary-background-color;
        filter: opacity(80%);
        height: $navbar-height;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 5;

        .gradient {
            background-image: linear-gradient(to bottom, rgba(255, 0, 0, 0), $primary-background-color);
            filter: brightness(60%);
            position: absolute;
            height: 70%;
            bottom: 0;
            width: 100%;
        }
    }

    nav {
        align-items: center;
        display: flex;
        height: $navbar-height;
        justify-content: space-between;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 10;

        .logo {
            color: #b5b5b5;
            font-family: $handwriting-font;
            font-size: 4rem;
            margin-left: 3rem;
        }

        .links {
            display: flex;

            .link {
                align-items: center;
                display: flex;

                .icon {
                    height: 2.6rem;
                    margin: 0.6rem;
                    width: 2.6rem;
                }

                .text {
                    &::first-letter {
                        text-transform: uppercase;
                    }
                }
            }

            a {
                color: #c5c5c5;
                font-family: $menu-font;
                font-size: $navbar-font-size;
                margin: 0 2rem;
                text-decoration: none;
                transition-duration: $transition-duration;

                &:hover {
                    color: $navlink-hover-color;
                    @include blurry-text-shadow($navlink-color);
                }
            }

            .router-link-active {
                color: $navlink-active-color;
                @include blurry-text-shadow(#7ba4c6);
            }
        }
    }
</style>
