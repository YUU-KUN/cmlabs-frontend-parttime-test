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

// Temporary
meals.value = [
    {
        "strMeal": "Brown Stew Chicken",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/sypxpx1515365095.jpg",
        "idMeal": "52940"
    },
    {
        "strMeal": "Chicken & mushroom Hotpot",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/uuuspp1511297945.jpg",
        "idMeal": "52846"
    },
    {
        "strMeal": "Chicken Alfredo Primavera",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/syqypv1486981727.jpg",
        "idMeal": "52796"
    },
    {
        "strMeal": "Chicken Basquaise",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/wruvqv1511880994.jpg",
        "idMeal": "52934"
    },
    {
        "strMeal": "Chicken Congee",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/1529446352.jpg",
        "idMeal": "52956"
    },
    {
        "strMeal": "Chicken Handi",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/wyxwsp1486979827.jpg",
        "idMeal": "52795"
    },
    {
        "strMeal": "Kentucky Fried Chicken",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/xqusqy1487348868.jpg",
        "idMeal": "52813"
    },
    {
        "strMeal": "Kung Pao Chicken",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/1525872624.jpg",
        "idMeal": "52945"
    },
    {
        "strMeal": "Pad See Ew",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/uuuspp1468263334.jpg",
        "idMeal": "52774"
    },
    {
        "strMeal": "Piri-piri chicken and slaw",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/hglsbl1614346998.jpg",
        "idMeal": "53039"
    },
    {
        "strMeal": "Thai Green Curry",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/sstssx1487349585.jpg",
        "idMeal": "52814"
    }
]

const getIngredientDetail = () => {
    axios.get(`http://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredientParam}`).then(response => {
        meals.value = response.data.meals
        console.log(meals.value);
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
    // getIngredientDetail()
})
</script>
<template>
    <div class="w-full">
        <div class="flex flex-col-reverse laptop:flex-row items-center justify-between w-full mb-8">
            <p class="text-center text-title1 laptop:text-title2">With <span class="font-bold capitalize text-primary">{{
                ingredient
            }}</span>, you can have...</p>
            <!-- <div class="flex items-center justify-start bg-white w-full laptop:w-1/3 rounded-2xl p-2 mb-4 laptop:mb-0">
                <img loading="lazy" src="/assets/icons/search.png" alt="">
                <input v-model="search" type="text" class="px-2 bg-white w-full text-caption focus:outline-none rounded-2xl"
                    placeholder="What meal do you want?">
            </div> -->

            <Search @update-search="handleSearchUpdate" placeholder="What meal do you have?" />
        </div>


        <div class="grid grid-cols-3 laptop:grid-cols-6 gap-6 gap-y-8 w-full">
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