import React, { Component } from 'react';
import { Card, Input, Button } from 'antd';

const left = {
    textAlign: "left",
}

class NewtonDD31 extends Component {

    constructor() {
        super()
        this.state = {
            Npoint: "",           
            x: "",
            InterpolatePoint: "",
            
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
        //console.log(event.target.name + " -> " + event.target.value)
    }
    render() {
       
        return (
            <div>
                
                <br />

                <Card
                    
                    title={<b>INPUT</b>}
                //onChange={this.handleChange}

                >
               
                    <div style={left}>
                        <span>number of point</span>
                        <Input name="Npoint" onChange={this.handleInputChange} placeholder="" />
                        <br /><br />

                        <span>x</span>
                        <Input name="x" onChange={this.handleInputChange} placeholder="" />
                        <br /><br />

                        <span>interpolate point</span>
                        <Input name="InterpolatePoint" onChange={this.handleInputChange} placeholder="" />
                        <br /><br />

                    </div>
                    <Button onClick={()=>{}}>summit</Button>
                </Card>

            </div>
        );
    }
}

export default NewtonDD31;