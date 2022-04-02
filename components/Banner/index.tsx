import React from 'react'
import styles from './Banner.module.scss'
import Button from '../Button'
import Link from 'next/link'
import Typography from '@mui/material/Typography'
const Banner = ({ item }) => {

    return (
        <div style={{
            padding: "180px 20px 50px 0", backgroundImage: "url('assets/images/banner_dark.jpg')", backgroundSize: "cover", backgroundPosition: "center center", backgroundRepeat: "no-repeat"
        }}>
            <div className={styles.banner_section}>
                {/* <div className={styles.banner_left} style={{ backgroundImage: "url(" + item.image + ")" }}> */}
                <div>
                    <img src={item.image} alt="" />
                </div>
                <div className={styles.banner_right}>
                    <div>
                        <Link href="#">
                            <Typography sx={{ fontSize: "12px" }} color="#7FF9E6">FEATURED COLLECTION</Typography>
                        </Link>
                    </div>
                    <dl style={{ color: "#fff" }}>
                        <dt>
                            <h1 style={{ fontSize: "48px" }}>{item.title}</h1>
                        </dt>
                        <dd>
                            {
                                item.content.map((_item, _index) => (
                                    <p key={_index}>{_item}</p>
                                ))
                            }
                        </dd>
                    </dl>
                    <div style={{ marginTop: "-30px" }}>
                        <Button className="btn_explore" text="EXPLORE" icon={true} link="/collection" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner