<script lang="ts">
    /**
     * Component used to render the misc icon.
     */
    import { Component, Vue, toNative } from 'vue-facing-decorator';

    @Component({ name: 'fd-misc-icon' })
    class MiscIcon extends Vue {}
    export default toNative(MiscIcon);
</script>

<template>
    <svg fill="currentColor" viewBox="-5 -2 28 28" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
            <path
                d="M21,15V2a1,1,0,0,0-1-1H12a1,1,0,0,0-.929.629L10,4.308,8.929,1.629A1,1,0,0,0,8,1H4A1,1,0,0,0,3,2V15a2,2,0,0,0,2,2H9v3a3,3,0,0,0,3,3,3.054,3.054,0,0,0,3-3.107V17h4A2,2,0,0,0,21,15ZM5,3H7.323L9.071,7.371a1,1,0,0,0,1.858,0L12.677,3H19v8H5Zm9,12a1,1,0,0,0-1,1v3.893a1.083,1.083,0,0,1-.825,1.092A1,1,0,0,1,11,20V16a1,1,0,0,0-1-1H5V13H19v2Z"
            ></path>
        </g>
    </svg>
</template>
