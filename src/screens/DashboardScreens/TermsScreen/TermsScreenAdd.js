import React from "react";
import Header from "../../../components/Header/Header";
import Sidebar from "../../../components/Sidebar/Sidebar";
import TermsAdd from "../../../components/Policy/PolicyEdit";
import { Container } from "react-bootstrap";
import styles from "./TermsScreen.module.css";


const TermsScreenAdd = () => {

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
                        <TermsAdd pakagenamme="terms" title="" text=""/>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default TermsScreenAdd;