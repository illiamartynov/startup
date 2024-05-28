import React, { useEffect, useState } from 'react';
import styles from "./ApprovedWindow.module.css";

const ApprovedWindow = ({ onClose }) => {
    const [isVisible, setIsVisible] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadingTimeout = setTimeout(() => {
            setIsLoading(false);
        }, 1500); 

        const completeTimeout = setTimeout(() => {
            setIsVisible(false);
            onClose();
        }, 3500); 

        return () => {
            clearTimeout(loadingTimeout);
            clearTimeout(completeTimeout);
        }; 
    }, [onClose]);

    return (
        <div className={isVisible ? `${styles.modalOverlay} ${styles.fadeIn}` : `${styles.modalOverlay} ${styles.fadeOut}`}>
            <div className={`${styles.modalContent} ${isVisible ? styles.visible : styles.hidden}`}>
                {isLoading ? (
                    <div className={styles.loadingCircle}></div> 
                ) : (
                    <div className={styles.checkmarkCircle}>
                        <div className={styles.checkmark}>&#10003;</div> 
                    </div>
                )}
                <p>{isLoading ? 'Loading...' : 'You became subscriber!'}</p>
            </div>
        </div>
    );
};

export default ApprovedWindow;
