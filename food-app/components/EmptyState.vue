<script setup>
const { message } = defineProps(['message'])
</script>

<template>
    <div class="flex flex-col items-center justify-center w-full">
        <img loading="lazy" src="/assets/icons/empty.svg" alt="empty" class="laptop:w-1/3 w-1/2">
        <p>{{ message }}</p>
    </div>
</template>