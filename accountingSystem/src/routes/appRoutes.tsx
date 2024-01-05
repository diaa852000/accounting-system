import { DashboardOutlined } from "@mui/icons-material";
import { HomePage } from "../pages";
import { RouteType } from "./config";
import DefaultPage from "../pages/dashboard/DefaultPage";
import ChangeLog from "../pages/changelog/ChangeLog";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import SassPage from "../pages/dashboard/SassPage";
import AnalyticPage from "../pages/dashboard/AnalyticPage";
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import Alex from "../pages/cites/Alex";
import LocationCityOutlinedIcon from '@mui/icons-material/LocationCityOutlined';

const appRoutes: RouteType[] = [
    {
        index: true,
        element: <HomePage/>,
        state: "home"
    },
    {
        path: '/dashboard',
        element: <DashboardLayout/>,
        state: "dashboard",
        sidebarProps: {
            displayText: "Dashboard",
            icon: <DashboardOutlined/>
        },
        child: [
            {
                index: true,
                path: '/dashboard/default',
                element: <DefaultPage/>,
                state: "dashboard.default",
                sidebarProps: {
                    displayText: "Default",
                }
            },
            {
                path: '/dashboard/sass',
                element: <SassPage/>,
                state: "dashboard.sass",
                sidebarProps: {
                    displayText: "Sass",
                }
            },
            {
                path: '/dashboard/analytic',
                element: <AnalyticPage/>,
                state: "dashboard.analytic",
                sidebarProps: {
                    displayText: "Analytic",
                }
            }
        ]
    },
    {
        path: '/changelog',
        element: <ChangeLog/>,
        state: "changelog",
        sidebarProps: {
            displayText: "Changelog",
            icon: <Diversity3OutlinedIcon/>
        }
    },
    {
        path: '/cites',
        element: <Alex/>,
        state: "cites",
        sidebarProps: {
            displayText: "Cites",
            icon: <LocationCityOutlinedIcon/>
        }
    },


];

export default appRoutes