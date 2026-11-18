
import { useSelector } from "react-redux";
import "./Home.css";

export default function Home() {

    // Get data from Redux
    var carList = useSelector((state) => state.products.carList || []);
    var orders = useSelector((state) => state.products.orders || []);
    var testDrive = useSelector((state) => state.products.testDrive || []);
    var cartItem = useSelector((state) => state.products.cartItem || []);

    // Count unique customers
    // var customers = new Set([
    //     ...orders.map((item) => item.username),
    //     ...testDrive.map((item) => item.username),
    //     ...cartItem.map((item) => item.username)
    // ].filter(Boolean));

    const stats = [
        {
            title: "Total Cars",
            value: carList.length,
            icon: "bi-car-front-fill",
            color: "red"
        },
        {
            title: "Total Bookings",
            value: orders.length,
            icon: "bi-calendar-check-fill",
            color: "blue"
        },
        {
            title: "Test Drives",
            value: testDrive.length,
            icon: "bi-car-front",
            color: "orange"
        },
       
        {
            title: "Total Revenue",
            value: "₹48.5L",
            icon: "bi-currency-rupee",
            color: "orange"
        }
    ];

    const cars = [
        {
            id: 1,
            name: "BMW M4",
            price: "₹1.5 Cr",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsy2uGlPr2Jt6v0dMCh2F7dsj5mnbWE9LhFwY4GWyM6g&s=10"
        },
        {
            id: 2,
            name: "Porsche 911",
            price: "₹2 Cr",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIG8Q6gSCi97KOA4eBnqs4Miax-7yckvrbYCIfvbkr5A&s=10"
        },
        {
            id: 3,
            name: "Tesla Model 3",
            price: "₹60 L",
            image: "https://i.guim.co.uk/img/media/96dff775945181b8e1abd36ca1ca8a71e1be4bf1/574_369_2633_1580/master/2633.jpg?width=465&dpr=1&s=none&crop=none"
        }
    ];

    return (
        <div className="carhub-home">

            {/* Header */}
            <div className="home-header">
                <div>
                    <span className="home-label">CARHUB ADMINISTRATION</span>
                    <h2>Dashboard Overview</h2>
                    <p>Welcome back! Manage your dealership from here.</p>
                </div>

                <div className="home-date">
                    <i className="bi bi-calendar3"></i>
                    Admin Panel
                </div>
            </div>

            {/* Statistics */}
            <div className="row g-4 home-stats">

                {stats.map((item, index) => (

                    <div className="col-12 col-sm-6 col-lg-4 col-xl" key={index}>

                        <div className="home-stat-card">

                            <div className="stat-heading">
                                <span>{item.title}</span>

                                <div className={`home-stat-icon ${item.color}`}>
                                    <i className={`bi ${item.icon}`}></i>
                                </div>
                            </div>

                            <h3>{item.value}</h3>

                            <small>
                                <i className="bi bi-graph-up-arrow"></i>
                                &nbsp; Overview
                            </small>

                        </div>

                    </div>

                ))}

            </div>

            {/* Banner */}
            <div className="home-banner">

                <div className="home-banner-content">
                    <span>WELCOME TO CARHUB</span>

                    <h1>
                        Drive Your <br />
                        Business <strong>Forward.</strong>
                    </h1>

                    <p>
                        Manage your inventory, explore your cars,
                        and keep your dealership running smoothly.
                    </p>

                    <div className="home-banner-badge">
                        <i className="bi bi-speedometer2"></i>
                        Your dealership, one dashboard.
                    </div>
                </div>

                <div className="home-banner-image">
                    <img
                        src="https://images.timesdrive.in/photo/msid-151005277,thumbsize-801913/151005277.jpg"
                        alt="Luxury car"
                    />
                </div>

            </div>

            {/* Featured Cars */}
            <div className="home-section">

                <div className="home-section-heading">
                    <div>
                        <h4>Featured Vehicles</h4>
                        <p>A quick look at selected cars in your inventory.</p>
                    </div>
                </div>

                <div className="row g-4">

                    {cars.map((car) => (

                        <div className="col-12 col-md-6 col-xl-4" key={car.id}>

                            <div className="home-car-card">

                                <img
                                    src={car.image}
                                    alt={car.name}
                                    className="home-car-image"
                                />

                                <div className="home-car-details">

                                    <div>
                                        <span className="home-car-label">
                                            PREMIUM COLLECTION
                                        </span>

                                        <h5>{car.name}</h5>
                                        <h6>{car.price}</h6>
                                    </div>

                                    <div className="home-car-icon">
                                        <i className="bi bi-arrow-up-right"></i>
                                    </div>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

            {/* Quick Actions */}
            <div className="home-section">

                <div className="home-section-heading">
                    <div>
                        <h4>Quick Actions</h4>
                        <p>Manage your inventory efficiently.</p>
                    </div>
                </div>

                <div className="row g-3">

                    <div className="col-12 col-md-4">
                        <a href="/admin/addproducts" className="quick-action">
                            <div className="quick-action-icon">
                                <i className="bi bi-plus-circle"></i>
                            </div>

                            <div>
                                <h6>Add New Car</h6>
                                <p>Add a vehicle to your inventory.</p>
                            </div>

                            <i className="bi bi-arrow-right ms-auto"></i>
                        </a>
                    </div>

                    <div className="col-12 col-md-4">
                        <a href="/admin/viewproducts" className="quick-action">
                            <div className="quick-action-icon">
                                <i className="bi bi-car-front"></i>
                            </div>

                            <div>
                                <h6>View Cars</h6>
                                <p>Explore your available vehicles.</p>
                            </div>

                            <i className="bi bi-arrow-right ms-auto"></i>
                        </a>
                    </div>

                    <div className="col-12 col-md-4">
                        <div className="quick-action">
                            <div className="quick-action-icon">
                                <i className="bi bi-shield-check"></i>
                            </div>

                            <div>
                                <h6>Admin Access</h6>
                                <p>Your dashboard is ready to manage.</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            {/* Footer */}
            <footer className="home-footer">
                <span>© 2026 CARHUB Admin Panel</span>
                <span>Drive your business forward.</span>
            </footer>

        </div>
    );
}
