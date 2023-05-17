import styles from './HomePage.module.scss'
import Navigation from "../../components/Navigation/Navigation.jsx";
const HomePage = () => {
	return (
		<div className={styles.container}>
		<Navigation/>
		</div>
	);
};

export default HomePage;
