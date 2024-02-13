<template>
    <div>
        <fd-navbar />
        <router-view :key="$route.path" />
    </div>
</template>

<style lang="scss">
    @import '@/styles/common.scss';
</style>
