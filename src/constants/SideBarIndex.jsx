import { Home, User, Newspaper, Cable, FileUser, UserRoundCog, Building2,LogOut } from "lucide-react";

export const SideBarLinks = [
    {
        title: "Personal",
        links: [
            {
                label: "DashBoard",
                icon: Home,
                path: "/",
            },
            {
                label: "Profile",
                icon: User,
                path: "/userprofile",
            },
            {
                label: "NewsFeed",
                icon: Newspaper,
                path: "/newsfeed",
            },
            {
                label: "Connections",
                icon: Cable,
                path: "/connections",
            },
        ],
      },
      {
        title: "Business",
        links: [
            {
                label: "DashBoard",
                icon: Home,
                path: "/businessdashboard",
            },
            {
                label: "Employess",
                icon: FileUser,
                path: "/employees",
            },
            {
                label: "Profile",
                icon: UserRoundCog,
                path: "/businessprofile",
            },
        ],
      },
      {
        title: "Settings",
        links: [
            {
                label: "Edit Personal Profile",
                icon: Building2,
                path: "/editpersonalprofile",
            },
            {
                label: "Edit Business Profile",
                icon: Building2,
                path: "/editbusinessprofile",
            },
            {
                label:"LogOut",
                icon:LogOut,
                path:"#",
                isLogOut:true
            }
        ],
    },
];
