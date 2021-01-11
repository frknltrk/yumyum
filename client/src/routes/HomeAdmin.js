import React from 'react'
import AddRestaurant from '../components/AddRestaurant'
import Header from '../components/Header'
import RestaurantList from '../components/RestaurantListAdmin'

export const Home = () => {
    return (
        <div>
          <h5 className="text-center display-4">Admin Panel</h5>
        	<AddRestaurant />
            <Header />
            <RestaurantList />

        </div>
    )
}

export default Home;