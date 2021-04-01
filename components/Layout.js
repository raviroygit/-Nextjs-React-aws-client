import Head from 'next/head';
import Link from 'next/link';
import {useState} from 'react';
import Router from 'next/router';
import { isAuth, logout } from '../helpers/auth';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import React from 'react';
import Image from 'next/image';

import { 
    Collapse, 
    Navbar, 
     NavItem,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Dropdown
  
  } from 'reactstrap'


Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = url => NProgress.done();
Router.onRouteChangeError = url => NProgress.done();

const Layout = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
    const head = () => (
        <React.Fragment>
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
                crossOrigin="anonymous"
            />
            <link rel="stylesheet" href="/static/css/styles.css" />
        </React.Fragment>
    );

    const nav = () => (

        <React.Fragment>
             <Navbar className="bg-image" color="black" light fixed="top"  expand="md" style={{borderBottom:'3px solid green',marginBottom:'60px',backgroundColor:'black'}}  >
           
             <Link href="/">
                       <a className="nav-link text-white">
                           <Image
                           src="/static/images/favicon.png"
                           alt="https://Codelength.net"
                           height="30"
                           width='50'
                           style={{marginBottom:'20px'}}

                           />
                           <h1 style={{color:'green',fontFamily:'cursive',fontStyle:'italic',width:'50px',fontSize:'15px',float:'right',paddingTop:'8px'}}>Codelength</h1>
                       </a>
            </Link>

     <NavbarToggler 
        style={{backgroundColor: 'gray'}}
        onClick={toggle} />
        <Collapse  isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar style={{marginBottom:'-20px'}}>
            <React.Fragment>

          

        <ul fixed="top" className="nav nav-tabs " style={{backgroundColor:'black'}}>

            
            <li className="nav-item" >
                <Link href="/user/link/create">
                    <a className="nav-link text-white btn btn-outline-primary "  style={{ Radius: '0px' }}>
                        Submit a link
                    </a>
                </Link>
            </li>
            <li className="nav-item">
                <Link href="/blogs">
                    <a className="nav-link text-white  btn btn-outline-primary ml-auto" style={{ borderRadius: '3px',marginRight:'5px' }}>
                      Blogs
                    </a>
                </Link>
            </li>

            <UncontrolledDropdown >
                     <DropdownToggle caret 
                     style={{backgroundColor:'transparent',margin:'5px'}}
                     >
                         Programming
                      </DropdownToggle>
                     <DropdownMenu style={{backgroundColor:'black',border:'3px solid blue'}}>
                     {/* <DropdownItem header>Header</DropdownItem> */}
                     {/* <DropdownItem disabled>Action</DropdownItem> */}
                     <DropdownItem>
                         <Link href="/programs/category/android">
                         <a target="_blank"> Java programming</a>
                         </Link>
                     </DropdownItem>
                      {/* <DropdownItem divider /> */}
                    <DropdownItem>
                        <Link href="/categories-blogs/java-programming">
                        <a target="_blank">C programming</a>
                        </Link>
                    </DropdownItem>
                    <DropdownItem>
                        <Link href="/categories-blogs/python-programming">
                          <a target="_blank">HTML</a>
                        </Link>
                    </DropdownItem>
                    <DropdownItem>
                        <Link href="/categories-blogs/python-programming">
                          <a target="_blank">CSS</a>
                        </Link>
                    </DropdownItem>
                    <DropdownItem>
                        <Link href="/categories-blogs/python-programming">
                          <a target="_blank">Data structure</a>
                        </Link>
                    </DropdownItem>
                    </DropdownMenu>
             </UncontrolledDropdown>
             
            <li className="nav-item">
                <Link href="https://raviroy.tech">
                    <a target="_blank"className="nav-link text-white  btn btn-outline-primary  ml-auto" style={{ borderRadius: '3px',marginRight:'5px' }}>
                      Projects
                    </a>
                </Link>
            </li>

             <li className='nav-item'>
                 <Link href="/about">
                    <a  target="_blank"className="nav-link text-white  btn btn-outline-primary  ml-auto"
                       style={{marginLeft: '20px'}}>
                        About Us
                   </a>
                 </Link>
             </li>

             <li className='nav-item'>
                 <Link href="/contact-us">
                    <a  target="_blank"className="nav-link text-white  btn btn-outline-primary  ml-auto"
                       style={{marginLeft: '20px'}}>
                        Contact Us
                   </a>
                 </Link>
             </li>

            {!isAuth() && (
                <React.Fragment>
                    <li className="nav-item">
                        <Link href="/login">
                            <a className="nav-link text-white">Login</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/register">
                            <a className="nav-link text-white">Register</a>
                        </Link>
                    </li>
                </React.Fragment>
            )}

            {isAuth() && isAuth().role === 'admin' && (
                <li className="nav-item ml-auto">
                    <Link href="/admin">
                        <a className="nav-link text-white">{isAuth().name}</a>
                    </Link>
                </li>
            )}

            {isAuth() && isAuth().role === 'subscriber' && (
                <li className="nav-item ml-auto">
                    <Link href="/user">
                        <a className="nav-link text-white">{isAuth().name}</a>
                    </Link>
                </li>
            )}

            {isAuth() && (
                <li className="nav-item">
                    <a onClick={logout} className="nav-link text-white">
                        Logout
                    </a>
                </li>
            )}
           
        </ul>
        </React.Fragment>
        </Nav>
        </Collapse>
        </Navbar>
        </React.Fragment>
        
    );
    return (
        <React.Fragment>
            
            {head()} {nav()} 
           
            <div className="container pt-5 pb-5">{children}</div>
            
        </React.Fragment>
    );
};

export default Layout;
