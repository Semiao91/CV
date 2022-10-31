import React, { useState } from 'react';

export default function Accordion(props){

    const [text, setText] = useState(false);
    const handleClick = () => setText(true);

   return (
   <div className='Accordion' onClick={handleClick}>{text ? props.container : <i class="fa-solid fa-circle-plus"></i>}</div>)
}