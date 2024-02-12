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
        <router-link v-for="link in navbarLinks" :to="`/${link}`">{{ link }}</router-link>
    </nav>
</template>
