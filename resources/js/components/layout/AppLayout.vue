<script setup lang="ts">
import Navbar from '@components/layout/Navbar.vue'
import Footer from '@components/layout/Footer.vue'
</script>

<template>
    <div class="min-h-screen bg-brand-ivory flex flex-col">
        <Navbar />
        <!-- pt-16 mobile (navbar h-16) / pt-20 desktop (navbar h-20) -->
        <main class="flex-1 pt-16 lg:pt-20">
            <slot />
        </main>
        <Footer />
    </div>
</template>
