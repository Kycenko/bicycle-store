import Footer from "../../components/Layout/Footer/Footer.jsx";
import Navigation from "../../components/Layout/Navigation/Navigation.jsx";
import {useParams} from "react-router-dom";
import {useAddCommentMutation, useGetSingleBicycleQuery} from "../../store/bicycle.api.js";
import styles from './BicyclePage.module.scss'
import Spinner from "../../components/Layout/Spinner/Spinner.jsx";
import {useState} from "react";
import AddBicycleInFavorite from "../../components/ui/buttons/AddBicycleInFavorite/AddBicycleInFavorite.jsx";
import AddBicycleInCart from "../../components/ui/buttons/AddBicycleInCart/AddBicycleInCart.jsx";

const BicyclePage = () => {
	const {id} = useParams()
	const {data = [], isLoading} = useGetSingleBicycleQuery(id)
	const [addComment] = useAddCommentMutation()
	const [currentIndex, setCurrentIndex] = useState(0)
	const [newComment, setNewComment] = useState('')
	const handleAddComment = async () => {
		await addComment({title: newComment, name: newComment}).unwrap()
		setNewComment('')
		
	}
	
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
					<div className={styles.videoContainer}>
						<iframe
							src={`${data.video}`}
							title="Видео"
							allowFullScreen
						></iframe>
					</div>
					<div className={styles.productContainer}>
						<div className={styles.imageContainer}>
							<img src={`${data.sliderImages[currentIndex]}`} alt={data.title}/>
							<div className={styles.arrowContainer}>
								<div onClick={prevSlide} className={styles.leftArrow}>
									←
								</div>
								<div onClick={nextSlide} className={styles.rightArrow}>
									→
								</div>
							</div>
						</div>
						<div className={styles.productInfo}>
							<h2>{data.title}</h2>
							<div className={styles.cartInfo}>
								<p>Описание товара</p>
								<AddBicycleInFavorite data={data}/>
							</div>
							<div className={styles.favoriteInfo}>
								<p>Цена: {data.price} бел.руб</p>
								<AddBicycleInCart data={data}/>
							</div>
						</div>
					</div>
				</div>
				<div><input type="text" value={newComment} onChange={(e) => setNewComment(e.target.value)}/>
					<button onClick={handleAddComment}>Добавить</button>
				</div>
			</div>
			<Footer/>
		</>
	
	);
};

export default BicyclePage;
