import * as React from 'react';

export default function ImageAvatars(props) {
    return (
        <div>
            <a className='cardLink' href={props.link}>
                <img className='circle-avatar' src={props.img} alt="img" />
            </a>
        </div>
    );
}

