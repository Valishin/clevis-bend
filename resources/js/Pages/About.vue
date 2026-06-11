<script setup lang="ts">
import HeroSection from "@components/HeroSection.vue";
import TextBlock   from "@components/TextBlock.vue";
import CbButton from '@components/CbButton.vue'
import AppLayout   from "@components/layout/AppLayout.vue";
import { aboutHeroBg } from "@images";
import { Link } from "@inertiajs/vue3";

const pillarsData = [
    {
        icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
        title: "Quality First",
        desc: "Every component is inspected and tested to meet the highest industry standards.",
    },
    {
        icon: "M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0z",
        title: "On-Time Delivery",
        desc: "Reliable supply chain with USA and overseas manufacturing for consistent lead times.",
    },
    {
        icon: "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0zM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632z",
        title: "Dedicated Service",
        desc: "Stable, long-term partnerships built on trust and exceeding expectations.",
    },
    {
        icon: "M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z",
        title: "Competitive Price",
        desc: "Strategic manufacturing mix delivering premium quality at the right price point.",
    },
];

const journeyItems = [
    {
        phase: 'The Beginning',
        title: 'From the Factory Floor',
        desc:  'Jim Mark started his lingerie accessories career on the factory floor, mastering the craft of making snap tapes — both molded and metal — grommet tape, and hook & eye closures.',
    },
    {
        phase: 'The Vision',
        title: 'Building on Experience',
        desc:  'Years of hands-on experience led Jim to found Clevis Bend with a clear vision: build on that deep manufacturing expertise to create a company that truly understands the product.',
    },
    {
        phase: 'Growth',
        title: 'Broadening the Line',
        desc:  'Jim and the staff of Clevis Bend broadened the product line to encompass most lingerie accessories, while keeping snap tape and hook & eye closures as the core product lines.',
    },
    {
        phase: 'Today',
        title: 'Global Reach, Local Roots',
        desc:  'We still manufacture some of our product line in the USA but most products are made with trusted overseas partners and joint ventures, ensuring quality and reliability worldwide.',
    },
]

const focusItems = [
    { word: 'Quality'  },
    { word: 'Delivery' },
    { word: 'Service'  },
    { word: 'Price'    },
]

const statsData = [
    { value: "30+", label: "Years Experience" },
    { value: "USA", label: "+ Global Partners" },
    { value: "100%", label: "Quality Tested" },
    { value: "24h", label: "Response Time" },
];
</script>

<template>
    <AppLayout>
        <!-- ── Hero strip ── -->
        <HeroSection
            eyebrow="About"
            title="Built from the"
            title-italic="Factory Floor"
            size="half"
            gradient="left"
            :image="aboutHeroBg"
        />

        <!-- ── Story ── -->
        <section class="max-w-7xl mx-auto px-6 lg:px-10 py-20 lg:py-28">
            <div
                class="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-12 lg:gap-20 items-start"
            >
                <!-- Text -->
                <div class="flex flex-col gap-10">
                    <!-- Founder block -->
                    <TextBlock
                        eyebrow="Our Story"
                        title="Jim Mark, Founder & CEO"
                        :paragraphs="[
                            'Clevis Bend\'s founder and CEO is Jim Mark. He started his lingerie accessories career on the factory floor making snap tapes — both molded and metal — grommet tape and hook & eye closures. Years later he started Clevis Bend with an eye toward building on that experience.',
                            'Now, Jim and the staff of Clevis Bend have broadened the product line to encompass most lingerie accessories, although the core product lines are still snap tape and hook & eye closures. We still manufacture some of our product line in the USA, but most products are made with trusted overseas partners and joint ventures.',
                        ]"
                    />

                    <hr data-reveal class="border-brand-champagne" />

                    <!-- Mission block -->
                    <TextBlock
                        eyebrow="Our Commitment"
                        title="Quality First, Always"
                        :paragraphs="[
                            'Our primary focus is on providing our clients with — first and foremost — quality, then on-time delivery, solid service, and price. We know clients only have so much time. We know they seek stable, long-term relationships with a limited number of suppliers; suppliers who consistently deliver the goods day in and day out.',
                            'At Clevis Bend we understand that. We are passionate about quickly earning the trust of our clients and exceeding their expectations — not only for the first order, but for every order that follows.',
                        ]"
                    />

                    <!-- CTA -->
                    <div data-reveal class="flex flex-wrap gap-4 pt-2">
                        <CbButton href="/products" variant="solid">
                            Explore Products
                            <svg
                                class="w-4 h-4"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.5"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                />
                            </svg>
                        </CbButton>
                        <CbButton href="/contact" variant="outline">
                            Get in Touch
                        </CbButton>
                    </div>
                </div>

                <!-- Right: pillars -->
                <div class="flex flex-col gap-px border border-brand-champagne">
                    <div
                        v-for="(item, i) in pillarsData"
                        :key="i"
                        data-reveal
                        class="flex gap-6 px-8 py-7 bg-brand-ivory hover:bg-white transition-colors"
                        :class="{ 'border-t border-brand-champagne': i > 0 }"
                    >
                        <div class="shrink-0 mt-0.5">
                            <svg
                                class="w-5 h-5 text-brand-dusty-rose/70"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.5"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    :d="item.icon"
                                />
                            </svg>
                        </div>
                        <div>
                            <p
                                class="font-display text-lg text-neutral-800 mb-1"
                            >
                                {{ item.title }}
                            </p>
                            <p
                                class="font-sans text-sm text-neutral-500 leading-relaxed"
                            >
                                {{ item.desc }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ── Our Path to Excellence ── -->
        <section class="bg-brand-champagne/30 py-24 lg:py-32 px-6 lg:px-10">
            <div class="max-w-7xl mx-auto">

                <!-- Header -->
                <div class="text-center mb-20">
                    <p data-reveal class="font-sans text-xs tracking-[0.25em] uppercase text-brand-dusty-rose mb-4">
                        The Journey
                    </p>
                    <h2 data-reveal class="font-display text-4xl lg:text-5xl text-neutral-800">
                        Our Path to Excellence
                    </h2>
                </div>

                <!-- Cards -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-brand-champagne">
                    <div
                        v-for="item in journeyItems"
                        :key="item.phase"
                        data-reveal
                        class="bg-brand-ivory p-8 lg:p-10 flex flex-col gap-5"
                    >
                        <span class="font-sans text-[10px] tracking-[0.25em] uppercase text-neutral-400">
                            {{ item.phase }}
                        </span>
                        <h3 class="font-display text-xl text-neutral-800">
                            {{ item.title }}
                        </h3>
                        <p class="font-sans text-sm text-neutral-500 leading-relaxed">
                            {{ item.desc }}
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- ── What Drives Us ── -->
        <section class="bg-brand-ivory py-24 lg:py-32 px-6 lg:px-10">
            <div class="max-w-7xl mx-auto">

                <!-- Header -->
                <div class="text-center mb-20 max-w-2xl mx-auto">
                    <p data-reveal class="font-sans text-xs tracking-[0.25em] uppercase text-brand-dusty-rose mb-4">
                        Our Focus
                    </p>
                    <h2 data-reveal class="font-display text-4xl lg:text-5xl text-neutral-800 mb-6">
                        What Drives Us
                    </h2>
                    <p data-reveal class="font-sans text-base text-neutral-500 leading-relaxed">
                        We know clients seek stable, long-term relationships with a limited number
                        of suppliers who consistently deliver the goods day in and day out.
                    </p>
                </div>

                <!-- 4 pillars tipográficos -->
                <div class="grid grid-cols-2 lg:grid-cols-4 divide-x divide-brand-champagne border-t border-brand-champagne">
                    <div
                        v-for="(item, i) in focusItems"
                        :key="item.word"
                        data-reveal
                        class="flex flex-col items-center gap-4 pt-10 pb-6 px-4 lg:px-8 text-center"
                    >
                        <span class="font-sans text-[10px] tracking-[0.3em] uppercase text-neutral-400">
                            0{{ i + 1 }}
                        </span>
                        <span class="font-display italic text-4xl lg:text-6xl xl:text-7xl text-brand-dusty-rose leading-none">
                            {{ item.word }}
                        </span>
                    </div>
                </div>
            </div>
        </section>

        <!-- ── Stats strip ── -->
        <section class="bg-brand-champagne/40 border-y border-brand-champagne">
            <div
                class="max-w-7xl mx-auto px-6 lg:px-10 py-12 lg:py-16 grid grid-cols-2 lg:grid-cols-4 divide-brand-champagne [&>*:nth-child(odd)]:border-r [&>*:nth-child(n+3)]:border-t lg:[&>*]:border-r lg:[&>*:nth-child(n+3)]:border-t-0 lg:divide-x"
            >
                <div
                    v-for="stat in statsData"
                    :key="stat.label"
                    data-reveal
                    class="flex flex-col items-center gap-2 px-6 py-4 text-center"
                >
                    <span
                        class="font-display text-3xl lg:text-4xl text-brand-dusty-rose"
                        >{{ stat.value }}</span
                    >
                    <span
                        class="font-sans text-xs tracking-[0.2em] uppercase text-neutral-500"
                        >{{ stat.label }}</span
                    >
                </div>
            </div>
        </section>
    </AppLayout>
</template>
