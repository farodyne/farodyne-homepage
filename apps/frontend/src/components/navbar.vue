<script lang="ts">
    /**
     * The component that implements the navigation bar in the application.
     */
    import { Component, Vue, toNative } from 'vue-facing-decorator';
    import { Routes } from '@/constants';

    @Component({ name: 'fd-navbar' })
    class NavbarComponent extends Vue {
        navbarLinks = [Routes.home, Routes.trips, Routes.fantasy, Routes.misc];
        Routes = Routes;
    }

    export default toNative(NavbarComponent);
</script>

<template>
    <div id="navbar-backdrop">
        <div class="gradient"></div>
    </div>
    <div class="navbar-container">
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
    </div>
</template>

<style lang="scss" scoped>
    @import '@/styles/vars.scss';

    #navbar-backdrop {
        background-color: $primary-background-color;
        filter: opacity(80%);
        height: $navbar-desktop-height;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 9;

        @media #{$mobile} {
            height: $navbar-mobile-height;
        }

        .gradient {
            background-image: linear-gradient(to bottom, rgba(255, 0, 0, 0), $primary-background-color);
            filter: brightness(60%);
            position: absolute;
            height: 70%;
            bottom: 0;
            width: 100%;
        }
    }

    .navbar-container {
        display: flex;
        justify-content: center;

        nav {
            align-items: center;
            display: flex;
            height: $navbar-desktop-height;
            justify-content: space-between;
            max-width: $desktop-breakpoint;
            position: fixed;
            top: 0;
            width: 100%;
            z-index: 10;

            @media #{$mobile} {
                height: $navbar-mobile-height;
            }

            .logo {
                color: $navbar-primary-color;
                font-family: $logo-font;
                font-size: 4rem;
                margin-left: 3rem;

                @media #{$mobile} {
                    display: none;
                }
            }

            .links {
                display: flex;
                margin-right: 3rem;

                @media #{$mobile} {
                    width: 100%;
                    justify-content: center;
                }

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
                    color: $navbar-primary-color;
                    font-family: $menu-font;
                    font-size: $navbar-font-size;
                    margin-left: 2.4rem;
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
    }
</style>
