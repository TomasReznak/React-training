import React from "react";
import Home from "./view/page/Home";
import Header from "./view/components/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {PersistGate} from "redux-persist/integration/react";
import {Provider} from "react-redux";
import {persistor, store} from "./redux/store/configure-store";
import HookForm from "./view/page/HookForm";
import UseStateHookPage from "./view/page/Hooks/UseStateHookPage";
import UseEffectHookPage from "./view/page/Hooks/UseEffectHookPage";
import UseRefHookPage from "./view/page/Hooks/UseRefHookPage";
import UseMemoHookPage from "./view/page/Hooks/UseMemoHookPage";
import UseContextHookPage from "./view/page/Hooks/useContext/UseContextHookPage";
import ReactBasic from "./view/page/Basic";
import ApiCallComponent from "./view/page/ApiCallComponent";
import ApiCallWithReduxComponent from "./view/page/ApiCallWithReduxComponent";
import routes from "./routes/routes";

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Header/>
            <Routes>
              {routes.map((route, i) =>
                !route.commonPageData.visibleForAnonym && (
                  <Route
                    key={i}
                    path={route.path}
                    element={(props: any) => <route.component {...props} />}
                  />
                )
              )}
              <Route index element={<Home/>}/>
              <Route path={'/intro'} element={<ReactBasic/>}/>
              <Route path={'/useState'} element={<UseStateHookPage/>}/>
              <Route path={'/useEffect'} element={<UseEffectHookPage/>}/>
              <Route path={'/useRef'} element={<UseRefHookPage/>}/>
              <Route path={'/useMemo'} element={<UseMemoHookPage/>}/>
              <Route path={'/useContext'} element={<UseContextHookPage/>}/>
              <Route path={'/hookform'} element={<HookForm/>}/>
              <Route path={'/apiCall'} element={<ApiCallComponent/>}/>
              <Route path={'/apiCallWithRedux'} element={<ApiCallWithReduxComponent/>}/>
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
