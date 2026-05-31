import { createInertiaApp } from "@inertiajs/vue3";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createApp, h, type DefineComponent } from "vue";

createInertiaApp({
    resolve: (name: string) =>
        resolvePageComponent(
            `./Pages/${name}.vue`,
            import.meta.glob<DefineComponent>("./Pages/**/*.vue"),
        ),
    setup({
        el,
        App,
        props,
        plugin,
    }: {
        el: Element;
        App: DefineComponent;
        props: any;
        plugin: any;
    }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .mount(el);
    },
});
