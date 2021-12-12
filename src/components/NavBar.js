const NavBar =() =>{
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                        <a class="navbar-brand" href="#">
                            <img src="https://i.kym-cdn.com/photos/images/list/002/198/089/c9b.jpeg" alt="" width="50" height="50"/>
                         </a>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link" href="/myfirstreact">Home</a>
                            <a class="nav-link" href="/myfirstreact/employees">Employees</a>
                            <a class="nav-link" href="/myfirstreact/add">Add employee</a>
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