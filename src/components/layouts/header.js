import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import headerLogo from "../../media/headerLogo.png";
import { useState } from "react";

export function Header () {


    const [navSliderConfigState, setNavSliderConfigState] = useState("home"); 

    const menuSlide = (value) => {

            document.getElementById(navSliderConfigState).classList.remove("active")
            document.getElementById(value).classList.add("active")
            setNavSliderConfigState(value);
    }
    return (
        <>
                <div className="d-none d-md-block container top-header p-2 clearfix" id="top" style={{fontSize: "13.5px"}}>
                    <div className="float-start d-flex align-items-center">
                    <span className="d-flex align-items-center px-3"><i class="bi bi-truck me-2" style={{fontSize: "x-large"}}></i> Free Delivery</span>
                    <span className="d-flex align-items-center border-start border-end px-3"><i style={{fontSize: "medium"}} class="bi bi-globe-asia-australia me-2"></i> Returns Policy</span>
                    <span className="bg-white d-flex align-items-center gap-3 px-3"><p className="m-0">Follow Us</p><i class="fa-brands fa-facebook-f"></i><i class="bi bi-twitter"></i><i class="bi bi-instagram"></i><i class="fa-brands fa-pinterest-p"></i></span>
                    </div>
                    <div className="float-end mt-2">
                    Login
                    </div>
                </div>

            <header className=""  style={{position: "sticky", top: "0", zIndex: "1000"}}>
                <nav class="navbar border-top border-bottom navbar-expand-lg bg-body-tertiary p-3">
            <div class="container ">
                <a class="navbar-brand" href="#"><img src={headerLogo} height={70}/></a>
                <button class="ms-auto me-2 border-0 navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <i style={{color: "#eb6a2a", fontSize: "xx-large"}} class="fa-solid fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarScroll">
                <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll m-auto" style={{"--bs-scroll-height": "100px"}}>
                    <li class="nav-item me-3">
                    <a class="nav-link active" aria-current="page" href="#">Home <i class="ms-2 bi bi-chevron-down"></i></a>
                    </li>
                    <li class="nav-item me-3">
                    <a class="nav-link active" aria-current="page" href="#">Pages <i class="ms-2 bi bi-chevron-down"></i></a>
                    </li>
                    <li class="nav-item me-3">
                    <a class="nav-link active" aria-current="page" href="#">Shop <i class="ms-2 bi bi-chevron-down"></i></a>
                    </li>
                    <li class="nav-item me-3">
                    <a class="nav-link active" aria-current="page" href="#">Blog <i class="ms-2 bi bi-chevron-down"></i></a>
                    </li>
                    <li class="nav-item me-3">
                    <a class="nav-link active" aria-current="page" href="#">Gallery <i class="ms-2 bi bi-chevron-down"></i></a>
                    </li>
                </ul>
                </div>
                <div class="d-flex header-last-content" style={{fontSize: "xx-large", fontWeight: "bold", color: "#eb6a2a"}} role="search">
                <i className="fa-solid fa-magnifying-glass me-3"></i>
                <i class="fa-solid fa-bag-shopping"></i>                                                                                                                                                                                                                                                                                    

                </div>
            </div>
            </nav>
            <br/>
            <br/>
            </header>
            <nav className="mobail-menu d-block d-md-none fixed-bottom w-100">
                <div className="bg-white d-flex text-dark">
                            <i onClick={() => menuSlide("home")} id="home" className="active fa-solid fa-home me-3"></i>
                            <i onClick={() => menuSlide("user")} id="user" className="fa-solid fa-user me-3"></i>
                            <i onClick={() => menuSlide("shopping")} id="shopping" className="fa-solid fa-shopping-bag me-3"></i>
                            <i onClick={() => menuSlide("bars")} id="bars" className="fa-solid fa-bars me-3"></i>
                </div>
            </nav>
        </>
    )
}