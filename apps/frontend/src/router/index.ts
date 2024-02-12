/**
 * Author: Federico Engler
 *
 * The declaration of the homepage routes.
 */
import { h } from 'vue';
import { createRouter, createWebHistory, RouterView } from 'vue-router';
import { Routes } from '@/constants';
// import { Album, Home, Section } from '@/views';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        // If no route is specified, default to the "home" route.
        // { path: '', redirect: `/${Routes.Home}` },
        // Let the "home" component render the view for the "home" route.
        // { path: `/${Routes.Home}`, component: Home },
        // For any other route that is not "home", it's either a section or
        // an album in the particular section. This rule is required to ensure
        // the correct router link in the navbar is highlighted as selected by
        // the applied active CSS class in the Vue Router.
        /**
        {
            path: '/:section',
            component: { render: () => h(RouterView) },
            children: [
                { path: '', component: Section },
                { path: ':id', component: Album }
            ]
        }
         */
    ]
});

export default router;
