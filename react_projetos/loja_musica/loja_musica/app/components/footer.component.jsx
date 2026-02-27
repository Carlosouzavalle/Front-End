function footer() {
    return (
        <footer className="footer">
        <div className="container">
            <div className="footer_info">
                <h3>Music House</h3>
                <p>Endereço: Rua dos Instrumentos, 123 - Cidade Musical</p>
                <p>Telefone: (11) 1234-5678</p>
                <p>Email:
                    <a href="mailto:contato@musichouse.com.br">contato@musichouse.com.br</a>
                </p>
            </div>
            
            <div className="footer_social">
                <h4>Siga-nos</h4>
                <ul>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">Twitter</a></li>
                    <li><a href="#">YouTube</a></li>
                </ul>
            </div>
        </div>
        <div className="footer_copy">
            <p>&copy; 2024 Music House. Todos os direitos reservados.</p>
        </div>
    </footer>
    )
}

export default footer;