"use client"
import containerInstruments from '@/app/css/containerInstruments.module.css'

function CarrouselItems() {
    return (
        <section className={containerInstruments.container_instrumentos}>
            <div>
                <img src="/imgs/guitarra.jpg" alt="Guitarra" />
                <h4>Guitarra Elétrica</h4>
                <p>R$ 1.500,00</p>
                <button>Add ao carrinho</button>
            </div>
            <div>
                <img src="/imgs/guitarra.jpg" alt="Guitarra" />
                <h4>Guitarra Elétrica</h4>
                <p>R$ 1.500,00</p>
                <button>Add ao carrinho</button>
            </div>
            <div>
                <img src="/imgs/guitarra.jpg" alt="Guitarra" />
                <h4>Guitarra Elétrica</h4>
                <p>R$ 1.500,00</p>
                <button>Add ao carrinho</button>
            </div>
            <div>
                <img src="/imgs/guitarra.jpg" alt="Guitarra" />
                <h4>Guitarra Elétrica</h4>
                <p>R$ 1.500,00</p>
                <button>Add ao carrinho</button>
            </div>
    </section>
    )
}

export default CarrouselItems;