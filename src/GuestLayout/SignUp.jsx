import React, { useState } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import logoLight from "../../src/assets/logo-dark.svg";
import { Eye, EyeOff } from "lucide-react";

const SignUp = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const countryRef = useRef();
    const profileImageRef = useRef();

    // State to toggle password visibility
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="flex min-h-screen flex-col items-center bg-black pt-16 font-montserrat text-white sm:justify-center sm:pt-0">
            {/* Logo */}
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

            {/* Card Container */}
            <div className="relative mt-12 w-full max-w-[90%] sm:mt-10 sm:max-w-xl">
                <div className="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-sky-300 to-transparent"></div>
                <div className="animated-border mx-5 rounded-lg border border-white/20 shadow-[20px_0_20px_20px] shadow-slate-500/10 dark:border-b-white/50 dark:shadow-white/20 sm:border-t-white/20 sm:shadow-sm lg:rounded-xl lg:shadow-none">
                    <div className="flex flex-col p-6 sm:p-8">
                        <h3 className="text-xl font-semibold leading-6 tracking-tighter">Sign Up</h3>
                        <p className="mt-2 text-sm font-medium text-white/50">Create an account to get started.</p>
                    </div>
                    <div className="p-6 pt-0 sm:p-8">
                        <form>
                            {/* Row 1: Full Name and Email */}
                            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
                                {/* Full Name Input */}
                                <div className="w-full sm:w-1/2">
                                    <div className="group relative rounded-lg border px-4 pb-2 pt-3 duration-200 focus-within:border-sky-200 focus-within:ring focus-within:ring-sky-300/30">
                                        <div className="flex justify-between">
                                            <label className="text-muted-foreground text-xs font-medium text-gray-400 group-focus-within:text-white">
                                                Full Name
                                            </label>
                                        </div>
                                        <input
                                            ref={nameRef}
                                            type="text"
                                            name="name"
                                            placeholder="Enter your full name"
                                            autoComplete="off"
                                            className="file:bg-accent placeholder:text-muted-foreground/90 text-foreground block w-full border-0 bg-transparent p-0 text-sm file:my-1 file:rounded-full file:border-0 file:px-4 file:py-2 file:font-medium focus:outline-none focus:ring-0 sm:leading-7"
                                        />
                                    </div>
                                </div>

                                {/* Email Input */}
                                <div className="w-full sm:w-1/2">
                                    <div className="group relative rounded-lg border px-4 pb-2 pt-3 duration-200 focus-within:border-sky-200 focus-within:ring focus-within:ring-sky-300/30">
                                        <div className="flex justify-between">
                                            <label className="text-muted-foreground text-xs font-medium text-gray-400 group-focus-within:text-white">
                                                Email Address
                                            </label>
                                        </div>
                                        <input
                                            ref={emailRef}
                                            type="email"
                                            name="email"
                                            placeholder="Enter your email address"
                                            autoComplete="off"
                                            className="file:bg-accent placeholder:text-muted-foreground/90 text-foreground block w-full border-0 bg-transparent p-0 text-sm file:my-1 file:rounded-full file:border-0 file:px-4 file:py-2 file:font-medium focus:outline-none focus:ring-0 sm:leading-7"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Row 2: Password and Country */}
                            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:gap-6">
                                {/* Password Input */}
                                <div className="relative w-full sm:w-1/2">
                                    <div className="group relative rounded-lg border px-4 pb-2 pt-3 duration-200 focus-within:border-sky-200 focus-within:ring focus-within:ring-sky-300/30">
                                        <div className="flex justify-between">
                                            <label className="text-muted-foreground text-xs font-medium text-gray-400 group-focus-within:text-white">
                                                Password
                                            </label>
                                        </div>
                                        <input
                                            ref={passwordRef}
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            placeholder="Enter your password"
                                            autoComplete="off"
                                            className="file:bg-accent placeholder:text-muted-foreground/90 text-foreground block w-full border-0 bg-transparent p-0 text-sm file:my-1 focus:outline-none focus:ring-0 sm:leading-7"
                                        />
                                        {/* Eye Icon for Show/Hide Password */}
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white focus:outline-none"
                                        >
                                            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                                        </button>
                                    </div>
                                    <p className="mt-1 text-xs text-gray-400">
                                        At least 8 characters with letters and special symbols (e.g., @ ! $).
                                    </p>
                                </div>

                                {/* Country Input */}
                                <div className="w-full sm:w-1/2">
                                    <div className="group relative rounded-lg border px-4 pb-2 pt-3 duration-200 focus-within:border-sky-200 focus-within:ring focus-within:ring-sky-300/30">
                                        <div className="flex justify-between">
                                            <label className="text-muted-foreground text-xs font-medium text-gray-400 group-focus-within:text-white">
                                                Country
                                            </label>
                                        </div>
                                        <input
                                            ref={countryRef}
                                            type="text"
                                            name="country"
                                            placeholder="Enter your country"
                                            autoComplete="off"
                                            className="file:bg-accent placeholder:text-muted-foreground/90 text-foreground block w-full border-0 bg-transparent p-0 text-sm file:my-1 file:rounded-full file:border-0 file:px-4 file:py-2 file:font-medium focus:outline-none focus:ring-0 sm:leading-7"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Profile Image Input */}
                            <div className="mt-6">
                                <div className="group relative rounded-lg border px-4 pb-2 pt-3 duration-200 focus-within:border-sky-200 focus-within:ring focus-within:ring-sky-300/30">
                                    <div className="flex justify-between">
                                        <label className="text-muted-foreground text-xs font-medium text-gray-400 group-focus-within:text-white">
                                            Profile Image (Optional)
                                        </label>
                                    </div>
                                    <input
                                        ref={profileImageRef}
                                        type="file"
                                        name="profileImage"
                                        accept="image/jpeg, image/png, image/jpg, image/gif, image/svg+xml"
                                        className="file:bg-accent placeholder:text-muted-foreground/90 text-foreground block w-full border-0 bg-transparent p-0 text-sm file:my-1 file:rounded-full file:border-0 file:px-4 file:py-2 file:font-medium focus:outline-none focus:ring-0 sm:leading-7"
                                    />
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="mt-6 flex flex-col items-center justify-end gap-x-4 sm:flex-row">
                                <Link
                                    to="/login"
                                    className="hover:bg-accent inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 hover:ring hover:ring-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 sm:h-12 sm:px-6 sm:py-3"
                                >
                                    Already have an account? Log in
                                </Link>
                                <button
                                    type="submit"
                                    className="inline-flex h-10 items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-black transition duration-300 hover:bg-black hover:text-white hover:ring hover:ring-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 sm:h-12 sm:px-6 sm:py-3"
                                >
                                    Sign Up
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
