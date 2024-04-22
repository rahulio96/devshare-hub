import navbarCSS from './Navbar.module.css'

function Navbar() {
    return (
      <nav>
        <div className={navbarCSS.left}>
          <h4>DevShare Hub</h4>
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