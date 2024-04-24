import navbarCSS from './Navbar.module.css'
import searchIcon from '/search.svg?url'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";

function Navbar({setSearch}) {

    const navigate = useNavigate()

    const [tempSearch, setTempSearch] = useState('')

    const clickLogo = () => {
      useNavigate('/')
    }

    const onSearch = (e) => {
      setTempSearch(e.target.value)      
    }

    const clickSearch = () => {
      setSearch(tempSearch)
      navigate('/')
    }

    return (
      <nav>
        <div className={navbarCSS.title}>
          <h2><a href='/' onClick={clickLogo}>DevShare Hub</a></h2>
          <div className={navbarCSS.searchSection}>
          <input type='text' placeholder='Search...' onChange={onSearch}></input>
          <button  onClick={clickSearch} className={navbarCSS.searchBtn}><img className={navbarCSS.search} src={searchIcon} /></button>
          </div>
        </div>

        <ul>
              <li><button>Create</button></li>
              <li><button>Login</button></li>   
        </ul>
        
    </nav>
      )
}

export default Navbar;