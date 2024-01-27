<script setup>
const { meal, isRecipeShown } = defineProps(['meal', 'isRecipeShown'])

const ingredientsAndMeasures = computed(() => {
    const ingredients = [];
    const measures = [];

    for (let i = 1; i <= 20; i++) {
        const ingredientKey = `strIngredient${i}`;
        const measureKey = `strMeasure${i}`;

        if (meal[ingredientKey] && meal[measureKey]) {
            ingredients.push(meal[ingredientKey]);
            measures.push(meal[measureKey]);
        }
    }

    return ingredients.map((ingredient, index) => ({
        ingredient,
        measure: measures[index],
    }));
})
</script>

<template>
    <div @click="isRecipeShown = !isRecipeShown"
        class="flex flex-col items-start justify-start bg-white px-4 py-2 rounded-lg cursor-pointer shadow-md mb-4">
        <div class="flex items-center justify-between w-full">
            <p class="text-headline font-semibold">Recipe</p>
            <img :class="isRecipeShown ? 'rotate-90' : ''" loading="lazy" class="duration-150 w-4"
                src="/assets/icons/arrow-right.png" alt="arrow-right">
        </div>
        <Transition name="slide-fade">
            <ul v-if="isRecipeShown" class="text-body mt-2 duration-200">
                <li v-for="ingredientObj in ingredientsAndMeasures" :key="ingredientObj.ingredient">
                    {{ `${ingredientObj.measure} ${ingredientObj.ingredient}` }}
                </li>
            </ul>
        </Transition>
    </div>
</template>

<style scoped>
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transform: translateY(20px);
    opacity: 0;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(-20px);
    opacity: 0;
}
</style>