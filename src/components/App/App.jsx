import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
// import { Toaster } from "react-hot-toast";
import Layout from "../Layout/Layout";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../../redux/auth/operations";

import { PrivateRoute } from "../Registration/PrivateRoute"
import css from "./App.module.css";
import { RestrictedRoute } from "../Registration/RestrictedRoute";
const HomePage = lazy(() => import("../../pages/Home"));
const RegisterPage = lazy(() => import("../../pages/Register"));
const LoginPage = lazy(() => import("../../pages/Login"));
const ContactsPage = lazy(() => import("../../pages/Contacts"));
// import  { Toaster } from 'react-hot-toast';

export default function App() {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return(
<Layout >
  {isRefreshing ? (
    <b>Refreshing user, please wait...</b>
  ) : (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RestrictedRoute
                  component={<RegisterPage />}
                  redirectTo="/contacts"
                />} />
        <Route path="/login" element={<RestrictedRoute
                  component={<LoginPage />}
                  redirectTo="/contacts"
                />} />
        <Route path="/contacts" element={<PrivateRoute component={<ContactsPage />} redirectTo="/login" />} />
      </Routes>
    </Suspense>
  )}
  {/* <Toaster /> */}
</Layout>
  );
  
}
