import React, { useEffect, useState } from "react";
const useAnimated = ({ setIsLoaded }) => {
    useEffect(() => {
        const reveal = () => {
            let reveals = document.querySelectorAll('.reveal');
            for (let i = 0; i < reveals.length; i++) {
                let windowHeight = window.innerHeight;
                let revealTop = reveals[i].getBoundingClientRect().top;
                let revealPoint = 150;
                if (revealTop < windowHeight - revealPoint) {
                    reveals[i].classList.add('scroll__active')
                } else {
                    reveals[i].classList.remove('scroll__active')
                }
            }
        }
        window.addEventListener('scroll', reveal)
        return () => { window.removeEventListener('scroll', reveal) }
    })
    useEffect(() => {
        const revealOp = () => {
            let revealsOp = document.querySelector('.revealOp');
            let windowHeight = window.innerHeight;
            let windowWidth = window.innerWidth;
            let revealTop = revealsOp.getBoundingClientRect().top;
            let revealPoint = 0;
            if (windowWidth < 450) {
                revealPoint = 100;
            } else if (windowWidth < 1050) {
                revealPoint = -100
            }
            if (revealTop + windowHeight < revealPoint) {
                revealsOp.classList.add('opacity__active')
            } else {
                revealsOp.classList.remove('opacity__active')
            }
        }
        window.addEventListener('scroll', revealOp)
        return () => window.removeEventListener('scroll', revealOp)
    })
    useEffect(() => {
        const anotherOne = (event) => {
            setIsLoaded(true)
        }
        window.addEventListener('load', anotherOne);
        return () => window.removeEventListener('load', anotherOne)
    })
}

export default useAnimated