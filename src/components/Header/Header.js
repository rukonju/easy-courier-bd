import React from 'react';
import { Button, Container, Dropdown, Image, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo.png'
import './Header.css';

const Header = () => {
    const {user, handleLogOut} = useAuth();
    return (
        <div>
            <Navbar className="p-0" collapseOnSelect expand="lg" bg="dark" variant='dark'>
                <Container>
                <Navbar.Brand>
                    <img className="logo" src={logo} alt="" height="60px" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto nav-links">
                        <NavLink to='/home'>Home</NavLink>
                        <NavLink to='/services'>Services</NavLink>
                        <NavLink className={user?.email?"": "display-none"} to='/myOrders'>My Orders</NavLink>
                        <NavLink to='/contact'>Contact</NavLink>
                    </Nav>
                    <Dropdown className={user?.email?"dropdown-links" : "display-none"}>
                        <Dropdown.Toggle className="m-2"  variant="light">
                            Admin
                        </Dropdown.Toggle>
                        <Dropdown.Menu variant="dark">
                            <Dropdown.Item>
                                <NavLink to='/admin/addService'>Add New Service</NavLink>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <NavLink to='/admin/manageOrders'>Manage Orders</NavLink>
                            </Dropdown.Item>  
                        </Dropdown.Menu>
                    </Dropdown>
                        {
                            user?.email? <div className="d-flex align-items-center">
                                <div className="me-2">
                                <Button onClick={() =>handleLogOut()} variant="outline-light">Logout</Button>
                                </div>
                                <div className="text-center">
                                <Image className="me-2" src={user?.photoURL} height="40px" roundedCircle />
                                <small className="text-light">{user?.displayName}</small>
                                </div>
                            </div>
                            :
                            <div className="ms-2">
                                <NavLink className="me-2" to='/register'>
                                    <Button variant="outline-light">Register</Button>
                                </NavLink>
                                <NavLink to='/login'>
                                    <Button variant="outline-light">Login</Button>
                                </NavLink>
                            </div>
                        }
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;