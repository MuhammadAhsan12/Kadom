import React, { useState } from "react";
import styles from "./Header.module.css";
import { Container } from "react-bootstrap";
import NotificationPopup from "../UI Helpers/NotificationPopup/NotificationPopup";
import { Link } from "react-router-dom";

const Header = ( {getIsActive, IsActive} ) => {
  const [isActive, setIsActive] = useState(false);
  const [notification, setNotifications] = useState(false);

  const closeHandler = () => {
    setIsActive(false);
    if(IsActive){
    getIsActive(false)}
  };
  const openHandler = () => {
    setIsActive(false);
    if(IsActive){
      getIsActive(false)
    }
  };
  // add dynamic component conditional rendering

  return (
    <Container style={{ padding: "0px" }} fluid>
      <div className={styles.main}>
        <div className={styles.inner}>
          <div className={styles.menu}>
            {isActive ? (
              <img
                alt=""
                src="/images/menu_close.svg"
                onClick={closeHandler}
              />
            ) : (
              <img
                alt=""
                src="/images/menu.svg"
                onClick={openHandler}
              />
            )}
            <h4 className="h4_main">Menu</h4>
          </div>
          <h2 className="h2_main">Kadom</h2>
          
          <div className={styles.pills}>
            <img alt="" src="/images/notification.svg" onClick={()=>setNotifications(true)}/>
            <div className={styles.dash} />
            <Link to="/dashboard/profile"><img alt="" src="/images/admin.svg" /></Link>
          </div>
        </div>
        {notification && (
              <NotificationPopup close={(e)=>setNotifications(e)}/>
          )}
      </div>
    </Container>
  );
};

export default Header;
