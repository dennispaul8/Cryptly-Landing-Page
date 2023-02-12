import styles from '../styles/Footer.module.css';

const Footer = () => {

    return (
        <>
            <div className={styles.footer_section}>
                <div className={styles.footer_section_firstcolumn}>
                    <img className={styles.footer_section_firstcolumn__img} src='footer-logo.svg' alt='Crptly logo'/>

                    <span className={styles.footer_section_firstcolumn__socials_box}>
                        <img className={styles.footer_section_firstcolumn__socials} src='linkedin.svg' alt='LinkedIn icon'/>
                        <img className={styles.footer_section_firstcolumn__socials_facebook} src='Facebook.svg' alt='Facebook icon'/>
                        <img className={styles.footer_section_firstcolumn__socials} src='Instagram.svg' alt='Instagram icon'/>
                    </span>
                </div>

                <div className={styles.footer_section_secondcolumn}>
                    <h3 className={styles.footer_section_secondcolumn__title}>Quick Links.</h3>

                    <span className={styles.footer_section_secondcolumn__subtitle_box}>
                        <p className={styles.footer_section_secondcolumn__subtitle}>Buy/Sell</p>
                        <p className={styles.footer_section_secondcolumn__subtitle}>Wallets</p>
                    </span>

                    <span className={styles.footer_section_secondcolumn__subtitle_box}>
                        <p className={styles.footer_section_secondcolumn__subtitle}>Trade Now</p>
                        <p className={styles.footer_section_secondcolumn__subtitlee}>Company</p>
                    </span>

                    <p className={styles.footer_section_secondcolumn__subtitle}>Pricing</p>

                </div>

                <div className={styles.footer_section_thirdcolumn}>
                    <h3 className={styles.footer_section_thirdcolumn__title}>Submit for updates.</h3>

                    <p className={styles.footer_section_thirdcolumn__subtitle}>
                        Subscribe to get update and notify our <br /> exchange and products
                    </p>

                    <form className={styles.cta_section__form}>
                        <input className={styles.cta_section__form_input} placeholder="Enter you email address" type="text" />
                        <button type="submit" className={styles.cta_section__form_button}>Send</button>
                    </form>

                </div>



            </div>
            <div className={styles.footer_hr_section}>
                <hr className={styles.footer_hr} />
                <div className={styles.footer_hr_CTP}>
                    <p className={styles.footer_hr_copyright}>Cryptolly ©. All rights reserved.</p>
                    <span className={styles.footer_hr_terms}>
                        <p className={styles.footer_hr_copyright}>Term of Service</p>
                        <img src='Separator.svg' alt='vertical line'/>
                        <p className={styles.footer_hr_copyright}>Privacy Policy</p>
                    </span>
                </div>
            </div>
        </>
    )
}
export default Footer;