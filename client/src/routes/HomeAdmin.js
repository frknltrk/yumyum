import React from 'react'
import AddRestaurant from '../components/AddRestaurant'
import Header from '../components/Header'
import RestaurantList from '../components/RestaurantListAdmin'
import AuthService from "../services/auth.service";
import { Redirect } from 'react-router-dom'

export const Home = () => {
	const user = AuthService.getCurrentUser();

	if (user) {
		if (user.roles.includes("ROLE_ADMIN")) {
			return (
				<div>
		          	<h5 className="text-center display-4">Admin Panel</h5>
		        	<AddRestaurant />
		            <Header />
		            <RestaurantList />

        		</div>
        	);
		} 
		else {
			return (
		    	<div>
		    		<h5 className="text-center display-5">
		    		You dont have permission to reach this page.
		    		</h5>
		    	</div>
		    )
    	}
    }
    else {
    	return <Redirect to="/login" />;
    }
}

export default Home;