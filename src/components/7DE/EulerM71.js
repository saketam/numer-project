import React, { Component } from 'react';
import { Card, Input, Button, Table } from 'antd';
import math from 'mathjs';





const left = {
    textAlign: "left",
}





var fx = " ";
class EulerM71 extends Component {
    constructor() {
        super()
        this.state = {
            fx: "",
            x0: "",
            y0: "",
            start: "",
            finish: "",
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

    SavetoVariable(){
        fx = this.state.fx;
        var data  = []
        data['x'] = []
        data['y'] = []
        
      
        for (let i=parseInt(this.state.xl) ; i<=parseInt(this.state.xr) ; i++) {
            data['x'].push(i);
            data['y'].push(this.func(i));   
            console.log(typeof(i))      
        }
        
    }


    func(X) {
        var expr = math.compile(this.state.fx);
        let scope = { x: parseFloat(X) };
        return expr.eval(scope);
    }

    
    render() {
        //const { } = this.props;
        return (
            <div       >

                <br />

                <Card           
                      
                    title={<b>INPUT</b>}
                //onChange={this.handleChange}

           
                >
                    <div style={left} >
                        <span>f(x)</span>
                        <Input name="fx" onChange={this.handleInputChange} placeholder="" />
                        <br /><br />

                        <span>x<sub>0</sub></span>
                        <Input name="x0" onChange={this.handleInputChange} placeholder="" />
                        <br /><br />

                        <span>y<sub>0</sub></span>
                        <Input name="y0" onChange={this.handleInputChange} placeholder="" />
                        <br /><br />

                        <span>start</span>
                        <Input name="start" onChange={this.handleInputChange} placeholder="" />
                        <br /><br />

                        <span>finish</span>
                        <Input name="finish" onChange={this.handleInputChange} placeholder="" />
                        <br /><br />

                        <span>h</span>
                        <Input name="h" onChange={this.handleInputChange} placeholder="" />
                        <br /><br />

                    </div>
                    <Button onClick={this.SavetoVariable()}>summit</Button>
                </Card>







            </div>

        );
    }
}

export default EulerM71;