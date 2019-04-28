import React, { Component } from 'react';
import { Card, Input, Button, Table } from 'antd';
import math from 'mathjs';
import Plot from 'react-plotly.js';


const left = {
    textAlign: "left",
}

var dataInTable;
const columns = [
    {
        title: "Iteration",
        dataIndex: "iteration",
        key: "iteration"
    },
    {
        title: "X",
        dataIndex: "x",
        key: "x"
    },
    {
        title: "Error",
        key: "error",
        dataIndex: "error"
    }
];

const xValues = math.range(-10, 10, 0.5).toArray();
var fx = " ";

class NewtonR15 extends Component {
    constructor() {
        super()
        this.state = {
            fx: "",
            x0: "",
            showOutputCard: false,
            showGraph: false,
        }
        this.newton = this.newton.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    newton(xold) {
        fx = this.state.fx;
        var xnew = 0;
        var epsilon= parseFloat(0.000000);
        var n=0;
        var data  = []
        data['x'] = []
        data['error'] = []

        do {
            xnew = xold - (this.func(xold)/this.funcDiff(xold));
            epsilon = this.error(xnew, xold)
            data['x'][n] =  xnew.toFixed(8);
            data['error'][n] = Math.abs(epsilon).toFixed(8);
            n++;  
            xold = xnew;

        } while (Math.abs(epsilon) > 0.000001);

        this.createTable(data['x'], data['error']);

        this.setState({
            showOutputCard: true,
            showGraph: true
        })
    }

    createTable(x, error) {
        dataInTable = []
        for (var i = 0; i < x.length; i++) {
            dataInTable.push({
                iteration: i + 1,
                x: x[i],
                error: error[i]
            });
        }

    }
    func(X) {
        var expr = math.compile(this.state.fx);
        let scope = { x: parseFloat(X) };
        return expr.eval(scope);
    }
    funcDiff(X) {
        var expr = math.derivative(this.state.fx, 'x');
        let scope = {x:parseFloat(X)};
        return expr.eval(scope); 
    }
    error(xnew, xold) {
        return Math.abs((xnew - xold) / xnew);
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });

    }
    render() {

        return (
            <div>

                <br />
                <Card
                    title={<b>INPUT</b>}
                >
                    <div style={left}>
                        <span>f(x)</span>
                        <Input name="fx" onChange={this.handleInputChange} placeholder="" />
                        <br /><br />

                        <span>X<sub>0</sub></span>
                        <Input name="x0" onChange={this.handleInputChange} placeholder="" />
                        <br /><br />
                        
                    </div>

                    <Button onClick={() => this.newton(parseFloat(this.state.x0))}>submit</Button>

                </Card>
                {this.state.showGraph &&
                    <Card
                        bordered={true}
                        style={{ position: 'relative', marginBlockStart: "2%" }}
                    >
                        <Plot style={{ position: 'relative' }}
                            data={[
                                {
                                    x: math.range(-10, 10, 0.5).toArray(),
                                    y: xValues.map(function (x) {
                                        return math.compile(fx).eval({ x: x })
                                    }),
                                    type: 'scatter',
                                    marker: { color: 'red' },
                                },
                            ]}
                            layout={{ title: 'Newton-Raphson' }}

                        />
                    </Card>
                }
                {this.state.showOutputCard &&
                    <Card
                        title={"Output"}
                        bordered={true}
                        style={{ position: 'relative', marginBlockStart: "2%" }}
                    
                    >
                        <Table columns={columns}
                            dataSource={dataInTable}
                            bordered={true}
                        >
                        </Table>
                    </Card>
                }



            </div>

        );
    }
}

export default NewtonR15;