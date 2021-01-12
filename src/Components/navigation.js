import React, {useState} from 'react';

const Navigation = ({changeFilter, changeSearchInput, searchInput}) => {
    const [textOption, setTextOption] = useState('filter');


    const changeInput = e => {
        let value = e.target.value
        setTextOption(value);
        changeFilter(value);
    }
    return (
        <div className="nav_header">
            <nav>
                    <form>
                    <input type="text" placeholder="Search" value={searchInput} onChange={(e)=> changeSearchInput(e.target.value)}/>
                    </form>

                    <div className="nav_flex"></div>

               <div className='nav_filter'>
                <select onChange={(e)=> changeInput(e)}  value={textOption}> 
                    <option value="filter">filter</option>
                    <option value="Male">gender: Male</option>
                    <option value="Female">gender: Female</option>
                    <option value="Prefer to skip">gender: Prefer to skip</option>
                    <option value="check">PaymentMethod: check</option>
                    <option value="cc">PaymentMethod: cc</option>
                    <option value="money order">PaymentMethod: money order</option>  
                    <option value="paypal">PaymentMethod: paypal</option> 
                 </select>
                 </div>
            </nav>
        </div>
    )
}

// onChange={(e) => { 
//     setTextOption(e.target.value)
//     
//     }} value={textOption}

export default Navigation;