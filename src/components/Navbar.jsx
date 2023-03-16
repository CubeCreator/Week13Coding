import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./Navbar.css"
export const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg">
            <div class="navbar-nav">
                <a class="nav-item nav-link" href="#">Home</a>
                <a class="nav-item nav-link" href="#">Projects</a>
                <a class="nav-item nav-link" href="#">About</a>
                <a class="nav-item nav-link" href="#">Settings</a>
            </div>
        </nav>
    )
}