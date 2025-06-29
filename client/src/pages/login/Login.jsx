import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { FaRegEyeSlash } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import toast from "react-hot-toast";
import { TiTick } from "react-icons/ti";
import logo from '../../assets/images/logo.png';
import axios from "axios";
import baseUrl from "../../service/baseUrl";

const Login = () => {
    const navigate = useNavigate();
    const [eye, setEye] = useState(false);
    const [loading, setLoading] = useState(false)

    const togglePassword = () => setEye(!eye);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
      
        const form = e.target;
        const email = form.email.value.trim();
        const password = form.password.value;
      
        try {
          const res = await axios.post(`${baseUrl}/api/auth/login`, { email, password },{withCredentials:true}); 
      
          if (res.data?._id) {
            toast.success("Login successful");
            localStorage.setItem("UID", JSON.stringify(res.data?._id));
            navigate('/');
          } 
        } catch (error) {
          toast.error(error.response.data.error);
        } finally {
          setLoading(false);
        }
      };
      

    return (
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div>
                    <div className="flex justify-center lg:justify-start mb-6">
                        <img className="w-1/2 lg:w-1/3" src={logo} alt="Logo" />
                    </div>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center lg:text-left mb-4">
                        Login your MeetNest account
                    </h1>
                    <ul className="space-y-4 text-lg">
                        <li className="flex items-start gap-2">
                            <TiTick className="text-2xl text-[#68D2E8]" />
                            Plan smart, gather seamlessly – MeetNest makes every event effortless.
                        </li>
                        <li className="flex items-start gap-2">
                            <TiTick className="text-2xl text-[#68D2E8]" />
                            From guest lists to grand moments, MeetNest brings your events to life.
                        </li>
                        <li className="flex items-start gap-2">
                            <TiTick className="text-2xl text-[#68D2E8]" />
                            MeetNest — where ideas connect, and unforgettable experiences begin.
                        </li>
                    </ul>
                </div>

                <div className="card w-full shadow-2xl bg-base-100 p-6">
                    <h1 className="text-center text-3xl font-bold mb-6">Login</h1>
                    <form onSubmit={handleLogin} className="space-y-4">
                    
                        <div>
                            <label className="label-text font-bold">Email</label>
                            <input name="email" type="email" placeholder="Enter email" className="input input-bordered w-full" required />
                        </div>
                        <div>
                            <label className="label-text font-bold">Password</label>
                            <div className="relative">
                                <input
                                    required
                                    name="password"
                                    type={eye ? "text" : "password"}
                                    className="input input-bordered w-full pr-10"
                                    placeholder="Password"
                                />
                                <span
                                    onClick={togglePassword}
                                    className="absolute top-3 right-3 text-xl cursor-pointer"
                                >
                                    {eye ? <MdOutlineRemoveRedEye /> : <FaRegEyeSlash />}
                                </span>
                            </div>
                        </div>
                        <p className="text-sm">
                            Don't Have an Account?{" "}
                            <Link to="/signup" className="text-blue-500 underline">Register</Link>
                        </p>

                        <div className="mt-6">
                            <button
                                type="submit"
                                className="btn bg-[#FF6D60] text-white w-full"
                                disabled={loading}
                            >
                                {loading ? (
                                    <span className="loading loading-spinner loading-sm text-white"></span>
                                ) : (
                                    "Login"
                                )}
                            </button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
