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
    <nav>
        <div class="name ephesis-regular">Federico Engler</div>
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

    nav {
        align-items: center;

        display: flex;
        font-size: $font-size-desktop;
        height: $navbar-height;
        justify-content: space-between;

        .name {
            color: #c5c5c5;
            font-family: $handwriting-font;
            font-size: 5rem;
            margin-left: 3rem;
        }

        .links {
            display: flex;

            a {
                color: #c5c5c5;
                font-family: $menu-font;
                font-size: 3rem;
                margin: 0 3rem;
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
