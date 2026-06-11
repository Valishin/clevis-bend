<script setup lang="ts">
import { ref } from 'vue'
import { useReveal } from '@/composables/useReveal'
import IconQuality     from '@components/icons/IconQuality.vue'
import IconExpertise   from '@components/icons/IconExpertise.vue'
import IconPartnership from '@components/icons/IconPartnership.vue'
import IconReliability from '@components/icons/IconReliability.vue'
import IconPrecision   from '@components/icons/IconPrecision.vue'
import IconService     from '@components/icons/IconService.vue'

const pillars = [
    {
        ref:  'QA-001',
        icon: IconQuality,
        title: 'Quality First',
        desc: 'Every component is inspected and tested to meet the highest industry standards.',
    },
    {
        ref:  'EX-002',
        icon: IconExpertise,
        title: 'Decades of Expertise',
        desc: 'Factory-floor knowledge built over generations of lingerie manufacturing.',
    },
    {
        ref:  'PT-003',
        icon: IconPartnership,
        title: 'True Partnership',
        desc: 'Stable, long-term relationships built on trust and exceeding expectations.',
    },
    {
        ref:  'RL-004',
        icon: IconReliability,
        title: 'Reliability',
        desc: 'Consistent supply chain with USA and overseas manufacturing for steady lead times.',
    },
    {
        ref:  'PR-005',
        icon: IconPrecision,
        title: 'Precision',
        desc: 'Strategic manufacturing delivering premium quality at the right price point.',
    },
    {
        ref:  'SV-006',
        icon: IconService,
        title: 'Dedicated Service',
        desc: 'Responsive support and guidance at every step of the sourcing process.',
    },
]

const heading = ref<HTMLElement | null>(null)
const grid    = ref<HTMLElement | null>(null)
useReveal(heading, { children: '[data-reveal]', stagger: 0.1, y: 20, duration: 0.6 })
useReveal(grid,    { children: '[data-reveal]', stagger: 0.08, y: 24, duration: 0.6, delay: 0.1 })
</script>

<template>
    <section class="bg-brand-ivory py-28 px-6 lg:px-10">
        <div class="max-w-7xl mx-auto">

            <!-- Header -->
            <div ref="heading" class="text-center mb-20">
                <p data-reveal class="font-sans text-xs tracking-[0.25em] uppercase text-brand-dusty-rose mb-4">
                    Our Commitment
                </p>
                <h2 data-reveal class="font-display text-4xl lg:text-5xl text-neutral-800">
                    Built on Six Pillars
                </h2>
            </div>

            <!-- Grid -->
            <div ref="grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-brand-champagne border border-brand-champagne">
                <div
                    v-for="pillar in pillars"
                    :key="pillar.ref"
                    data-reveal
                    class="p-10 flex flex-col gap-6"
                >
                    <!-- Ref code -->
                    <span class="font-sans text-[10px] tracking-[0.2em] uppercase text-neutral-400">
                        {{ pillar.ref }}
                    </span>

                    <!-- Icon -->
                    <component
                        :is="pillar.icon"
                        class="w-10 h-10 text-brand-dusty-rose"
                    />

                    <!-- Text -->
                    <div>
                        <h3 class="font-display text-xl text-neutral-800 mb-3">
                            {{ pillar.title }}
                        </h3>
                        <p class="font-sans text-sm text-neutral-500 leading-relaxed">
                            {{ pillar.desc }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
