<script setup lang="ts">
import CommitmentSection from "@components/CommitmentSection.vue";
import FeaturedProducts from "@components/FeaturedProducts.vue";
import HeroSection from "@components/HeroSection.vue";
import Footer from "@components/layout/Footer.vue";
import Navbar from "@components/layout/Navbar.vue";
import { heroBg } from "@images";

interface Product {
    id: number;
    title: string;
    description: string | null;
    price: number | null;
    images: string[];
}

defineProps<{
    featuredProducts: Product[];
}>();
</script>

<template>
    <div class="min-h-screen bg-brand-ivory flex flex-col">
        <Navbar />
        <!-- Hero: full-bleed detrás del navbar, gestiona su propio pt -->
        <HeroSection
            eyebrow="Ref: CB-MFG / Est. USA"
            title="The Foundation"
            title-italic="of Form"
            description="High-performance lingerie components built on decades of factory-floor expertise. Snap tapes, hook & eye closures, and precision accessories for the world's finest intimate brands."
            :image="heroBg"
            :ctas="[
                {
                    label: 'Explore Components',
                    href: '/products',
                    primary: true,
                },
                { label: 'Request a Sample', href: '/contact' },
            ]"
            size="full"
            gradient="left"
        />
        <main class="flex-1">
            <FeaturedProducts :products="featuredProducts" />
            <CommitmentSection />
        </main>
        <Footer />
    </div>
</template>
