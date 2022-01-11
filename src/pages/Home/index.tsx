import { useState } from "react";
import { People } from "../../components/People";
import { Header } from "../../components/Header";
import { TransactionModal } from "../../components/TransactionModal";
import Modal from 'react-modal';
import { GlobalStyle } from "../../styles/global";


Modal.setAppElement('#root');

export function HomePage() {
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
      <People></People>
      <TransactionModal
        isOpen={modalTransactionOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </>
  );

}
