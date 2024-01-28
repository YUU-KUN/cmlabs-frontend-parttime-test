<script setup>
import axios from "axios"
const route = useRoute()

const ingredientParam = route.params.detail
const ingredient = ingredientParam.replace(/_/g, ' ')
const meals = ref([])
const search = ref('')
const filteredMeals = computed(() => {
    if (!search.value) return meals.value
    return meals.value.filter(meal => meal.strMeal.toLowerCase().includes(search.value.toLowerCase()))
})

const getIngredientDetail = () => {
    axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredientParam}`).then(response => {
        meals.value = response.data.meals
    }).catch(error => {
        console.log(error);
    })
}

const handleSearchUpdate = (newValue) => {
    search.value = newValue;
}

const goToMealDetail = (idMeal) => {
    navigateTo(`/meals/${idMeal}`)
}


onMounted(() => {
    getIngredientDetail()
})
</script>
<template>
    <div class="w-full">
        <div class="flex flex-col-reverse laptop:flex-row items-center justify-between w-full mb-8">
            <p class="text-center text-title1 laptop:text-title2">With <span class="font-bold capitalize text-primary">{{
                ingredient
            }}</span>, you can have...</p>
            <Search @update-search="handleSearchUpdate" placeholder="What meal do you have?" />
        </div>


        <div class="grid grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-6 gap-6 gap-y-8 w-full">
            <div @click="goToMealDetail(meal.idMeal)" v-for="meal in filteredMeals" :key="meal"
                class="text-center cursor-pointer ">
                <div
                    class="flex flex-col items-center justify-center rounded-full bg-white p-1 duration-300 hover:scale-105 hover:shadow-primary shadow mb-2">
                    <img loading="lazy" :src="meal.strMealThumb" alt="" class="object-cover rounded-full w-full">
                </div>
                <p>{{ meal.strMeal }}</p>
            </div>
        </div>
        <EmptyState v-if="filteredMeals.length === 0" message="Oops, no meal found..." />

    </div>
</template>