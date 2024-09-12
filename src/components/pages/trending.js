import trend1 from "../../media/trending/trend-1.jpg"
import trend2 from "../../media/trending/trend-2.jpg"
import trend3 from "../../media/trending/trend-3.jpg"
import trend4 from "../../media/trending/trend-4.jpg"
import brand1 from "../../media/brand/brand-1.png"
import brand11 from "../../media/brand/brand-1-1.png"
import brand2 from "../../media/brand/brand-2.png"
import brand3 from "../../media/brand/brand-3.png"
import brand4 from "../../media/brand/brand-4.png"
import brand5 from "../../media/brand/brand-5.png"
import topBrand from "../../media/watch-bb.png"
import discount from "../../media/discount/discount.jpg";
import { useState } from "react"

export function Trending () {
    const [discountList, setdiscountList] = useState("OnSell"); 

    const disActive = (value) => {

            document.getElementById(discountList).classList.remove("active")
            document.getElementById(value).classList.add("active")
            setdiscountList(value);
    }
    return (
            <div className="container trending overflow-hidden">
                <h3 className="text-center py-5 mt-5 mb-3">Trending Now</h3>
                <div className="row trending-container">
                    <div className="col-12 col-md-6 col-lg-3 trending-box">
                        <div className="my-1 border">
                            <div className="w-100 trending-box-img-container">
                            <img src={trend1} />
                            <div className="w-100 trending-img-hover-box">
                                <i class="bi bi-heart text-right"></i>
                            </div>
                        </div>  
                            
                        <div className="img-content px-1 py-3">
                        <span className=" text-secondary">Drone</span>
                        <h6 className="">Drone Helicopter</h6>
                        <span className="price">$540.00</span>
                        </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 trending-box">
                        <div className="my-1 border">
                            <div className="w-100 trending-box-img-container">
                            <img src={trend2} />
                            <div className="w-100 trending-img-hover-box">
                                <i class="bi bi-heart text-right"></i>
                            </div>
                        </div>  
                            
                        <div className="img-content px-1 py-3">
                        <span className=" text-secondary">Watch</span>
                        <h6 className="">Women Gold Watch</h6>
                        <span className="price"><del className="text-secondary me-3">$640.00</del>$540.00</span>
                        </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 trending-box">
                        <div className="my-1 border">
                            <div className="w-100 trending-box-img-container">
                            <img src={trend3} />
                            <div className="w-100 trending-img-hover-box">
                                <i class="bi bi-heart text-right"></i>
                            </div>
                        </div>  
                            
                        <div className="img-content px-1 py-3">
                        <span className=" text-secondary">Watch</span>
                        <h6 className="">Dimoand Watches</h6>
                        <span className="price">$100 - $210.00</span>
                        </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3 trending-box">
                        <div className="my-1 border">
                            <div className="w-100 trending-box-img-container">
                            <img src={trend4} />
                            <div className="w-100 trending-img-hover-box">
                                <i class="bi bi-heart text-right"></i>
                            </div>
                        </div>  
                            
                        <div className="img-content px-1 py-3">
                        <span className=" text-secondary">LED Television</span>
                        <h6 className="">HD LED TV</h6>
                        <span className="price">$100 - $210.00</span>
                        </div>
                    </div>
                    </div>
                </div>
                <h3 className="text-center my-5 pt-3">Top Brands</h3>
                <div className="brands row m-auto justify-content-center align-items-center">
                    <div className="brand col-4 col-lg-2">
                        <img src={brand1} height={30}/>
                    </div>
                    <div className="brand mt-4 col-4 col-lg-2">
                        <img src={brand2} height={30}/>
                    </div>
                    <div className="brand mt-4 col-4 col-lg-2">
                        <img src={brand3} height={30}/>
                    </div>
                    <div className="brand mt-4 mt-4 mt-5 mt-lg-0 col-4 col-lg-2">
                        <img src={brand4} height={30}/>
                    </div>
                    <div className="brand mt-4 mt-5 mt-lg-0 col-4 col-lg-2">
                        <img src={brand5} height={30}/>
                    </div>
                    <div className="brand mt-4 mt-5 mt-lg-0 col-4 col-lg-2">
                        <img src={brand11} height={30}/>
                    </div>
                </div>

                <div className="row my-5 pt-2 top-brand">
                    <div className="col-12 col-md-6 mt-5 mt-md-1 order-2 order-md-1">
                        <img src={topBrand} className="w-100" />
                    </div>
                    <div className="col-12 col-md-6 m-auto pt-5 pt-md-1 order-1 order-md-2">
                        <h1>We are the leading Luxury watch retailer in UK.</h1>
                        <p>
                        Stocking the finest luxury watch brands, we specialise in 
                        sourcing new and used quality timepieces through our 
                        website
                        </p>
                        <a href="#" style={{ backgroundColor: "black", fontSize: "small" }} class=" px-4 rounded py-3 text-white text-decoration-none">VIEW COLLECTIONS</a>
                    </div>
                </div>
                <div className="discount row">
                    <div className="col-12 col-md-3 row">
                        <img src={discount} className="col-8 m-auto w-100"/>
                    </div>
                    <div className="col-12 col-md-9">
                        <p className="row">
                            <span className="col-12 m-auto col-md-6">Discount Product</span>
                            <span className="col-12 m-auto col-md-6 d-flex gap-3">
                                <div className="active" onClick={() => disActive("OnSell")} id="OnSell">On Sell<i class="bi bi-caret-down-fill"></i></div>
                                <div className="" onClick={() => disActive("HotSell")} id="HotSell">Hot Sell<i class="bi bi-caret-down-fill"></i></div>
                                <div className="" onClick={() => disActive("Trend")} id="Trend">Trend<i class="bi bi-caret-down-fill"></i></div>
                                <div className="" onClick={() => disActive("BestSell")} id="BestSell">Best Sell<i class="bi bi-caret-down-fill"></i></div>
                            </span>
                        </p>
                        { discountList == "OnSell" || discountList == "Trend" ? 
                        <div className="row discount-container">
                            <div className="col-12 col-md-4 discount-box m-0 p-0">
                                <div className="my-1 border">
                                    <div className="w-100 discount-box-img-container">
                                    <img src={trend1} />
                                    <div className="d-flex w-100 discount-img-hover-box">
                                        <span className=""><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i></span>
                                        <i class=" i bi bi-heart"></i>
                                    </div>
                                </div>  
                                    
                                <div className="img-content px-1 py-3">
                                <span className=" text-secondary">Drone</span>
                                <h6 className="">Drone Helicopter</h6>
                                <span className="price">$540.00</span>
                                </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 discount-box m-0 p-0">
                                <div className="my-1 border">
                                    <div className="w-100 discount-box-img-container">
                                    <img src={trend2} />
                                    <div className="d-flex w-100 discount-img-hover-box">
                                        <span className=""><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i></span>
                                        <i class=" i bi bi-heart"></i>
                                    </div>
                                </div>  
                                    
                                <div className="img-content px-1 py-3">
                                <span className=" text-secondary">Watch</span>
                                <h6 className="">Women Dimoand Watch</h6>
                                <span className="price"><del className="text-secondary me-3">$640.00</del>$540.00</span>
                                </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 discount-box m-0 p-0">
                                <div className="my-1 border">
                                    <div className="w-100 discount-box-img-container">
                                    <img src={trend2} />
                                    <div className="d-flex w-100 discount-img-hover-box">
                                        <span className=""><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i></span>
                                        <i class=" i bi bi-heart"></i>
                                    </div>
                                </div>  
                                    
                                <div className="img-content px-1 py-3">
                                <span className=" text-secondary">Watch</span>
                                <h6 className="">Gold Watch</h6>
                                <span className="price"><del className="text-secondary me-3">$640.00</del>$540.00</span>
                                </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 discount-box m-0 p-0">
                                <div className="my-1 border">
                                    <div className="w-100 discount-box-img-container">
                                    <img src={trend2} />
                                    <div className="d-flex w-100 discount-img-hover-box">
                                        <span className=""><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i></span>
                                        <i class=" i bi bi-heart"></i>
                                    </div>
                                </div>  
                                    
                                <div className="img-content px-1 py-3">
                                <span className=" text-secondary">Watch</span>
                                <h6 className="">Women Gold Watch</h6>
                                <span className="price"><del className="text-secondary me-3">$640.00</del>$540.00</span>
                                </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 discount-box m-0 p-0">
                                <div className="my-1 border">
                                    <div className="w-100 discount-box-img-container">
                                    <img src={trend3} />
                                    <div className="d-flex w-100 discount-img-hover-box">
                                        <span className=""><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i></span>
                                        <i class=" i bi bi-heart"></i>
                                    </div>
                                </div>  
                                    
                                <div className="img-content px-1 py-3">
                                <span className=" text-secondary">Watch</span>
                                <h6 className="">Dimoand Watches</h6>
                                <span className="price">$100 - $210.00</span>
                                </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 discount-box m-0 p-0">
                                <div className="my-1 border">
                                    <div className="w-100 discount-box-img-container">
                                    <img src={trend4} />
                                    <div className="d-flex w-100 discount-img-hover-box">
                                        <span className=""><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i></span>
                                        <i class=" i bi bi-heart"></i>
                                    </div>
                                </div>  
                                    
                                <div className="img-content px-1 py-3">
                                <span className=" text-secondary">LED Television</span>
                                <h6 className="">HD LED TV</h6>
                                <span className="price">$100 - $210.00</span>
                                </div>
                            </div>
                            </div>
                        </div>
                        :
                        <div className="row discount-container">
                            <div className="col-12 col-md-4 discount-box m-0 p-0">
                                <div className="my-1 border">
                                    <div className="w-100 discount-box-img-container">
                                    <img src={trend2} />
                                    <div className="d-flex w-100 discount-img-hover-box">
                                        <span className=""><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i></span>
                                        <i class=" i bi bi-heart"></i>
                                    </div>
                                </div>  
                                    
                                <div className="img-content px-1 py-3">
                                <span className=" text-secondary">Watch</span>
                                <h6 className="">Women Gold Watch</h6>
                                <span className="price"><del className="text-secondary me-3">$640.00</del>$540.00</span>
                                </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 discount-box m-0 p-0">
                                <div className="my-1 border">
                                    <div className="w-100 discount-box-img-container">
                                    <img src={trend4} />
                                    <div className="d-flex w-100 discount-img-hover-box">
                                        <span className=""><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i></span>
                                        <i class=" i bi bi-heart"></i>
                                    </div>
                                </div>  
                                    
                                <div className="img-content px-1 py-3">
                                <span className=" text-secondary">LED Television</span>
                                <h6 className="">HD LED TV</h6>
                                <span className="price">$100 - $210.00</span>
                                </div>
                            </div>
                            </div>
                            <div className="col-12 col-md-4 discount-box m-0 p-0">
                                <div className="my-1 border">
                                    <div className="w-100 discount-box-img-container">
                                    <img src={trend2} />
                                    <div className="d-flex w-100 discount-img-hover-box">
                                        <span className=""><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i></span>
                                        <i class=" i bi bi-heart"></i>
                                    </div>
                                </div>  
                                    
                                <div className="img-content px-1 py-3">
                                <span className=" text-secondary">Watch</span>
                                <h6 className="">Women Gold Watch</h6>
                                <span className="price"><del className="text-secondary me-3">$640.00</del>$540.00</span>
                                </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 discount-box m-0 p-0">
                                <div className="my-1 border">
                                    <div className="w-100 discount-box-img-container">
                                    <img src={trend2} />
                                    <div className="d-flex w-100 discount-img-hover-box">
                                        <span className=""><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i></span>
                                        <i class=" i bi bi-heart"></i>
                                    </div>
                                </div>  
                                    
                                <div className="img-content px-1 py-3">
                                <span className=" text-secondary">Watch</span>
                                <h6 className="">Women Gold Watch</h6>
                                <span className="price"><del className="text-secondary me-3">$640.00</del>$540.00</span>
                                </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 discount-box m-0 p-0">
                                <div className="my-1 border">
                                    <div className="w-100 discount-box-img-container">
                                    <img src={trend3} />
                                    <div className="d-flex w-100 discount-img-hover-box">
                                        <span className=""><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i></span>
                                        <i class=" i bi bi-heart"></i>
                                    </div>
                                </div>  
                                    
                                <div className="img-content px-1 py-3">
                                <span className=" text-secondary">Watch</span>
                                <h6 className="">Platinum Watches</h6>
                                <span className="price">$100 - $210.00</span>
                                </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-4 discount-box m-0 p-0">
                                <div className="my-1 border">
                                    <div className="w-100 discount-box-img-container">
                                    <img src={trend3} />
                                    <div className="d-flex w-100 discount-img-hover-box">
                                        <span className=""><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-half"></i></span>
                                        <i class=" i bi bi-heart"></i>
                                    </div>
                                </div>  
                                    
                                <div className="img-content px-1 py-3">
                                <span className=" text-secondary">Watch</span>
                                <h6 className="">Gold Watches</h6>
                                <span className="price">$100 - $210.00</span>
                                </div>
                                </div>
                            </div>
                        </div>
                        }
                    </div>
                </div>
            </div>
    )
}