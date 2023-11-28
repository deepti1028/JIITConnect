// ReceiptModal.jsx

import React from 'react';

const ReceiptModal = ({ isOpen, closeModal, cartItems, totalAmount }) => {
  return (
    <div className={`modal ${isOpen ? 'open' : 'closed'}`} style={{}}>
      <div className="modal-content">
        <h2>Receipt</h2>
        {cartItems.length > 0 ? (cartItems.map((item, index) => (
          <div key={index}>
            <p>{item.title} - ₹{item.price}</p>
          </div>
        ))) : (
          <p>No items in cart</p>
        )}
        
        <p>Total Amount: ₹{totalAmount}</p>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default ReceiptModal;
