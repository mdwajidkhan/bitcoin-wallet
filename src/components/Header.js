import {FaTimes} from 'react-icons/fa'
import { CiMenuKebab } from "react-icons/ci"
import { BsThreeDotsVertical } from "react-icons/bs"
import { BsThreeDots } from 'react-icons/bs';
import { GrFormPrevious } from 'react-icons/gr';
import { IoIosArrowBack } from 'react-icons/io';
import { useState } from 'react';
import Navigation from './Navigation';

const Header = ({btnClicked, menuFunc}) => {
    


  return (
    <header>
        <IoIosArrowBack className='prev-btn'/>
        <div className='header-title'>Bitcoin Wallet</div>
        <BsThreeDotsVertical className= {btnClicked ? 'menu-btn rotate90' : 'menu-btn'} onClick={menuFunc}/>
        {btnClicked && <Navigation/>}
    </header>
  )
}

export default Header