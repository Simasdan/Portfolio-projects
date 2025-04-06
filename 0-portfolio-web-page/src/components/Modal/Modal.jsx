import './modal.scss';
import CloseIcon from '../../assets/icons/closeIcon.svg?react';

const Modal = ({ title, description, closeModal }) => {

  return (
    <>
      <div className='overlay' onClick={closeModal}></div>
      <div className='modalWrapper'>
        <button className='closeButton' onClick={closeModal}>
          <CloseIcon />
        </button>
        <div className='modalContent'>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
      </div>
    </>
  )
}

export default Modal