import { observer } from 'mobx-react-lite';
import { NavLink } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';

export default observer(function Navbar() {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={NavLink} to='/' exact header>
                    <img src="/assets/logo.svg" alt="logo" style={{ marginRight: 10 }} />
                    Products - App
                </Menu.Item>
                <Menu.Item as={NavLink} to='/products' name='Products' />
                <Menu.Item as={NavLink} to='/errors' name='Errors' />
            </Container>
        </Menu>
    )
})