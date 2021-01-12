import React from "react";

const Header = () => {
  return (
    <div className="mb-3 pl-5 pr-5 ml-5 mr-5">
      <form action="">
        <div className="form-row pt-5">
          <div className="col">
          	<div className="input-group input-group-lg">
	              	<input 
	              	  type="text" 
	              	  className="form-control" 
	              	  placeholder="Search"
	              	  aria-label="Large" 
	              	  aria-describedby="inputGroup-sizing-sm"
	              	/>
	            <div className="input-group-append">
	    			<button 
	    			  className="btn btn-outline-secondary" 
	    			  type="button"
	    			>
	    			Search Restaurants
	    			</button>
  				</div>
	        </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Header;
