import React from "react";

const Card = (props) => {

    const { coverImg, star, title, price, openSpots, location} = props.card;
    const { reviewCount, rating} = props.card.stats

    let badgeText
    if (openSpots === 0) {
        badgeText = 'SOLD OUT'
    } else if (location === 'Online') {
        badgeText = 'ONLINE'
    }

     return (
         <div className='card'>
             {badgeText && <div className='card--badge'>{badgeText}</div>}
             <img src={coverImg} className='card--image' alt=''/>
             <div className='card--stats'>
                 <img src={star} className='card--star' alt='' />
                 <span>{rating}</span>
                 <span>({reviewCount}) • </span>
                 <span>{location}</span>
             </div>
             <p className='card--title'>{title}</p>
             <p className='card--price'><span className='bold'>From ${price}</span> / person</p>
         </div>
     )
}

export default Card;