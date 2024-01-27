<script setup>
const emits = defineEmits();
const { placeholder } = defineProps({
    placeholder: String
})
const search = ref('')

const updateSearch = () => {
    emits('update-search', search.value);
}

</script>
<template>
    <div class="flex items-center justify-start bg-white rounded-2xl w-full laptop:w-1/3 p-2 mb-4 laptop:mb-0">
        <img loading="lazy" src="/assets/icons/search.png" alt="">
        <input v-model="search" @input="updateSearch" type="text"
            class="px-2 bg-white w-full text-caption focus:outline-none rounded-2xl" :placeholder="placeholder">
    </div>
</template>