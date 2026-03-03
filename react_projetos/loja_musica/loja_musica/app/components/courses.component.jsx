"use client"
import coursesModule from '@/app/css/courses.module.css';

function courses() {
    return ( 
    <section className={coursesModule.course_section}>
        <div>
            <div className={coursesModule.course_img}>
                <img src="/imgs/guitarra.jpg" alt="Curso de Violão" />
            </div>
            <div className={coursesModule.course_info}>
                <h4>Curso de Violão</h4>
                <section className={coursesModule.comments}>
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