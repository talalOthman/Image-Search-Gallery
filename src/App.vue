<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Navbar from "./components/Navbar.vue"
import Footer from "./components/Footer.vue";
</script>

<template>
    <div class="absolute inset-0 flex flex-col justify-between">
        <Navbar />
        <RouterView />
        <Footer />
    </div>
</template>
