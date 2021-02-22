import React, { useState, useEffect } from 'react'
import FilterButtons from './FilterButtons';
import data from '../data' //en lugar de hacer el fetch de la api con el useEffect
import MenuItem from './MenuItem';

const Menu = () => {
    const [ menuItems, setMenuItems ] = useState(data);
    const [ categories, setCategories ] = useState([]);
    
    useEffect(() => {
        const arr = ["all"]
        for (let i=0; i<data.length; i++){
            !arr.includes(data[i].category.toLowerCase()) && arr.push(data[i].category); 
        }
        setCategories(arr);
    }, [])

    return (
        <>
            <FilterButtons categories={categories} menuItemsSetter={setMenuItems}/>
            <section className="section-center">
                {menuItems.map( item => {
                    return (
                        <MenuItem key={item.id} {...item}/>
                    )
                })}
                 
                
            </section>
        </>
    )
}

export default Menu
