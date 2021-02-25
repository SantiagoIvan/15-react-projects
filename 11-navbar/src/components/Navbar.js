import React, {useState,useRef, useEffect} from 'react'
import { FaBars, FaGoogle, FaTwitch, FaTwitter } from 'react-icons/fa'
import { links, social } from '../data'
/*
La idea es que el navbar sea dinamico, es decir, pueda variar la cantidad esa de links que tiene sin hardcodearla
ademas, que sea responsive, y que cuando haga click en el icono, se despliegue el menu con los links, es por eso
la existencia del showLinks, no se va a mostrar hasta que se clickee
Luego tenemos otro problema: en el archivo css tenemos hardcodeado en valor 10rem en la clase show-container. Yo hasta el 
momento lo habia resuelto co  un conditional rendering y si showLinks era true, mostraba al container con los links
con esa clase. El tema es que si la cantidad de links es dinamica, el tamaño del container tambien debe serlo
Entonces necesito observar tanto la lista de links para saber su cantidad, como al container mismo, para ponerle
ese estilo dinamico
*/
const logo = 'https://raw.githubusercontent.com/john-smilga/react-projects/master/11-navbar/setup/src/logo.svg'
const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);


    useEffect(() => {
        //chequear la altura del link para ajustar la del container
        const linksHeight = linksRef.current.getBoundingClientRect()["height"]
        //info sobre la altura que ocuparian todos los links
        if(showLinks){
            linksContainerRef.current.style.height = `${linksHeight}px`
        }else{
            linksContainerRef.current.style.height = `0px`
        }
        
    }, [showLinks])
    return (
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logo} alt="logo"/>
                    <button className="nav-toggle" onClick={() => setShowLinks(!showLinks)}>
                        <FaBars/>
                    </button>
                </div>
                <div className="links-container" ref={linksContainerRef}>{/*con estos navego dentro de la aplicacion */}
                    <ul className="links" ref={linksRef}>
                    {links.map( link => {
                            return (
                                <li key={link.id}>
                                    <a href={link.url}>{link.text}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <ul className="social-icons">{/*con estos redirijo hacia por ejemplo mi tw o algo asi */}
                    
                        {social.map( soc => {
                            return (
                                <li key={soc.id}>
                                    <a href={soc.url}>{soc.icon}</a>
                                </li>
                            )
                        })}
                    
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
