import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Wrapper, Nav } from "./styles";

export default function Layout({ children }) {
  return (
    <Wrapper>
      <Nav>
        <NavLink to="/">Каталог</NavLink>
      </Nav>
      <main>
        <Outlet />
      </main>
    </Wrapper>
  );
}
