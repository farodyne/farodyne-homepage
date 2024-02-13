<script lang="ts">
    /**
     * The component that implements the navigation bar in the frontend.
     */
    import { Component, Vue, toNative } from 'vue-facing-decorator';
    import { Routes } from '@/constants';

    @Component({ name: 'fd-navbar' })
    class Navbar extends Vue {
        navbarLinks = [Routes.home, Routes.trips, Routes.fantasy, Routes.misc];
    }

    export default toNative(Navbar);
</script>

<template>
    <div id="navbar-backdrop">
        <div class="gradient"></div>
    </div>
    <nav>
        <div class="name">Federico Engler</div>
        <div class="links">
            <router-link v-for="link in navbarLinks" :to="`/${link}`">{{ link }}</router-link>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
    @import '@/styles/vars.scss';

    $navlink-color: #7ba4c6;
    $navlink-active-color: #52c5e1;
    $navlink-hover-color: #a6c4db;
    $transition-duration: 0.4s;

    #navbar-backdrop {
        background-color: $primary-background-color;
        filter: opacity(80%);
        height: $navbar-height;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 5;

        .gradient {
            background-image: linear-gradient(to top, rgba(255, 0, 0, 0), $primary-background-color);
            filter: brightness(30%);
            position: absolute;
            height: 50%;
            top: 0;
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

        .name {
            color: #b5b5b5;
            font-family: $handwriting-font;
            font-size: 4rem;
            margin-left: 3rem;
        }

        .links {
            display: flex;

            a {
                color: #c5c5c5;
                font-family: $menu-font;
                font-size: $navbar-font-size;
                margin: 0 4rem;
                text-decoration: none;
                transition-duration: $transition-duration;

                &:hover {
                    color: $navlink-hover-color;
                    @include blurry-text-shadow($navlink-color);
                }

                &::first-letter {
                    text-transform: uppercase;
                }
            }

            .router-link-active {
                color: $navlink-active-color;
                @include blurry-text-shadow(#7ba4c6);
            }
        }
    }
</style>
