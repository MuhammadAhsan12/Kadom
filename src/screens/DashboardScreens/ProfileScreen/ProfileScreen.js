import React, { useState } from "react";
import Header from "../../../components/Header/Header";
import Sidebar from "../../../components/Sidebar/Sidebar";
import styles from "./ProfileScreen.module.css";
import { Col, Container, Form, Row } from "react-bootstrap";
import MainPopup from "../../../components/Popup/MainPopup";

const ProfileScreen = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const resetHandler = () => {
    setForm({
      first_name: form.first_name,
      last_name: form.last_name,
      email: form.email,
      password: "",
    });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const popupHandler = () => {
    setIsPopupOpen(true)
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const closePopupHandler = (evt) => {
    setIsPopupOpen(evt);
  };

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
            <h1 className="h1_main pb-5">Account</h1>
            <Row className="gy-5">
              <Col lg={3}>
                <div
                  style={{ backgroundImage: "url(/images/admin.svg)" }}
                  className={styles.profileImg}
                >
                  <div className={styles.camera}>
                    <img src="/images/icons/camera.svg" />
                  </div>
                </div>
              </Col>
              <Col lg={9}>
                <div className={styles.form}>
                  <Form onSubmit={formSubmitHandler}>
                    <div className={`${styles.row} mb-4`}>
                      <Form.Group
                        className={styles.formGroup}
                        controlId="firstName"
                      >
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Enter Your First Name"
                          name="first_name"
                          value={form.first_name}
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <Form.Group
                        className={styles.formGroup}
                        controlId="lastName"
                      >
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                          required
                          type="text"
                          placeholder="Enter Your Last Name"
                          name="last_name"
                          value={form.last_name}
                          onChange={handleChange}
                        />
                      </Form.Group>
                    </div>
                    <Form.Group
                      className={`${styles.formGroup} mb-4`}
                      controlId="email"
                    >
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        required
                        type="email"
                        placeholder="Enter Your Email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <div className={`${styles.row} mb-4`}>
                      <Form.Group
                        className={styles.formGroup}
                        controlId="password"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          required
                          type="password"
                          placeholder="Enter Your Password"
                          name="password"
                          value={form.password}
                          onChange={handleChange}
                        />
                      </Form.Group>
                      <button
                        type="button"
                        onClick={popupHandler}
                        className={styles.change}
                      >
                        Change
                      </button>
                    </div>
                    <div className={styles.buttonRow}>
                      <button
                        type="reset"
                        onClick={resetHandler}
                        className={styles.cancel}
                      >
                        Cancel
                      </button>
                      <button type="submit" className={styles.saveChanges}>
                        Save Changes
                      </button>
                    </div>
                  </Form>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      {isPopupOpen && <MainPopup close={closePopupHandler} />}
    </>
  );
};

export default ProfileScreen;
