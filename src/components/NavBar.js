const NavBar =() =>{
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                        <a class="navbar-brand" href="#">
                            <img src="https://archive.nyafuu.org/foolfuuka/boards/vt/image/1611/99/1611999443340.jpg" alt="" width="50" height="50"/>
                         </a>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link" href="/">Home</a>
                            <a class="nav-link" href="/employees">Employees</a>
                            <a class="nav-link" href="/add">Add employee</a>
                            <a class="nav-link" href="https://www.wikihow.com/Apologize-to-a-Cat">Extra</a>
                            <a class="nav-link" href="https://www.wikihow.com/Calculate-Pi-by-Throwing-Frozen-Hot-Dogs">About us</a>
                        </div>
                    </div>
                </div>
            </nav>

            {/* <nav class="navbar navbar-light bg-light">
                <div class="container">
                    <a class="navbar-brand" href="#">
                        <img src="https://www.pngall.com/wp-content/uploads/2016/07/Cookie-Download-PNG.png" alt="" width="50" height="50"/>
                    </a>
                </div>
            </nav> */}
        </div>
    )
}

export default NavBar