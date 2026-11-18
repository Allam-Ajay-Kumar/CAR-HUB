import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOrders, addtoWishlist, deleteinCart, getProducts } from "../store/ProductSlice";
import "./Cart.css";
import Swal from "sweetalert2";


export default function Cart() {
    var cartitem = useSelector((state) => state.products.selectedProduct);
    console.log(cartitem);

    var dis = useDispatch();

    useEffect(() => {
        var username = localStorage.getItem("userLogged");
        dis(getProducts(username));
        console.log(username);
    }, [dis]);

    var [dummy, setDummy] = useState("")
    var [phone, setPhone] = useState("")
    var [address, setAddress] = useState("")

    function recievedata(obj) {
        setDummy(obj)
    }

    function placeorder(e) {
        e.preventDefault();
        var order = {
            ...dummy,
            phone: phone,
            address: address
        }
        dis(addOrders(order)),
            Swal.fire({
                title: "Order Placed!",
                text: "Your order has been placed successfully.",
                icon: "success",
                confirmButtonText: "Continue",
                confirmButtonColor: "#172A45"
            });
    }





    return (
        <>
            <div className="cart-page">
                <div className="cart-container">

                    {/* Header */}
                    <div className="cart-header">
                        <span className="cart-subtitle">CARHUB COLLECTION</span>
                        <h1>Shopping <span>Cart</span></h1>
                        <p>Review your selected cars before your next journey.</p>
                    </div>

                    {/* Cart Table */}
                    <div className="cart-table-wrapper">
                        <table className="table cart-table">
                            <thead>
                                <tr>
                                    <th>S.No</th>
                                    <th>Car Details</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Image</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {cartitem && cartitem.length > 0 ? (
                                    cartitem.map((c, ind) => {
                                        return (
                                            <tr key={c.id}>
                                                <td className="cart-serial">
                                                    {ind + 1}
                                                </td>

                                                <td className="cart-name">
                                                    <h6>{c.name}</h6>
                                                    <span>{c.brand}</span>
                                                </td>

                                                <td className="cart-price">
                                                    <i className="fa-solid fa-indian-rupee-sign"></i>{" "}
                                                    {Number(c.price).toLocaleString("en-IN")}
                                                </td>

                                                <td>
                                                    <span className="cart-quantity">
                                                        {c.quantity}
                                                    </span>
                                                </td>

                                                <td>
                                                    <div className="cart-image-box">
                                                        <img
                                                            src={c.image}
                                                            alt={c.name}
                                                            className="cart-image"
                                                        />
                                                    </div>
                                                </td>

                                                <td>
                                                    <div className="cart-actions">
                                                        <button
                                                            className="cart-buy-btn" data-bs-target="#order" data-bs-toggle="modal" onClick={() => recievedata(c)}>
                                                            <i className="fa-solid fa-bag-shopping"></i>
                                                            Buy Now
                                                        </button>

                                                        <button
                                                            className="cart-remove-btn"
                                                            onClick={() => dis(deleteinCart({ id: c.id, username: c.username }))}>
                                                            <i className="fa-solid fa-trash"></i>
                                                            Remove
                                                        </button>

                                                        <button
                                                            onClick={() => {
                                                                dis(addtoWishlist(c));

                                                                Swal.fire({
                                                                    title: "Added to Wishlist!",
                                                                    text: `${c.name} has been added to your wishlist.`,
                                                                    icon: "success",
                                                                    confirmButtonText: "Continue",
                                                                    confirmButtonColor: "#172A45"
                                                                });
                                                            }}
                                                        >
                                                            <i className="fa-regular fa-heart" ></i>
                                                            Wishlist
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })
                                ) : (
                                    <tr>
                                        <td colSpan="6">
                                            <div className="cart-empty">
                                                <i className="fa-solid fa-cart-shopping"></i>
                                                <h3>Your cart is empty</h3>
                                                <p>
                                                    You haven't added any cars to your cart yet.
                                                </p>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                        <div className="modal fade" id="order">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5>Your are Ordering :{dummy && dummy.name}</h5>


                                        <button className="btn-close" data-bs-dismiss="modal" ></button>
                                    </div>
                                    <div className="modal-body">
                                        <form action="">
                                            <div className="form-group">
                                            <label htmlFor="" className="form-label">Phone No</label>
                                            <input type="text" className="form-control" required onChange={(e) => setPhone(e.target.value)} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="" className="form-label">Address</label>
                                            <input type="text" className="form-control" required onChange={(e) => setAddress(e.target.value)} />
                                        </div>
                                        <button  onClick={placeorder}className="btn btn-success" data-bs-dismiss="modal" type="submit ">Order</button>
                                        </form>

                                    </div>
                                    <div className="modal-footer">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div >



        </>
    );
}