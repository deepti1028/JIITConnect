// ReceiptModal.jsx

import React from 'react';

const ReceiptModal = ({ isOpen, closeModal, cartItems, totalAmount }) => {
  return (
    <div className={`modal ${isOpen ? 'open' : 'closed'}`} style={{}}>
      <div className="modal-content">
        <h2 style={{fontWeight:'bolder'}}>RECEIPT</h2><br/>
        {cartItems.length > 0 ? (cartItems.map((item, index) => (
          <div key={index}>
            <p>{item.title} - ₹{item.price}</p>
          </div>
        ))) : (
          <p>No items in cart</p>
        )}
        
        <p>Total Amount: ₹{totalAmount}</p><br/>
        <button onClick={closeModal} 
        style={{
        fontWeight: 'bolder',
        border: '5px solid white', 
        padding: '8px 16px', 
          }}> CLOSE</button>
      </div>
    </div>
  );
};

export default ReceiptModal;
