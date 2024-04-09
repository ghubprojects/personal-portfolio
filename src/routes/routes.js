import { lazy } from 'react';
import { Home } from '../pages';

export const route = {
    home: '/',
    about: '/about',
    activities: '/activities',
    resume: '/resume',
    contact: '/contact',
    // profile: '/@:nickname',
};

export const routes = [
    { path: route.home, element: Home },
    { path: route.about, element: lazy(() => import('../pages/About/About')) },
    { path: route.activities, element: lazy(() => import('../pages/Activities/Activities')) },
    { path: route.resume, element: lazy(() => import('../pages/Resume/ResumeNew')) },
    { path: route.contact, element: lazy(() => import('../pages/Contact/Contact')) },
];
