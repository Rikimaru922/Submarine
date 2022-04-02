import React, { useEffect, useState } from 'react'
import { connect, useSelector } from "react-redux"
import { selectPerson, fetchPeople } from "store/actions/people"
import { handleSidebarOpen, handleSidebarClose } from "store/actions/init"
import styles from '../styles/Home.module.scss'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Sidebar from '../components/Sidebar'
import Button from '../components/Button'
import CollectionItem from '../components/CollectionItem'

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper"
import { url } from 'inspector'
import { styled } from '@mui/material/styles';
SwiperCore.use([Navigation, Pagination, Autoplay])

const SwiperStyle = styled('div')(({ theme }) => ({
  display: "flex",
  alignItems: "center",

  '.swiper-container': {
    height: '600px'
  },

  '.swiper-pagination-bullet': {
    width: '50px',
    height: '10px',

    borderRadius: '50px',
    background: '#000',
    opacity: 0.5
  },
  '.swiper-pagination-bullet-active': {
    background: '#fff',
    opacity: 1
  }
}));

interface popularCollectionsType {
  image: string,
  nftName: string,
  userName: string
}

let bannerList: any[] = [
  {
    image: '/assets/images/banner1.png',
    title: 'Okay Bears',
    content: ['Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world.']
  },
  {
    image: '/assets/images/banner1.png',
    title: 'Okay Bears',
    content: ["Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world."]
  },
  {
    image: '/assets/images/banner1.png',
    title: 'Okay Bears',
    content: ["Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world."]
  },
  {
    image: '/assets/images/banner1.png',
    title: 'Okay Bears',
    content: ["Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world."]
  },
  {
    image: '/assets/images/banner1.png',
    title: 'Okay Bears',
    content: ["Okay Bears is a culture shift. A clean collection of 10,000 diverse bears building a virtuous community that will transcend the internet into the real world."]
  },
]

let popularCollections: popularCollectionsType[] = [
  { image: '/assets/images/1.png', nftName: 'Okay Bears', userName: 'Okay Bears' },
  { image: '/assets/images/2.png', nftName: 'DeGods', userName: 'DeGods' },
  { image: '/assets/images/3.png', nftName: 'CETS ON CRECK', userName: 'CETS ON CRECK' },
  { image: '/assets/images/4.png', nftName: 'Solana Monkey Business', userName: 'Solana Monkey Business' },
  { image: '/assets/images/5.png', nftName: 'SOLgods', userName: 'SOLgods' },
  { image: '/assets/images/6.png', nftName: 'Degen Dojo', userName: 'Degen Dojo' }
]


const breakpoints = {
  "200": {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  "500": {
    slidesPerView: 2,
    spaceBetween: 10,
  },
  "768": {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  "900": {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  "1200": {
    slidesPerView: 5,
    spaceBetween: 9,
  },
  "1536": {
    slidesPerView: 6,
    spaceBetween: 9,
  },
};


const HomePage = ({ sidebarOpen }) => {
  SwiperCore.use([Navigation, Pagination])
  const [timerIndex, setTimerIndex] = React.useState(0)
  let width = sidebarOpen === true ? 199 : 90

  return (
    <div style={{ display: "flex" }}>
      <Sidebar activeKey={0} />
      <div className={styles.homepage_section} style={{ width: `calc(100% - ${width}px)` }}>

        <div className={styles.banner_image}>
          <Header sidebarOpen={sidebarOpen} />
          <SwiperStyle>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop
              loopFillGroupWithBlank
              pagination={{
                clickable: true,
              }}
              // scrollbar={{ draggable: true }}
              modules={[Pagination, Navigation, Autoplay]}
              className="mySwiper"
              onSlideChange={() => { }}
              onSwiper={() => { }}
              autoplay={{ delay: 3000 }}
              speed={1000}
            >
              {
                bannerList.map((item: any, index: number) => (
                  <SwiperSlide key={index}>
                    <Banner item={item} />
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </SwiperStyle>
        </div>
        <div className={styles.popular_collections}>
          <div className={styles.popular_collections_header}>
            <div className={styles.popular_collections_title}>Popular collections</div>
            <div className={styles.popular_collections_right}>
              <div className={styles.time_counter}>
                <ul>
                  <li className={timerIndex === 0 ? styles.active : ''} onClick={() => setTimerIndex(0)}>24h</li>
                  <li className={timerIndex === 1 ? styles.active : ''} onClick={() => setTimerIndex(1)}>07d</li>
                  <li className={timerIndex === 2 ? styles.active : ''} onClick={() => setTimerIndex(2)}>30d</li>
                </ul>
              </div>
              <Button className="btn_viewall" text="VIEW ALL" icon={true} />
            </div>
          </div>
          <div className={styles.popular_collections_list}>
            <Swiper
              slidesPerView={6}
              spaceBetween={9}
              loop
              // navigation
              // modules={[Pagination, Navigation]}
              className="mySwiper1"
              onSlideChange={() => { }}
              onSwiper={() => { }}
              autoplay={true}
              breakpoints={breakpoints}
            >
              {
                popularCollections.map((item: any, index: number) => (
                  <SwiperSlide key={index}>
                    <CollectionItem key={index} imgUrl={item.image} nftName={item.nftName} userName={item.userName} />
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
        </div>

      </div>
    </div >
  )
}

HomePage.getInitialProps = async ({ store }) => {
  await store.dispatch(fetchPeople());
};

const mapStateToProps = state => {

  return {
    people: state.people?.people || [],
    selectedPerson: state.people.selectedPerson,
    sidebarOpen: state.init.sidebarOpen
  };
};

const mapDispatchToProps = { selectPerson, fetchPeople, handleSidebarOpen, handleSidebarClose };

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
