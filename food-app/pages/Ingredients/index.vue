<script setup>
import axios from "axios"

const ingredients = ref([])
const search = ref('')

const filteredIngredients = computed(() => {
    if (!search.value) return ingredients.value
    return ingredients.value.filter(ingredient => ingredient.strIngredient.toLowerCase().includes(search.value.toLowerCase()))
})

const convertToSlug = (ingredient) => {
    const converted = ingredient.toLowerCase().replace(/ /g, '_')
    return converted
}

const handleSearchUpdate = (newValue) => {
    search.value = newValue;
}

const goToIngredientDetail = (ingredient) => {
    navigateTo(`/ingredients/${convertToSlug(ingredient)}`)
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
                <Search @update-search="handleSearchUpdate" placeholder="What ingredient do you have?"/>
            </div>
            <div class="grid grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-6 gap-4 w-full">
                <div @click="goToIngredientDetail(ingredient.strIngredient)" v-for="ingredient in filteredIngredients" :key="ingredient"
                    class="flex items-center justify-center text-center rounded-2xl bg-white hover:bg-primary hover:text-white cursor-pointer duration-300 p-4 w-full hover:scale-105 mr-4">
                    <p>{{ ingredient.strIngredient }}</p>
                </div>
            </div>

            <EmptyState v-if="filteredIngredients.length === 0" message="Oops, no ingredient found..." />
        </div>
    </div>
</template>
