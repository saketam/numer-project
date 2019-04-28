import React, { Component } from 'react';
import { Card, Input, Button, Table } from 'antd';
import math from 'mathjs';
var Algebrite = require('algebrite')

const left = {
    textAlign: "left",
}

var I, exact, error;
class ComSimpsonR52 extends Component {
    constructor() {
        super();
        this.state = {
            fx: "",
            a: 0,
            b: 0,
            n: 0,
            showOutputCard: false,
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    func(X) {
        var expr = math.compile(this.state.fx);
        let scope = { x: parseFloat(X) };
        return expr.eval(scope);
    }

    simpson(a, b, n) {
        const h = (b - a) / n
        I = (h / 3) * (this.func(a) + this.func(b) + (4 * this.summationFunction(1, n, h)) + (2 * this.summationFunction(2, n, 2 * h)))
        console.log(I)
        exact = this.exactIntegrate(a, b)
        error = Math.abs((exact - I) / exact) * 100

       
        
        this.setState({
            showOutputCard: true
        })
    }
    exactIntegrate(a, b) {
        var expr = math.compile(Algebrite.integral(Algebrite.eval(this.state.fx)).toString())
        return expr.eval({ x: b }) - expr.eval({ x: a })

    }
    summationFunction(start, n, h) {
        var sum = 0
        if (start % 2 === 0) {
            n += 2
        }
        var xi = parseInt(this.state.a) + h
        for (var i = start; i < n;) {
            i += 2
            sum += this.func(xi)
            xi = parseInt(this.state.a) + i * h
        }
        return sum
    }


    render() {
        //const { } = this.props;
        return (
            <div>

                <br />

                <Card

                    title={<b>INPUT</b>}                   
                    onChange={this.handleInputChange}

                >
                    <div style={left} >
                        <span>f(x)</span>
                        <Input name="fx" placeholder="" />
                        <br /><br />

                        <span>lower bound</span>
                        <Input name="a" placeholder="" />
                        <br /><br />

                        <span>upper bound</span>
                        <Input name="b" placeholder="" />
                        <br /><br />

                        <span>n</span>
                        <Input name="n" placeholder="" />
                        <br /><br />
                    </div>

                    <Button id="submit_button" onClick= {
                                ()=>this.simpson(parseInt(this.state.a), parseInt(this.state.b), parseInt(this.state.n))}  
                    >Submit</Button>
                        

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
                                    Approximate = {I.toFixed(6)} <br />
                                    Exact = {exact.toFixed(6)}<br />
                                    Error(ε) = {error.toFixed(6)}%<br />
                                </p>
                            </div>

                        </Card>
                    }
            </div>

        );
    }
}

export default ComSimpsonR52