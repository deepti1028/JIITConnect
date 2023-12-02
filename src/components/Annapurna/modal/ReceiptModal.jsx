// ReceiptModal.jsx

import React from 'react';
// import receiptImage from '../.././images/receiptImage.jpeg';

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
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src="images/receiptImage.jpeg" alt="Receipt" style={{ width: '150px', height: '200px' }} />
        </div><br/>
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
