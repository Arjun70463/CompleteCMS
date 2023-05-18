import { AppBar, Toolbar, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';


const Header = styled(AppBar)`
  background: 5CB4FF;
`;

const Tabs = styled(NavLink)`
  font-size: 20px;
  margin-right: 880px;
  color: inherit;
  text-decoration: none;
`;

const Tab = styled(NavLink)`
  font-size: 20px;
  margin: 20px;
  color: inherit;
  text-decoration: none;
`;

const Navbar = () => {
  return (
    <Header position='static'>
      <Toolbar>
        <Tabs to='/'>Generic CMS</Tabs>
        <Tab to='add'>Create Post</Tab>
        <Tab to='/all'>Edit Posts</Tab>
        <Tab to='/settings'>Settings</Tab>
      </Toolbar>
    </Header>
  );
};

export default Navbar;