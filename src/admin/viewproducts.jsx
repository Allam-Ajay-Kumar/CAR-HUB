
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../store/ProductSlice";
import "./ViewProducts.css";
import { useNavigate } from "react-router-dom";

export default function ViewProducts() {
    var prod = useSelector((state) => state.products.carList);
    var dis = useDispatch();
    var navigate = useNavigate();

    return (
        <div className="view-products-page">

            {/* Header */}
            <div className="products-header">
                <div>
                    <span className="products-label">
                        CARHUB ADMINISTRATION
                    </span>

                    <h2>Our Products</h2>

                    <p>
                        Explore and manage your dealership inventory.
                    </p>
                </div>

                <div className="products-count">
                    <i className="fa-solid fa-car"></i>
                    <span>{prod.length} Vehicles</span>
                </div>
            </div>

            {/* Product Grid */}
            <div className="row g-4 products-grid">
                {prod.map((item, ind) => {
                    return (
                        <div className="col-12 col-sm-6 col-xl-4" key={ind}>

                            <div className="product-card">

                                {/* Product Image */}
                                <div className="product-image-container">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="product-image"
                                    />

                                    <span className="product-id">
                                        ID: {item.id}
                                    </span>
                                </div>

                                {/* Product Details */}
                                <div className="product-content">

                                    <span className="product-brand">
                                        {item.brand}
                                    </span>

                                    <h4 className="product-name">
                                        {item.name}
                                    </h4>

                                    <div className="product-specifications">

                                        <div className="product-spec">
                                            <i className="fa-solid fa-gear"></i>
                                            <span>
                                                {item.transmission || "N/A"}
                                            </span>
                                        </div>

                                        <div className="product-spec">
                                            <i className="fa-solid fa-gas-pump"></i>
                                            <span>
                                                {item.fuel || "N/A"}
                                            </span>
                                        </div>

                                    </div>

                                    <div className="product-footer">

                                        <div>
                                            <span className="product-price-label">
                                                Price
                                            </span>

                                            <h5 className="product-price">
                                                ₹{item.price}
                                            </h5>
                                        </div>

                                        <div className="">
                                            <button
                                            className="product-delete-btn"
                                            onClick={() => dis(deleteProduct(ind))}
                                            aria-label={`Delete ${item.name}`}
                                        >
                                            <i className="fa-solid fa-trash"></i>
                                            <span>Delete</span>
                                        </button>
                                        <button className="btn btn-warning" onClick={()=>navigate("/admin/update/"+item.id)} >Update</button>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>
                    );
                })}
            </div>

            {/* Empty State */}
            {prod.length === 0 && (
                <div className="products-empty">
                    <i className="fa-solid fa-car-side"></i>
                    <h4>No Vehicles Available</h4>
                    <p>Your inventory is empty.</p>
                </div>
            )}

        </div>
    );
}
