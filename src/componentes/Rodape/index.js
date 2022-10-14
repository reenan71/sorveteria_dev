import './style.css'

export default function Rodape() {
return(
    <footer>
    <div className='limitar-secao container-logo-informacoes'>
        <img src='assets/logo.png' alt='logomarca'/>
        <div>
        <h3>ENDEREÇO</h3>
        <p>Av. Eugenio Krause,1003</p>
        <p>Santa Catarina, SC 88385-000</p>
        </div>
        <div>
        <h3>CONTATO</h3>
        <p>info@meusite.com</p>
        <p>Tel: (47) 3456-9999</p>
        </div>
        <div>
        <h3>HORÁRIOS</h3>
        <p>ABERTO TODOS OS DIAS</p>
        <p>10:00 - 22:00</p>
        </div>
    </div>
    <div className='limitar-secao direito-autoral'>
        <p>Gelateria. Orgulhosamente desenvolvido por "nome do desenvolvedor"</p>
    </div>
    </footer>
)
}