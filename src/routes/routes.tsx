import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { INavigation } from "./type";
import { navigations } from "./navigations";
import { Layout } from "../layout/index";
import { Fragment } from "react/jsx-runtime";

export function RoutesApp() {
  function mapRoutes(routes: INavigation[] | INavigation) {

    if (Array.isArray(routes)) {
      return routes.map((route) => (
        <Fragment key={route.id}>
          <Route
            key={route.id}
            path={route.path}
            element={<Layout
              titulo={route.titulo}>
              {route.element}</Layout>}
          >
          </Route>
          {route.children && mapRoutes(route.children)}
        </Fragment>
      ))
    }

    <Route
      key={routes.id}
      path={routes.path}
      element={<Layout
        titulo={routes.titulo}
      >
        {routes.element}
      </Layout>}
    />
  }

  return (
    <Router>
      <Routes>
        {navigations.map((x) => (
          <Fragment key={x.id}>
            <Route path={x.path} element={<Layout titulo={x.titulo}>{x.element}</Layout>} />
            {x.children &&
              mapRoutes(x.children)
            }
          </Fragment>
        ))}
      </Routes>
    </Router>
  );
}