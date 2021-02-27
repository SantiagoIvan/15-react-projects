import React from 'react'

const SidebarLink = ({page, links}) => {
    return (
        <article>
          <h4>{page}</h4>
          <div className="sidebar-sublinks">
            {/*aca irian unos Links con router */}
            {links.map( subl => {
              return (
                <a href={subl.url}>
                  {subl.icon}
                  {subl.label}
                </a>
              )
            })}
          </div>
        </article>
      )
}

export default SidebarLink
