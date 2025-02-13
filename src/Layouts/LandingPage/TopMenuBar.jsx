import React from "react";
import { Link } from "react-router-dom";
import logoLight from "../../assets/logo-light.svg";
import logoDark from "../../assets/logo-dark.svg";
import { Sun,Moon } from "lucide-react";
import { useTheme } from "../../context/theme_context";
import { Menu } from "lucide-react";
const TopMenuBar = () => {
    const {theme,setTheme} = useTheme();
    return (
        <div>
            <nav className="flex justify-between px-4 py-4">
                <Link to="/">
                    <div className="flex">
                        <div className="flex gap-x-3 p-3">
                            <img
                                src={logoLight}
                                alt="Logo Light of Track Progress"
                                className="dark:hidden"
                            />
                            <img
                                src={logoDark}
                                alt="Logo Dark of Track Progress"
                                className="hidden dark:block"
                            />
                            <p className="text-lg font-medium text-slate-900 transition-colors dark:text-slate-50">TRACKPROGRESS</p>
                        </div>
                    </div>
                </Link>
                <div>
                    <button
                        className="btn-ghost size-10"
                        onClick={() => {
                            if (theme === "dark") {
                                setTheme("light");
                            } else {
                                setTheme("dark");
                            }
                        }}
                    >
                        <Sun
                            size={20}
                            className="dark:hidden"
                        />
                        <Moon
                            size={20}
                            className="hidden dark:block"
                        />
                    </button>
                </div>
            </nav>

            
        </div>
    );
};

export default TopMenuBar;
