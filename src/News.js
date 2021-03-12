import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
const News = ({name='asa',comment,id,link,search}) => {

const [display,setDisplay] = useState(false);

    return (
        <>




        <div className="container-fluid" onLoad={()=>setDisplay(true)}>
            <div className="row border pt-2 pb-2">

                <div className="col-md-6"  >
                   
                      {name}
                </div>
                
                <div className="col-md-6">
                    Author: {comment}
                </div>

               
            </div>
           

        </div>
     



        
            </>
    );
}

export default News;
