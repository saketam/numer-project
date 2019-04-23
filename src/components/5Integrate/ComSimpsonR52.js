import React, { Component } from 'react';
import { Card, Input, Button, Table } from 'antd';
import math from 'mathjs';





const left = {
    textAlign: "left",
}




var fx = " ";
class ComSimpsonR52 extends Component {
    constructor() {
        super()
        this.state = {
            fx: "",
            a: "",
            b: "",
            n: "",
            
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

    SavetoVariable() {
        fx = this.state.fx;
        var data = []
        data['x'] = []
        data['y'] = []


        for (let i = parseInt(this.state.xl); i <= parseInt(this.state.xr); i++) {
            data['x'].push(i);
            data['y'].push(this.func(i));
            console.log(typeof (i))
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
            <div>

                <br />

                <Card

                    title={<b>INPUT</b>}
                //onChange={this.handleChange}


                >
                    <div style={left} >
                        <span>f(x)</span>
                        <Input name="fx" onChange={this.handleInputChange} placeholder="" />
                        <br /><br />

                        <span>lower bound</span>
                        <Input name="a" onChange={this.handleInputChange} placeholder="" />
                        <br /><br />

                        <span>upper bound</span>
                        <Input name="b" onChange={this.handleInputChange} placeholder="" />
                        <br /><br />

                        <span>n</span>
                        <Input name="n" onChange={this.handleInputChange} placeholder="" />
                        <br /><br />


                    </div>
                    <Button onClick={this.SavetoVariable()}>summit</Button>
                </Card>







            </div>

        );
    }
}

export default ComSimpsonR52