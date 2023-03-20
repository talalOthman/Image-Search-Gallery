<script setup lang="ts">
import axios from "axios";
import { ref, onMounted } from "vue";
import Spinner from "./Spinner.vue";

const images = ref([]);
const hasValue = ref(false);
const isLoading = ref(false);
const searchInput = ref("");
const API_URL = "https://api.unsplash.com/search/photos"

const onSearch = async () => {
    isLoading.value = true;
    const response = await axios.get(API_URL, {
        params: {
            query: searchInput.value,
            per_page: 12,
            client_id: import.meta.env.VITE_UNSPLASH_ACCESS_KEY,
        }
    });
    images.value = response.data.results;
    isLoading.value = false;
    images.value.length > 0 ? hasValue.value = true : hasValue.value = false;
}
</script>

<template>
    <div class=" flex flex-col grow w-screen p-2 items-center gap-y-3">
        <div class="w-screen flex justify-center gap-x-3 pl-4 pr-4 ">
            <input type="text" placeholder="Enter image topic" class="input input-bordered input-primary w-full max-w-xs"
                v-model="searchInput" />
            <button @click="onSearch" class="btn btn-primary">Search</button>
        </div>
        <div v-if="isLoading" class="flex flex-col grow justify-center items-center gap-y-5 w-screen p-2">
            <Spinner />
        </div>
        <div v-else-if="hasValue" class="flex flex-col grow justify-center items-center gap-y-5 w-screen p-2">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
                <img v-for="image in images" :src="image.urls.regular" class="object-cover h-64 md:h-80 w-full" alt="pictures">
            </div>
        </div>
        <div v-else class="flex flex-col grow justify-center items-center gap-y-5 w-screen p-2">
            <p class="text-2xl">No images to display</p>
            <font-awesome-icon icon="fa-images" class="h-32" />
        </div>
    </div>
</template>