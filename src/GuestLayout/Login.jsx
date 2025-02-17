import React, { useState } from "react";
import { useRef } from "react";
import { useUserInfoContext } from "../context/user_info_context";
import { Link } from "react-router-dom"; // Updated import for React Router v6+
import logoLight from "../../src/assets/logo-dark.svg";
import axiosClient from "../axios_client";
import { SquareUser } from "lucide-react";

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    // Using User Info Context to set TOKEN and USER
    const { setUser, setToken } = useUserInfoContext();

    // Defining errors by STATE
    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    const handleLoginCredential = (event) => {
        event.preventDefault();
        const emailValue = emailRef.current.value;
        const passwordValue = passwordRef.current.value;

        // Reset errors
        setErrors({ email: "", password: "" });

        // Validate email
        if (!emailValue) {
            setErrors((prev) => ({
                ...prev,
                email: "Email is required.",
            }));
            emailRef.current.focus();
            return;
        }

        // Validate password
        if (!passwordValue) {
            setErrors((prev) => ({
                ...prev,
                password: "Password is required.",
            }));
            passwordRef.current.focus();
            return;
        }

        // Prepare login credentials
        const loginCredentialData = {
            email: emailValue,
            password: passwordValue,
        };

        // Send login request
        axiosClient
            .post("/login", loginCredentialData)
            .then((response) => {
                console.log(response.data);
                setToken(response.data.token);
                setUser(response.data.user);
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response);
                }
            });
    };

    return (
        <div>
            <style>
                {`
                    /* Define the keyframe animation */
                    @keyframes borderGlow {
                        0% { border-color: #ffffff; }
                        50% { border-color: #00bfff; }
                        100% { border-color: #ffffff; }
                    }
                    /* Apply the animation to input fields */
                    .animated-border {
                        animation: borderGlow 2s infinite ease-in-out;
                    }
                `}
            </style>
            <div className="flex min-h-screen flex-col items-center bg-black pt-16 font-montserrat text-white sm:justify-center sm:pt-0">
                <div className="text-foreground mx-auto flex items-center gap-2 text-2xl font-semibold tracking-tighter">
                    <Link to="/">
                        <div className="flex">
                            <div className="flex gap-x-3 p-3">
                                <img
                                    src={logoLight}
                                    alt="Logo Dark of Track Progress"
                                    className=""
                                />
                                <p className="text-lg font-medium text-slate-50 transition-colors">TRACKPROGRESS</p>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="relative mt-12 w-full max-w-lg sm:mt-10">
                    <div className="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-sky-300 to-transparent"></div>
                    <div className="animated-border mx-5 rounded-lg border border-white/20 shadow-[20px_0_20px_20px] shadow-slate-500/10 dark:border-b-white/50 dark:shadow-white/20 sm:border-t-white/20 sm:shadow-sm lg:rounded-xl lg:shadow-none">
                        <div className="flex flex-col p-6">
                            <h3 className="text-xl font-semibold leading-6 tracking-tighter">Login</h3>
                            <p className="mt-1.5 text-sm font-medium text-white/50">Welcome back, enter your credentials to continue.</p>
                        </div>
                        <div className="p-6 pt-0">
                            <div>
                                {/* Email Input */}
                                <div>
                                    <div>
                                        <div className="group relative rounded-lg border px-3 pb-1.5 pt-2.5 duration-200 focus-within:border-sky-200 focus-within:ring focus-within:ring-sky-300/30">
                                            <div className="flex justify-between">
                                                <label className="text-muted-foreground text-xs font-medium text-gray-400 group-focus-within:text-white">
                                                    Username
                                                </label>
                                            </div>
                                            <input
                                                ref={emailRef}
                                                type="text"
                                                name="username"
                                                placeholder="Username"
                                                autoComplete="off"
                                                className={`file:bg-accent placeholder:text-muted-foreground/90 text-foreground block w-full border-0 bg-transparent p-0 text-sm file:my-1 file:rounded-full file:border-0 file:px-4 file:py-2 file:font-medium focus:outline-none focus:ring-0 sm:leading-7 ${
                                                    errors.email ? "border-red-500 focus:border-red-500" : ""
                                                }`}
                                            />
                                        </div>
                                        {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
                                    </div>
                                </div>

                                {/* Password Input */}
                                <div className="mt-4">
                                    <div>
                                        <div className="group relative rounded-lg border px-3 pb-1.5 pt-2.5 duration-200 focus-within:border-sky-200 focus-within:ring focus-within:ring-sky-300/30">
                                            <div className="flex justify-between">
                                                <label className="text-muted-foreground text-xs font-medium text-gray-400 group-focus-within:text-white">
                                                    Password
                                                </label>
                                            </div>
                                            <div className="flex items-center">
                                                <input
                                                    ref={passwordRef}
                                                    type="password"
                                                    name="password"
                                                    className={`placeholder:text-muted-foreground/90 text-foreground block w-full border-0 bg-transparent p-0 text-sm file:my-1 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7 ${
                                                        errors.password ? "border-red-500 focus:border-red-500" : ""
                                                    }`}
                                                />
                                            </div>
                                        </div>
                                        {errors.password && <p className="mt-1 text-sm text-red-500">{errors.password}</p>}
                                    </div>
                                </div>

                                {/* Buttons */}
                                <div className="mt-4 flex items-center justify-end gap-x-2">
                                    <Link to={"/signup"}
                                        className="hover:bg-accent inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 hover:ring hover:ring-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                                        href="/register"
                                    >
                                        Register
                                    </Link>
                                    <button
                                        type="submit"
                                        className="inline-flex h-10 items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-black transition duration-300 hover:bg-black hover:text-white hover:ring hover:ring-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                                        onClick={handleLoginCredential}
                                    >
                                        Log in
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
