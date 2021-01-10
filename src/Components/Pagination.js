import React, {useState} from 'react'

const Pagination = ({totalPost, postsPerPage, changePages}) => {
    let pageNumbers = [];
    const [clickedPage, setClickedPage] = useState(1);

    for (let i=1; i <= Math.ceil(totalPost / postsPerPage); i++) {
            pageNumbers.push(i);
         }

         const active_list = {
            color: 'white',
            backgroundColor: '#30CFE9'
          };

          const numberList = {
            padding: '10px',
            border: '1px solid #30CFE9',
            marginRight: '1%',
            backgroundColor: 'white',
            color: 'black'
          }
      

    return (
        <div className="pagination">
            {pageNumbers.map((numbers,i)=> <span key={numbers} style={clickedPage === i+1 ? active_list : numberList}
             onClick={() => {
                 setClickedPage(numbers)
                changePages(numbers)}}>{numbers}</span>
            )
            }
        </div>
    )
}

export default Pagination;