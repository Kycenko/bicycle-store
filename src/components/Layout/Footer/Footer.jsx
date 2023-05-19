
import styles from './Footer.module.scss'
import {Link} from "react-router-dom";
const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.footerWrapper}>
					<ul className={styles.social}>
						<li className={styles.socialItem}>ССылки
						</li>
						<li className={styles.socialItem}>ссылки
						</li>
					</ul>
				</div>
				</div>
				
		</footer>
	);
};

export default Footer;
