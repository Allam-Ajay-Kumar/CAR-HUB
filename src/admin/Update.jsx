import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct, updateNow } from "../store/ProductSlice";
import "./Update.css";
import Swal from "sweetalert2";


export default function Update() {

    const { pid } = useParams();

    var dispatch = useDispatch();

    var uProduct = useSelector((state) => state.products.updateProduct);

    var [pName, setPName] = useState("");
    var [pBrand, setPBrand] = useState("");
    var [pPrice, setPPrice] = useState("");
    var [pImage, setPImage] = useState("");

    // Fetch selected product

    useEffect(() => {
        dispatch(updateProduct(pid));
    }, [dispatch, pid]);

    // Set product values in input fields

    useEffect(() => {

        if (uProduct) {

            setPName(uProduct.name || "");
            setPBrand(uProduct.brand || "");
            setPPrice(uProduct.price || "");
            setPImage(uProduct.image || "");

        }

    }, [uProduct]);


    // Update Product

    function calltoUpdate(e) {

        e.preventDefault();

        var newObj = {
            id: uProduct.id,
            name: pName,
            price: pPrice,
            brand: pBrand,
            image: pImage
        };

        dispatch(updateNow(newObj));

        Swal.fire({
        title: "Success!",
        text: "Product Updated Successfully!",
        icon: "success",
        confirmButtonText: "OK",
        confirmButtonColor: "#C1121F"
    });
    }


    return (
        <div className="update-product-page">

            <div className="update-product-heading">

                <h2>Update Product</h2>

                <p>Modify your existing product details.</p>

            </div>


            <div className="update-product-card">

                <div className="update-card-heading">

                    <div className="update-icon">
                        <i className="fa-solid fa-pen-to-square"></i>
                    </div>

                    <div>
                        <h4>Product Information</h4>
                        <p>Update the product information below.</p>
                    </div>

                </div>


                <form onSubmit={calltoUpdate}>

                    {/* Product Name */}

                    <div className="update-form-group">

                        <label>Car Brand</label>

                        <input
                            type="text"
                            className="form-control"
                            value={pBrand}
                            onChange={(e) => setPBrand(e.target.value)}
                            placeholder="Enter product name"
                            required
                        />

                    </div>


                    {/* Product Price */}

                    <div className="update-form-group">

                        <label>Car Name</label>

                        <input
                            type="text"
                            className="form-control"
                            value={pName}
                            onChange={(e) => setPName(e.target.value)}
                            placeholder="Enter product price"
                            required
                        />

                    </div>


                    {/* Product Description */}

                    <div className="update-form-group">

                        <label>Car Price</label>

                        <input
                        type="number"
                            className="form-control"
                            rows="4"
                            value={pPrice}
                            onChange={(e) => setPPrice(e.target.value)}
                            placeholder="Enter product description"
                            required
                        />

                    </div>


                    {/* Product Image */}

                    <div className="update-form-group">

                        <label>Product Image URL</label>

                        <input
                            type="text"
                            className="form-control"
                            value={pImage}
                            onChange={(e) => setPImage(e.target.value)}
                            placeholder="Enter product image URL"
                            required
                        />

                    </div>




                    {/* Submit Button */}

                    <div className="update-button-section">

                        <button
                            type="submit"
                            className="update-submit-btn"
                        >
                            <i className="fa-solid fa-rotate"></i>
                            Update Product
                        </button>

                    </div>

                </form>

            </div>

        </div>
    );
}