import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import styles from "./JobsDetails.module.css";
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'

const JobsDetailsSchreen = () => {
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
          <Container>
            <Row className='gy-5'>

              {/* Box Left */}
              <Col style={{ paddingRight: '0px', paddingLeft: '0px' }} lg={6}>

                <div className={styles.box}>
                  <div className={styles.iconBack}>
                    <img src='/images/icons/arrowleft.svg' style={{
                      width: '24px',
                      height: '24px',
                      color: '#000000'
                    }} alt="" />
                    <h3 className='h3_main'>Job Management</h3>
                  </div>

                  <h1 className='h2_main' style={{ marginTop: '20px' }}>Customer</h1>

                  <div className={styles.boxRow}>

                    <img src='/images/profile1.svg' width={'80px'} height={'80px'} style={{ borderRadius: '50px' }} />

                    <div>
                      <div style={{ display: 'flex', flexDirection: 'row', gap: '0px' }}>
                        <h1 className='h2_main'>Cooper Philips</h1><ul style={{ fontSize: '12px', marginTop: '3px' }}><li style={{ color: '#1FBBC2', marginLeft: '-8px' }}><span>Active</span></li></ul>
                      </div>
                      <div>
                        <h1 className='h3_main'>Lorem ipsum dolor sit amet consectetur. Amet mattis consectetur nisl pellentesque lobortis tortor in. Arcu sagittis duis egestas cras in vitae..</h1>
                      </div>
                    </div>
                  </div>


                  <div className={styles.personalDetails} style={{ display: 'flex', flexDirection: 'row', gap: '20%', padding: '30px 70px 30px 3px', justifyContent: 'space-between' }}>
                    <div>
                      <h3 className='h3_main'>Email address</h3>
                      <h2 className='h2_main'>Cooper@gmail.com</h2>
                    </div>
                    <div>
                      <h3 className='h3_main'>Phone Number</h3>
                      <h2 className='h2_main'>(310) 123 - 4567</h2>
                    </div>
                  </div>

                </div>
              </Col>

              {/* Box Right */}
              <Col style={{ paddingLeft: '0px' }} lg={6}>

                <div className={styles.box}>

                  <h1 className='h2_main' style={{ marginTop: '44px' }}>Customer</h1>

                  <div className={styles.boxRow}>

                    <img src='/images/profile2.svg' width={'80px'} height={'80px'} style={{ borderRadius: '50px' }} />

                    <div>
                      <div style={{ display: 'flex', flexDirection: 'row', gap: '0px' }}>
                        <h2 className='h2_main'>Floyd Miles</h2><ul style={{ fontSize: '12px', marginTop: '3px' }}><li style={{ color: '#1FBBC2', marginLeft: '-8px' }}><span>Active</span></li></ul>
                      </div>
                      <div>
                        <h3 className='h3_main'>Lorem ipsum dolor sit amet consectetur. Amet mattis consectetur nisl pellentesque lobortis tortor in. Arcu sagittis duis egestas cras in vitae..</h3>
                      </div>
                    </div>
                  </div>

                  <div className={styles.personalDetails} style={{ display: 'flex', flexDirection: 'row', gap: '20%', padding: '30px 70px 30px 3px', justifyContent: 'space-between' }}>
                    <div>
                      <h3 className='h3_main'>Phone Number</h3>
                      <h2 className='h2_main'>(310) 123 - 4567</h2>
                    </div>
                  </div>

                </div>
              </Col>
            </Row>

            {/* Bottom div Box Design */}
            <div className={styles.bottomBox}>
              <div className={styles.boxTitle}>
                <h1 className='h2_main' style={{ fontSize: '18px' }}>Job Detail</h1>
                <img src='/images/icons/down.svg' />
              </div>

              <div className={styles.bottomBoxRow}>
                <Row className={`gy-5`}>
                  <Col lg={6}>
                    <div>
                      <h1 className='h4_main'>June 07, 2021 at 03:00PM</h1>
                      <div style={{ marginTop: '30px' }}>
                        <h1 className='h2_main'>Description</h1>
                        <h1 className='h3_main' style={{ marginTop: '30px', marginRight: '30px' }}>Hello Abdul, I need someone to mount 2 tv’s. I already have the mounts and the hardware. Let me know if you can get this done by today. Thank you!</h1>
                      </div>

                      <div style={{ marginTop: '25px' }}>
                        <img src='/Images/black.png' />
                      </div>

                      <div className={styles.details} style={{ marginRight: '30px' }}>
                        <h1 className='h2_main'>Details</h1>
                      </div>
                      <h1 className='h3_main' style={{ paddingTop: '10px' }}>Need help to mount Two tv</h1>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div>
                      <h1 className='h2_main' style={{ marginBottom: '20px' }}>Media</h1>
                      <img src='/images/image1.png' />
                      <img src='/images/image2.png' />
                      <img src='/images/image3.png' />
                    </div>
                    <div style={{ margin: '30px', padding: '10px', backgroundColor: '#F8F8FA' }}>
                      <div className={styles.paym}>
                        <h1 className='h2_main'>Paym</h1>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', paddingBottom: '10px', paddingTop: '20px' }}>
                        <h1 className='h3_main'>Total</h1>
                        <h1 className='h3_main'>$75.00</h1>
                      </div>
                    </div>
                  </Col>
                </Row>

              </div>

              <div className={styles.boxFootor}>
                <h1 className='h3_main' style={{ fontSize: '14px', fontWeight: '100px' }}>May 28, 2021 at 10:00 AM</h1>
                <img src='/images/icons/down.svg' />
              </div>
            </div>

          </Container>
        </div>
      </div>
    </>
  )
}

export default JobsDetailsSchreen