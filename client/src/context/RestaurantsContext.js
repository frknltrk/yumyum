import React , {useState,createContext} from "react";

const RestaurantsContext = createContext();

export const RestaurantsContextPorvider = (props) =>{
    const[restaurants,setRestaurants] = useState([]);
    const[selectedRestaurant,setSelectedRestaurant] = useState(null);
    const addRestaurants = (restaurant) =>{
        setRestaurants([...restaurants,restaurant]);
    }
    
    return(
        <RestaurantsContext.Provider value={{restaurants,setRestaurants,addRestaurants,selectedRestaurant,setSelectedRestaurant}}>
            {props.children}
        </RestaurantsContext.Provider>
    );
};

export {
    RestaurantsContext
};