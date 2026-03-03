"use client";
import anotherButtonsModule from '@/app/css/anotherButtons.module.css';


function AnotherButtons() {
    return (
        <section className={anotherButtonsModule.btn_wrapper}>
            <div className={anotherButtonsModule.btn_banners}>
                <div>
                    <button>Ver instrumentos</button>
                </div>
                <div>
                    <button>Agendar aula</button>
                </div>
            </div>
        </section>

    )
}

export default AnotherButtons;