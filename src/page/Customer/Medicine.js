import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { BsPlus } from "react-icons/bs";
import { getDataByPath, deleteDataByPath } from "../../services/data.service";
import Header from "../Header/Header";
import { ListProduct } from "../Data";
import { SimpleDropdown } from "react-js-dropdavn";
const Medicine = () => {
  let history = useHistory();

  const viewDetail = () => {
    history.push("/ViewDetail");
  };
  const [apartment, setApartment] = useState([]);
  console.log("checkp", apartment);

  async function loadDataMedicine() {
    const path = `posts?_limit=10&_page=1`;
    const res = await getDataByPath(path, "", "");
    console.log("check", res);
    if (res !== null && res !== undefined && res.status === 200) {
      setApartment(res.data);
    }
  }
  useEffect(() => {
    loadDataMedicine();
  }, []);

  return (
    <>
      <Header />
      <div className="site-wrap">
        <div id="wrapper">
          <div class="bg-light py-3">
            <div class="container">
              <div class="row">
                <div class="col-md-12 mb-0">
                  <a
                    href="index.html"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Home
                  </a>{" "}
                  <span class="mx-2 mb-0">/</span>{" "}
                  <strong class="text-black">Store</strong>
                </div>
              </div>
            </div>
          </div>
          <div
            className="modal fade"
            id="quickview"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="quickview"
            aria-hidden="true"
          >
            <div
              className="modal-dialog modal-lg modal-dialog-centered"
              role="document"
            >
              <div className="modal-content">
                <button
                  type="button"
                  className="close btn"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
                <div className="modal-body">
                  <div className="quickview_body">
                    <div className="container">
                      <div className="row">
                        <div className="col-12 col-lg-5">
                          <div className="quickview_pro_img">
                            <img src="img/product-img/product-1.jpg" alt="" />
                          </div>
                        </div>
                        <div className="col-12 col-lg-7">
                          <div className="quickview_pro_des">
                            <h4 className="title">Boutique Silk Dress</h4>
                            <div className="top_seller_product_rating mb-15">
                              <i className="fa fa-star" aria-hidden="true" />
                              <i className="fa fa-star" aria-hidden="true" />
                              <i className="fa fa-star" aria-hidden="true" />
                              <i className="fa fa-star" aria-hidden="true" />
                              <i className="fa fa-star" aria-hidden="true" />
                            </div>
                            <h5 className="price">
                              $120.99 <span>$130</span>
                            </h5>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Mollitia expedita quibusdam
                              aspernatur, sapiente consectetur accusantium
                              perspiciatis praesentium eligendi, in fugiat?
                            </p>
                            <a href="#">View Full Product Details</a>
                          </div>
                          {/* Add to Cart Form */}
                          <form className="cart" method="post">
                            <div className="quantity">
                              <span
                                className="qty-minus"
                                onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty ) && qty > 1 ) effect.value--;return false;"
                              >
                                <i className="fa fa-minus" aria-hidden="true" />
                              </span>
                              <input
                                type="number"
                                className="qty-text"
                                id="qty"
                                step={1}
                                min={1}
                                max={12}
                                name="quantity"
                                defaultValue={1}
                              />
                              <span
                                className="qty-plus"
                                onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty )) effect.value++;return false;"
                              >
                                <i className="fa fa-plus" aria-hidden="true" />
                              </span>
                            </div>
                            <button
                              type="submit"
                              name="addtocart"
                              value={5}
                              className="cart-submit"
                            >
                              Add to cart
                            </button>
                            {/* Wishlist */}
                            <div className="modal_pro_wishlist">
                              <a href="wishlist.html" target="_blank">
                                <i className="ti-heart" />
                              </a>
                            </div>
                            {/* Compare */}
                            <div className="modal_pro_compare">
                              <a href="compare.html" target="_blank">
                                <i className="ti-stats-up" />
                              </a>
                            </div>
                          </form>
                          <div className="share_wf mt-30">
                            <p>Share With Friend</p>
                            <div className="_icon">
                              <a href="#">
                                <i
                                  className="fa fa-facebook"
                                  aria-hidden="true"
                                />
                              </a>
                              <a href="#">
                                <i
                                  className="fa fa-twitter"
                                  aria-hidden="true"
                                />
                              </a>
                              <a href="#">
                                <i
                                  className="fa fa-pinterest"
                                  aria-hidden="true"
                                />
                              </a>
                              <a href="#">
                                <i
                                  className="fa fa-google-plus"
                                  aria-hidden="true"
                                />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ****** Quick View Modal Area End ****** */}
          <section className="shop_grid_area section_padding_100">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-4 col-lg-3">
                  <div className="shop_sidebar_area"></div>
                </div>
                <div className="flex-w flex-sb-m p-b-52">
                  <div
                    className="flex-w flex-l-m filter-tope-group m-tb-10"
                    style={{ marginBottom: 50 }}
                  >
                    <button
                      className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1"
                      data-filter="*"
                      style={{
                        border: "none",
                        marginRight: 30,
                        fontSize: "20px",
                        fontFamily: "Poppins-Regular",
                        backgroundColor: "white",
                      }}
                    >
                      All Products
                    </button>

                    <button
                      className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
                      data-filter=".women"
                      style={{
                        border: "none",
                        marginRight: 30,
                        fontSize: "20px",
                        fontFamily: "Poppins-Regular",
                        backgroundColor: "white",
                      }}
                    >
                      Tim mach
                    </button>

                    <button
                      className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
                      data-filter=".men"
                      style={{
                        border: "none",
                        marginRight: 30,
                        fontSize: "20px",
                        fontFamily: "Poppins-Regular",
                        backgroundColor: "white",
                      }}
                    >
                      Tieu Hoa
                    </button>

                    <button
                      className=" stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
                      data-filter=".bag"
                      style={{
                        border: "none",
                        marginRight: 30,
                        fontSize: "20px",
                        fontFamily: "Poppins-Regular",
                        backgroundColor: "white",
                      }}
                    >
                      Thần Kinh
                    </button>

                    <button
                      className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
                      data-filter=".shoes"
                      style={{
                        border: "none",
                        marginRight: 30,
                        fontSize: "20px",
                        fontFamily: "Poppins-Regular",
                        backgroundColor: "white",
                      }}
                    >
                      Cơ thể
                    </button>

                    <button
                      className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
                      data-filter=".watches"
                      style={{
                        border: "none",
                        marginRight: 30,
                        fontSize: "20px",
                        fontFamily: "Poppins-Regular",
                        backgroundColor: "white",
                      }}
                    >
                      Dụng cu Yte
                    </button>
                 
                      <label className="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5" htmlFor="toggle" style={{ marginLeft:400,cursor:"pointer",fontSize: "20px",}}>
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-filter"
                          viewBox="0 0 16 16"
                        >
                          <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                        </svg>
                        &nbsp; Filter
                     </label>
                    <nav className="nav1">
                      <input id="toggle" type="checkbox" defaultChecked />
                      <button className="button-16" style={{margin:10,display:"none"}} >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-filter"
                          viewBox="0 0 16 16"
                        >
                          <path d="M6 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
                        </svg>
                        &nbsp; Filter

                      </button>
                  
                      <div
                     
                        style={{
                          height: 250,
                          width: 1200,
                          backgroundColor: "#f9f9f9",
                          marginRight: 1000,
                          marginTop:30
                        
                        }}
                        
                      >
                        <div className="col-12 col-md-8 col-lg-12">
                          <div className="shop_grid_product_area">
                            <div className="row">
                              <div
                                className="col-12 col-sm-6 col-lg-3 single_gallery_item wow fadeInUpBig"
                                data-wow-delay="0.2s"
                              >
                                {/* Product Image */}

                                {/* Product Description */}
                                <div className="product-description">
                                  <h4 className="product-price">Thương hiệu</h4>
                                  <a>Abbott</a>
                                  <br />
                                  <a>Anlene</a>
                                  <br />
                                  <a>Dinh Dưỡng Việt</a>
                                  <br />
                                  <a>Fonterra Brands</a>
                                  <br />
                                  <a>Abbott</a>
                                  <br />
                                  <a>Anlene</a>
                                  <br />
                                </div>
                              </div>
                              <div
                                className="col-12 col-sm-6 col-lg-3 single_gallery_item wow fadeInUpBig"
                                data-wow-delay="0.2s"
                              >
                                {/* Product Image */}

                                {/* Product Description */}
                                <div className="product-description">
                                  <h4 className="product-price">Chỉ định</h4>
                                  <a>10000-50000</a>
                                  <br />
                                  <a>10000-50000</a>
                                  <br />
                                  <a>10000-50000</a>
                                  <br />
                                  <a>10000-50000</a>
                                  <br />
                                  {/* Add to Cart */}
                                </div>
                              </div>

                              <div
                                className="col-12 col-sm-6 col-lg-3 single_gallery_item wow fadeInUpBig"
                                data-wow-delay="0.2s"
                              >
                                {/* Product Image */}

                                {/* Product Description */}
                                <div className="product-description">
                                  <h4 className="product-price">Đối tượng</h4>
                                  <a>Tất cả</a>
                                  <br />
                                  <a>Khoáng Chất</a>
                                  <br />
                                  <a>Taurine</a>
                                  <br />
                                  <a>Vitamin Tổng Hợp</a>
                                  <br />
                                  <a>Taurine</a>
                                  <br />
                                  <a>Vitamin Tổng Hợp</a>
                                  <br />

                                  {/* Add to Cart */}
                                </div>
                              </div>
                              <div
                                className="col-12 col-sm-6 col-lg-3 single_gallery_item wow fadeInUpBig"
                                data-wow-delay="0.2s"
                              >
                                {/* Product Image */}

                                {/* Product Description */}
                                <div className="product-description">
                                  <h4 className="product-price">Giá</h4>
                                  <p>đá</p>
                                  {/* Add to Cart */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </nav>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div className="col-12 col-md-8 col-lg-12" >
                      <div className="shop_grid_product_area">
                        <div className="row">
                          {ListProduct.map((item, index) => {
                            return (
                              <div
                                className="col-12 col-sm-6 col-lg-3 single_gallery_item wow fadeInUpBig"
                                data-wow-delay="0.2s"
                              >
                                {/* Product Image */}
                                <div
                                  className="product-img"
                                  onClick={() => {
                                    viewDetail();
                                  }}
                                  style={{ borderRadius: 5, height: 350 }}
                                >
                                  <img src={item.src} alt="" />
                                  <div className="product-quicview">
                                    <a
                                      href="#"
                                      data-toggle="modal"
                                      data-target="#quickview"
                                    >
                                      <BsPlus style={{ marginBottom: 10 }} />
                                    </a>
                                  </div>
                                </div>
                                {/* Product Description */}
                                <div className="product-description">
                                  <h4 className="product-price">
                                    {item.price}
                                  </h4>
                                  <p>{item.name}</p>
                                  {/* Add to Cart */}
                                  <a href="#" className="add-to-cart-btn">
                                    ADD TO CART
                                  </a>
                                </div>
                              </div>
                            );
                          })}
                          {/* Single gallery Item */}
                        </div>
                      </div>
                      <div
                        className="shop_pagination_area wow fadeInUp"
                        data-wow-delay="1.1s"
                      >
                        <nav aria-label="Page navigation">
                          <ul className="pagination pagination-sm">
                            <li className="page-item active">
                              <a className="page-link" href="#">
                                01
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#">
                                02
                              </a>
                            </li>
                            <li className="page-item">
                              <a className="page-link" href="#">
                                03
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ****** Footer Area End ****** */}
        </div>
      </div>
    </>
  );
};
export default Medicine;
