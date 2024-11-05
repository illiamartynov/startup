import React from "react";
import styles from "./ConfirmationModal.module.css";

const ConfirmationModal = ({ isOpen, onConfirm, onCancel, title, message }) => {
  if (!isOpen) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onCancel}>
          &times;
        </button>
        <h2 className={styles.modalTitle}>ZUŻYCIE KREDYTÓW</h2>
        <p className={styles.modalMessage}>
          Do stworzenia wizualizacji zużyjesz: <strong>1 kredyt</strong> z Twojego pakietu
        </p>
        <div className={styles.buttonContainer}>
          <button className={styles.confirmButton} onClick={onConfirm}>
            Generuj wizualizacje
          </button>
          <button className={styles.cancelButton} onClick={onCancel}>
            Anuluj
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
