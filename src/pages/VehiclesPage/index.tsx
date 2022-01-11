import { useState } from "react";
import { Species } from "../../components/Species";
import { Header } from "../../components/Header";
import { TransactionModal } from "../../components/TransactionModal";
import Modal from 'react-modal';
import { GlobalStyle } from "../../styles/global";


Modal.setAppElement('#root');

export function VehiclesPage() {
    const [modalTransactionOpen, setmodalTransactionOpen] = useState(false);

    function handleOpenNewTransactionModal() {
        setmodalTransactionOpen(true);
    }

    function handleCloseNewTransactionModal() {
        setmodalTransactionOpen(false);
    }

    return (
        <>
            <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
            <Species></Species>
            <TransactionModal
                isOpen={modalTransactionOpen}
                onRequestClose={handleCloseNewTransactionModal}
            />
            <GlobalStyle />
        </>
    );

}
