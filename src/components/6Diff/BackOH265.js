import React, { Component } from 'react';
import { Card, Input, Button } from 'antd';
import math from 'mathjs';

const left = {
    textAlign: "left",
}

var y, error, exact;
class BackOH265 extends Component {
    constructor() {
        super();
        this.state = {
            fx: "",
            x: 0,
            h: 0,
            degree: 0,
            showOutputCard: false,
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    backoh2(x, h, degree) {
        switch (degree) {
            case 1:
                y = (this.func(x) - this.func(x - (1 * h))) / h
                break;
            case 2:
                y = (this.func(x) - 2 * this.func(x - (1 * h)) + this.func(x - (2 * h))) / Math.pow(h, 2)
                break;
            case 3:
                y = (this.func(x) - 3 * this.func(x - (1 * h)) + 3 * this.func(x - (2 * h)) - this.func(x - (3 * h))) / Math.pow(h, 3)
                break;
            default:
                y = (this.func(x) - 4 * this.func(x - (1 * h)) + 6 * this.func(x - (2 * h)) - 4 * this.func(x - (3 * h)) + this.func(x - (4 * h))) / Math.pow(h, 4)
        }
        exact = this.funcDiff(x)
        error = Math.abs((y - exact) / y) * 100
        this.setState({
            showOutputCard: true
        })
    }

    func(X) {
        var expr = math.compile(this.state.fx);
        let scope = { x: parseFloat(X) };
        return expr.eval(scope);
    }
    funcDiff(X) {
        var expr = math.derivative(this.state.fx, 'x')
        let scope = { x: parseFloat(X) }
        return expr.eval(scope)
    }
    render() {
        return (
            <div>


                <div>
                    <Card
                        title={<b>INPUT</b>}
                        bordered={true}
                        onChange={this.handleInputChange}
                        id="inputCard"
                    >
                        <div style={left}>
                            <span>f(x)</span>
                            <Input name="fx" ></Input>
                            <br /><br />

                            <span>Order derivative</span>
                            <Input name="degree" ></Input>
                            <br /><br />

                            <span>X</span>
                            <Input name="x" ></Input>
                            <br /><br />

                            <span>H</span><Input name="h" >
                            </Input><br /><br />
                        </div>


                        <Button id="submit_button" onClick={
                            () => this.backoh2(parseFloat(this.state.x), parseFloat(this.state.h), parseInt(this.state.degree))
                        }>submit</Button>

                    </Card>

                    {this.state.showOutputCard &&
                        <Card
                            title={<b>OUTPUT</b>}
                            bordered={true}
                            id="outputCard"
                            style={{ position: 'relative', marginBlockStart: "2%" }}
                        >
                            <div style={left}>
                                <p>
                                    Approximate = {y.toFixed(6)}<br />
                                    Exact = {exact.toFixed(6)}<br />
                                    Error(ε) = {error.toFixed(6)}%<br />
                                </p>
                            </div>

                        </Card>
                    }
                </div>
            </div>
        );
    }
}
export default BackOH265;