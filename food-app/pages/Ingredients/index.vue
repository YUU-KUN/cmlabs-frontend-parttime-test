<script setup>
import axios from "axios"

const ingredients = ref([])
const search = ref('')

const filteredIngredients = computed(() => {
    if (!search.value) return ingredients.value
    return ingredients.value.filter(ingredient => ingredient.strIngredient.toLowerCase().includes(search.value.toLowerCase()))
})


const handleSearchUpdate = (newValue) => {
    search.value = newValue;
}

const getIngredients = () => {
    axios.get('https://www.themealdb.com/api/json/v1/1/list.php?i=list').then(response => {
        ingredients.value = response.data.meals
    }).catch(error => {
        console.log(error);
    })
}

onMounted(() => {
    getIngredients()
})

</script>
<template>
    <div class="w-full">
        <div class="w-full">
            <div class="flex flex-col-reverse laptop:flex-row items-center justify-between w-full mb-4">
                <p class="text-title1 laptop:text-title2 laptop:mb-0 mb-4">All Ingredients</p>
                <Search @update-search="handleSearchUpdate" placeholder="What ingredient do you have?" />
            </div>
            <ListIngredients :ingredients="filteredIngredients"/>

            <EmptyState v-if="filteredIngredients.length === 0" message="Oops, no ingredient found..." />
        </div>
    </div></template>
