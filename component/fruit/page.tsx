"use client"
import React, { useEffect, useState, useRef } from 'react';
import { createCustomStyle } from "@/lib/customStyle";

type FruitProperty = {
    backgrounds: string[],
    names: string[],
    imgs: string[]
}

const FruitCarousel = ({ backgrounds, names, imgs }: FruitProperty) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [leftMockup, setLeftMockup] = useState(0);
    const [rightCour,setRight] = useState(false)
    const leftEachItem = 100 / (backgrounds.length - 1);
    const count = names.length
    
    const next = ()=>{
        setActiveIndex(activeIndex >= count -1 ? 0 : activeIndex+1);
        setLeftMockup(leftMockup + leftEachItem);
        setRight(false)
    }
    useEffect(() => {
        const refreshInterval = setInterval(() => {
          next();
        }, 3000);
        
        return () => clearInterval(refreshInterval);
      }, [activeIndex, leftMockup]); 
    const prev = ()=>{
        setActiveIndex(activeIndex <= 0 ? count-1 : activeIndex-1);
        setLeftMockup(leftMockup - leftEachItem);
        setRight(true)
    }
   
  
    return (
        <>
            <header>
                <div>LUNDEV</div>
                <nav>
                    <ul>
                        <li>HOME</li>
                        <li>CONTACT</li>
                        <li>INFO</li>
                    </ul>
                </nav>
            </header>

            <div className={`carousel ${rightCour?'right':''}`}>
                <div className="list">
                    {backgrounds.map((background, index) => (
                        <div
                            key={index}
                            className={`item ${index === activeIndex ? 'active' : 'hidden'}`}
                            style={createCustomStyle({ "--background": background })}
                            
                        >
                            <div className="content">{names[index]}</div>
                            <img src={imgs[index]} className="fruit" />
                        </div>
                    ))}
                </div>

                <div className="leaves"></div>
                <div className="mockup" style={createCustomStyle({"--left":`${leftMockup}%`})}></div>
                <div className="shadow"></div>
                <div className="arrow">
                    <button id="prev" onClick={prev}>&lt; </button>
                    <button id="next" onClick={next}> &gt; </button>
                </div>
            </div>
        </>
    );
}

export default FruitCarousel;
