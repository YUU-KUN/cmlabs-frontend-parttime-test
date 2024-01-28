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
                <p @click="navigateTo('/ingredients')"
                    class="flex items-center justify-center cursor-pointer hover:font-medium duration-300">
                    View All
                </p>
            </div>
            <ListIngredients :ingredients="ingredients" />
        </div>
    </div>
</template>