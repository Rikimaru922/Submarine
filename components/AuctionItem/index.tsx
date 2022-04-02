import styles from './AuctionItem.module.scss'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Button from '@mui/material/Button'

const AuctionItem = ({ imgUrl, nftName, userName, count }) => {
    return (
        <div className={styles.auction_item_wrapper}>
            <img className="img_responsive" src={imgUrl} />
            <div className={styles.item_info}>
                <div className={styles.nft_name}>{nftName}</div>
                <div className={styles.user_name}>
                    <CheckCircleOutlineIcon sx={{ fontSize: "14px" }} />
                    <span>{userName}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "10px" }}>
                    <p>{count} ◎</p>
                    <Button sx={{ padding: "2px 5px 0 5px", background: "#1B6A97", minWidth: "30px", color: "#fff" }}>Buy</Button>
                </div>
            </div>
        </div>
    )
}

export default AuctionItem