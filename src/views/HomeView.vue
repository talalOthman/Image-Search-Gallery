<script setup lang="ts">
import { RouterLink } from 'vue-router'

</script>

<template>
    <section>
        <div
            class="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
            <h1 class="md:text-6xl text-4xl font-bold leading-none "> Discover
                <span class="dark:text-primary">Stunning</span> Images
            </h1>
            <p class="px-8 mt-8 mb-12 text-md md:text-lg">Browse through our vast collection of images and find what you're
                looking for in just a few clicks.</p>
            <div class="flex flex-wrap justify-center">
                <RouterLink to="search-image" class="btn btn-primary">Get started</RouterLink>
            </div>
        </div>
    </section>
</template>

