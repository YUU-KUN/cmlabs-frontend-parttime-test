<script setup>
const { meal, isInstructionShown } = defineProps(['meal', 'isInstructionShown'])

const formatInstructions = (instructions) => {
    const splitted = instructions.split(". ").map((instruction, index) => {
        return index + 1 + ". " + instruction + "."
    })
    return splitted
}
</script>

<template>
    <div @click="isInstructionShown = !isInstructionShown"
        class="flex flex-col items-start justify-start bg-white px-4 py-2 rounded-lg cursor-pointer shadow-md mb-4">
        <div class="flex items-center justify-between w-full">
            <p class="text-headline font-semibold">Instructions</p>
            <img :class="isInstructionShown ? 'rotate-90' : ''" loading="lazy" class="duration-150 w-4"
                src="/assets/icons/arrow-right.png" alt="arrow-right">
        </div>
        <Transition name="slide-fade">
            <div v-if="isInstructionShown" class="w-full">
                <p v-for="instruction in formatInstructions(meal.strInstructions)" :key="instruction"
                    class="text-body mt-2 duration-200">{{ instruction }}</p>
            </div>
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