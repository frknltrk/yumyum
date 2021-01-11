import React from "react";

const Header = () => {
  return (
    <div className="mb-3 pl-5 pr-5 ml-5 mr-5">
      <form action="">
        <div className="form-row pt-5">
          <div className="col">
          	<div class="input-group input-group-lg">
	              	<input 
	              	  type="text" 
	              	  class="form-control" 
	              	  placeholder="Search"
	              	  aria-label="Large" 
	              	  aria-describedby="inputGroup-sizing-sm"
	              	/>
	            <div class="input-group-append">
	    			<button 
	    			  class="btn btn-outline-secondary" 
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
