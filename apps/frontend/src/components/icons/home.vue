<script lang="ts">
    /**
     * Component used to render the home icon.
     */
    import { Component, Vue, toNative } from 'vue-facing-decorator';

    @Component({ name: 'fd-home-icon' })
    class HomeIcon extends Vue {}
    export default toNative(HomeIcon);
</script>

<template>
    <svg viewBox="1 2 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
            <path
                d="M10.5 18.5H6.5V8.66667L3 11L12 5L21 11L17.5 8.66667V18.5H13.5M10.5 18.5V13.5H13.5V18.5M10.5 18.5H13.5"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></path>
        </g>
    </svg>
</template>
