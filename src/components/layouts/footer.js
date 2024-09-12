

export default function Footer () {
    return (
        <>
                <div className="container">
                <div className="footer-top-contant row">
                    <h1 className="mb-5">Marketo<b>.</b></h1>
                    <div className="f-t-c-left-content col-12 col-lg-6 row  mb-1 mb-lg-5">
                        <div className="col-12 col-md-8 mb-5 mb-lg-1">
                            <h4><span className="text-secondary">Got Question? Call us 24/7</span><br/>[80] 1017 197 </h4>
                            <p className="text-secondary">17 Princess Road, London, Greater London NW1 8JR, UK</p>
                            <a href="#" style={{ backgroundColor: "#eb6a2a", fontSize: "small" }} class=" px-4 rounded py-3 text-white text-decoration-none"><i class="bi bi-geo-alt"></i> View On Map</a>
                            </div>
                        <div className="col-12 col-md-4 mb-5 mb-lg-1">
                            <h4><span className="text-secondary">We Using</span><br/>Safe Payments   </h4>
                            <p className="mt-5 ">Secured by:</p>
                        </div>
                    </div>
                    <div className="f-t-c-right-content col-12 col-lg-6 mb-5 mb-lg-5 row position-relative">
                        <div className="quick-links col-5 col-md-6 d-grid gap-2 justify-content-center">
                            <h6>Quick Links</h6>
                            <a href="#" className="text-secondary text-decoration-none">Support Center</a>
                            <a href="#" className="text-secondary text-decoration-none">Term & Conditions</a>
                            <a href="#" className="text-secondary text-decoration-none">Shipping</a>
                            <a href="#" className="text-secondary text-decoration-none">Privacy Policy</a>
                            <a href="#" className="text-secondary text-decoration-none">Help</a>
                            <a href="#" className="text-secondary text-decoration-none">Products Return</a>
                            <a href="#" className="text-secondary text-decoration-none">FAQS</a>
                        </div>
                        <div className="our-stores col-5 col-md-6 d-grid gap-2 justify-content-center ">
                            <h6>Our Stores</h6>
                            <a href="#" className="text-secondary text-decoration-none">New York</a>
                            <a href="#" className="text-secondary text-decoration-none">London SF</a>
                            <a href="#" className="text-secondary text-decoration-none">Cockfosters BP</a>
                            <a href="#" className="text-secondary text-decoration-none">Los Angeles</a>
                            <a href="#" className="text-secondary text-decoration-none">Chicago</a>
                            <a href="#" className="text-secondary text-decoration-none">Las Vegas</a>
                            <a href="#" className="text-secondary text-decoration-none">Albarto</a>
                        </div>
                        <div className="col-2 position-absolute" style={{right: "0px", bottom: "30px", rotate: "270deg"}}>
                            <a href="#" class=" px-5 rounded py-3 text-white text-decoration-none"><span style={{ textWrap: "nowrap !important" }}>BACK TOP<i style={{fontSize: "large"}} class="ms-2 bi bi-arrow-right"></i></span></a>
                        </div>
                    </div>
                </div>
                </div>
            <footer className="bg-dark text-white overflow-hidden">
                <div className="container clearfix py-4 mb-5 mb-md-0">
                    <span className="">Copyrights By Xpeedstudio - 2018</span>
                    <span className="">Allow payment base on</span>
                </div>
            </footer>
        </>
    )
}