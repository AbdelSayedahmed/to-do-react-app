import "./style.css";

function Header() {
    return(
        <div className="header">
            <header class="header">
                <h1 class="header__heading">To Do App</h1>
                <nav>
                    <a href="#" class="header__link">To Do</a>
                    <a href="./about-me.html" class="header__link">About Me</a>
                </nav>
            </header>
        </div>
    )
}

export default Header;