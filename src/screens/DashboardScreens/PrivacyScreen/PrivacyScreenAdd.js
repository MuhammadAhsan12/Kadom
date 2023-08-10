import React from "react";
import Header from "../../../components/Header/Header";
import Sidebar from "../../../components/Sidebar/Sidebar";
import PolicyAdd from "../../../components/Policy/PolicyEdit";
import { Container } from "react-bootstrap";
import styles from "./PrivacyScreen.module.css";


const PrivacyScreenAdd = () => {

    return (
        <>
            <Header />
            <div
                style={{
                    width: "100%",
                    height: "92vh",
                    display: "flex",
                    flexDirection: "row",
                }}
            >
                <Sidebar />
                <Container>
                    <div className={styles.main}>
                        <PolicyAdd pakagenamme="privacyadd" title="" text=""/>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default PrivacyScreenAdd;