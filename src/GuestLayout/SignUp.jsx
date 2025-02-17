import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import logoLight from "../../src/assets/logo-dark.svg";
import { EyeOff,Eye } from "lucide-react";

const SignUp = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const countryRef = useRef();
    const profileImageRef = useRef();

    // State to toggle password visibility
    const [showPassword, setShowPassword] = React.useState(false);

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
                <div className="relative mt-12 w-full max-w-xl sm:mt-10">
                    {" "}
                    {/* Increased max-width */}
                    <div className="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-sky-300 to-transparent"></div>
                    <div className="animated-border mx-5 rounded-lg border border-white/20 shadow-[20px_0_20px_20px] shadow-slate-500/10 dark:border-b-white/50 dark:shadow-white/20 sm:border-t-white/20 sm:shadow-sm lg:rounded-xl lg:shadow-none">
                        <div className="flex flex-col p-8">
                            {" "}
                            {/* Increased padding */}
                            <h3 className="text-xl font-semibold leading-6 tracking-tighter">Sign Up</h3>
                            <p className="mt-2 text-sm font-medium text-white/50">Create an account to get started.</p>
                        </div>
                        <div className="p-8 pt-0">
                            {" "}
                            {/* Increased padding */}
                            <form>
                                {/* Row 1: Full Name and Email */}
                                <div className="flex gap-6">
                                    {" "}
                                    {/* Increased gap */}
                                    {/* Full Name Input */}
                                    <div className="w-1/2">
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
                                    <div className="w-1/2">
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
                                <div className="mt-6 flex gap-6">
                                    {" "}
                                    {/* Increased gap */}
                                    {/* Password Input */}
                                    <div className="w-1/2">
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
                                                className="placeholder:text-muted-foreground/90 text-foreground block w-full border-0 bg-transparent p-0 text-sm file:my-1 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7"
                                            />
                                            {/*Button for visibility toggle  */}
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white focus:outline-none"
                                            >
                                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                            </button>
                                        </div>
                                        <div className="text-sm font-extralight">
                                            At least 8 characters with letters and special symbols(e.g: @ ! $){" "}
                                        </div>
                                    </div>
                                    {/* Country Input */}
                                    <div className="w-1/2">
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
                                <div className="mt-8 flex items-center justify-end gap-x-4">
                                    {" "}
                                    {/* Increased gap */}
                                    <Link
                                        to="/login"
                                        className="hover:bg-accent inline-flex h-12 items-center justify-center rounded-md px-6 py-3 text-sm font-medium transition-all duration-200 hover:ring hover:ring-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                                    >
                                        Already have an account? Log in
                                    </Link>
                                    <button
                                        type="submit"
                                        className="inline-flex h-12 items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-black transition duration-300 hover:bg-black hover:text-white hover:ring hover:ring-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                                    >
                                        Sign Up
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
