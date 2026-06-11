<script setup lang="ts">
import AppLayout from '@components/layout/AppLayout.vue'
import CbButton  from '@components/CbButton.vue'

defineProps<{ page?: string }>()
</script>

<template>
    <AppLayout>
        <div class="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center py-24">

            <p data-reveal class="font-sans text-xs tracking-[0.25em] uppercase text-brand-dusty-rose mb-6">
                Coming Soon
            </p>

            <h1 data-reveal class="font-display text-4xl lg:text-6xl text-neutral-800 leading-tight mb-6">
                We're working<br>
                <span class="italic text-brand-dusty-rose">on it</span>
            </h1>

            <p data-reveal class="font-sans font-light text-sm lg:text-base text-neutral-500 leading-relaxed max-w-md mb-12">
                This section is currently under construction.
                In the meantime, feel free to explore the rest of the site or get in touch with us directly.
            </p>

            <div data-reveal class="flex flex-wrap gap-4 justify-center">
                <CbButton href="/" variant="solid">
                    Back to Home
                </CbButton>
                <CbButton href="/contact" variant="outline">
                    Contact Us
                </CbButton>
            </div>
        </div>
    </AppLayout>
</template>
