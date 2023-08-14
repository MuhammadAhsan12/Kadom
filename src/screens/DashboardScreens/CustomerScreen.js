import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import CustomerDetails from "../../components/CustomerDetails/CustomerDetails";
import { Container } from "react-bootstrap";
import styles from "./CustomerScreen.module.css";

const CustomerScreen = () => {
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
        <div className={styles.main}>
          <Container className={styles.maindiv}>
            <CustomerDetails />
          </Container>
        </div>
      </div>
    </>
  );
};

export default CustomerScreen;