import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { FaRegEyeSlash } from "react-icons/fa";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import toast from "react-hot-toast";
import { TiTick } from "react-icons/ti";
import logo from '../../assets/images/logo.png';
import axios from "axios";
import baseUrl from "../../service/baseUrl";

const image_hosting_key = "2b4648ad07a1d5d2b245f3b3d48cf849";

const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Signup = () => {
    const navigate = useNavigate();
    const [eye, setEye] = useState(false);
    const [loading, setLoading] = useState(false)

    const togglePassword = () => setEye(!eye);

    const handleRegister = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const file = form.fileInput.files[0];
        const formData = new FormData();
        formData.append('image', file);

        try {
            setLoading(true)
            const res = await axios.post(image_hosting_api, formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            const imgURL = res.data.data.display_url;

            if (res.data.success) {
                const userData = {
                    name,
                    email,
                    photoUrl: imgURL,
                    password
                };

                const signup = await axios.post(`${baseUrl}/api/auth/signup`, userData,{withCredentials:true});
                localStorage.setItem("UID", JSON.stringify(signup.data));
                toast.success('Account created successfully!');
                window.location.href = '/'
                setLoading(false)

            }
        } catch (error) {
            toast.error('Something went wrong');
            console.error(error);
            setLoading(setLoading)
        }
    };

    return (
        <div className="max-w-7xl mx-auto px-3 md:px-8 py-3 md:py-12">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div>
                    <div className="flex justify-center lg:justify-start mb-6">
                        <img className="w-1/2 lg:w-1/3" src={logo} alt="Logo" />
                    </div>
                    <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-center lg:text-left mb-4">
                        Create your MeetNest account
                    </h1>
                    <ul className="space-y-4 text-sm md:text-lg">
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
                    <h1 className="text-center text-3xl font-bold mb-6">Signup</h1>
                    <form onSubmit={handleRegister} className="space-y-4">
                        <div>
                            <label className="label-text font-bold">Name</label>
                            <input name="name" type="text" placeholder="Enter name" className="input input-bordered w-full" required />
                        </div>

                        <div>
                            <label className="label-text font-bold">Email</label>
                            <input name="email" type="email" placeholder="Enter email" className="input input-bordered w-full" required />
                        </div>

                        <div>
                            <label className="label-text font-bold">Upload Avatar*</label>
                            <input required type="file" name="fileInput" className="file-input file-input-bordered w-full" />
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
                            Already have an account?{" "}
                            <Link to="/login" className="text-blue-500 underline">Login</Link>
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
                                    "Create Account"
                                )}
                            </button>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
