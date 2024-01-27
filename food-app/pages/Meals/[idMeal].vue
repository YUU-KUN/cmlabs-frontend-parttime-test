<script setup>
import axios from 'axios'

const route = useRoute()
const idMeal = route.params.idMeal
const otherMenus = ref([])
const meal = ref({})
const mealIngredientsAndMeasures = ref({})
const isInstructionShown = ref(false)
const isRecipeShown = ref(false)

const getMealDetail = async (idMeal) => {
    axios.get(`http://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`).then(response => {
        meal.value = response.data.meals[0]
        getOtherMenus(meal.value.strCategory)
    }).catch(error => {
        console.log(error);
    })
}

const getOtherMenus = (category) => {
    axios.get(`http://www.themealdb.com/api/json/v1/1/filter.php?i=${category}`).then(response => {
        otherMenus.value = response.data.meals.slice(0, 5)
    }).catch(error => {
        console.log(error);
    })
}

const formatYoutubeUrl = (url) => {
    return url.replace("watch?v=", "embed/")
}

onMounted(() => {
    getMealDetail(idMeal)
})
</script>

<template>
    <div class="w-full">
        <div class="grid grid-cols-1 laptop:grid-cols-7 gap-6 w-full">
            <div class="relative w-full laptop:col-span-4">
                <img loading="lazy" :src="meal.strMealThumb" alt="" class="sticky top-10 object-cover rounded-3xl mx-auto">
            </div>
            <div class="laptop:col-span-3 h-full flex flex-col items-start justify-start">
                <div class="w-full">
                    <p class="text-body text-primary-grey font-bold uppercase">{{ meal.strArea }}</p>
                    <p class="text-header">{{ meal.strMeal }}</p>
                    <button class="bg-primary rounded px-2 text-white text-caption mb-4">{{ meal.strCategory }}</button>
                    <hr class="w-full mb-4">

                    <!-- Instruction Card -->
                    <InstructionCard :meal="meal" :isInstructionShown="isInstructionShown" />

                    <!-- Recipe Card -->
                    <RecipeCard :meal="meal" :isRecipeShown="isRecipeShown" />

                    <!-- Youtube Card -->
                    <div v-if="meal.strYoutube"
                        class="flex flex-col items-start justify-start bg-white p-2 rounded-lg cursor-pointer mb-4">
                        <iframe v-if="meal" width="100%" :src="formatYoutubeUrl(meal.strYoutube)"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                    </div>
                </div>

                <!-- Other Menus Card -->
                <OtherMenu v-if="otherMenus.length > 0" :menu="meal.strCategory" :otherMenus="otherMenus"/>
            </div>
        </div>
    </div>
</template>