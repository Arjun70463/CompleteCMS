import {AppBar,Toolbar,styled} from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
    background: black;
`

const Tabs = styled(NavLink)`
    font-size: 20px;
    margin-right: 1000px;
    color:inherit;
    text-decoration:none;
`
const Tab = styled(NavLink)`
    font-size: 20px;
    margin:20px;
    color:inherit;
    text-decoration:none;
` 

const Navbar = () =>{
    return(
        <Header position='static'>
            <Toolbar>
                <Tabs to='/'>Generic CMS</Tabs>
                <Tab to='/all'>All Post</Tab>
                <Tab to='add'>Create Post</Tab>
            </Toolbar>
        </Header>
    )
}

export default Navbar;