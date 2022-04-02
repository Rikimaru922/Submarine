import styles from './CollectionItem.module.scss'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Link from 'next/link'

const CollectionItem = ({ imgUrl, nftName, userName }) => {
    return (
        <Link href="/collection">
            <div className={styles.collection_item_wrapper}>
                <img className="img_responsive" src={imgUrl} />
                <div className={styles.item_info}>
                    <div className={styles.nft_name}>{nftName}</div>
                    <div className={styles.user_name}>
                        {/* <img src="/assets/images/checked.png" alt="" /> */}
                        <CheckCircleOutlineIcon sx={{ fontSize: "14px" }} />
                        <span>{userName}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CollectionItem