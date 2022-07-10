import React from 'react';
import loading from "./../../Assets/Images/other/loading.gif"
import "./../../Assets/Css/loadingpage.css"
const Loadingpage = () => {
    return (
        <div className='load-bg'>
            <div className="load-fg">
                <img src={loading} alt="Loading....." />
            </div>
        </div>
    );
};

export default Loadingpage;