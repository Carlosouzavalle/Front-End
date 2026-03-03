"use client"
import category from '@/app/css/category.module.css';
    
function category_instruments() {
    return (
    <section>
        <div className={category.category_instruments}>
            <div>
                <img src="/imgs/guitarra.jpg" alt="Guitarra" />
                <h4>Guitarras</h4>
            </div>
            <div>
                <img src="/imgs/guitarra.jpg" alt="Guitarra" />
                <h4>Baixo</h4>
            </div>
            <div>
                <img src="/imgs/guitarra.jpg" alt="Bateria" />
                <h4>Baterias</h4>
            </div>
            <div>
                <img src="/imgs/guitarra.jpg" alt="Teclado" />
                <h4>Teclados</h4>
            </div>
            <div>
                <img src="/imgs/guitarra.jpg" alt="Violão" />
                <h4>Violões</h4>
            </div>
            <div>
                <img src="/imgs/guitarra.jpg" alt="Violão" />
                <h4>Amplificadores</h4>
            </div>
            <div>
                <img src="/imgs/guitarra.jpg" alt="Violão" />
                <h4>Outros</h4>
            </div>
        </div>
    </section>
    )
}

export default category_instruments;