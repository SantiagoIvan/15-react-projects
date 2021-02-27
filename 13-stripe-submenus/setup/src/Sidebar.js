import React from 'react'
import { FaTimes } from 'react-icons/fa'
import sublinks from './data'
import SidebarLink from './SidebarLink'
import {useAppContext} from './context'

const Sidebar = () => {
  const { showSidebar, closeSidebar} = useAppContext();

  return (
    <div className={`sidebar-wrapper ${showSidebar && 'show'}`}>
      <aside className="sidebar">
        <button type="button" className="close-btn" onClick={closeSidebar}>
          <FaTimes/>
        </button>
        <div className="sidebar-links">
          {sublinks.map( link => {
            return ( <SidebarLink {...link}/> )
          })}
        </div>
      </aside>
    </div>
  )
}

export default Sidebar
