import React from 'react';

const Navigation = () => {
    return (
        <div className="nav_header">
            <nav>
                    <form>
                    <input type="text"/>
                    <button>Search</button>
                    </form>

                    <div className="nav_flex"></div>

               <div className='nav_filter'>
                <select> 
                    <option value="filter">filter</option>
                    <option value="gender">Male</option>
                    <option value="gender">Female</option>
                    <option value="gender">check</option>
                    <option value="gender">cc</option>
                    <option value="gender">Money Order</option>  
                    <option value="payment method">Paypal</option> 
                 </select>
                 </div>
            </nav>
        </div>
    )
}

export default Navigation;