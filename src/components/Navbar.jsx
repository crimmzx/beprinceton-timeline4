import React, {useState, useEffect} from 'react'


function Navbar(){
    const [sticky, setSticky] = useState(false);

    useEffect(()=>{
        const handleScroll = () =>{
            setSticky(window.scrollY > 0)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    })
    return(
        <nav className={`${sticky ? 'sticky' : ""}`}>
            <div className = "nav-inner">
                <span className="logo">
                </span>
                <div className = "links">
                    <a href = "#September">September</a> 
                    <a href = "#October">October</a> 
                    <a href = "#November">November</a>
                    <a href = "#December">December</a>
                    <a href = "#Summary Statistics">Summary Statistics</a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
