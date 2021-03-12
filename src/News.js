import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
const News = ({name='asa',comment,id,link,search,type}) => {



    return (
        <>




        <div className="container-fluid" >
            <div className="row border pt-2 pb-2">

                <div className="col-md-6"  >
                   
                      {name}
                </div>
                
                <div className="col-md-6 align-items-center justify-content-center">
                    Author: {comment}
                </div>
                <div className="col-md-4 mt-4" >
                    Type Of Post: {type}
                </div>

               
            </div>
           

        </div>
     



        
            </>
    );
}

export default News;
