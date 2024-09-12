import trend1 from "../../media/trending/trend-1.jpg"
import trend2 from "../../media/trending/trend-2.jpg"
import trend3 from "../../media/trending/trend-3.jpg"
import trend4 from "../../media/trending/trend-4.jpg"
import brazil from "../../media/countries/brazil.png"
import canada from "../../media/countries/canada.png"
import saudi from "../../media/countries/saudi.png"
import singapore from "../../media/countries/singapore.png"
import uk from "../../media/countries/uk.png"
import usa from "../../media/countries/usa.png"

export function MostViewed () {
    return (
            <div className="container trending overflow-hidden">
                <h3 className="text-center py-5 mt-5 mb-3">Most Viewed</h3>
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
                        <span className="price"><del className="text-secondary me-3">$720.00</del>$540.00</span>
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
                        <span className="price"><del className="text-secondary me-3">$310.00</del>$210.00</span>
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
                        <span className="price"><del className="text-secondary me-3">$310.00</del>$210.00</span>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="countries my-5 py-3 row">
                    <div className="country col- col-md-4 col-lg-2 p-0">
                        <span className="d-flex align-items-center px-5 border-end">
                            <img src={brazil} width={30} height={30} className="me-3 rounded-circle  "/>
                            brazil
                        </span>
                    </div>
                    <div className="country col- col-md-4 col-lg-2 p-0">
                        <span className="d-flex align-items-center px-5 border-end">
                            <img src={canada} width={30} height={30} className="me-3 rounded-circle  "/>
                            canada
                        </span>
                    </div>
                    <div className="country col- col-md-4 col-lg-2 p-0">
                        <span className="d-flex align-items-center px-5 border-end">
                            <img src={saudi} width={30} height={30} className="me-3 rounded-circle   "/>
                            saudi
                        </span>
                    </div>
                    <div className="country col- col-md-4 col-lg-2 p-0">
                        <span className="d-flex align-items-center px-5 border-end">
                            <img src={singapore} width={30} height={30} className="me-3 rounded-circle"/>                             singapore
                        </span>
                    </div>
                    <div className="country col- col-md-4 col-lg-2 p-0">
                        <span className="d-flex align-items-center px-5 border-end">
                            <img src={uk} width={30} height={30} className="me-3 rounded-circle   " />
                            uk
                        </span>
                    </div>
                    <div className="country col- col-md-4 col-lg-2 p-0">
                        <span className="d-flex align-items-center px-5 border-start">
                            <img src={usa} width={30} height={30} className="me-3 rounded-circle  " />
                            usa
                        </span>
                    </div>

                </div>
            </div>
    )
}