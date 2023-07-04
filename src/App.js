import React from 'react';
import Stories from "./components/Stories.js";
// import Search from "./components/Search.js";
// import Pagination from "./components/Pagination.js"; 
import './App.css';

const App = () => {
    return (
        <div>
            <h1>Welcome to Tech News</h1>
            {/*<Search />*/}
            {/*<Pagination />*/}
            <Stories />
        </div> 
    );
};

export default App;