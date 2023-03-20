<script setup lang="ts">

</script>

<template>
    <div class=" flex flex-col grow w-screen p-2 items-center gap-y-3">
        <div class="w-screen flex justify-center gap-x-3 pl-4 pr-4 ">
            <input type="text" placeholder="Enter image topic" class="input input-bordered input-primary w-full max-w-xs" />
            <button class="btn btn-primary">Search</button>
        </div>
        <div class="flex flex-col grow justify-center items-center gap-y-5 w-screen p-2">
            <p class="text-2xl">No images to display</p>
            <font-awesome-icon icon="fa-images" class="h-32" />
        </div>
    </div>
</template>