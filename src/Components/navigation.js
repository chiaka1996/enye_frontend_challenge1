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
                    <option value="gender">Gender</option>  
                    <option value="payment method">Payment Method</option> 
                 </select>
                 </div>
            </nav>
        </div>
    )
}

export default Navigation;