// ReceiptModal.jsx

import React from 'react';

const ReceiptModal = ({ isOpen, closeModal, cartItems, totalAmount }) => {
  return (
    <div className={`modal ${isOpen ? 'open' : 'closed'}`}>
      <div className="modal-content">
        <h2>Receipt</h2>
        {cartItems.map((item, index) => (
          <div key={index}>
            <p>{item.title} - ₹{item.price}</p>
          </div>
        ))}
        <p>Total Amount: ₹{totalAmount}</p>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default ReceiptModal;
