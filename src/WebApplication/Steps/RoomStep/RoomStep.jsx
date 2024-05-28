import React from "react";
import Element from "../../Components/Element/Element";
import bathroomImage from "../../../Images/galleryImages/after8.jpg";
import livingRoomImage from "../../../Images/galleryImages/after8.jpg";
import bedroomImage from "../../../Images/galleryImages/after8.jpg";
import kitchenRoom from "../../../Images/galleryImages/after8.jpg";
import styles from "../Steps.module.css";
const RoomStep = ({ onSelect }) => {
  const rooms = [
    { name: "Bathroom", image: bathroomImage },
    { name: "living room", image: livingRoomImage },
    { name: "bedroom", image: bedroomImage },
    { name: "kitchen", image: kitchenRoom },
  ]; 

  return (
    <div className={styles.wrapper}>
      <h2>Select room:</h2>
      <div className={styles.elementsWrapper}>
        {rooms.map((room, index) => (
          <Element
            key={index}
            image={room.image}
            text={room.name}
            onClick={() => onSelect(room.name)}
          >
            {room.name}
          </Element>
        ))}
      </div>
    </div>
  );
};

export default RoomStep;
