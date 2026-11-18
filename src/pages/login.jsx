import { useRef } from "react"
import { useNavigate } from "react-router-dom";
import "./login.css"
export default function Login() {
  var username = useRef();
  var password = useRef();
  var navigate = useNavigate();

  

  var Log = (e) => {
    e.preventDefault();
    console.log(username.current.value);
    console.log(password.current.value);
    var reqadmin = username.current.value + "admin";
    var requser = username.current.value.slice(0, 3) + "123"
    if (password.current.value == reqadmin) {
      localStorage.setItem("adminLogged", username.current.value)
      navigate("/admin/home")
    }
    else if (password.current.value == requser) {
      localStorage.setItem("userLogged", username.current.value)
      navigate("/user/homeu")
    }
    else
      alert("Password is incorrect")

  }

  return (
    <>

      <div className="login-page">
        <div className="container-fluid">
          <div className="row min-vh-100">

            {/* Left Side - Car Showroom Content */}
            <div className="col-lg-7 login-hero d-flex align-items-center">
              <div className="hero-content">
                <h1>
                  The Road to Your
                  <br />
                  <span>Dream Car</span>
                  <br />
                  Starts Here.
                </h1>

                <p>
                  Explore exceptional cars, discover legendary
                  brands, and find the perfect ride that matches
                  your lifestyle.
                </p>

                <h5>Your journey. Your choice. Your drive.</h5>
              </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="col-lg-5 login-form-section d-flex align-items-center justify-content-center">
              <div className="login-card">

                <div className="text-center mb-4">
                  <h2 className="brand-title">
                    CAR<span>HUB</span>
                  </h2>

                  <h3>Welcome Back!</h3>

                  <p className="text-muted">
                    Sign in to continue your journey.
                  </p>
                </div>

                <form action="" onSubmit={Log}>
                  <div className="mb-3">
                    <label
                      htmlFor="email"
                      className="form-label"
                    >
                      Username
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      placeholder="Enter your email"
                      required
                      ref={username}
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="password"
                      className="form-label"
                    >
                      Password
                    </label>

                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Enter your password"
                      required
                      ref={password}
                    />
                  </div>

                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="remember"
                      />

                      <label
                        className="form-check-label"
                        htmlFor="remember"
                      >
                        Remember me
                      </label>
                    </div>

                    <a href="#forgot" className="forgot-link">
                      Forgot password?
                    </a>
                  </div>

                  <button
                    type="submit"
                    className="btn login-btn w-100"
                  >
                    Sign In
                  </button>
                </form>

                <div className="divider">
                  <span>OR</span>
                </div>

                <p className="text-center signup-text">
                  Don't have an account?{" "}
                  <a href="#signup">Create Account</a>
                </p>

                <p className="text-center footer-text">
                  © 2026 CARHUB. All rights reserved.
                </p>

              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}