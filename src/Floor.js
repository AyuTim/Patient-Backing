import React, { useState } from 'react';
import Box from './Box';
import './Box.css';

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
    
    return (
        <div className = "App">
            <Box title = "Box 2" content = "This is the content of Box 2" />
        </div>
    );
  };

  const Box1 = () => {
    return (
        <div className = "box">
            <h2>Box #1</h2>
            <p>This is Box #1 content.</p>
        </div>
    )
  }

  const roomsData = [
    { roomNumber: 101, color: 'red' },
    { roomNumber: 102, color: 'blue' },
    { roomNumber: 103, color: 'green' },
    { roomNumber: 104, color: 'purple' },
  ];

  return (
    <div className="room-grid">
      {roomsData.map((room) => (
        <RoomBox
          key={room.roomNumber}
          roomNumber={room.roomNumber}
          color={room.color}
          onClick={handleBoxClick}
        />
      ))}
      <div className="selected-room">
        Selected Room: {selectedRoom ? `Room ${selectedRoom}` : 'None'}
      </div>
    </div>
  );
}


export default RoomGrid;

