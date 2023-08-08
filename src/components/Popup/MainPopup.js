import React, { useState } from "react";
import styles from "./MainPopup.module.css";
import { Row } from "react-bootstrap";

const MainPopup = ({ close, Data, del, filter }) => {
  const data = [
    {
      del: {
        title: "Delete",
        text: "Are you sure you want to delete this Filter?",
        button: "Delete",
        color: "#e74926",
      },
      filter: {
        title: "Saved as View",
        img: "/images/save.svg",
        button: "Save",
        color: "#0e8cff",
        list: [
          { img: "/images/user2.svg", name: "Dianne Russel" },
          { img: "/images/user4.svg", name: "Bessie Cooper" },
          { img: "/images/user2.svg", name: "Jane Copper" },
          { img: "/images/user3.svg", name: "Cody Fisher" },
          { img: "/images/user5.svg", name: "Savannah Nguyen" },
          { img: "/images/user2.svg", name: "Dianne Russel" },
          { img: "/images/user4.svg", name: "Bessie Cooper" },
          { img: "/images/user3.svg", name: "Cody Fisher" },
          { img: "/images/user5.svg", name: "Savannah Nguyen" },
          { img: "/images/user2.svg", name: "Dianne Russel" },
          { img: "/images/user4.svg", name: "Bessie Cooper" },
        ],
      },
    },
  ];
  const condition = del ? data[0].del : filter ? data[0].filter : "";
  const [list, setList] = useState(false);
  const [color, setColor] = useState("#000");

  const closePopupHandler = (value) => {
    if(Data){
     Data(value)
    }
    close(false);
  };

  return (
    <div className={styles.main}>
      <div className={styles.styledDiv}>
        {condition && (
          <>
            <div className={styles.head}>
              <Row gap="10px" padding="0" justifyContent="start">
                {condition.img && <img src={condition.img} />}
                <h6>{condition.title}</h6>
              </Row>
              <img src="/images/close_white.svg" onClick={closePopupHandler} />
            </div>
            <div className={styles.body}>
              {condition.text && <p>{condition.text}</p>}
              {filter && (
                <div>
                  <form>
                    <h6>View Name</h6>
                    <Row padding="0 0 20px 0">
                      <input
                      className={styles.nameInput}
                        type="text"
                        placeholder="Enter Name"
                      />
                      <div  className={styles.colorPicker}>
                      <input
                        className={styles.colorPicker}
                        type="color"
                        onChange={(evt)=>setColor(evt.target.value)}
                        value={color}
                      />
                       </div>
                    </Row>
                    <h6>Share with others</h6>
                    <div
                      style={{
                        borderRadius: list && "6px 6px 0 0",
                        borderBottom: list && "1px solid #0e8cff",
                      }}
                      className={styles.input}
                      
                    >
                      <input
                        style={{ border: "none", width: "95%", padding: "0" }}
                        placeholder="Enter or select name"
                      />
                      <img
                        style={{ transition:'0.3s ease-in', color: list && "#0e8cff" }}
                        onClick={() => setList(!list)}
                        src={list ? "/images/chevronUp.svg" : "/images/chevronDown.svg"}
                      />
                    </div>
                    {list && condition.list && (
                      <div className={styles.list}>
                        <ul>
                          {condition.list.map((obj) => (
                            <li key={obj.name}>
                              <Row
                                padding="0"
                                justifyContent="start"
                                gap="10px"
                              >
                                <input type="checkbox" value={obj.name} />
                                <img src={obj.img} /> {obj.name}
                              </Row>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </form>
                </div>
              )}
            </div>
            <div className={styles.bottom}>
              <button onClick={closePopupHandler}>Cancel</button>
              <button
                onClick={() => closePopupHandler("delete")}
                style={{ backgroundColor: condition.color, color: "white" }}
              >
                {condition.button}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MainPopup;
