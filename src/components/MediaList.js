import styles from '../styles/MediaList.module.css';

const MediaList = () => {

    return (
        <>
           <div className={styles.media_list}>
                <img src='left-arrow.svg' alt='Left arrow'/>

                <img src='euronews-logo.svg' alt='Euronews logo'/>

                <div className={styles.media_list__forbes}>
                        <img className={styles.media_list__forbes_logo} src='forbes-logo.svg' alt='Forbes logo'/>

                        <h2 className={styles.media_list__forbes_text}>
                        “Derivative exchange America-based <br/>
                         Cryptolly believes they will continue to <br/>
                         grow in 2020.”</h2>
                </div>

                <img src='newsweek-logo.svg' alt='Newsweek logo'/>

                <img src='right-arrow.svg' alt='Right arrow'/>

           </div>
        </>
    )
}
export default MediaList;