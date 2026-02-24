function courses() {
    return ( 
    <section className="course_section">
        <div>
            <div class="course_img">
                <img src="/imgs/guitarra.jpg" alt="Curso de Violão" />
            </div>
            <div class="course_info">
                <h4>Curso de Violão</h4>
                <section className="comments">
                    <div>
                        <img src="#" alt="perfil1" />
                        <p>"Excelente atendimento e variedade de produtos!" - João S.</p>
                    </div>
                    <div>
                        <img src="#" alt="perfil2" />
                        <p>"Os cursos são incríveis, aprendi muito!" - Maria L.</p>
                    </div>
                    <div>
                        <img src="#" alt="perfil3" />
                        <p>"Entrega rápida e produtos de qualidade." - Carlos M.</p>
                    </div>
                </section>
            </div>
        </div>
    </section>
    )
}

export default courses;