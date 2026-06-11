import { createInertiaApp } from "@inertiajs/vue3";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createApp, h, defineComponent, type DefineComponent } from "vue";
import PageLoader from "@components/PageLoader.vue";
import { useLenis } from "@/composables/useLenis";

// Componente raíz que activa Lenis globalmente
const Root = defineComponent({
    setup() {
        useLenis()
    },
    render() {
        return h("div", [
            h(PageLoader),
        ])
    },
})

createInertiaApp({
    resolve: (name: string) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob<DefineComponent>("./Pages/**/*.vue"),
        ),
    setup({ el, App, props, plugin }) {
        const app = createApp({
            render: () => h("div", [
                h(Root),
                h(App, props),
            ]),
        });

        app.use(plugin).mount(el);
    },
});
