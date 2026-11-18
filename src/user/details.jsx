import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addTest, addtoCart } from "../store/ProductSlice";
import "./Details.css";
import { useState } from "react";
import Swal from "sweetalert2";


export default function Details() {
    const { pid } = useParams();
    var navigate = useNavigate();

    var rp = useSelector((state) => state.products.carList);
    var reqp = rp.find((e) => e.id == pid);

    console.log(reqp);

    var dis = useDispatch();

    var handle = () => {
        var add = {
            ...reqp,
            quantity: 1,
            username: localStorage.getItem("userLogged")
        };

        dis(addtoCart(add));


        navigate("/user/cart");
    };

    var [phone, setPhone] = useState("");
    var [address, setAddress] = useState("");
    var [date, setDate] = useState("");
    var [timeSlot, setTimeSlot] = useState("");

    function recieveform(e){
        e.preventDefault();
        var newtest={
           ...reqp,
    
            phone : phone,
            address:address,
            date:date,
            timing :timeSlot,
            username: localStorage.getItem("userLogged"),
            status: "Pending"
        };
        dis(addTest(newtest))
         Swal.fire({
        title: "Booking Successful!",
        text: "Your test drive has been booked successfully.",
        icon: "success",
        confirmButtonText: "Great!",
        confirmButtonColor: "#C1121F"
    });
        }

    

    return (
        <>
            <div className="details-page container-fluid">
                <div className="details-container container">

                    {/* Page Heading */}
                    <div className="details-heading">
                        <span className="details-subtitle">CARHUB COLLECTION</span>
                        <h1>Car <span>Details</span></h1>
                        <p>Explore every detail of your dream car.</p>
                    </div>

                    {reqp && (
                        <div className="details-card row">

                            {/* Car Image */}
                            <div className="col-lg-7 col-md-6 details-image-section">
                                <div className="details-image-box">
                                    <img
                                        src={reqp.image}
                                        alt={reqp.name}
                                        className="details-image"
                                    />

                                    <span className="details-image-badge">
                                        Premium Collection
                                    </span>
                                </div>
                            </div>

                            {/* Car Information */}
                            <div className="col-lg-5 col-md-6 details-info-section">

                                <div className="details-brand">
                                    {reqp.brand}
                                </div>

                                <h2 className="details-car-name">
                                    {reqp.name}
                                </h2>

                                <div className="details-divider"></div>

                                {/* Specifications */}
                                <div className="details-specifications">

                                    <div className="details-spec-item">
                                        <div className="details-spec-icon">
                                            <i className="fa-solid fa-gear"></i>
                                        </div>

                                        <div>
                                            <span>Transmission</span>
                                            <h6>{reqp.transmission}</h6>
                                        </div>
                                    </div>

                                    <div className="details-spec-item">
                                        <div className="details-spec-icon">
                                            <i className="fa-solid fa-gas-pump"></i>
                                        </div>

                                        <div>
                                            <span>Fuel Type</span>
                                            <h6>{reqp.fuel}</h6>
                                        </div>
                                    </div>

                                    <div className="details-spec-item">
                                        <div className="details-spec-icon">
                                            <i className="fa-solid fa-car"></i>
                                        </div>

                                        <div>
                                            <span>Vehicle</span>
                                            <h6>{reqp.brand}</h6>
                                        </div>
                                    </div>

                                </div>

                                {/* Price */}
                                <div className="details-price-box">
                                    <span>Price</span>

                                    <h3>
                                        <i className="fa-solid fa-indian-rupee-sign"></i>{" "}
                                        {Number(reqp.price).toLocaleString("en-IN")}
                                    </h3>
                                </div>

                                {/* Add to Cart */}
                                <button
                                    className="details-cart-btn"
                                    onClick={handle}
                                >
                                    <i className="fa-solid fa-cart-shopping"></i>
                                    Add to Cart
                                    <i className="fa-solid fa-arrow-right details-btn-arrow"></i>
                                </button>
                                <button className="btn btn-primary" data-bs-target="#test" data-bs-toggle="modal" >Test Drive</button>

                                <div className="details-footer-note">
                                    <i className="fa-solid fa-shield-halved"></i>
                                    Your next journey starts here.
                                </div>

                            </div>
                            <div className="modal fade" id="test">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5>Try Test drive</h5>


                                            <button className="btn-close" data-bs-dismiss="modal" ></button>
                                        </div>
                                        <div className="modal-body">
                                            <form action="">
                                                <div className="form-group">
                                                    <label htmlFor="" className="form-label">Phone No</label>
                                                    <input type="text" className="form-control"  onChange={(e) => setPhone(e.target.value)}required />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="" className="form-label">Address</label>
                                                    <input type="text" className="form-control"  onChange={(e) => setAddress(e.target.value)}required />
                                                </div>
                                                <div className="">
                                                    <label htmlFor=""className="form-label">Date</label>
                                                    <input type="date" className="form-control"  onChange={(e) => setDate(e.target.value) } required/>
                                                </div>
                                                <select
                                                    className="form-select test-time-select"
                                                    value={timeSlot}
                                                    onChange={(e) => setTimeSlot(e.target.value)}
                                                    required
                                                >
                                                    <option value="" disabled>
                                                        Select
                                                    </option>
                                                    <option value="10:00 AM - 11:00 AM">
                                                        10:00 AM - 11:00 AM
                                                    </option>

                                                    <option value="11:00 AM - 12:00 PM">
                                                        11:00 AM - 12:00 PM
                                                    </option>

                                                    <option value="1:00 PM - 2:00 PM">
                                                       1:00 PM - 2:00 PM
                                                    </option>
                                                </select>
                                                <button onClick={recieveform} className="btn btn-success" data-bs-dismiss="modal" type="submit ">Submit</button>
                                            </form>

                                        </div>
                                        <div className="modal-footer">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Bottom Note */}
                    <div className="details-bottom-text">
                        <i className="fa-solid fa-star"></i>
                        Discover performance, comfort, and style with CarHub.
                    </div>

                </div>
            </div>
        </>
    );
}