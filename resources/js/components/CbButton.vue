<script setup lang="ts">
import { Link } from "@inertiajs/vue3";

withDefaults(
    defineProps<{
        href?: string;
        variant?: "solid" | "ghost" | "outline";
        type?: "button" | "submit";
        disabled?: boolean;
    }>(),
    {
        variant: "solid",
        type: "button",
        disabled: false,
    },
);
</script>

<template>
    <!-- Link (navegación Inertia) -->
    <Link v-if="href" :href="href" :class="[base, variants[variant]]">
        <slot />
    </Link>

    <!-- Botón HTML -->
    <button
        v-else
        :type="type"
        :disabled="disabled"
        :class="[
            base,
            variants[variant],
            disabled && 'opacity-60 cursor-not-allowed',
        ]"
    >
        <slot />
    </button>
</template>

<script lang="ts">
const base =
    "group inline-flex items-center gap-3 font-sans text-xs tracking-[0.18em] uppercase px-7 py-4 transition-all duration-300";

const variants = {
    // Fondo dusty rose con leve transparencia + backdrop blur
    solid: "bg-brand-dusty-rose/85 backdrop-blur-sm text-white hover:bg-brand-dusty-rose transition-colors",

    // Cristal translúcido → para usar sobre imágenes
    ghost: "bg-white/20 backdrop-blur-sm border border-white/60 text-neutral-800 hover:bg-white/40",

    // Borde sin fondo → para usar sobre fondos claros (ivory / champagne)
    outline:
        "border border-brand-dusty-rose text-brand-dusty-rose hover:bg-brand-dusty-rose hover:text-white",
};
</script>
