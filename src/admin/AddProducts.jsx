
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../store/ProductSlice";
import "./Add.css";

export default function Add() {
    var [cid, setCid] = useState("");
    var [cname, setCname] = useState("");
    var [cbrand, setCbrand] = useState("");
    var [cprice, setCprice] = useState("");
    var [cimage, setCimage] = useState("");
    var [ctrans, setCtrans] = useState("");

    var navigate = useNavigate();
    var dispatch = useDispatch();

    var addcar = (e) => {
        e.preventDefault();

        var newcar = {
            id: cid,
            name: cname,
            brand: cbrand,
            price: cprice,
            image: cimage,
            transmission: ctrans,
        };

        dispatch(addProduct(newcar));
        alert("Added Successfully");
        navigate("/admin/viewproducts");
    };

    return (
        <div className="addcar-page">
            <div className="addcar-header">
                <span className="addcar-label">CARHUB ADMINISTRATION</span>
                <h2>Add New Vehicle</h2>
                <p>Add a new car to your dealership inventory.</p>
            </div>

            <div className="addcar-card">
                <div className="addcar-card-header">
                    <div className="addcar-heading-icon">
                        <i className="bi bi-car-front-fill"></i>
                    </div>

                    <div>
                        <h4>Vehicle Details</h4>
                        <p>Enter the information below.</p>
                    </div>
                </div>

                <form action="" onSubmit={addcar}>
                    <div className="row g-4">

                        <div className="col-12 col-md-6">
                            <div className="form-group">
                                <label htmlFor="car-id">Car ID</label>
                                <input
                                    id="car-id"
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter car ID"
                                    value={cid}
                                    onChange={(e) => setCid(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="col-12 col-md-6">
                            <div className="form-group">
                                <label htmlFor="car-name">Car Name</label>
                                <input
                                    id="car-name"
                                    type="text"
                                    className="form-control"
                                    placeholder="e.g. BMW M4"
                                    value={cname}
                                    onChange={(e) => setCname(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="col-12 col-md-6">
                            <div className="form-group">
                                <label htmlFor="car-brand">Brand</label>
                                <input
                                    id="car-brand"
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter car brand"
                                    value={cbrand}
                                    onChange={(e) => setCbrand(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="col-12 col-md-6">
                            <div className="form-group">
                                <label htmlFor="car-price">Price</label>
                                <input
                                    id="car-price"
                                    type="text"
                                    className="form-control"
                                    placeholder="e.g. ₹1.5 Cr"
                                    value={cprice}
                                    onChange={(e) => setCprice(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="col-12 col-md-6">
                            <div className="form-group">
                                <label htmlFor="car-transmission">
                                    Transmission
                                </label>
                                <input
                                    id="car-transmission"
                                    type="text"
                                    className="form-control"
                                    placeholder="e.g. Automatic"
                                    value={ctrans}
                                    onChange={(e) => setCtrans(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="col-12 col-md-6">
                            <div className="form-group">
                                <label htmlFor="car-image">Image URL</label>
                                <input
                                    id="car-image"
                                    type="text"
                                    className="form-control"
                                    placeholder="Paste car image URL"
                                    value={cimage}
                                    onChange={(e) => setCimage(e.target.value)}
                                />
                            </div>
                        </div>

                    </div>

                    <div className="addcar-actions">
                        <button className="addcar-submit" type="submit">
                            <i className="bi bi-plus-circle"></i>
                            Add Vehicle
                        </button>
                    </div>
                </form>
            </div>

            <div className="addcar-note">
                <i className="bi bi-info-circle"></i>
                Make sure the vehicle details and image URL are correct.
            </div>
        </div>
    );
}
