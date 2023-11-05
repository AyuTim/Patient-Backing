import React, { useState } from 'react';
import './Box.css';
import CircleInBox from './CircleInBox';

function Box({ title, content }) {
  return (
    <div className="box">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}


function RoomBox({ wheelchair, roomNumber, color, onClick }) {
  return (
    <div
      className="room-box"
      style={{ backgroundColor: color }}
      onClick={() => onClick(roomNumber)}
    >
      Room {roomNumber}
      {wheelchair}
    </div>
  );
}

function RoomGrid() {
  const [selectedRoom, setSelectedRoom] = useState(null);

  const handleBoxClick = (roomNumber) => {
    setSelectedRoom(roomNumber);
  };


  const roomsData = [
    { roomNumber: 101, color: '#FF6F60'},
    { roomNumber: 102, color: '#E2E2E2'},
    { roomNumber: 103, color: '#96E5B6'},
    { roomNumber: 104, color: '#E2E2E2'},
    { roomNumber: 105, color: '#EFE59B'},
    { roomNumber: 106, color: '#96E5B6'},
    { roomNumber: 107, color: '#FF6F60'},
    { roomNumber: 108, color: '#EFE59B'},
    // Add more rooms as needed
  ];

  return (
    <div className="room-grid">
      {roomsData.map((room) => (
        <div key={room.roomNumber} className="room-container">
          <RoomBox
            roomNumber={room.roomNumber}
            color={room.color}
            wheelchair={room.wheelchair}
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
