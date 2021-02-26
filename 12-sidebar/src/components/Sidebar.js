import React from 'react'
import { links, social } from '../data'
import logo from '../logo.svg'
import {FaTimes} from 'react-icons/fa'
import { useGlobalContext } from './context'
const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useGlobalContext();

    return (
        <aside className={`sidebar ${isSidebarOpen && 'show-sidebar'}`}>
            <div className="sidebar-header">
                <img src={logo} className="logo" alt="logo"/>
                <button className="close-btn" onClick={closeSidebar}>
                    <FaTimes/>
                </button>
            </div>
            <ul className="links">
                {links.map( ({id,url,text,icon}) => {
                    return (
                        <li key={id}>
                            <a href={url/* aca en realidad iria un Link hacia la ruta relativa */}>
                                {icon}
                                {text}
                            </a>
                        </li>
                    )
                })}
            </ul>
            <ul className="social-icons">
                {social.map( ({id,url,icon}) => {
                    return (
                        <li key={id}>
                            <a href={url}>{icon}</a>
                        </li>
                    )
                })}
            </ul>
        </aside>
    )
}

export default Sidebar
