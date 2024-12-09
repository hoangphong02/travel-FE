import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

const ScrollToTop = () => {
    const [backToTopButton, setBackToTopButton]= useState(false)
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY > 100){
                setBackToTopButton(true)
            }
            else{
                setBackToTopButton(false)
            }
        })
    },[])
    const scrollUp =()=>{
        window.scroll({
            top:0,
            behavior: "smooth",
        })
    }
  return (
    <div>
        {backToTopButton && (
            <Button  onClick={scrollUp} > ^ </Button>
        )
           
        }
    </div>
  )
}

export default ScrollToTop