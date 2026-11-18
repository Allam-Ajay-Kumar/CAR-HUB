import { useSelector } from "react-redux";
import "./AdminOrders.css";

export default function AdminOrders() {

    var orders = useSelector(
        (state) => state.products.orders || []
    );

    return (
        <div className="admin-orders-page">

            <div className="admin-orders-heading">
                <h2>Customer Orders</h2>
                <p>View all customer orders and their details.</p>
            </div>

            <div className="orders-count">
                Total Orders: <strong>{orders.length}</strong>
            </div>

            {orders.length === 0 ? (

                <div className="no-orders">
                    <h4>No Orders Found</h4>
                    <p>Customer orders will appear here.</p>
                </div>

            ) : (

                <div className="orders-table-container">

                    <table className="admin-orders-table">

                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Car</th>
                                <th>Customer</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                
                            </tr>
                        </thead>

                        <tbody>

                            {orders.map((item, index) => (

                                <tr key={item.orderId || item.id || index}>

                                    <td>{index + 1}</td>

                                    <td>
                                        <div className="admin-order-car">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                            />
                                            <div>
                                                <strong>{item.name}</strong>
                                                <span>{item.brand}</span>
                                            </div>
                                        </div>
                                    </td>

                                    <td>{item.username}</td>

                                    <td>
                                        ₹{Number(item.price).toLocaleString("en-IN")}
                                    </td>

                                    <td>{item.quantity || 1}</td>

                                    <td>
                                        ₹{(
                                            Number(item.price) *
                                            Number(item.quantity || 1)
                                        ).toLocaleString("en-IN")}
                                    </td>

                                    

                                </tr>

                            ))}

                        </tbody>

                    </table>

                </div>

            )}

        </div>
    );
}