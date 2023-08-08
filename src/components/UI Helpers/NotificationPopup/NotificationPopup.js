import React, { useEffect, useRef } from "react";
import styles from "./NotificationPopup.module.css";
import { Data } from "./data";

const NotificationPopup = ({ close }) => {
  const myRef = useRef();

  const handleClickOutside = (e) => {
    if (!myRef.current.contains(e.target)) {
      close(false);
    }
  };
  const handleClickInside = () => close(true);
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  return (
    <div className={styles.main}>
      <div ref={myRef} onClick={handleClickInside} className={styles.inner}>
        <div className={styles.head}>
          <h2 className="h2_main">Notifications</h2>
          <p className="para_main">Mark all read</p>
        </div>
        <div className={styles.body}>
          {Data.map((item) => (
            <div className={`${styles.box} ${item.active && styles.boxActive}`}>
              <img src={item.img} />
              <div>
                <h2 className="h2_main pb-2">{item.name}</h2>
                <p className="para_main">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.footer}>
          <h2 className="h2_main">View All</h2>
        </div>
      </div>
    </div>
  );
};

export default NotificationPopup;
