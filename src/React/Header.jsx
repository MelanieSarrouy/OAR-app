import React from 'react'
import '../styles/header.css'
import NavBar from './NavBar'

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">
        <span className="header__title--span">O</span>pen{' '}
        <span className="header__title--span">A</span>pparel{' '}
        <span className="header__title--span">R</span>egistry
      </h1>
      <NavBar />
    </header>
  )
}

export default Header
