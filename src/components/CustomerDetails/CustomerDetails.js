import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from './CustomerDetails.module.css'

const CustomerDetails = () => {
    return (
        <>
            <Row className={`gy-5`}>
                <Col lg={10} >
                    <div className={styles.box}>

                        <div className={styles.boxRow}>

                            <img src='/images/profile1.svg' style={{ borderRadius: '110px', width: '80px', height: '80px' }} />

                            <div>
                                <div style={{ display: 'flex', flexDirection: 'row', gap: '0px' }}>
                                    <h2 className='h2_main'>Cooper Philips</h2><ul style={{ fontSize: '12px', marginTop: '3px', marginBottom: '1px' }}><li style={{ color: '#1FBBC2', marginLeft: '-8px' }}><span>Active</span></li></ul>
                                </div>
                                <div>
                                    <h3 className='h3_main'>City, State</h3>
                                    <h3 className='h3_main'>Joined on 02/11/2021</h3>
                                </div>
                            </div>
                        </div>


                        <div className={styles.detail}>
                            <div>
                                <h3 className='h3_main'>Email address</h3>
                                <h2 className='h2_main'>Cooper@gmail.com</h2>
                            </div>
                            <div>
                                <h3 className='h3_main'>Phone Number</h3>
                                <h2 className='h2_main'>(310) 123 - 4567</h2>
                            </div>
                            <div className={styles.buttonCol}>
                                <button className="button_main">Total Jobs 20</button>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col className={styles.buttonCol} lg={2} >
                    <button className="button_main">Deactivate Account</button>
                </Col>
            </Row>
        </>
    );
};

export default CustomerDetails;