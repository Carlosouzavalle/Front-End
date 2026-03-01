import { FaSearch } from "react-icons/fa";

const Header = () => {
    return (
        <header className="bg-[#0F0F0F]">
            <div className="flex justify-between items-center p-8">

                <div className="logo">
                    <h2>Music</h2>
                    <h2>House</h2>
                </div>

                <div className="search_container">
                    <div className="search_box ">
                        <input type="search" placeholder="Buscar instrumentos..." />
                    </div>
                    <div className="btn_div">
                        <button className="btn_search">
                            <FaSearch />
                        </button>
                    </div>
                </div>

                <nav className="nav_container">
                    <ul className="nav-links flex gap-3 justify-center items-center">
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Instrumentos</a></li>
                        <li><a href="#">Carrinho</a></li>
                        <li><a href="#">Promoções</a></li>
                        <li><a href="#">Contato</a></li>
                        <li className=" p-2 rounded-sm bg-[#E10600] hover:bg-[#FF3C38]"><a href="#">Comprar Agora</a></li>
                    </ul>
                </nav>

            </div>
        </header>
    );
};

export default Header;