import React, { useState } from "react";
import Element from "../../Components/Element/Element";
import livingRoomImage from "../../../Images/webApp/roomTypes/living_room.png";
import bedroomImage from "../../../Images/webApp/roomTypes/bedroom.png";
import kitchenRoom from "../../../Images/webApp/roomTypes/kitchen.png";
import styles from "../RoomStep/Room.module.css";

const RoomStep = ({ onSelect, uploadedPhoto }) => {
  const rooms = [
    { name: "SYPIALNIA", image: bedroomImage },
    { name: "SALON", image: livingRoomImage },
    { name: "KUCHNIA", image: kitchenRoom },
  ];

  const [selectedRoom, setSelectedRoom] = useState(rooms[0].name);

  const handleSelectRoom = (room) => {
    setSelectedRoom(room.name);
    onSelect(room.name);
  };

  return (
    <div className={styles.roomStepWrapper}>
      {/* Отображение загруженного фото */}
      {uploadedPhoto && (
        <div className={styles.uploadedPhotoWrapper}>
          <img src={uploadedPhoto} alt="Uploaded" className={styles.uploadedPhoto} />
        </div>
      )}

      <h2 className={styles.roomTitle}>Wybierz pomieszczenie</h2>

      <div className={styles.elementsWrapperRoom}>
        {rooms.map((room, index) => (
          <div
            key={index}
            className={`${styles.element} ${selectedRoom === room.name ? styles.selected : styles.unselected}`}
            onClick={() => handleSelectRoom(room)}
          >
            <img src={room.image} alt={room.name} className={styles.roomImage} />
            <div className={styles.elementText}>{room.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomStep;
