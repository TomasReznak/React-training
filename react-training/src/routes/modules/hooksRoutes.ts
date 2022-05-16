import React from 'react';

import { Route } from '../routes';

export enum HookPaths {
  UseState = '/useState',
  UseEffect = '/useEffect',
  UseMemo = '/useMemo',
  UseRef = '/useRef',
  UseContext = '/useContext',

}

export const HookRoutes: Route[] = [
  {
    path: HookPaths.UseState,
    exact: true,
    component: React.lazy(() => import('../../view/page/Hooks/UseStateHookPage')),
    commonPageData: {
      pageTitle: 'UseState',
      pageId: '2.30.1',
      visibleForAnonym: true,
    },
  },
  {
    path: HookPaths.UseEffect,
    exact: true,
    isInternal: true,
    component: React.lazy(() => import('../../view/page/Hooks/UseEffectHookPage')),
    commonPageData: {
      pageTitle: 'UseState',
      pageId: '2.30.1',
      visibleForAnonym: true,
    },
  },
  {
    path: HookPaths.UseContext,
    exact: true,
    isInternal: true,
    component: React.lazy(() => import('../../view/page/Hooks/useContext/UseContextHookPage')),
    commonPageData: {
      pageTitle: 'UseState',
      pageId: '2.30.1',
      visibleForAnonym: true,
    },
  },
  {
    path: HookPaths.UseMemo,
    exact: true,
    isInternal: true,
    component: React.lazy(() => import('../../view/page/Hooks/UseMemoHookPage')),
    commonPageData: {
      pageTitle: 'UseState',
      pageId: '2.30.1',
      visibleForAnonym: true,
    },
  },
  {
    path: HookPaths.UseRef,
    exact: true,
    isInternal: true,
    component: React.lazy(() => import('../../view/page/Hooks/UseRefHookPage')),
    commonPageData: {
      pageTitle: 'UseState',
      pageId: '2.30.1',
      visibleForAnonym: true,
    },
  },
];
