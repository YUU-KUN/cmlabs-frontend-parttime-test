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
        <ListMeals :meals="filteredMeals"/>
        <EmptyState v-if="filteredMeals.length === 0" message="Oops, no meal found..." />
    </div>
</template>