import React from "react";
import { Link } from "react-router";
import logoLight from "../../src/assets/logo-dark.svg";

const Login = () => {
    return (
        <div>
            <div class="flex min-h-screen flex-col items-center bg-black pt-16 text-white sm:justify-center sm:pt-0">
                <a href="#">
                    <div class="text-foreground mx-auto flex items-center gap-2 text-2xl font-semibold tracking-tighter">
                        <Link to="/">
                            <div className="flex">
                                <div className="flex gap-x-3 p-3">
                                    
                                    <img
                                        src={logoLight}
                                        alt="Logo Dark of Track Progress"
                                        className=""
                                    />
                                    <p className="text-lg font-medium text-slate-900 transition-colors dark:text-slate-50">TRACKPROGRESS</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </a>
                <div class="relative mt-12 w-full max-w-lg sm:mt-10">
                    <div
                        class="relative -mb-px h-px w-full bg-gradient-to-r from-transparent via-sky-300 to-transparent"
                        bis_skin_checked="1"
                    ></div>
                    <div class="mx-5 rounded-lg border border-white/20 border-b-white/20 border-l-white/20 border-r-white/20 shadow-[20px_0_20px_20px] shadow-slate-500/10 dark:border-b-white/50 dark:border-t-white/50 dark:shadow-white/20 sm:border-t-white/20 sm:shadow-sm lg:rounded-xl lg:shadow-none">
                        <div class="flex flex-col p-6">
                            <h3 class="text-xl font-semibold leading-6 tracking-tighter">Login</h3>
                            <p class="mt-1.5 text-sm font-medium text-white/50">Welcome back, enter your credentials to continue.</p>
                        </div>
                        <div class="p-6 pt-0">
                            <form>
                                <div>
                                    <div>
                                        <div class="group relative rounded-lg border px-3 pb-1.5 pt-2.5 duration-200 focus-within:border-sky-200 focus-within:ring focus-within:ring-sky-300/30">
                                            <div class="flex justify-between">
                                                <label class="text-muted-foreground text-xs font-medium text-gray-400 group-focus-within:text-white">
                                                    Username
                                                </label>
                                                <div class="absolute right-3 translate-y-2 text-green-200">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        fill="currentColor"
                                                        class="h-6 w-6"
                                                    >
                                                        <path
                                                            fill-rule="evenodd"
                                                            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                                                            clip-rule="evenodd"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                            <input
                                                type="text"
                                                name="username"
                                                placeholder="Username"
                                                autocomplete="off"
                                                class="file:bg-accent placeholder:text-muted-foreground/90 text-foreground block w-full border-0 bg-transparent p-0 text-sm file:my-1 file:rounded-full file:border-0 file:px-4 file:py-2 file:font-medium focus:outline-none focus:ring-0 sm:leading-7"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-4">
                                    <div>
                                        <div class="group relative rounded-lg border px-3 pb-1.5 pt-2.5 duration-200 focus-within:border-sky-200 focus-within:ring focus-within:ring-sky-300/30">
                                            <div class="flex justify-between">
                                                <label class="text-muted-foreground text-xs font-medium text-gray-400 group-focus-within:text-white">
                                                    Password
                                                </label>
                                            </div>
                                            <div class="flex items-center">
                                                <input
                                                    type="password"
                                                    name="password"
                                                    class="placeholder:text-muted-foreground/90 text-foreground block w-full border-0 bg-transparent p-0 text-sm file:my-1 focus:outline-none focus:ring-0 focus:ring-teal-500 sm:leading-7"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-4 flex items-center justify-between">
                                    <label class="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            name="remember"
                                            class="outline-none focus:outline focus:outline-sky-300"
                                        />
                                        <span class="text-xs">Remember me</span>
                                    </label>
                                    <a
                                        class="text-foreground text-sm font-medium underline"
                                        href="/forgot-password"
                                    >
                                        Forgot password?
                                    </a>
                                </div>
                                <div class="mt-4 flex items-center justify-end gap-x-2">
                                    <a
                                        class="focus-visible:ring-ring hover:bg-accent inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-all duration-200 hover:ring hover:ring-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                                        href="/register"
                                    >
                                        Register
                                    </a>
                                    <button
                                        class="inline-flex h-10 items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-black transition duration-300 hover:bg-black hover:text-white hover:ring hover:ring-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                                        type="submit"
                                    >
                                        Log in
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

export default Login;
