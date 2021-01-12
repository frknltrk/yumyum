import React from 'react'
import AddRestaurant from '../components/AddRestaurant'
import Header from '../components/Header'
import RestaurantList from '../components/RestaurantList'
import AuthService from "../services/auth.service";
import { Redirect } from 'react-router-dom'

export const Home = () => {
	const user = AuthService.getCurrentUser();

	if (user) {
		return (
        <div>
            <Header />
            <br />
            <RestaurantList />

        </div>
    	)
	}
	else {
		return <Redirect to="/login" />;
	}
    
}

export default Home;