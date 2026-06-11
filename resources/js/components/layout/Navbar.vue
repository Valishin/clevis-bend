<script setup lang="ts">
import { cbMonogram } from "@images";
import { Link, usePage } from "@inertiajs/vue3";
import { ref, computed } from "vue";

const mobileOpen = ref(false);
const page = usePage();

function isActive(href: string): boolean {
    const current = page.url;
    if (href === '/') return current === '/';
    return current.startsWith(href);
}

const links = [
    { label: "Home",     href: "/",         disabled: false },
    { label: "Products", href: "/products", disabled: true  },
    { label: "About",    href: "/about",    disabled: false },
    { label: "Contact",  href: "/contact",  disabled: false },
];
</script>

<template>
    <header
        class="fixed inset-x-0 top-0 z-50 bg-brand-ivory/95 backdrop-blur-sm border-b border-brand-champagne"
    >
        <div
            class="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-16 lg:h-20"
        >
            <!-- Logo -->
            <Link href="/" class="flex items-center gap-3 shrink-0">
                <img
                    :src="cbMonogram"
                    alt="Clevis Bend"
                    class="h-9 lg:h-11 w-auto object-contain"
                />
                <span
                    class="font-display text-xl lg:text-2xl tracking-widest text-brand-dusty-rose hidden sm:block"
                >
                    Clevis Bend
                </span>
            </Link>

            <!-- Desktop Nav -->
            <nav class="hidden md:flex items-center gap-8">
                <template v-for="link in links" :key="link.href">
                    <span
                        v-if="link.disabled"
                        class="font-sans text-xs tracking-[0.18em] uppercase text-neutral-300 cursor-not-allowed select-none"
                        :title="`${link.label} — coming soon`"
                    >
                        {{ link.label }}
                    </span>
                    <Link
                        v-else
                        :href="link.href"
                        class="relative font-sans text-xs tracking-[0.18em] uppercase transition-colors"
                        :class="isActive(link.href)
                            ? 'text-brand-dusty-rose after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-px after:bg-brand-dusty-rose'
                            : 'text-neutral-600 hover:text-brand-dusty-rose'"
                    >
                        {{ link.label }}
                    </Link>
                </template>
            </nav>

            <!-- CTA Button -->
            <Link
                href="/contact"
                class="hidden md:inline-flex items-center border border-brand-dusty-rose text-brand-dusty-rose font-sans text-xs tracking-[0.18em] uppercase px-5 py-2.5 hover:bg-brand-dusty-rose hover:text-white transition-colors"
            >
                Request Sample
            </Link>

            <!-- Mobile toggle -->
            <button
                class="md:hidden p-2 text-brand-dusty-rose"
                @click="mobileOpen = !mobileOpen"
                aria-label="Toggle menu"
            >
                <svg
                    v-if="!mobileOpen"
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke-linecap="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
                    />
                </svg>
                <svg
                    v-else
                    class="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                >
                    <path stroke-linecap="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>

        <!-- Mobile menu -->
        <div
            v-if="mobileOpen"
            class="md:hidden bg-brand-ivory border-t border-brand-champagne px-6 py-6 flex flex-col gap-5"
        >
            <template v-for="link in links" :key="link.href">
                <span
                    v-if="link.disabled"
                    class="font-sans text-xs tracking-[0.18em] uppercase text-neutral-300 cursor-not-allowed"
                >
                    {{ link.label }}
                </span>
                <Link
                    v-else
                    :href="link.href"
                    class="font-sans text-xs tracking-[0.18em] uppercase transition-colors"
                    :class="isActive(link.href) ? 'text-brand-dusty-rose' : 'text-neutral-600'"
                    @click="mobileOpen = false"
                >
                    {{ link.label }}
                </Link>
            </template>
            <Link
                href="/contact"
                class="mt-2 self-start border border-brand-dusty-rose text-brand-dusty-rose font-sans text-xs tracking-[0.18em] uppercase px-5 py-2.5"
            >
                Request Sample
            </Link>
        </div>
    </header>
</template>
