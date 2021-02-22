import React from 'react'

const MenuItem = ({title, price, img, desc}) => {
    return (
        <div className="menu-item">
            <div className="photo">
                <img src={img} alt={title}/>
            </div>
            <div className="item-info">
                <header>
                    <h4>{title}</h4>
                    <h4 className="price">{price}</h4>
                </header>
                <p className="item-text">{desc}</p>
            </div>
        </div>
    )
}

export default MenuItem
