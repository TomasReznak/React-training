import React, { ComponentType } from 'react';
import { matchPath } from 'react-router';
import {HookRoutes} from "./modules/hooksRoutes";

export interface Route {
  path: string;
  exact: boolean;
  isInternal?: boolean;
  component: ComponentType<any>;
  commonPageData: any;
}

export enum DefaultRoute {
  Home = '/',
}

export const ROUTES = {
  ...DefaultRoute,
  ...HookRoutes,
};

const routes: Route[] = [
  {
    path: DefaultRoute.Home,
    exact: true,
    component: React.lazy(() => import('../view/page/Home')),
    commonPageData: {
      pageTitle: 'Testing page: Home'
    },
  },
  ...HookRoutes
];
type RoutesKeys = keyof typeof ROUTES;
export type Routes = typeof ROUTES[RoutesKeys];
export default routes;
