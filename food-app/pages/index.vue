<script setup>
import axios from 'axios'

const ingredients = ref([])

const getIngredients = () => {
    axios.get('https://www.themealdb.com/api/json/v1/1/list.php?i=list').then(response => {
        ingredients.value = response.data.meals.slice(0, 12)
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
        <Greeting />
        <Banner />

        <div class="w-full">
            <div class="flex items-center justify-between w-full mb-4">
                <p class="text-title2">Ingredients</p>
                <p @click="navigateTo('/ingredients')" class="flex items-center justify-center cursor-pointer hover:font-medium duration-300">
                    View All <img src="/assets/icons/arrow-right.png" class="w-3" alt="arrow-right">
                </p>
            </div>
            <div class="grid grid-cols-3 laptop:grid-cols-6 gap-4 w-full">
                <div @click="navigateTo(`/ingredients/${ingredient.strIngredient}`)" v-for="ingredient in ingredients" :key="ingredient" class="flex items-center justify-center text-center rounded-2xl bg-white hover:bg-primary hover:text-white cursor-pointer duration-300 p-4 w-full hover:scale-105 mr-4">
                    <p>{{ ingredient.strIngredient }}</p>
                </div>
            </div>
        </div>
    </div>
</template>