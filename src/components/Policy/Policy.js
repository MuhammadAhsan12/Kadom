import { Row, Col } from "react-bootstrap";
import styles from "./Policy.module.css";
import { Link } from "react-router-dom";

const TermsScreen = ({ pakagenamme, title, text }) => {
    return (
        <>
            <Row className="gy-5" style={{ marginBottom: '20px' }}>
                <Col lg={5}>
                    <h1 className="h1_main" style={{ textTransform: 'none' }}>{title}</h1>
                </Col>
                <Col lg={7}>
                    <div className={styles.contentCol}>
                        <Link to={`/dashboard/${pakagenamme}/add`} style={{ textDecoration: 'none' }}>
                            <div className={styles.contentMaterial}>
                                <img src="/images/icons/addIcon.svg" />
                                <h5 className="h2_main">Add</h5>
                            </div>
                        </Link>
                        <Link to={`/dashboard/${pakagenamme}/edit`} style={{ textDecoration: 'none' }}>
                            <div className={styles.contentMaterial}>
                                <img src="/images/icons/editIcon.svg" />
                                <h5 className="h2_main">Edit</h5>
                            </div>
                        </Link>
                        <div className={styles.contentMaterial}>
                            <img src="/images/icons/deleteIcon.svg" />
                            <h5 className="h2_main">Delete</h5>
                        </div>
                        <h2 className="h3_main">14 July 2023, Friday</h2>
                    </div>
                </Col>
            </Row>
            <Row className="gy-5">
                <div className={styles.textDiv}>
                    <p className={`para_main ${styles.showText}`}>{text}
                    </p>
                </div>
            </Row>
        </>
    );
};

export default TermsScreen;