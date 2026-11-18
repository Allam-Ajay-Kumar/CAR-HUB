
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./ViewProducts.css";

export default function viewproductsu() {
    var prod = useSelector((state) => state.products.carList);
    var nav = useNavigate();

    var img1 = {
        width: "100%",
        height: "200px",
        objectFit: "cover"
    };

    return (
        <>
            <div className="view-products-page">

                {/* Page Heading */}
                <div className="products-heading">
                    <span className="products-subtitle">CARHUB COLLECTION</span>
                    <h1>Our <span>Products</span></h1>
                    <p>Discover your perfect drive with our premium car collection.</p>
                    <div className="products-heading-line"></div>
                </div>

                {/* Product Grid */}
                <div className="row products-grid">
                    {
                        prod.map((item, ind) => {
                            return (
                                <div
                                    className="col-xl-3 col-lg-4 col-md-6 col-sm-6 p-3"
                                    key={ind}
                                >
                                    <button
                                        className="product-card-button"
                                        onClick={() => nav("/user/details/" + item.id)}
                                    >
                                        <div className="card product-card">

                                            {/* Product Image */}
                                            <div className="product-image-wrapper">
                                                <span className="product-id-badge">
                                                    ID: {item.id}
                                                </span>

                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="card-img-top product-image"
                                                    style={img1}
                                                />
                                            </div>

                                            {/* Product Information */}
                                            <div className="card-head product-card-heading">
                                                <span className="product-brand">
                                                    {item.brand}
                                                </span>

                                                <h4 className="product-name">
                                                    {item.name}
                                                </h4>
                                            </div>

                                            <div className="card-body product-card-body">

                                                {/* Specifications */}
                                                <div className="product-specifications">

                                                    <div className="product-spec">
                                                        <i className="fa-solid fa-gear"></i>
                                                        <span>{item.transmission}</span>
                                                    </div>

                                                    <div className="product-spec">
                                                        <i className="fa-solid fa-gas-pump"></i>
                                                        <span>{item.fuel}</span>
                                                    </div>

                                                </div>

                                                {/* Price */}
                                                <div className="product-price-section">
                                                    <span className="product-price-label">
                                                        Starting Price
                                                    </span>

                                                    <h5 className="product-price">
                                                        <i className="fa-solid fa-indian-rupee-sign"></i>{" "}
                                                        {item.price}
                                                    </h5>
                                                </div>

                                                {/* Details Button */}
                                                <div className="product-details-link">
                                                    View Details
                                                    <i className="fa-solid fa-arrow-right"></i>
                                                </div>

                                            </div>
                                        </div>
                                    </button>
                                </div>
                            );
                        })
                    }
                </div>

                {/* Bottom Note */}
                <div className="products-footer">
                    <i className="fa-solid fa-star"></i>
                    Find your next dream car with CarHub.
                </div>

            </div>
        </>
    );
}
