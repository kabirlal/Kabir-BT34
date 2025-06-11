import React, { useState } from 'react';

function App() {
  const [guest, setGuest] = useState('');
  const [age, setAge] = useState('');
  const [comment, setComment] = useState('');
  const [deliveryType, setDeliveryType] = useState('Pickup');

  function handleSubmit() {
    alert(
      'Order Summary:\n' +
      'Name: ' + guest + '\n' +
      'Age: ' + age + '\n' +
      'Comment: ' + comment + '\n' +
      'Delivery Type: ' + deliveryType
    );
  }

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Order Form</h2>

      <label>Guest Name:</label><br />
      <input
        type="text"
        value={guest}
        onChange={(e) => setGuest(e.target.value)}
        placeholder="Enter your name"
      /><br /><br />

      <label>Age:</label><br />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Enter your age"
      /><br /><br />

      <label>Comment:</label><br />
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Any special request"
      /><br /><br />

      <label>Delivery Type:</label><br />
      <select
        value={deliveryType}
        onChange={(e) => setDeliveryType(e.target.value)}
      >
        <option value="Pickup">Pickup</option>
        <option value="Delivery">Delivery</option>
      </select><br /><br />

      <button onClick={handleSubmit}>Submit Order</button>
    </div>
  );
}

export default App;
