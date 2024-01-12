import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const isAuthenicated = false;
  return (
    <>
      {isAuthenicated ? (
        <Navigate to="/" />
      ) : (
        <>
          <img
            src="https://images.unsplash.com/photo-1610024062303-e355e94c7a8c?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="login-page"
            className="hidden lg:block h-screen rounded-md w-1/2 object-cover bg-no-repeat"
          />
          <section className="flex flex-1 justify-center items-center flex-col py-20">
            <Outlet />
          </section>
        </>
      )}
    </>
  );
};

export default AuthLayout;
