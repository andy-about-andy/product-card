import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Wrapper, Nav } from "./styles";

export default function Layout({ children }) {
  return (
    <Wrapper>
      <Nav>
        <NavLink to="/">Главная</NavLink>
        <NavLink to="/catalog">Каталог</NavLink>
      </Nav>
      <main>
        <Outlet />
      </main>
    </Wrapper>
  );
}
