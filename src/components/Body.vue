<script setup lang="ts">
import axios from "axios";
import { ref, watchEffect } from "vue";
import Spinner from "./Spinner.vue";

interface Image {
    id: string;
    urls: {
        regular: string;
    }
}

const images = ref<Image[]>([]);
const hasValue = ref<boolean>(false);
const isLoading = ref<boolean>(false);
const searchInput = ref<string>("");
const API_URL = "https://api.unsplash.com/search/photos"

watchEffect(() => {
    document.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            onSearch();
        }
    })
})

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
    <div class="flex flex-col w-screen p-3 items-center gap-y-3">
        <div class="form-control pt-3">
            <div class="input-group">
                <input type="text" placeholder="Enter Image Topic" class="input input-bordered md:w-80 input-primary"
                    v-model="searchInput" />
                <button @click="onSearch" class="btn btn-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
            </div>
        </div>
        <div v-if="isLoading" class="flex flex-col grow justify-center items-center gap-y-5 w-screen p-2">
            <Spinner />
        </div>
        <div v-else-if="hasValue" class="flex flex-col grow justify-center items-center gap-y-5 w-screen p-2">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-2">
                <img v-for="image in images" :src="image.urls.regular" class="object-cover h-64 md:h-80 w-full"
                    alt="pictures">
            </div>
        </div>
        <div v-else class="flex flex-col grow justify-center items-center gap-y-5 w-screen p-2">
            <p class="text-2xl">No images to display</p>
            <font-awesome-icon icon="fa-images" class="h-32" />
        </div>
    </div>
</template>