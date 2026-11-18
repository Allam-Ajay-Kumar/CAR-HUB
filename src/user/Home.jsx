import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const cars = useSelector((state) => state.products.carList);
  const navigate = useNavigate();

  const featuredCars = cars?.slice(0, 3) || [];

  const brands = [
    { name: "BMW", icon: "fa-car-side" },
    { name: "Mercedes-Benz", icon: "fa-car" },
    { name: "Audi", icon: "fa-gauge-high" },
    { name: "Porsche", icon: "fa-road" },
  ];

  return (
    <div className="user-home">
      {/* Hero Section */}
      <section className="carhub-hero">
        <div className="hero-content">
          <span className="hero-label">
            <i className="fa-solid fa-star"></i>
            THE ART OF DRIVING
          </span>

          <h1>
            Find Your
            <br />
            <span>Dream Car.</span>
          </h1>

          <p>
            Discover exceptional cars that match your lifestyle.
            Experience luxury, performance, and elegance with CarHub.
          </p>

          <div className="hero-buttons">
            <button
              className="hero-primary-btn"
              onClick={() => navigate("/user/viewproductsu")}
            >
              Explore Collection
              <i className="fa-solid fa-arrow-right"></i>
            </button>

            <button
              className="hero-secondary-btn"
              onClick={() => navigate("/user/wish")}
            >
              <i className="fa-regular fa-heart"></i>
              My Wishlist
            </button>
          </div>

          <div className="hero-stats">
            <div>
              <h3>Premium</h3>
              <span>Car Collection</span>
            </div>

            <div className="hero-stat-divider"></div>

            <div>
              <h3>Trusted</h3>
              <span>Buying Experience</span>
            </div>

            <div className="hero-stat-divider"></div>

            <div>
              <h3>Exclusive</h3>
              <span>Automotive Deals</span>
            </div>
          </div>
        </div>

        <div className="hero-image-section">
          <div className="hero-image-glow"></div>

          <img
            className="hero-car-image"
            src="https://assets.odishabytes.com/wp-content/uploads/2020/10/highest-selling-luxury-cars-in-india1.jpg"
            alt="Luxury sports car"
          />


        </div>

        <div className="hero-background-text">CARHUB</div>
      </section>

      {/* Benefits Section */}
      <section className="home-benefits">
        <div className="benefit-item">
          <div className="benefit-icon">
            <i className="fa-solid fa-car"></i>
          </div>
          <div>
            <h4>Premium Collection</h4>
            <p>Discover exceptional automobiles</p>
          </div>
        </div>

        <div className="benefit-item">
          <div className="benefit-icon">
            <i className="fa-solid fa-shield-halved"></i>
          </div>
          <div>
            <h4>Trusted Experience</h4>
            <p>Shop with greater confidence</p>
          </div>
        </div>

        <div className="benefit-item">
          <div className="benefit-icon">
            <i className="fa-solid fa-heart"></i>
          </div>
          <div>
            <h4>Your Favorites</h4>
            <p>Save cars you love</p>
          </div>
        </div>

        <div className="benefit-item">
          <div className="benefit-icon">
            <i className="fa-solid fa-clock-rotate-left"></i>
          </div>
          <div>
            <h4>Order Tracking</h4>
            <p>Keep track of your orders</p>
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="featured-section">
        <div className="featured-heading">
          <div>
            <span className="section-eyebrow">HANDPICKED FOR YOU</span>
            <h2>Featured <span>Cars</span></h2>
            <p>Explore some of the standout cars in our collection.</p>
          </div>

          <button
            className="view-all-btn"
            onClick={() => navigate("/user/viewproductsu")}
          >
            View All Cars
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>

        <div className="featured-grid">
          {featuredCars.length > 0 ? (
            featuredCars.map((car) => (
              <article className="featured-card" key={car.id}>
                <div className="featured-image-wrapper">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="featured-car-image"
                    loading="lazy"
                  />

                  <span className="featured-tag">FEATURED</span>
                </div>

                <div className="featured-card-body">
                  <span className="featured-brand">
                    {car.brand || "Premium Automobile"}
                  </span>

                  <h3>{car.name}</h3>

                  <div className="featured-specs">
                    <span>
                      <i className="fa-solid fa-gas-pump"></i>
                      {car.fuel || "Fuel"}
                    </span>

                    <span>
                      <i className="fa-solid fa-gears"></i>
                      {car.transmission || "Transmission"}
                    </span>
                  </div>

                  <div className="featured-card-bottom">
                    <div>
                      <small>Starting from</small>
                      <h4>
                        <i className="fa-solid fa-indian-rupee-sign"></i>{" "}
                        {Number(car.price).toLocaleString("en-IN")}
                      </h4>
                    </div>

                    <button
                      className="featured-details-btn"
                      aria-label={`View details for ${car.name}`}
                      onClick={() => navigate(`/user/details/${car.id}`)}
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </button>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="featured-empty">
              <i className="fa-solid fa-car"></i>
              <h3>No cars available yet</h3>
              <p>Check back soon to explore our collection.</p>
            </div>
          )}
        </div>
      </section>

   

      {/* Call to Action */}
      <section className="home-cta">
        <div className="cta-decoration">CH</div>

        <div className="cta-content">
          <span className="section-eyebrow">YOUR JOURNEY STARTS HERE</span>
          <h2>
            More Than a Car.
            <br />
            <span>It's Your Statement.</span>
          </h2>
          <p>
            Find a car that reflects your personality and makes
            every journey memorable.
          </p>

          <button
            className="cta-button"
            onClick={() => navigate("/user/viewproductsu")}
          >
            Explore Our Cars
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <div className="footer-brand">
          <i className="fa-solid fa-car-side"></i>
          CAR<span>HUB</span>
        </div>

        <p>Your destination for exceptional automobiles.</p>

        <span className="footer-copyright">
          © {new Date().getFullYear()} CarHub. All rights reserved.
        </span>
      </footer>
    </div>
  );
}