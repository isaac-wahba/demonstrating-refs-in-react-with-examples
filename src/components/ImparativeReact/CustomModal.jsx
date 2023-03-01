import { forwardRef, useImperativeHandle, useState } from 'react';

const CustomModal = (props, ref) => {
  const [modalState, setModalState] = useState(false);

  useImperativeHandle(ref, () => ({
    openModal: () => setModalState(true),
  }));

  console.log('child rendered');

  if (!modalState) return null;

  return (
    <div className='modal'>
      <p className='prev-label' style={{ fontSize: '2rem' }}>
        This is my modal!
      </p>
      <button className='modal-btn' onClick={() => setModalState(false)}>
        Close
      </button>
    </div>
  );
};

export default forwardRef(CustomModal);
