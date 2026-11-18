import { Link, Outlet, useNavigate } from "react-router-dom";
import "./dash.css"
import { useEffect } from "react";

export default function Dash() {
    var navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("adminLogged")) {
            navigate("/")
        }
    }, [])

    var Logout = () => {
        localStorage.removeItem("adminLogged");
        navigate("/")
    }

    return (
        <>


            <div className="row g-0 admin-layout">
                <div className="col-md-2 p-0">
                    <nav className=" navbar  navbar-dark bg-dark sidebar ">
                        <ul className="navbar-nav gap-4 ps-3 ">
                            <li className="nav-item" >
                                <Link className="nav-link" to='/admin/home'>Home</Link>
                            </li>
                            <li className="nav-item" >
                                <Link className="nav-link" to='/admin/viewproducts'>View Products</Link>
                            </li>
                            <li className="nav-item" >
                                <Link className="nav-link" to='/admin/addproducts'>Add Products</Link>
                            </li>
                            <li className="nav-item" >
                                <Link className="nav-link" to='/admin/ordered'>Orders</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin/testdrives">
                                <i className="fa-solid fa-car-side"></i>
                                Test Drive Bookings
                            </Link>
                            </li>

                            <button onClick={Logout}>LogOut</button>
                        </ul>
                    </nav>
                </div>
                <div className="col-md-10  admin-main-content">
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    )

}