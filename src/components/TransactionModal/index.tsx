import Modal from 'react-modal';
import { Container } from './styles';
import closeImg from '../../assets/close.svg'

interface TransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;

}
export function TransactionModal({ isOpen, onRequestClose }: TransactionModalProps) {
    function alerta() {
        alert("Cadastrado com sucesso");
        return
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                type="button"
                onClick={onRequestClose}
                className='react-modal-close'
            >
                <img src={closeImg} alt="close" />
            </button>
            <Container>
                <h2>Cadastrar Personagem</h2>
                <input
                    placeholder='Nome'
                    required
                />
                <input
                    type="number"
                    placeholder='Altura'
                    required
                />
                <input
                    type="number"
                    placeholder='Peso'
                    required
                />
                <input
                    placeholder='Gênero'
                    required
                />
                <input
                    placeholder='Cor do Cabelo'
                    required
                />
                <input
                    placeholder='Cor dos Olhos'
                    required
                />
                <input
                    placeholder='Nascimento'
                    required
                />
                <button type="submit" onClick={alerta}>
                    Cadastrar
                </button>

            </Container>
        </Modal >

    )

}