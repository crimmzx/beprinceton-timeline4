import React from "react";
import {useEffect, useState} from 'react';


function BackToTopButton(){
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect (() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                setBackToTopButton(true);
            }
            else{
                setBackToTopButton(false);
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 150,
            behavior: "smooth"
        })
    }
    return <div className="App">

    {backToTopButton && (
        <button style = {{
            position: "fixed",
            borderRadius: "25px",
            bottom: "50px",
            right: "50px",
            height: "50px",
            width: "50px",
            fontSize: "20px"
        }}        onClick = {scrollUp}
        >Top</button>
        )}
        </div>
    }
export default BackToTopButton;