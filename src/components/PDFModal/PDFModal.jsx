import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose, IoDownload } from "react-icons/io5";
import { useLanguage } from "../../contexts/LanguageContext";
import styles from "./PDFModal.module.scss";

const PDFModal = ({ isOpen, onClose, pdfUrl, title }) => {
    const { strings } = useLanguage();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (isOpen && pdfUrl) {
            setLoading(true);
            setError(null);
        }
    }, [isOpen, pdfUrl]);

    const handleDownload = async (e) => {
        e.preventDefault();
        e.stopPropagation();

        try {
            // Proxy üzerinden indir
            const proxyUrl = pdfUrl.replace('https://www.tedd.com.tr', '/api/pdf-proxy');
            const response = await fetch(proxyUrl, {
                method: 'GET',
                headers: {
                    'Accept': 'application/pdf',
                },
            });

            if (response.ok) {
                const blob = await response.blob();
                const url = globalThis.URL.createObjectURL(blob);
                const link = document.createElement("a");
                link.href = url;
                link.download = title ? `${title.replace(/[^a-z0-9]/gi, '_')}.pdf` : "document.pdf";
                link.style.display = 'none';
                document.body.appendChild(link);
                link.click();
                setTimeout(() => {
                    link.remove();
                    globalThis.URL.revokeObjectURL(url);
                }, 100);
                return;
            }
        } catch (proxyError) {
            console.log("Proxy download failed, trying direct fetch");
        }

        // Direkt fetch ile deneyelim (CORS sorunu olabilir)
        try {
            const response = await fetch(pdfUrl, {
                method: 'GET',
                mode: 'cors',
            });

            if (response.ok) {
                const blob = await response.blob();
                const url = globalThis.URL.createObjectURL(blob);
                const link = document.createElement("a");
                link.href = url;
                link.download = title ? `${title.replace(/[^a-z0-9]/gi, '_')}.pdf` : "document.pdf";
                link.style.display = 'none';
                document.body.appendChild(link);
                link.click();
                setTimeout(() => {
                    link.remove();
                    globalThis.URL.revokeObjectURL(url);
                }, 100);
                return;
            }
        } catch (fetchError) {
            console.log("Direct fetch failed, using fallback");
        }

        // Fallback: Yeni sekmede aç (kullanıcı oradan indirebilir)
        // Ama önce bir link oluşturup download attribute ile deneyelim
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = title ? `${title.replace(/[^a-z0-9]/gi, '_')}.pdf` : "document.pdf";
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        setTimeout(() => {
            link.remove();
        }, 100);
    };

    const handleClose = () => {
        setLoading(true);
        setError(null);
        onClose();
    };

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        className={styles.overlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                    />
                    <motion.div
                        className={styles.modal}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className={styles.header}>
                            <h3 className={styles.title}>{title}</h3>
                            <div className={styles.actions}>
                                <button
                                    className={styles.downloadButton}
                                    onClick={handleDownload}
                                    aria-label={strings.pdfModal.download}
                                >
                                    <IoDownload />
                                    <span>{strings.pdfModal.download}</span>
                                </button>
                                <button
                                    className={styles.closeButton}
                                    onClick={handleClose}
                                    aria-label="Close modal"
                                >
                                    <IoClose />
                                </button>
                            </div>
                        </div>
                        <div className={styles.content}>
                            <div className={styles.pdfContainer}>
                                {error ? (
                                    <div className={styles.error}>
                                        <p>{strings.pdfModal.error}</p>
                                        <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className={styles.errorLink}>
                                            {strings.pdfModal.openInNewTab}
                                        </a>
                                    </div>
                                ) : (
                                    <>
                                        <iframe
                                            src={`${pdfUrl}#page=1&toolbar=1&navpanes=0&scrollbar=1&zoom=page-fit&view=FitH`}
                                            className={styles.pdfIframe}
                                            title={title}
                                            onLoad={() => {
                                                setLoading(false);
                                                setError(null);
                                            }}
                                            onError={() => {
                                                setError(new Error("PDF yüklenemedi"));
                                                setLoading(false);
                                            }}
                                        />
                                        {loading && (
                                            <div className={styles.loading}>
                                                <div className={styles.spinner}></div>
                                                <p>{strings.pdfModal.loading}</p>
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default PDFModal;
