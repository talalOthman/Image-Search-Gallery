<script setup lang="ts">
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Body from "./components/Body.vue";
import axios from "axios";

</script>

<template>
  <div class="min-h-screen flex flex-col items-center gap-y-5 justify-between">
    <Navbar />
    <Body />
    <Footer />
  </div>
</template>

