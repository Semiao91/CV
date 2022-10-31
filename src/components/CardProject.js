import * as React from 'react';

export default function ActionAreaCard(props) {
  return (
    <div className='mainCard'>
      <span className={props.color}></span>
      <div className='right'>
        <h5>{props.company}</h5>
        <h6 className='charge'>{props.charge}</h6>
        <h6 className='pad'>{props.position}</h6>    
      </div>
    </div>
  );
}
     

