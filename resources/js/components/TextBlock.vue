<script setup lang="ts">
defineProps<{
    eyebrow?:     string
    title:        string
    paragraphs:   string[]
}>()
</script>

<template>
    <div data-reveal class="flex flex-col gap-5">

        <p v-if="eyebrow" class="font-sans text-xs tracking-[0.25em] uppercase text-brand-dusty-rose">
            {{ eyebrow }}
        </p>

        <h2 class="font-display text-3xl lg:text-4xl text-neutral-800">
            {{ title }}
        </h2>

        <p
            v-for="(para, i) in paragraphs"
            :key="i"
            class="font-sans font-light text-sm lg:text-base text-neutral-500 leading-relaxed"
        >
            {{ para }}
        </p>

    </div>
</template>
