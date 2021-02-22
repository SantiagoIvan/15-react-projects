import React, { useState, useEffect} from 'react'
import employees from '../data'
import Employee from './Employee';
import {CgArrowLeftR, CgArrowRightR} from 'react-icons/cg'

const Reviews = () => {
    const [indexReview, setIndexReview] = useState(0);
    const target = employees[indexReview];

    const showTarget = (indexTarget) => {
        (indexTarget>=employees.length)? setIndexReview(0) : 
                                    (indexTarget<0)? setIndexReview(employees.length-1) : setIndexReview(indexTarget)
    }
    const getPrev = (ind) => {
        return (ind<=0)? employees.length-1 : ind-1
    }
    const getNext = (ind) => {
        return (ind>=employees.length-1)? 0 : ind+1
    }
//lo que tengo que mostrar es al actual, al anterior y al siguiente, habia entendido mal

// para el autoslide
    useEffect(() => {
        const timer = setTimeout(() => {
           showTarget(indexReview+1)
        }, 4000);
        return () => clearTimeout(timer);
    })
    return (
        <>
            <Employee {...employees[getPrev(indexReview)]} className="lastSlide"/>
            <Employee {...employees[indexReview]} className="activeSlide"/>
            <Employee {...employees[getNext(indexReview)]} className="nextSlide"/>
            <CgArrowLeftR className="icon prev" onClick={() => showTarget(indexReview+1)}/>
            <CgArrowRightR className="icon next" onClick={() => showTarget(indexReview-1)}/>

        </>
        
    )
}

export default Reviews
