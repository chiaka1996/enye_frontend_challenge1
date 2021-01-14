/* eslint-disable no-unused-expressions */
import React, {useState, useEffect} from 'react';
import Navigation from './Components/navigation.js';
import Record from './Pages/Records.js';
import Pagination from './Components/Pagination';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch} from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import './App.css';

library.add(faSearch)


function App() {
    const [initialRecord, setInitialRecord] = useState([]);
    const [records, setRecords] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(20);
    const [filterText, setFilterText] = useState("filter");
    const [searchInput, setSearchInput] = useState("");
    const [filteredRecord, setFilteredRecord] = useState([]);
    // const [ampArray, setampArray] = useState([]);
    //const [searchRecords, setSearchRecords] = useState([]);

    const fetchRecord = () => {
      axios.get('http://api.enye.tech/v1/challenge/records')
      .then((res) => {
          let result = res.data.records.profiles;
          setInitialRecord([...result]);
          setRecords([...result]);
          });
  }

 
  useEffect(() => {  
     fetchRecord();
       },[]);

   //change current page
   const changePage = pageNumber => {
       setCurrentPage(pageNumber)     
   }
    
   //change filter
   const changeFilter = (filter) => {
     setFilterText(() => filter);
     
    }

    const filterRecords = () => {
      let ampArray = [];
      if(filterText === "filter") {
        setRecords([...records])
      }
      else {
       if(filterText ==="Male" || filterText === "Female" || filterText === "Prefer to skip") {
               records.map((record) =>  record.Gender === filterText ? ampArray.push(record): '');
               setFilteredRecord([...ampArray]);
             }
     
             else{
               records.map((record) => record.PaymentMethod === filterText ? ampArray.push(record): '');
               setFilteredRecord([...ampArray]);
             }
      }
    }

    useEffect(() => {
      filterRecords()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[filterText]);

    //change serch input
    const changeSearchInput = (input) => {
      console.log(input);
        setSearchInput(input);
    }

    const recordSearch = () => {
      let search = searchInput.length === 0 ? initialRecord : records.filter(post =>  {
        let fullName = post.FirstName + ' ' + post.LastName ;

       return fullName.toLowerCase().indexOf(searchInput.toLowerCase()) >= 0 ;
       });
         
       setRecords([...search]);
    }

    useEffect(() => {
      recordSearch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[searchInput]);


    //get current posts    
    let indexOfLastPost = currentPage * postsPerPage;
    let indexOfFirstPost = indexOfLastPost - postsPerPage;
    let currentPost = filterText === "filter" ? records.slice(indexOfFirstPost, indexOfLastPost) : filteredRecord.slice(indexOfFirstPost, indexOfLastPost);

    

  return (
    <div className="App">
      <Navigation changeFilter={changeFilter} changeSearchInput={changeSearchInput} searchInput={searchInput} />
      <Record currentPost={currentPost} />
      <Pagination totalPost={ filterText ==="filter" ? records.length : filteredRecord.length}
       postsPerPage={postsPerPage} changePages={changePage} />
    </div>
  );
}

export default App;