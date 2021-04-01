
import axios from 'axios';
import React from 'react';


const CatLayout =({blogs})=>{


    

    return (
        <React.Fragment>
            <h1> categories </h1>
            
        </React.Fragment>
    );
}

CatLayout.getInitialProps = async (query)=>{

    const response = await axios.post(`${API}/blogs-categories`);

    return {
        query,
        blogs:response.data
    };
}

export default CatLayout;