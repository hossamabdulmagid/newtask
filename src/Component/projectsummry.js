import React,{ Component } from 'react';
import Form from 'react-bootstrap/Form'

class Summry extends Component {
    render(){
        return(




            <div class="float-left">
            <div class="col-md-8">
 <h1>Categories </h1>
 
 
 <input placeholder="Search…" type="text"  class="form-control ds-input"/>
 <br />
 
 <Form.Check type="checkbox" label="Apple" />
 <Form.Check type="checkbox" label="Huawei" />
 <Form.Check type="checkbox" label="Lenovo" />
 <Form.Check type="checkbox" label="Dell" />
 <Form.Check type="checkbox" label="Hp" />
 <Form.Check type="checkbox" label="Samsung" />
 <Form.Check type="checkbox" label="Oppo" />
 
 </div>
 
 
 
                  </div>
    
        )
        }
}
export default Summry;