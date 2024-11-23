import ReactModal from "react-modal";
ReactModal.setAppElement("#root");

const ModalModel = ({ children, isModalOpen, closeModal }) => {
  return (
    <div>
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Exemplo de Modal"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.3)",
          },
          content: {
            background: "var(--bg-config-modal)",
            maxWidth: "500px",
            margin: "auto",
            padding: "20px",
            borderRadius: "10px",
            border: "none"
          },
        }}
      >
        {children}
      </ReactModal>
    </div>
  );
};

export default ModalModel;
