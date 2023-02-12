import styles from '../styles/Navbar.module.css';

const Navbar = () => {
    
  
return (
      <nav className={styles.nav}>
        <div className={styles.nav_logo__box}>
            <img
            src="/Logo.png"
            alt='Cryptly logo'
            className={styles.nav_logo}
            />
        </div>
        

         <div className={styles.nav_links}>
            <ul className={styles.nav_links_ul}>
                <li className={styles.nav_links_li}>
                    <a href='/#' className={styles.nav_links_link}>
                        Exchange
                    </a>
                </li>

                <li className={styles.nav_links_li}>
                    <a href='/#' className={styles.nav_links_link}>
                    Pricing
                    </a>
                </li>

                <li className={styles.nav_links_li}>
                    <a href='/#' className={styles.nav_links_link}>
                    Wallet
                    </a>
                </li>

                <li className={styles.nav_links_li}>
                    <a href='/#' className={styles.nav_links_link}>
                    Company
                    </a>
                </li>

                <li className={styles.nav_links_li}>
                    <a href='/#' className={styles.nav_links_link}>
                    Blog
                    </a>
                </li>
            </ul>
         </div>

         <div className={styles.buttons}>
            <button className={styles.buttons_signin}>
                Sign In
            </button>

            <button className={styles.buttons_getstarted}>
                Get Started
            </button>
         </div>
      </nav>
)
}    

export default Navbar;