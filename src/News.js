import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
const News = ({name,comment,id,link,search}) => {
const [display,setDisplay] = useState(false);
    return (
        <>
{ name.toLowerCase().includes(search.toLowerCase())?


        <div className="container-fluid" onLoad={()=>setDisplay(true)}>
            <div className="row border pt-2 pb-2">

                <div className="col-md-4 "  >
                   
                      {name}
                </div>
                <div className="col-md-4">
               

                </div>
                <div className="col-md-4">
                    Author: {comment}
                </div>

               
            </div>
           

        </div>
        : null
}



        
            </>
    );
}

export default News;
