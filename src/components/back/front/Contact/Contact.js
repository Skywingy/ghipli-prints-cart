import React from 'react';
import './Contact.css';
import fab from '../../../../assets/fab.png';
import git from '../../../../assets/git.png';
import inta from '../../../../assets/inta.png';
import ln from '../../../../assets/in.png';

const Contact = () => {
    return (
        <div className='ContactPage'>
            <div className='icons'>
            <a href='https://github.com/Skywingy' target="_blank" rel="noreferrer"><img src={git} alt='fb' width='100px' height='100px'/></a>
            <a href='https://www.youtube.com/watch?v=4A4PlXD560w' target="_blank" rel="noreferrer"><img src={fab} alt='fb' width='100px' height='100px'/></a>
            <a href='https://www.youtube.com/watch?v=4A4PlXD560w' target="_blank" rel="noreferrer"><img src={inta} alt='fb' width='100px' height='100px'/></a>
            <a href='https://www.youtube.com/watch?v=4A4PlXD560w' target="_blank" rel="noreferrer"><img src={ln} alt='fb' width='100px' height='100px'/></a>
            </div>
        <p>Annapurna Base Camp Trek, Ghandruk 33700, Nepal</p>
    </div>
    )
}

export default Contact
