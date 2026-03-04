import { FaSearch } from "react-icons/fa";
import headerModule from '@/app/css/header.module.css';

const Header = () => {
    return (
        <header className={headerModule.header}>
            <div className="flex justify-between items-center p-8">
                <div className={headerModule.logo}>
                    <h2>Music</h2>
                    <h2>House</h2>
                </div>

                <div className={headerModule.search_container}>
                    <div className={headerModule.search_box}>
                        <input className="p-3 w-md " type="search" placeholder="Buscar instrumentos..." />
                    </div>
                    <div className={headerModule.btn_container}>
                        <button className={headerModule.btn_search}>
                            <FaSearch />
                        </button>
                    </div>
                </div>

                <nav className={headerModule.nav_links}>
                    <ul className={headerModule.nav_list}>
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