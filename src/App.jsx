import React, { memo } from "react";
import AppFooter from "./components/app-footer";
import AppHeader from "./components/app-header";

import { useRoutes } from "react-router-dom";
import routes from "@/router";

import { useScrollTop } from "@/hooks";

import { Suspense } from "react";

const App = memo(() => {
  useScrollTop();

  return (
    <div className="app">
      <AppHeader />
      <Suspense fallback={<h2>Loading... </h2>}>
        <div className="pages">{useRoutes(routes)}</div>
      </Suspense>
      <AppFooter />
    </div>
  );
});

export default App;
