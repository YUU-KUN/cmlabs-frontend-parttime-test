
<script setup>
const { ingredients } = defineProps(['ingredients'])

const convertToSlug = (ingredient) => {
    const converted = ingredient.toLowerCase().replace(/ /g, '_')
    return converted
}

const goToIngredientDetail = (ingredient) => {
    navigateTo(`/ingredients/${convertToSlug(ingredient)}`)
}
</script>

<template>
    <div class="grid grid-cols-2 tablet:grid-cols-3 laptop:grid-cols-6 gap-4 w-full">
        <div @click="goToIngredientDetail(ingredient.strIngredient)" v-for="ingredient in ingredients"
            :key="ingredient"
            class="flex items-center justify-center text-center rounded-2xl bg-white hover:bg-primary hover:text-white cursor-pointer duration-300 p-4 w-full hover:scale-105 mr-4">
            <p>{{ ingredient.strIngredient }}</p>
        </div>
    </div>
</template>