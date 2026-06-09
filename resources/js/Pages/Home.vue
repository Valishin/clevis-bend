<script setup lang="ts">
import Navbar from '@components/layout/Navbar.vue'
import HeroSection from '@components/HeroSection.vue'
import CommitmentSection from '@components/CommitmentSection.vue'
</script>

<template>
    <div class="min-h-screen bg-brand-ivory">
        <Navbar />
        <main>
            <HeroSection />
            <CommitmentSection />
        </main>
    </div>
</template>
