import '../css/app.css';
import {createApp, h} from 'vue';
import {createInertiaApp, Link} from '@inertiajs/vue3';
import ThePlain from "@account/Layouts/ThePlain.vue";
import {resolvePageComponent} from "laravel-vite-plugin/inertia-helpers";

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Account';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: async name => {
        let page = await resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue'))
        page.default.layout = ThePlain
        return page
    },
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .mount(el)
    },
    progress: {
        color: '#4B5563',
    },
});
