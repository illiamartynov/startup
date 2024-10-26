import React from "react";
import Element from "../../Components/Element/Element";
import livingRoomImage from "../../../Images/webApp/roomTypes/living_room.jpg";
import bedroomImage from "../../../Images/webApp/roomTypes/bedroom.jpg";
import kitchenRoom from "../../../Images/webApp/roomTypes/kitchen.jpg";
import styles from "../Steps.module.css";

const RoomStep = ({ onSelect }) => {
  const rooms = [
    { name: "living room", image: livingRoomImage },
    { name: "bedroom", image: bedroomImage },
    { name: "kitchen", image: kitchenRoom },
  ];

  return (
    <div className={styles.wrapper}>
      <h2>Select room:</h2>
       <div className={styles.elementsWrapper}> {/* replace elementsWrapperRoom with elementsWrapper */}
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
