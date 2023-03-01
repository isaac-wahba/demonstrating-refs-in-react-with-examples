import { useRef } from 'react';
import CustomModal from './CustomModal';

const ModalParent = () => {
  const modalRef = useRef();

  const handleOpenModal = () => {
    modalRef.current.openModal();
  };

  console.log('parent rendered');

  return (
    <main className='modal-parent'>
      <p className='render-label' style={{ fontSize: '2rem' }}>
        Parent Component
      </p>
      <CustomModal ref={modalRef} />
      <button
        style={{ fontSize: '1.3rem', width: '15rem' }}
        className='modal-btn'
        onClick={handleOpenModal}
      >
        Open
      </button>
    </main>
  );
};

export default ModalParent;
