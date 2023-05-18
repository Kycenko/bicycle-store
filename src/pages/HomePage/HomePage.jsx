
import Navigation from "../../components/Navigation/Navigation.jsx";
import Header from "../../components/Header/Header.jsx";
import BicycleItem from "../../components/BicycleItem/BicycleItem.jsx";
import {useGetBicyclesQuery} from "../../store/bicycle.api.js";
import Footer from "../../components/Footer/Footer.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";
import Search from "../../components/Search/Search.jsx";
const HomePage = () => {
	const {data = [], isLoading} = useGetBicyclesQuery()
	if(isLoading) return <div></div>
	
	return (
		<div>
		<Navigation/>
			<Header/>
			<Search/>
			<BicycleItem data={data} key={data.id}/>
			<Pagination/>
			<Footer/>
		</div>
	);
};

export default HomePage;
