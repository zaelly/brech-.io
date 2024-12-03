import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '../assets/css/header.css'
import tallHatIcon from '../assets/Tall Hat.png';
// import { getUsers } from '../data/data.jsx'
import Offcanvas from 'react-bootstrap/Offcanvas';

const Header = () => {

    const [numCart, setCartNum] = useState(0);
    const [numFav, setFavNum] = useState(0);

    // const [login, setLogin] = useState("");

    useEffect(() => {
        calcWidth();
        window.addEventListener("resize", calcWidth);
        return () => {
            window.removeEventListener("resize", calcWidth);
          };
      }, []);
    

    // setCartNum(prevCount => prevCount + 1);
    // setFavNum(prevCount => prevCount + 1); 
    

    const [widthWindow, setWidthWindow] = useState("");

    const width = [false, 'sm', 'md', 'lg', 'xl', 'xxl'];

    function calcWidth(){
        let windowWidth = window.innerWidth;

         if (windowWidth < 768) {
            setWidthWindow(width[1]); // 'sm'
        } else if (windowWidth >= 768 && windowWidth < 992) {
            setWidthWindow(width[2]); // 'md'
        } else if (windowWidth >= 992 && windowWidth < 1200) {
            setWidthWindow(width[3]); // 'lg'
        } else if (windowWidth >= 1200 && windowWidth < 1400) {
            setWidthWindow(width[4]); // 'xl'
        } else if (windowWidth >= 1400) {
            setWidthWindow(width[5]); // 'xxl'
        }
    }

  return (
    <div>
        <Navbar key={widthWindow} expand={widthWindow} className="Container">
            <div className='container-header'>
                <Navbar.Brand className='logo'>
                    <Link to="/">
                        <img src={tallHatIcon} id="logo-img" alt="icon-logo" />
                    </Link>
                    <Link className="logo" to="/">
                        Home
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${widthWindow}`}/>
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-lg`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${widthWindow}`}
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${widthWindow}`}>
                        Menu
                    </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="itens">
                            <Nav.Item className='d-flex link'>
                                <p><i className="fa-solid fa-cart-shopping"></i></p>
                                <Link to="/carrinho" className="linkText">
                                    Carrinho: <span>{numCart}</span>
                                </Link>
                            </Nav.Item>
                            <Nav.Item className='d-flex link'>
                                <p><i className="fa-solid fa-heart"></i></p>
                                <Link to="/favoritos" className="linkText">
                                    Fav: <span>{numFav}</span>
                                </Link>
                            </Nav.Item>
                            <Nav.Item className='d-flex link'>
                                <p><i className="fa-solid fa-user"></i></p>
                                <Link to="/perfil" className="linkText">
                                </Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </div>
        </Navbar>
    </div>
  )
}

export default Header