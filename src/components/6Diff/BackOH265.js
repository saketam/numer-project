import React, { Component } from 'react';
import { Card, Input, Button, Table } from 'antd';

const left = {
    textAlign: "left",
}

class BackOH265 extends Component {

    constructor() {
        super()
        this.state = {
            fx: "",
            order:"",
            x: "",
            h: "",
            showOutputCard: false,
            showGraph: false,
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
                        <span>f(x)</span>
                        <Input name="fx" onChange={this.handleInputChange} placeholder="" />
                        <br /><br />

                        <span>order derivative</span>
                        <Input name="order" onChange={this.handleInputChange} placeholder="" />
                        <br /><br />

                        <span>x</span>
                        <Input name="x" onChange={this.handleInputChange} placeholder="" />
                        <br /><br />

                        <span>h</span>
                        <Input name="h" onChange={this.handleInputChange} placeholder="" />
                        <br /><br />

                    </div>
                    <Button onClick={()=>{}}>summit</Button>
                </Card>

            </div>
        );
    }
}

export default BackOH265;