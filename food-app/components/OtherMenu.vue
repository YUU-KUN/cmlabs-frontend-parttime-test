<script setup>
const { menu, otherMenus } = defineProps(['menu', 'otherMenus'])
</script>
<template>
    <div
        class="relative overflow-hidden flex items-center justify-start w-full shadow-md bg-gradient-to-r from-primary to-orange-500 pr-2 rounded-lg cursor-pointer">
        <div
            class="flex flex-col text-center items-center justify-center h-full bg-white rounded-tr-sm rounded-br-full mr-4">
            <p class="z-20 m-4 text-body text-left">Other <span class="font-bold">{{ menu }}</span>
                Menus
            </p>
        </div>
        <div class="flex items-center justify-start w-full overflow-scroll py-4 h-full">
            <div @click="navigateTo(`/meals/${menu.idMeal}`)" v-for="menu in otherMenus" :key="menu"
                class="relative border-2 border-white flex items-center h-full justify-center text-center aspect-square rounded-2xl bg-white hover:text-black text-transparent cursor-pointer duration-300 p-4 w-full hover:scale-105 mr-4">
                <img :src="menu.strMealThumb" alt="" class="absolute rounded-2xl hover:opacity-20 duration-300">
                <p class="text-body font-medium">{{ menu.strMeal }}</p>
            </div>
        </div>
    </div>
</template>