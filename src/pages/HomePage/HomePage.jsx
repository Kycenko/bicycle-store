import Navigation from "../../components/Layout/Navigation/Navigation.jsx";
import BicycleItem from "../../components/BicycleItem/BicycleItem.jsx";
import {useGetBicyclesQuery} from "../../store/bicycle.api.js";
import Footer from "../../components/Layout/Footer/Footer.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentPage} from "../../store/initial.slice.js";
import Spinner from "../../components/Layout/Spinner/Spinner.jsx";
import Header from "../../components/shared/Header/Header.jsx";
import FilterSection from "../../components/shared/FilterSection/FilterSection.jsx";

const HomePage = () => {
	const dispatch = useDispatch()
	const {search, currentPage, category} = useSelector(
		state => state.initial
	)
	const body = {
		page: currentPage,
		search: search,
		category: category
	}
	
	const {data = [], isLoading} = useGetBicyclesQuery(body)
	
	const onChangePage = page => {
		dispatch(setCurrentPage(page))
	}
	
	if (isLoading) return <Spinner/>
	
	return (
		<div>
			<Navigation/>
			<Header/>
			<FilterSection/>
			<BicycleItem data={data} key={data.id}/>
			<Pagination currentPage={currentPage} onChangePage={onChangePage}/>
			<Footer/>
		</div>
	);
};

export default HomePage;
