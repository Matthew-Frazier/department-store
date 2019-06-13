import React from 'react'
import styled from 'styled-components';
import { Menu, } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <NavMenu>
    <Link to="/">
      <Menu.Item>
        Home
      </Menu.Item>
    </Link>
    <Link to="/departments">
      <Menu.Item>
        Departments
      </Menu.Item>
    </Link>
  </NavMenu>
);

const NavMenu = styled(Menu)`
  background: rgb(255,0,0) !important;
  background: linear-gradient(45deg, rgba(255,0,0,1) 0%, rgba(255,133,0,1) 13%, rgba(255,254,0,1) 25%, rgba(11,255,0,1) 37%, rgba(0,255,254,1) 50%, rgba(0,59,255,1) 62%, rgba(104,0,255,1) 75%, rgba(229,0,255,1) 88%, rgba(255,0,89,1) 100%) !important;
`;

export default Navbar;