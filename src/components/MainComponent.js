/** @format */

import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from "react-redux-form";

import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Menu from "./MenuComponent";
import Contact from "./ContactComponent";
import DishDetail from "./DishDetailComponent";
import Home from "./HomeComponent";
import About from "./AboutComponent";
import {
	fetchDishes,
	fetchComments,
	fetchPromos,
	fetchLeaders,
} from "../redux/actions/actionCreators";

// Todo : hàm này định nghĩa phần dữ liệu từ kho chung, cái mà component này muốn lấy và map chúng như là các key của props truyền vào component , điều này cho phép chúng ta chỉ lấy phần dữ liệu chúng ta cần từ store , và chỉ khi phần dữ liệu đó thay đổi thì component của chúng ta mới bị re-render
const mapStateToProps = (state) => {
	return {
		dishes: state.dishes,
		comments: state.comments,
		promotions: state.promotions,
		leaders: state.leaders,
	};
};

// Todo : hàm này định nghĩa sẽ định  nghĩa các trường hợp dispatch từ server và đưa nó vào Component thông qua props truyền vào, điều này có được nhờ vào hàm connect từ react-redux
function mapDispatchToProps(dispatch) {
	return {
		fetchDishesProp: () => {
			dispatch(fetchDishes());
		},
		fetchCommentsProp: () => {
			dispatch(fetchComments());
		},
		fetchPromosProp: () => {
			dispatch(fetchPromos());
		},
		fetchLeadersProp: () => {
			dispatch(fetchLeaders());
		},
		resetFeedbackForm: () => {
			dispatch(actions.reset("feedback"));
		},
	};
}

function Main(props) {
	// Todo : Lần đầu khi Main được mount vào DOM thì hàm trong đối số Effect của useEffect sẽ được gọi(side Effect) Hàm này chạy sẽ chạy hàm fetchDishes()(là một Thunk creator) hàm này chạy sẽ trả về một thunk action(là một hàm với đối số thứ nhất là dispatch) trong hàm này chúng ta sẽ gọi lại dispatch theo từng thời điểm khác nhau để dispatch các action khác nhau tới store

	// Todo : Main được mount vào DOM , useEffect được chạy,props.fetchDishesProp() được chạy , sau đó  dispatch(fetchDishes()) được chạy , trước đó fetchDishes() chạy trả về hàm:
	// (dispatch) => {
	// 	dispatch(dishesLoading(true));

	// 	setTimeout(() => {
	// 		dispatch(addDishes(DISHES));
	// 	}, 2000);
	// };
	// Todo : hàm này là một thunkAction , việc import thunk từ redux-thunk cho phép chúng ta tuyền vào đối số của hàm dispatch là một hàm thay vì chỉ truyền vào một object thuần túy , hàm chúng ta truyền vào sẽ có đối số thứ nhất là hàm dispatch(là hàm dispatch từ react-redux) và đối số thứ 2 là hàm getstate dùng đẻ lấy ra state hiện tại của store ,trong HÀM ThunkAction này sẽ xử lý các logic bất đồng bộ trước khi thật sự dispatch một action , hoặc chungs ta có thể dispatch nhiều action tới store

	useEffect(() => {
		console.log("test");
		props.fetchDishesProp();
		props.fetchCommentsProp();
		props.fetchPromosProp();
		props.fetchLeadersProp();
	}, []);

	const DishWithId = () => {
		const match = useParams();
		return (
			<DishDetail
				isLoading={props.dishes.isLoading}
				errorMsg={props.dishes.errorMsg}
				selectedDish={
					props.dishes.dishes.filter((dish) => {
						return dish.id === parseInt(match.dishID, 10);
					})[0]
				}
				comments={props.comments.comments.filter((comment) => {
					return comment.dishId === parseInt(match.dishID, 10);
				})}
				commentsErrorMsg={props.comments.errorMsg}
				totalNumberOfComments={props.comments.comments.length}
			/>
		);
	};

	console.log(props.dishes.dishes);
	console.log(props.leaders.leaders);
	console.log(props.promotions.promotions);

	return (
		<div>
			<div className="container">
				<Header />
				<Routes>
					<Route
						path="/menu"
						exact
						element={
							<Menu
								dishesLoading={props.dishes.isLoading}
								dishesErrorMsg={props.dishes.errorMsg}
								dishes={props.dishes.dishes}
							/>
						}
					/>
					<Route
						path="/home"
						element={
							<Home
								dishesLoading={props.dishes.isLoading}
								dishesErrorMsg={props.dishes.errorMsg}
								dish={props.dishes.dishes.filter((dish) => dish.featured)[0]}
								promosLoading={props.promotions.isLoading}
								promosErrorMsg={props.promotions.errorMsg}
								promotion={props.promotions.promotions.filter((pro) => pro.featured)[0]}
								leader={props.leaders.leaders.filter((leader) => leader.featured)[0]}
								leadersLoading={props.leaders.isLoading}
								leadersErrorMsg={props.leaders.errorMsg}
							/>
						}
					/>
					<Route exact path="/menu" element={<Menu dishes={props.dishes} />} />
					<Route
						index
						element={
							<Home
								dishesLoading={props.dishes.isLoading}
								dishesErrorMsg={props.dishes.errorMsg}
								dish={props.dishes.dishes.filter((dish) => dish.featured)[0]}
								promosLoading={props.promotions.isLoading}
								promosErrorMsg={props.promotions.errorMsg}
								promotion={props.promotions.promotions.filter((pro) => pro.featured)[0]}
								leader={props.leaders.leaders.filter((leader) => leader.featured)[0]}
								leadersLoading={props.leaders.isLoading}
								leadersErrorMsg={props.leaders.errorMsg}
							/>
						}
					/>
					<Route
						exact
						path="/contactus"
						element={<Contact resetFeedbackForm={props.resetFeedbackForm} />}
					/>
					<Route path="/menu/:dishID" element={<DishWithId />}></Route>
					<Route path="/aboutus" element={<About leaders={props.leaders.leaders} />} />
				</Routes>
				<Footer />
			</div>
		</div>
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
