import PropTypes from "prop-types";
import { ArrowLeftRight,Search,Sun,Moon } from "lucide-react";
import cn from "../utils/cn";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useTheme } from "../context/theme_context";

export default function Header({ collapsed, setCollapsed }) {
    const isDeskTopDeviceOpen = useMediaQuery("(min-width: 768px)");
    const { theme, setTheme } = useTheme();
    function handleToggleSideBar() {
        setCollapsed((prev) => !prev);
    }

    return (
        <header
            className={cn("relative z-10 flex h-[60px] items-center justify-between bg-white px-4 shadow-md transition-colors dark:bg-slate-900")}
        >
            {isDeskTopDeviceOpen && (
                <ArrowLeftRight
                    className={cn("arrowcssattribute")}
                    onClick={handleToggleSideBar}
                />
            )}

            <div className="input">
                <Search
                    size={20}
                    className="text-slate-300"
                />
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search..."
                    className="w-full bg-transparent text-slate-900 outline-0 placeholder:text-slate-300 dark:text-slate-50"
                />
            </div>
            <div className="flex items-center gap-x-3">
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
        </header>
    );
}

Header.propTypes = {
    collapsed: PropTypes.bool,
    setCollapsed: PropTypes.func,
    isDeskTopDeviceOpen: PropTypes.bool,
};
