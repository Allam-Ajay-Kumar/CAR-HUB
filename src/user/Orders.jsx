
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../store/ProductSlice";
import "./Orders.css";

export default function Orders() {
    var ordered = useSelector((state) => state.products.myOrders);
    var dis = useDispatch();

    useEffect(() => {
        var username = localStorage.getItem("userLogged");
        dis(getOrders(username));
    }, [dis]);

    return (
        <>
            <div className="orders-page">
                <div className="orders-container">

                    {/* Header */}
                    <div className="orders-header">
                        <span className="orders-subtitle">
                            CARHUB COLLECTION
                        </span>

                        <h1>
                            My <span>Orders</span>
                        </h1>

                        <p>
                            Keep track of the cars you've ordered.
                        </p>
                    </div>

                    {/* Order Cards */}
                    <div className="orders-grid">
                        {ordered && ordered.length > 0 ? (
                            ordered.map((o, ind) => (
                                <div className="orders-item" key={ind}>
                                    <div className="orders-card">

                                        {/* Car Image */}
                                        <div className="orders-image-box">
                                            <img
                                                src={o.image}
                                                alt={o.name}
                                                className="orders-image"
                                            />

                                            <span className="orders-badge">
                                                <i className="fa-solid fa-check-circle"></i>
                                                Ordered
                                            </span>
                                        </div>

                                        {/* Car Details */}
                                        <div className="orders-card-body">

                                            <span className="orders-brand">
                                                {o.brand}
                                            </span>

                                            <h3 className="orders-car-name">
                                                {o.name}
                                            </h3>

                                            <div className="orders-price-section">
                                                <span>Price</span>

                                                <h4>
                                                    <i className="fa-solid fa-indian-rupee-sign"></i>{" "}
                                                    {Number(o.price).toLocaleString("en-IN")}
                                                </h4>
                                            </div>

                                            <div className="orders-quantity">
                                                <i className="fa-solid fa-car"></i>
                                                <span>Quantity</span>
                                                <strong>{o.quantity}</strong>
                                            </div>

                                            <div className="orders-divider"></div>

                                            {/* Customer Information */}
                                            <div className="orders-info">
                                                <div className="orders-info-item">
                                                    <span className="orders-info-icon">
                                                        <i className="fa-solid fa-phone"></i>
                                                    </span>

                                                    <div>
                                                        <small>Phone Number</small>
                                                        <p>{o.phone}</p>
                                                    </div>
                                                </div>

                                                <div className="orders-info-item">
                                                    <span className="orders-info-icon">
                                                        <i className="fa-solid fa-location-dot"></i>
                                                    </span>

                                                    <div>
                                                        <small>Delivery Address</small>
                                                        <p>{o.address}</p>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="orders-empty">
                                <i className="fa-solid fa-box-open"></i>

                                <h3>No Orders Yet</h3>

                                <p>
                                    You haven't ordered any cars yet.
                                    Explore our collection to find your next car.
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    {ordered && ordered.length > 0 && (
                        <div className="orders-footer">
                            <i className="fa-solid fa-clipboard-list"></i>

                            You have placed {ordered.length}{" "}
                            {ordered.length === 1 ? "order" : "orders"}
                        </div>
                    )}

                </div>
            </div>
        </>
    );
}
