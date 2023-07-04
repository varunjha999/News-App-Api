import React from 'react';
import Stories from "./components/Stories.js";
import "./index.css"

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