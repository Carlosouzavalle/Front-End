const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="logo">
                    <div>
                        <h2>Music</h2>
                    </div>
                    <div>
                        <h2>House</h2>
                    </div>
                </div>
                <div className="search_box">
                    <input type="search" placeholder="Buscar instrumentos..." />
                </div>
                <nav className="nav_container">
                    <ul className="nav_links">
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Instrumentos</a></li>
                        <li><a href="#">Carrinho</a></li>
                        <li><a href="#">Promoções</a></li>
                        <li><a href="#">Contato</a></li>
                        <li className="buy_now"><a href="#">Comprar Agora</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;