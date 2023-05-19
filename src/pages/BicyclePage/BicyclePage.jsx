import Footer from "../../components/Layout/Footer/Footer.jsx";
import Navigation from "../../components/Layout/Navigation/Navigation.jsx";
import {useParams} from "react-router-dom";
import {useGetSingleBicycleQuery} from "../../store/bicycle.api.js";
import styles from './BicyclePage.module.scss'
import Spinner from "../../components/Layout/Spinner/Spinner.jsx";

const BicyclePage = () => {
	const {id} = useParams()
	const {data = [], isLoading} = useGetSingleBicycleQuery(id)
	
	if (isLoading) return <Spinner/>
	
	return (
		<>
			<Navigation/>
			<div className={styles.container}>
				<div className={styles.productPage}>
					<div className={styles.productPageVideo}>
						<iframe
							width="560"
							height="315"
							src={`${data.video}`}
							title="Видео"
							allowFullScreen
						></iframe>
					</div>
					<div className={styles.productPageDetails}>
						<div className={styles.productPageImage}>
							<img src={`${data.image}`} alt="Товар" />
						</div>
						<div className={styles.productPageInfo}>
							<h2>{data.title}</h2>
							<p>Описание товара</p>
							<p>{data.price} бел.руб</p>
						</div>
					</div>
				</div>
			</div>
			
			<Footer/>
		</>
	);
};

export default BicyclePage;
