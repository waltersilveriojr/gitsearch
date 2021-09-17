import ButtonStyle from 'components/ButtonStyle/ButtonStyle';
import { Link } from 'react-router-dom';
import './styles.css'

const Home = () => {
    return (
        <div className="container_home">
           <div className="container-context">
               <h6>Desafio Github API</h6>
               <p>Bootcamp Spring React - DevSuperior</p>
            </div> 
            <div>
                <Link to="/gitsearch">
                    <ButtonStyle text="Começar" />
                </Link>
            </div>
        </div>
    )
}

export default Home;