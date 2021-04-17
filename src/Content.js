import React, { Component } from "react";
import SCP from "./data.json";



const SCPdata = SCP.map(

    (SCP) =>
    {
        return(
            <div className="col-8" key={SCP.id}>
               
                   <h1 className="card-text">{SCP.h1}</h1>
                   <h2 className="card-text">{SCP.h2}</h2>
                   <img src={SCP.image} class="img-thumbnail" />
                    <div className="card-body">
                    <h3 className="card-text">{SCP.h3}</h3>
                   <h4 className="card-text">{SCP.h4}</h4>
                        <p className="card-text-primary">{SCP.p}</p>
                        <p className="card-text-primary">{SCP.p1}</p>
                        <h5 className="card-text">{SCP.h5}</h5>
                        <h6 className="card-text">{SCP.h6}</h6>
                        <p className="card-text-primary">{SCP.p2}</p>
                        <p className="card-text-primary">{SCP.p3}</p>
                        <p className="card-text-primary">{SCP.p4}</p>
                        <p className="card-text-primary">{SCP.code}</p>
                        <p className="card-text-primary">{SCP.code1}</p>
                        <p className="card-text-primary">{SCP.code2}</p>
                        <p className="card-text-primary">{SCP.code3}</p>
                        <p className="card-text-primary">{SCP.code4}</p>
                        <p className="card-text-primary">{SCP.code5}</p>
                        <p className="card-text-primary">{SCP.code6}</p>
                        <p className="card-text-primary">{SCP.code7}</p>
                        <p className="card-text-primary">{SCP.code8}</p>
                        <p className="card-text-primary">{SCP.code9}</p>
                        <p className="card-text-primary">{SCP.code10}</p>
                        <p className="card-text-primary">{SCP.code11}</p>
                        <p className="card-text-primary">{SCP.code12}</p>

                        
                       
                    </div>
                </div>
            
        );
    }

);

class Content extends Component
{
    render()
    {
        return(
            <section class="text-center">
            <div className="album py-8">
                
                
                 <center>  {SCPdata} </center> 
                    
                    </div>
                    </section>
                    
                
              
            
        );
    }
}

export default Content;