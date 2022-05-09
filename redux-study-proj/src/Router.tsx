import React from 'react';

import {
    useRoutes,
    RouteObject,
} from 'react-router-dom';

import { Main } from './pages/Main';
import { Second } from './pages/Second';

export enum Routes {
    MAIN = '/',
    SECOND = 'second',
}

export const routes: RouteObject[] = [
    {
        path: Routes.MAIN,
        element: <Main />,
    },
    {
        path: Routes.SECOND,
        element: <Second />,
    }
];

export const Router = () => useRoutes(routes);
