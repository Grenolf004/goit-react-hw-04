import  "./ImageModal.module.css"
import Modal from 'react-modal'
import css from './ImageModal.module.css'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        border:'none',
        backgroundColor:'transparent'
    },
};

Modal.setAppElement('#root');
Modal.defaultStyles.overlay.backgroundColor = 'rgba(0, 0, 0, 0.871)';
const ImageModal = ({onClose, urlModal,isOpen,description}) => {
  return (
    <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={customStyles}  
    >
        <img className={css.modal_image} src={urlModal} alt={description} />
    </Modal>
  )
}

export default ImageModal