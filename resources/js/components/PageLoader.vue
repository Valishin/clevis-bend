<script setup lang="ts">
import { cbLogoFull } from "@images";
import { router } from "@inertiajs/vue3";
import { onMounted, onUnmounted, ref } from "vue";

const visible = ref(true);

let startTimer: ReturnType<typeof setTimeout>;
let endTimer: ReturnType<typeof setTimeout>;

// ── Inertia navigation events ──────────────────────────────────────────
const removeStart = router.on("start", () => {
    clearTimeout(endTimer);
    visible.value = true;
});

const removeFinish = router.on("finish", () => {
    endTimer = setTimeout(() => {
        visible.value = false;
    }, 300);
});

// ── Initial page load ──────────────────────────────────────────────────
onMounted(() => {
    if (document.readyState === "complete") {
        startTimer = setTimeout(() => {
            visible.value = false;
        }, 400);
    } else {
        window.addEventListener(
            "load",
            () => {
                startTimer = setTimeout(() => {
                    visible.value = false;
                }, 400);
            },
            { once: true },
        );
    }
});

onUnmounted(() => {
    removeStart();
    removeFinish();
    clearTimeout(startTimer);
    clearTimeout(endTimer);
});
</script>

<template>
    <Transition name="loader">
        <div
            v-if="visible"
            class="fixed inset-0 z-[9999] bg-brand-ivory flex flex-col items-center justify-center gap-8"
        >
            <!-- Monograma -->
            <img
                :src="cbLogoFull"
                alt="Clevis Bend"
                class="w-60 h-60 object-contain animate-pulse"
            />

            <!-- Barra de progreso -->
            <div class="w-24 h-px bg-brand-champagne overflow-hidden">
                <div
                    class="h-full bg-brand-dusty-rose origin-left animate-[loading_1.2s_ease-in-out_infinite]"
                />
            </div>
        </div>
    </Transition>
</template>

<style>
@keyframes loading {
    0% {
        transform: scaleX(0);
        transform-origin: left;
    }
    50% {
        transform: scaleX(1);
        transform-origin: left;
    }
    51% {
        transform: scaleX(1);
        transform-origin: right;
    }
    100% {
        transform: scaleX(0);
        transform-origin: right;
    }
}

.loader-leave-active {
    transition:
        opacity 0.4s ease,
        transform 0.4s ease;
}
.loader-leave-to {
    opacity: 0;
    transform: translateY(-8px);
}
</style>
