import React, { Component } from 'react';
import { Card, Input, Button, Table } from 'antd';
import math from 'mathjs';







const left = {
    textAlign: "left",
}





var fx = " ";
class Graph11 extends Component {
    constructor() {
        super()
        this.state = {
            fx: "",
            start: "",
            finish: "",
            showOutputCard: false,
            showGraph: false,
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    SavetoVariable(){
        fx = this.state.fx;
        var data  = []
        data['x'] = []
        data['y'] = []
        
      
        for (let i=parseInt(this.state.start) ; i<=parseInt(this.state.finish) ; i++) {
            data['x'].push(i);
            data['y'].push(this.func(i));   
            console.log(typeof(i))      
        }
        console.log("fx "+fx+
                    "\nstart "+  this.state.start+
                    "\nfinish "+ this.state.finish
        )
    }


    func(X) {
        var expr = math.compile(this.state.fx);
        let scope = { x: parseFloat(X) };
        return expr.eval(scope);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
        //console.log(event.target.name + " -> " + event.target.value)
    }
    render() {
        //const { } = this.props;
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

                        <span>start</span>
                        <Input name="start" onChange={this.handleInputChange} placeholder="" />
                        <br /><br />

                        <span>finish</span>
                        <Input name="finish" onChange={this.handleInputChange} placeholder="" />
                        <br /><br />

                    </div>
                    <Button onClick={this.SavetoVariable()}>summit</Button>
                </Card>
               







            </div>

        );
    }
}

export default Graph11;