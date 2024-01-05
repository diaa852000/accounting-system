import { useEffect, useState } from "react"
import { RouteType } from '../../routes/config'
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { Link } from "react-router-dom"
import { ExpandLessOutlined, ExpandMoreOutlined } from "@mui/icons-material"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"


type SidebarItem = {
    item: RouteType
}

const SidebarItem = ({ item }: SidebarItem) => {
    const { appState } = useSelector((state: RootState) => state.appState);
    
    return (
        item.sidebarProps && item.path ? (
            <ListItemButton
                component={Link}
                to={item.path}
                sx={{
                    "&: hover": {
                        backgroundColor: "#f6f6f8",
                    },
                    backgroundColor: appState === item.state ? "#f6f6f8" : "unset",
                    paddingY: "12px",
                    paddingX: "24px",
                    color: "#1e1e1e",
                    transition: "all 200ms ease-in-out",
                }}
            >

                <ListItemIcon
                    sx={{
                        color: "#5e5e5e"
                    }}
                >
                    {item.sidebarProps.icon && item.sidebarProps.icon}
                </ListItemIcon>

                {item.sidebarProps.displayText}

            </ListItemButton>
        ) : null
    )
}



type collapseItem = {
    item: RouteType
}

export const SidebarItemCollaps = ({ item }: collapseItem) => {
    const [isOpen, setIsOpen] = useState(false);
    const {appState} = useSelector((state: RootState) => state.appState)

    useEffect(() => {
        if(appState.includes(item.state)){
            setIsOpen(true)
        }
    },[appState, item])


    const handleOpenItems = () => {
        setIsOpen(prev => !prev)
    }
    return (
        item.sidebarProps ? (
            <>
                <ListItemButton
                    onClick={handleOpenItems}
                    sx={{
                        "&: hover": {
                            backgroundColor: "#f6f6f8",
                        },
                        paddingY: "8px",
                        paddingX: "24px",
                        color: "#1e1e1e",
                        transition: "all 200ms ease-in-out",
                    }}
                >
                    <ListItemIcon
                        sx={{
                            color: "#5e5e5e"
                        }}
                    >
                        {item.sidebarProps.icon && item.sidebarProps.icon}
                    </ListItemIcon>
                    <ListItemText
                        disableTypography
                        primary={
                            <Typography>
                                {item.sidebarProps.displayText}
                            </Typography>
                        }
                    />
                    {isOpen ? <ExpandLessOutlined /> : <ExpandMoreOutlined />}
                </ListItemButton>
                <Collapse in={isOpen} timeout={'auto'}>
                    <List disablePadding>
                        {item.child?.map((route, index) => (
                            route.sidebarProps ? (
                                route.child ?
                                    (
                                        <SidebarItemCollaps item={route} key={index} />
                                    ) :
                                    (
                                        <SidebarItem item={route} key={index} />
                                    )
                            ) : null
                        ))}
                    </List>
                </Collapse>
            </>
        ) : null
    )
}



export default SidebarItem