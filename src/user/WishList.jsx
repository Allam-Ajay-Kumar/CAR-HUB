
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWishlist } from "../store/ProductSlice";
import "./Wish.css";

export default function Wish() {
    var list = useSelector((state) => state.products.myWishlist);
    var dis = useDispatch();

    useEffect(() => {
        var username = localStorage.getItem("userLogged");
        dis(getWishlist(username));
    }, [dis]);

    return (
        <>
            <div className="wishlist-page">
                <div className="wishlist-container">

                    {/* Header */}
                    <div className="wishlist-header">
                        <span className="wishlist-subtitle">
                            CARHUB COLLECTION
                        </span>

                        <h1>
                            My Wish <span>List</span>
                        </h1>

                        <p>
                            Your favorite cars, all in one place.
                        </p>
                    </div>

                    {/* Wishlist Products */}
                    <div className="wishlist-grid">
                        {list && list.length > 0 ? (
                            list.map((o, ind) => (
                                <div className="wishlist-item" key={ind}>
                                    <div className="wishlist-card">

                                        {/* Image */}
                                        <div className="wishlist-image-box">
                                            <img
                                                src={o.image}
                                                alt={o.name}
                                                className="wishlist-image"
                                            />

                                            <span className="wishlist-heart">
                                                <i className="fa-solid fa-heart"></i>
                                            </span>
                                        </div>

                                        {/* Details */}
                                        <div className="wishlist-card-body">

                                            <span className="wishlist-brand">
                                                {o.brand}
                                            </span>

                                            <h3 className="wishlist-car-name">
                                                {o.name}
                                            </h3>

                                            <div className="wishlist-specifications">
                                                <div className="wishlist-spec">
                                                    <i className="fa-solid fa-gear"></i>
                                                    <span>{o.transmission}</span>
                                                </div>

                                                <div className="wishlist-spec">
                                                    <i className="fa-solid fa-gas-pump"></i>
                                                    <span>{o.fuel}</span>
                                                </div>
                                            </div>

                                            <div className="wishlist-price-section">
                                                <span className="wishlist-price-label">
                                                    Price
                                                </span>

                                                <h4 className="wishlist-price">
                                                    <i className="fa-solid fa-indian-rupee-sign"></i>{" "}
                                                    {Number(o.price).toLocaleString("en-IN")}
                                                </h4>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="wishlist-empty">
                                <i className="fa-regular fa-heart"></i>

                                <h3>Your wishlist is empty</h3>

                                <p>
                                    Explore our collection and save your favorite cars here.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    {list && list.length > 0 && (
                        <div className="wishlist-footer">
                            <i className="fa-solid fa-heart"></i>{" "}
                            {list.length} {list.length === 1 ? "car" : "cars"} in your wishlist
                        </div>
                    )}

                </div>
            </div>
        </>
    );
}
