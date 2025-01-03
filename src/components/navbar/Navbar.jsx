import navbarCSS from './Navbar.module.css'
import searchIcon from '/search.svg?url'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import logo from "/devsharehub-logo.png"

function Navbar({setSearch}) {

    const navigate = useNavigate()

    const [tempSearch, setTempSearch] = useState('')

    const clickLogo = () => {
      navigate('/')
    }

    const clickCreate = () => {
      navigate('/create')
    }

    const onSearch = (e) => {
      setTempSearch(e.target.value)      
    }

    const clickSearch = () => {
      setSearch(tempSearch)
      navigate('/')
    }

    const handleEnter = (e) => {
      if (e.key === 'Enter') {
        clickSearch()
      }
    }

    return (
      <nav>
        <div className={navbarCSS.title}>
          <h2>
            <a href='/' onClick={clickLogo}>
              <img className={navbarCSS.logo} src={logo}/>
                <div className={navbarCSS.logoName}>DevShare Hub</div>
              </a>
          </h2>

          <div className={navbarCSS.searchSection}>
          <input type='text' placeholder='Search...' onChange={onSearch} onKeyUp={handleEnter}></input>
          <button 
            onClick={clickSearch}
            className={navbarCSS.searchBtn}>
              <img className={navbarCSS.search} src={searchIcon} />
          </button>
          </div>
        </div>

        <ul>
              <li><button onClick={clickCreate}>Create</button></li>
              <li><button>Login</button></li>   
        </ul>
        
    </nav>
      )
}

export default Navbar;