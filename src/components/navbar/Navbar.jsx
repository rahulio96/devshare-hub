import navbarCSS from './Navbar.module.css'

function Navbar() {
    return (
      <nav>
        <div className={navbarCSS.title}>
          <h2>DevShare Hub</h2>
          <input type='text' placeholder='Search...'></input>
        </div>

        <ul>
              <li><button>Create</button></li>
              <li><button>Login</button></li>   
        </ul>
        
    </nav>
      )
}

export default Navbar;