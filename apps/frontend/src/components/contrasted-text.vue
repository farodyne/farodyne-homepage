<script lang="ts">
    /**
     * This component is used to render a bright text against a darker
     * background for increased contrast.
     */
    import { Component, Prop, Vue, toNative } from 'vue-facing-decorator';

    @Component({ name: 'fd-contrasted-text' })
    class ContrastedTextComponent extends Vue {
        @Prop text!: String;
    }

    export default toNative(ContrastedTextComponent);
</script>

<template>
    <div class="contrasted-text-container">
        <div class="gradient left"></div>
        <div class="text">{{ text }}</div>
        <div class="gradient right"></div>
    </div>
</template>

<style lang="scss" scoped>
    @import '@/styles/vars.scss';

    $background-color: rgba(0, 0, 0, 0.4);

    .contrasted-text-container {
        display: flex;
        font-family: $handwriting-font;
        font-size: 3rem;
        line-height: 3.2rem;

        .text {
            background-color: $background-color;
            text-shadow: 1px 1px 3px black;
        }

        .gradient {
            width: 7rem;
        }

        .left {
            background-image: linear-gradient(to left, $background-color, transparent);
        }

        .right {
            background-image: linear-gradient(to right, $background-color, transparent);
        }
    }
</style>
