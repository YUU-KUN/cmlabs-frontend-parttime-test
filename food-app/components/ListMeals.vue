<script setup>
const { meals } = defineProps(['meals'])
const goToMealDetail = (idMeal) => {
    navigateTo(`/meals/${idMeal}`)
}
</script>

<template>
    <div class="grid grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-6 gap-6 gap-y-8 w-full">
        <div @click="goToMealDetail(meal.idMeal)" v-for="meal in meals" :key="meal" class="text-center cursor-pointer ">
            <div
                class="flex flex-col items-center justify-center rounded-full bg-white p-1 duration-300 hover:scale-105 hover:shadow-primary shadow mb-2">
                <img loading="lazy" :src="meal.strMealThumb" alt="" class="object-cover rounded-full w-full">
            </div>
            <p>{{ meal.strMeal }}</p>
        </div>
    </div>
</template>