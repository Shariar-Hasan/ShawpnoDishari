import React from 'react';
import wrongPathSource from "./../../Assets/Images/other/path_error.gif"
const NotAvailable = () => {
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6 mx-auto my-5 text-center shadow">
                    <h2 className='display-3 text-warning'>Path Error</h2>
                    <p className="lead">You have lost your destination</p>
                    <p className="lead">Please select the right path</p>
                    <img src={wrongPathSource} alt={"wrong path"} />

                </div>
            </div>
        </div>
    );
};

export default NotAvailable;