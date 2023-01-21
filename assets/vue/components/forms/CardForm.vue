<template>
    <div class="card">
        <div class="heading">
            <h4> {{ title }}</h4>
        </div>
        <slot></slot>
    </div>
</template>

<script setup>
    defineProps({
        title: {
            type: String
        }
    })
</script>

<style lang="scss">
    .card {
        background: var(--color-white);
        border-radius: var(--card-border-radius);
        padding: var(--card-paddding);
    }
</style>