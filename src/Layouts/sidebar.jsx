import { forwardRef } from "react";
import logoLight from "../assets/logo-light.svg";
import logoDark from "../assets/logo-dark.svg";
import cn from "../utils/cn";
import { SideBarLinks } from "../constants/SideBarIndex";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { LogOut } from "lucide-react";
const SideBar = forwardRef(({ collapsed, isDesktopDeviceOpen,handlelogout }, ref) => {
    return (
        <>
            <aside
                ref={ref}
                className={cn(
                    "fixed z-[100] flex h-full w-[240px] flex-col overflow-x-hidden border-r border-slate-300 bg-white [transition:_width_300ms_cubic-bezier(0.4,_0,_0.2,_1),_left_300ms_cubic-bezier(0.4,_0,_0.2,_1),_background-color_150ms_cubic-bezier(0.4,_0,_0.2,_1),_border_150ms_cubic-bezier(0.4,_0,_0.2,_1)] dark:border-slate-700 dark:bg-slate-950",
                    collapsed ? "w-[70px] md:items-center" : "w-[240px]",
                    // collapsed ? "max-md:-left-full" : "max-md:left-0",
                )}
            >
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
                    {!collapsed && <p className="text-lg font-medium text-slate-900 transition-colors dark:text-slate-50">TRACKPROGRESS</p>}
                </div>

                <div className="flex w-full flex-col gap-y-4 overflow-y-auto overflow-x-hidden p-3 [scrollbar-width:_thin]">
                    {SideBarLinks.map((navbarLink) => (
                        <nav
                            key={navbarLink.title}
                            className={cn("sidebar-group", collapsed && "md:items-center")}
                        >
                            <p className={cn("sidebar-group-title", collapsed && "md:w-[45px]")}>{navbarLink.title}</p>
                            {navbarLink.links.map((link) => (
                                <NavLink
                                    key={link.label}
                                    to={link.path}
                                    className={cn("sidebar-item", collapsed && "md:w-[45px]")}
                                    onClick={link.isLogOut ? handlelogout : undefined}
                                >
                                    <link.icon
                                        size={22}
                                        className="flex-shrink-0"
                                    />
                                    {!collapsed && <p>{link.label}</p>}
                                </NavLink>
                            ))}
                        </nav>
                    ))}
                </div>
                
            </aside>
        </>
    );
});

export default SideBar;
SideBar.displayName = "SideBar";
SideBar.propTypes = {
    collapsed: PropTypes.bool,
};
