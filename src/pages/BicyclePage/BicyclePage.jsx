import Footer from "../../components/Footer/Footer.jsx";
import Navigation from "../../components/Navigation/Navigation.jsx";
import {useParams} from "react-router-dom";
import {useGetSingleBicycleQuery} from "../../store/bicycle.api.js";
import styles from './BicyclePage.module.scss'
const BicyclePage = () => {
	const {id} = useParams()
	const {data = [], isLoading} = useGetSingleBicycleQuery(id)
	
	if (isLoading) return <div></div>
	
	return (
		<>
			<Navigation/>
			<div className={styles.container}>
				<div className={styles.bicycleContainer}>
					{<img src={`${data.image}`} alt=""/>}
				</div>
			</div>
			<Footer/>
		</>
	);
};

export default BicyclePage;
