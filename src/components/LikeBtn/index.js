import React, { useState } from 'react'
import './like.css'

export const LikeBtn = (props) => {
    const [isLiked, setIsLiked] = useState(false);
    const itemID = props.produtoID;

    const toggleWish = async()  => {
        const wishStatus = !isLiked
        setIsLiked(wishStatus)
        console.log(wishStatus ? 'Entrou o produto': 'Saiu o Produto', itemID)
        
    }

  return (
    <button className='likebtn' onClick={toggleWish}> 
    {isLiked ?
        <img src='images/icon/like_full.svg' alt=''/> :
        <img src='images/icon/like.svg' alt=''/>
    }
    <p className='textbtn'>
      {props.children}
    </p>
    
    </button>

  )
}