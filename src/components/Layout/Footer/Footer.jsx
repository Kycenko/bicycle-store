import styles from './Footer.module.scss'
import {Link} from "react-router-dom";

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.footerWrapper}>
					<ul className={styles.social}>
						<li className={styles.socialItem}>
							<Link target='_blank' to='https://github.com/Kycenko'>
								<img src="/public/icons/github-svgrepo-com.svg" alt=""/>
							</Link>
						
						</li>
					
					</ul>
					<ul className={styles.links}>
						<li className={styles.link}><Link to='/'>Главная</Link></li>
						<li className={styles.link}><Link to='/favorites'>Избранное</Link></li>
						<li className={styles.link}><Link to='/cart'>Корзина</Link></li>
						<li className={styles.link}><Link to='/comments'>Отзывы</Link></li>
					</ul>
				</div>
			</div>
		
		</footer>
	);
};

export default Footer;
