import R2D2 from "../../assets/r2d2.png"
import Starship from "../../assets/starship.png"
import Films from "../../assets/films.png"
import Plus from "../../assets/add.png"
import { Container } from "./styles";
import { linkStyle } from "./styles";
import { Link } from 'react-router-dom';
import { TransactionModal } from "../../components/TransactionModal";
import Modal from 'react-modal';
import { useState } from "react";

export function NavBar() {
    const [modalTransactionOpen, setmodalTransactionOpen] = useState(false);

    function handleOpenNewTransactionModal() {
        setmodalTransactionOpen(true);
    }

    function handleCloseNewTransactionModal() {
        setmodalTransactionOpen(false);
    }


    return (
        <Container>
            <div>
                <header>
                    <Link to="/" className="App-link" style={linkStyle}>
                        <p>Personagens</p>
                        <img src={R2D2} alt="Personagens" />
                    </Link>
                </header>

            </div>
            <div>
                <header>
                    <Link to="/films" className="App-link" style={linkStyle}>
                        <p>Filmes</p>
                        <img src={Films} alt="Filmes" />
                    </Link>
                </header>
            </div>
            <div>
                <Link to="/vehicles" className="App-link" style={linkStyle}>
                    <header>

                        <p>Espécies</p>
                        <img src={Starship} alt="Veículos" />

                    </header>
                </Link>
            </div>

            <div >
                <a onClick={handleOpenNewTransactionModal}>
                    <header >

                        <p>Adicionar</p>
                        <img src={Plus} alt="Total" onClick={handleOpenNewTransactionModal} />

                    </header>
                </a>
            </div>
            <TransactionModal
                isOpen={modalTransactionOpen}
                onRequestClose={handleCloseNewTransactionModal}
            />

        </Container>
    )

}