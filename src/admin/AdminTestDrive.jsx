import { useSelector } from "react-redux";
import "./AdminTestDrive.css";

export default function AdminTestDrive() {

    var testDriveList = useSelector(
        (state) => state.products.testDrive || []
    );

    return (
        <div className="admin-testdrive-page">

            <div className="admin-testdrive-heading">
                <h2>Test Drive Bookings</h2>
                <p>View all customer test drive appointments.</p>
            </div>

            <div className="testdrive-count">
                Total Bookings: <strong>{testDriveList.length}</strong>
            </div>

            {testDriveList.length === 0 ? (

                <div className="no-testdrive">
                    <h4>No Test Drive Bookings Found</h4>
                    <p>Customer bookings will appear here.</p>
                </div>

            ) : (

                <div className="admin-testdrive-list">

                    {testDriveList.map((item, index) => (

                        <div className="admin-testdrive-card" key={item.bookingId || index}>

                            <div className="admin-testdrive-image">
                                {item.image && (
                                    <img src={item.image} alt={item.name} />
                                )}
                            </div>

                            <div className="admin-testdrive-info">

                                <div className="admin-testdrive-top">

                                    <div>
                                        <h4>{item.name}</h4>
                                        <p>{item.brand}</p>
                                    </div>

                                    

                                </div>

                                <hr />

                                <div className="admin-testdrive-details">

                                    

                                    <div>
                                        <span>Customer Username</span>
                                        <strong>{item.username}</strong>
                                    </div>

                                    <div>
                                        <span>Phone Number</span>
                                        <strong>{item.phone}</strong>
                                    </div>

                                    <div>
                                        <span>Booking Date</span>
                                        <strong>{item.date}</strong>
                                    </div>

                                    <div>
                                        <span>Time Slot</span>
                                        <strong>{item.timing}</strong>
                                    </div>

                                    <div className="admin-testdrive-address">
                                        <span>Test Drive Address</span>
                                        <strong>{item.address}</strong>
                                    </div>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            )}

        </div>
    );
}