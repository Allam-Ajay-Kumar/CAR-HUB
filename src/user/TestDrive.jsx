
import { useSelector } from "react-redux";
import "./TestDrive.css";

export default function TestDrive() {

    var username = localStorage.getItem("userLogged");

    var testDriveList = useSelector((state) => state.products.testDrive)


    var myBookings = testDriveList.filter((item) => item.username === username);

    return (
        <div className="testdrive-page">

            <div className="testdrive-heading">
                <h2>My Test Drives</h2>
                <p>View your scheduled test drive appointments.</p>
            </div>

            {myBookings.length === 0 ? (

                <div className="testdrive-empty">
                    <h4>No Test Drives Booked</h4>
                    <p>Your booked test drives will appear here.</p>
                </div>

            ) : (

                <div className="testdrive-list">

                    {myBookings.map((item) => (

                        <div className="testdrive-card" key={item.id}>

                            <div className="testdrive-image">
                                <img src={item.image} alt={item.name} />
                            </div>

                            <div className="testdrive-info">

                                <div className="testdrive-top">
                                    <div>
                                        <h4>{item.name}</h4>
                                        <p>{item.brand}</p>
                                    </div>

                                    <span className="booked-badge">
                                        Booked
                                    </span>
                                </div>

                                <hr />

                                <div className="testdrive-details">

                                    

                                    <div>
                                        <span>Test Drive Date</span>
                                        <strong>{item.date}</strong>
                                    </div>

                                    <div>
                                        <span>Time Slot</span>
                                        <strong>{item.timing}</strong>
                                    </div>

                                    <div>
                                        <span>Phone Number</span>
                                        <strong>{item.phone}</strong>
                                    </div>

                                    <div className="address-details">
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
