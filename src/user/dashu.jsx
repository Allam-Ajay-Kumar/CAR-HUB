import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./dashu.css"



export default function Dashu() {
    var navigate = useNavigate();
    var cartitem = useSelector((state) => state.products.selectedProduct);
    var username = localStorage.getItem("userLogged");

    var Logout = () => {
        localStorage.removeItem("userLogged");
        navigate("/")
    }
    useEffect(() => {
        if (!localStorage.getItem("userLogged")) {
            navigate("/")
        }
    }, [])

    return (
        <>


            <div className="row m-0">
                <div className="col-md-2  p-0">
                    <nav className=" navbar  navbar-dark bg-dark sidebar  ">
                        <div className="text-center text-black mb-1">
                            <i className="fa-solid fa-circle-user fs-1"></i>
                            <h5 className="mt-4">{username}</h5>
                            <small>Welcome Back!</small>
                        </div>
                        <ul className="navbar-nav gap-4 ps-3 ">
                            <li className="nav-item" >
                                <Link className="nav-link" to='/user/homeu'>Home</Link>
                            </li>
                            <li className="nav-item" >
                                <Link className="nav-link" to='/user/viewproductsu'>View Products</Link>
                            </li>

                            <li className="nav-item" >
                                <Link className="nav-link" to='/user/cart'><i className="fa-solid fa-cart-shopping"></i>Cart<span className="badge bg-danger">{cartitem && cartitem.length}</span></Link>
                            </li>
                            <li className="nav-item" >
                                <Link className="nav-link" to='/user/orders'><i className="fa-solid fa-clipboard-list"></i> Orders</Link>
                            </li>
                            <li className="nav-item" >
                                <Link className="nav-link" to='/user/wish'><i className="fa-regular fa-heart" ></i>Wishlist</Link>
                            </li>
                            <li className="nav-item" >
                                <Link className="nav-link" to='/user/testdrive'><i className="fa-solid fa-road"></i>TestDrive</Link>
                            </li>
                            <button onClick={Logout}>LogOut</button>
                        </ul>
                    </nav>
                </div>
                <div className="col-md-10 p-1">
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    )

}