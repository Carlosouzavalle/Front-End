function footer() {
    return (
        <footer className="flex direction-column bg-red-500 text-white items-center justify-center p-8">
            
            <div className="flex direction-column justify-between items-center p-8 gap-50">
                <div className="text-2xl">
                    <h3>Music House</h3>
                    <p>Endereço: Rua dos Instrumentos, 123 - Cidade Musical</p>
                    <p>Telefone: (11) 1234-5678</p>
                    <p>Email:
                        <a href="mailto:contato@musichouse.com.br">contato@musichouse.com.br</a>
                    </p>
                </div>

                <div className="text-2xl">
                    <h4>Siga-nos</h4>
                    <ul>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">YouTube</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default footer;