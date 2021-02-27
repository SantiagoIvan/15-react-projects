import React, { useState, useContext } from 'react'
import App from './App';
import sublinks from './data'


const AppContext = React.createContext();

const AppCtxProvider = ({children}) => {
    const [ showSubmenu, setShowSubmenu ] = useState(false);
    const [ showSidebar, setShowSidebar ] = useState(false);
    const [ actualSubmenu, setActualSubmenu ] = useState({page:'', links:[]});

    const openSidebar = () => {
        setShowSidebar(true);
    }
    const closeSidebar = () => {
        setShowSidebar(false);
    }
    const openSubmenu = (page, links) => {
        setActualSubmenu({page, links})
    }

    return (
        <AppContext.Provider 
        value={{
            showSubmenu, setShowSubmenu, showSidebar, openSidebar, closeSidebar, actualSubmenu, openSubmenu
        }}>
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => {
    return useContext(AppContext)
}

export {AppContext,AppCtxProvider,useAppContext}