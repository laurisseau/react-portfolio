import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/laurisseau-joseph-949bb01b8" ><BsLinkedin/></a>
        <a href="https://github.com/laurisseau" ><FaGithub/></a>
    </div>
  )
}

export default HeaderSocials