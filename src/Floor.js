import React, { useState } from 'react';
import './Box.css';

function Box({ title, content }) {
  return (
    <div className="box">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

function RoomBox({ roomNumber, color, onClick }) {
  return (
    <div
      className="room-box"
      style={{ backgroundColor: color }}
      onClick={() => onClick(roomNumber)}
    >
      Room {roomNumber}
    </div>
  );
}

function RoomGrid() {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleBoxClick = (roomNumber) => {
    setSelectedRoom(roomNumber);
  };

  const roomsData = [
    { roomNumber: 101, color: 'red' },
    { roomNumber: 102, color: 'blue' },
    { roomNumber: 103, color: 'green' },
    { roomNumber: 104, color: 'purple' },
    { roomNumber: 105, color: 'orange' },
    { roomNumber: 106, color: 'teal' },
    { roomNumber: 107, color: 'pink' },
    { roomNumber: 108, color: 'brown' },
    // Add more rooms as needed
  ];

  return (
    <div className="room-grid">
      {roomsData.map((room) => (
        <div key={room.roomNumber} className="room-container">
          <RoomBox
            roomNumber={room.roomNumber}
            color={room.color}
            onClick={handleBoxClick}
          />
        </div>
      ))}
      <div className="selected-room">
        Selected Room: {selectedRoom ? `Room ${selectedRoom}` : 'None'}
      </div>
    </div>
  );
}

export default RoomGrid;
