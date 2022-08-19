import React from "react";
import picture from '../images/img_2.png'

const Hero = () => {

    // const date = new Date();
    // const hours = date.getHours() % 12;
    // let timeOfDay
    //
    // if (hours < 12) {
    //     timeOfDay = 'morning'
    // } else if (hours>= 12 && hours < 17) {
    //     timeOfDay = 'afternoon'
    // } else {
    //     timeOfDay = 'night'
    // }

    return (
        <section className='hero'>
            <img src={picture} alt='' className='hero--photo'/>
            <h1 className='hero--header'>Online Experiences</h1>
            <p className='hero--text'>
                Join unique interactive activities led by
                one-of-a-kind hosts—all without leaving
                home.
            </p>
            {/*<h2>Good {timeOfDay}</h2>*/}
        </section>
    )
}

export default Hero;