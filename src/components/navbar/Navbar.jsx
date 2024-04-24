import navbarCSS from './Navbar.module.css'
import search from '/search.svg?url'

function Navbar() {
    return (
      <nav>
        <div className={navbarCSS.title}>
          <h2>DevShare Hub</h2>
          <div className={navbarCSS.searchSection}>
          <input type='text' placeholder='Search...'></input>
          <button className={navbarCSS.searchBtn}><img className={navbarCSS.search} src={search} /></button>
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