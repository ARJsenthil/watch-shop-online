import bannerWatchImg1 from "../../media/slider/banner_watch.png";
import bannerWatchImg2 from "../../media/slider/banner_img2-min.png";
import bannerWatchImg3 from "../../media/slider/banner_img3-min.png";
import bannerWaterImg1 from "../../media/slider/water.png";
import sbImg1 from "../../media/slider/f1.jpg";
import sbImg2 from "../../media/slider/f2.jpg";


export function Slider() {
  return (
    <>
      <div id="carouselExampleIndicators" class="carousel slide overflow-hidden">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" style={{width: "15px", height: "15px"}} class="rounded-circle bg-secondary active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" style={{width: "15px", height: "15px"}} class="rounded-circle bg-secondary" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" style={{width: "15px", height: "15px"}} class="rounded-circle bg-secondary" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="container">
              <div class="row">
                <div class="col-12 slider-content col-lg-6 text-left m-auto" style={{ textAlign: "left" }}>
                  <h1 class="text-left text-dark slider-watch-topic" style={{ fontSize: "60px" }}>Relogio Faminino</h1>
                  <p class="text-secondary slider-watch-details">
                    Titanium Grade 2 folding clasp and safety push buttons with <br />
                    black carbide coating Stocking the finest luxury <br />
                    watch brands, we specialise
                  </p>
                  <p className="slider-watch-price" style={{ fontSize: "large" }}><b style={{ fontSize: "xx-large", color: "#eb6a2a" }} className="pe-2">$1,200</b><del className="text-secondary">$1,500</del></p>
                  <div class=" d-flex align-items-center slider-watch-btn">
                    <a href="#" style={{ backgroundColor: "#eb6a2a", fontSize: "small" }} class="px-5 py-3 text-white text-decoration-none">VIEW COLLECTIONS</a>
                  </div>
                </div>
                <div class="position-relative slider-watch-img-container col-12 col-lg-6">
                  <img src={bannerWatchImg1} class="slider-watch-img d-flex align-items-center jusify-content-center m-0 m-auto" alt="" />
                  <img src={bannerWaterImg1} class="slider-water-img d-flex align-items-center jusify-content-center m-0" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item ">
            <div class="container">
              <div class="row">
                <div class="col-12 slider-content col-lg-6 text-left m-auto " style={{ textAlign: "left" }}>
                  <h1 class="text-left text-dark slider-watch-topic" style={{ fontSize: "60px" }}>Relogio Faminino</h1>
                  <p class="text-secondary slider-watch-details">
                    Titanium Grade 2 folding clasp and safety push buttons with <br />
                    black carbide coating Stocking the finest luxury <br />
                    watch brands, we specialise
                  </p>
                  <p className="slider-watch-price" style={{ fontSize: "large" }}><b style={{ fontSize: "xx-large", color: "#eb6a2a" }} className="pe-2">$1,200</b><del className="text-secondary">$1,500</del></p>
                  <div class=" d-flex align-items-center slider-watch-btn">
                    <a href="#" style={{ backgroundColor: "#eb6a2a", fontSize: "small" }} class="px-5 py-3 text-white text-decoration-none">VIEW COLLECTIONS</a>
                  </div>
                </div>
                <div class="position-relative col-12 col-lg-6 home-img-box pt-5">
                  <img src={bannerWatchImg2} class="slider-watch-img d-flex align-items-center jusify-content-center m-0 m-auto" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item ">
            <div class="container">
              <div class="row">
                <div class="col-12 slider-content col-lg-6 text-left m-auto" style={{ textAlign: "left" }}>
                  <h1 class="text-left text-dark slider-watch-topic" style={{ fontSize: "60px" }}>Relogio Faminino</h1>
                  <p class="text-secondary slider-watch-details">
                    Titanium Grade 2 folding clasp and safety push buttons with <br />
                    black carbide coating Stocking the finest luxury <br />
                    watch brands, we specialise
                  </p>
                  <p className="slider-watch-price" style={{ fontSize: "large" }}><b style={{ fontSize: "xx-large", color: "#eb6a2a" }} className="pe-2">$1,200</b><del className="text-secondary">$1,500</del></p>
                  <div class=" d-flex align-items-center slider-watch-btn">
                    <a href="#" style={{ backgroundColor: "#eb6a2a", fontSize: "small" }} class="px-5 py-3 text-white text-decoration-none">VIEW COLLECTIONS</a>
                  </div>
                </div>
                <div class="position-relative col-12 col-lg-6 home-img-box pt-5">
                  <img src={bannerWatchImg3} class="slider-watch-img d-flex align-items-center jusify-content-center m-0 m-auto" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <div className="slider-bottom-container container my-5">
        <div className="row">
        <div className="img-div col-12 mb-3 col-lg-6"><img src={sbImg1} className="w-100" /></div>
        <div className="img-div col-12 mb-3 col-lg-6"><img src={sbImg2} className="w-100" /></div>
        </div>
      </div>
    </>
  )
}