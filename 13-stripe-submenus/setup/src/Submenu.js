import React, { useState, useRef, useEffect } from 'react'
import {useAppContext} from './context'

const Submenu = () => {
  const {showSubmenu, actualSubmenu, setActualSubmenu} = useAppContext();
  return (
    <aside className={`submenu ${showSubmenu && 'show'}`}>
      <section>
        <h4>actualSubmenu.page</h4>
        <div className="submenu-center col-3">
          {actualSubmenu.links.map( link => {
            return (
              <a href={link.url}>
                {link.icon}
                {link.label}
              </a>
            )
          })}
        </div>
      </section>
    </aside>
  )
}

export default Submenu
