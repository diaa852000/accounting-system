import { List } from "@mui/material"
import appRoutes from "../../routes/appRoutes"
import SidebarItem, { SidebarItemCollaps } from "./SidebarItem"

function Sidebar() {
  return (
    <div className="sidebar border-r">
      <List disablePadding>
      {appRoutes.map((route, index) => (
          route.sidebarProps ? (
            route.child ? ( <SidebarItemCollaps item={route} key={index}/>
            ) : (
              <SidebarItem item={route} key={index}/>
            )
          ) : null
        ))}
      </List>
    </div>
  )
}

export default Sidebar


