import { useState } from "react";
import { Films } from "../../components/Films";
import { Header } from "../../components/Header";
import { TransactionModal } from "../../components/TransactionModal";
import Modal from 'react-modal';
import { GlobalStyle } from "../../styles/global";


Modal.setAppElement('#root');

export function FilmsPage() {
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
            <Films></Films>
            <TransactionModal
                isOpen={modalTransactionOpen}
                onRequestClose={handleCloseNewTransactionModal}
            />
            <GlobalStyle />
        </>
    );

}
