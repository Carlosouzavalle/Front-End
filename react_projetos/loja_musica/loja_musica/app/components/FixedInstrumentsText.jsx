"use client"
import containerInstruments from '@/app/css/containerInstruments.module.css';

function fixedInstrumentsText() {
    return (
        <div className={`${containerInstruments.destaque_txt}`}>
            <h2>Instrumentos em destaque</h2>
            <p>Confira os instrumentos mais vendidos da nossa loja!</p>
        </div>
    )
}

export default fixedInstrumentsText;