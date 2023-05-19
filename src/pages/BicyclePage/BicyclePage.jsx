import Footer from "../../components/Layout/Footer/Footer.jsx";
import Navigation from "../../components/Layout/Navigation/Navigation.jsx";
import {useParams} from "react-router-dom";
import {useGetSingleBicycleQuery} from "../../store/bicycle.api.js";
import styles from './BicyclePage.module.scss'
import Spinner from "../../components/Layout/Spinner/Spinner.jsx";
import {useState} from "react";

const BicyclePage = () => {
	const {id} = useParams()
	const {data = [], isLoading} = useGetSingleBicycleQuery(id)
	const [currentIndex, setCurrentIndex] = useState(0)
	
	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0
		const newIndex = isFirstSlide ? data.sliderImages.length - 1 : currentIndex - 1
		setCurrentIndex(newIndex)
	}
	
	const nextSlide = () => {
		const isLastSlide = currentIndex === data.sliderImages.length - 1
		const newIndex = isLastSlide ? 0 : currentIndex + 1
		setCurrentIndex(newIndex)
	}
	if (isLoading) return <Spinner/>
	
	return (
		<>
			<Navigation/>
			<div className={styles.container}>
				<div className={styles.productPage}>
					<div>
						<iframe
							width="600"
							height="400"
							src={`${data.video}`}
							title="Видео"
							allowFullScreen
						></iframe>
					</div>
					<div className={styles.productPageDetails}>
						
						<div className={styles.productPageImage}>
							<img src={`${data.sliderImages[currentIndex]}`} alt={data.title}/>
						</div>
						<div>
							{data.sliderImages.map(image => (
								<div key={image.id}>
									<div className={styles.sliderStyle}>
										<div onClick={prevSlide} className={styles.leftArrow}>
											←
										</div>
										<div onClick={nextSlide} className={styles.rightArrow}>
											→
										</div>
									</div>
								</div>
							))}
						</div>
						<div className={styles.productPageInfo}>
							<h2>{data.title}</h2>
							<p>Описание товара</p>
								<p>Цена: {data.price} бел.руб</p>
						</div>
					</div>
				</div>
			</div>
			
			<Footer/>
		</>
	);
};

export default BicyclePage;
