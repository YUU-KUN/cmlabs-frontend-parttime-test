<script setup>
const goToHome = () => {
    navigateTo('/')
}
</script>
<template>
    <header class="sticky z-30 top-0 flex items-center justify-between w-full bg-red-500 bg-white shadow px-10 laptop:px-40 py-5">
        <p @click="navigateTo('/')" class="cursor-pointer font-bold text-3xl max-w-1/2 overflow-hidden"><span class="text-primary">Food</span>App.</p>
        <p @click="navigateTo('/ingredients')" class="hover:text-primary duration-300 cursor-pointer">All Ingredients</p>
    </header>    
</template>