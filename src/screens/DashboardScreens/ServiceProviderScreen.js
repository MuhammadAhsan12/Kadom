import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import styles from "./ServiceProviderScreen.module.css";
import Header from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css';
import './ServiceProviderScreen.css'

const ServiceProviderScreen = () => {
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
            <Row className='gy-5'>

              <div className={styles.box}>

                <div className={styles.boxRow}>

                  <img src='/images/profile3.svg' style={{ borderRadius: '110px', width: '80px', height: '80px' }} />

                  <div>
                    <div style={{ display: 'flex', flexDirection: 'row', gap: '0px' }}>
                      <h2 className='h2_main'>Abstergo Ltd.</h2><ul style={{ fontSize: '12px', marginTop: '3px', marginBottom: '1px' }}><li style={{ color: '#1FBBC2', marginLeft: '-8px' }}><span>Active</span></li></ul>
                    </div>
                    <div>
                      <h3 className='h3_main'>City, State</h3>
                      <h3 className='h3_main'>Joined on 02/11/2021</h3>

                      <div style={{ display: 'flex', flexDirection: 'row', gap: '7px', marginTop: '4px' }}>
                        <img src='/images/icons/star.svg' />
                        <h6 className='h6_main' style={{ fontWeight: 'bold', color: '#000' }}>4.8</h6>
                        <h6 className='h6_main'>(2km Away)</h6>
                      </div>
                    </div>
                  </div>
                </div>


                <div className={styles.detail}>
                  <div>
                    <h3 className='h3_main'>Total Jobs</h3>
                    <h2 className='h2_main'>72 Jobs Completed</h2>
                  </div>
                  <div>
                    <h3 className='h3_main'>Tools</h3>
                    <h2 className='h2_main'>I don’t have special tools</h2>
                  </div>
                  <div>
                    <h3 className='h3_main'>Languages</h3>
                    <h2 className='h2_main'>English, Urdu and Arabic</h2>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'row', gap: '3%', padding: '30px 20px 30px 25px' }}>
                  <div>
                    <h1 className='h3_main'>Bank Name</h1>
                    <h1 className='h2_main' style={{ fontSize: '13px', marginTop: '5px' }}>Abu Dhabi Commercial Bank</h1>
                  </div>
                  <div>
                    <h1 className='h3_main'>Bank Account</h1>
                    <h1 className='h2_main' style={{ fontSize: '13px', marginTop: '5px' }}>5193058512410253</h1>
                  </div>
                </div>

              </div>
            </Row>

            {/* Bottom div Box Design */}
            <div className={styles.bottomBox}>
              <div className={styles.boxTitle}>
                <h1 className='h2_main' style={{ fontSize: '18px' }}>Job Detail</h1>
              </div>

              <div className={styles.bottomBoxRow}>
                <h3 className='h3_main'>Lorem ipsum dolor sit amet consectetur. Sed a sit tellus sagittis justo. Turpis lorem amet fames egestas bidum dictum mi. Diam eget tristique enim suspendisse interdum. Viverra imperdiet aliquam sit nam fermentum accumsan mi. Enim molestie vivamus purus vitae lectus dignissim. Gravida ac odio ultricies maecenas tellus nec aliquet consectetur vitae.</h3>
                <div className={styles.swiper}>
                  <Swiper
                    className='service_provider_swiper'
                    navigation={true} modules={[Navigation]}
                    spaceBetween={10}
                    slidesPerView={6}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}

                  >
                    <SwiperSlide className={styles.swiperSlider}><img src='/Images/slide1.png' /></SwiperSlide>
                    <SwiperSlide className={styles.swiperSlider}><img src='/Images/slide2.png' /></SwiperSlide>
                    <SwiperSlide className={styles.swiperSlider}><img src='/Images/slide3.png' /></SwiperSlide>
                    <SwiperSlide className={styles.swiperSlider}><img src='/Images/slide4.png' /></SwiperSlide>
                    {/* <SwiperSlide className={styles.swiperSlider}><img src='/Images/slide5.png' /></SwiperSlide> */}
                    <SwiperSlide className={styles.swiperSlider}><img src='/Images/slide3.png' /></SwiperSlide>
                    <SwiperSlide className={styles.swiperSlider}><img src='/Images/slide1.png' /></SwiperSlide>
                    <SwiperSlide className={styles.swiperSlider}><img src='/Images/slide2.png' /></SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>

          </Container>
        </div>
      </div>
    </>
  )
}

export default ServiceProviderScreen