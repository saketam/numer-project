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
        title: "Y",
        dataIndex: "y",
        key: "y"
    },
    {
        title: "Error",
        key: "error",
        dataIndex: "error"
    }
];

const xValues = math.range(-10, 10, 0.5).toArray();
var fx = " ";

class Secant16 extends Component {
    constructor() {
        super()
        this.state = {
            fx: "",
            x0: 0,
            x1: 0,
            showOutputCard: false,
            showGraph: false,
        }
        this.secant = this.secant.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    secant(x0, x1) {
        fx = this.state.fx;
        var x = [], y = 0, epsilon = parseFloat(0.000000);
        var n = 1, i = 1;
        var data = []
        data['y'] = []
        data['error'] = []
        x.push(x0);
        x.push(x1);
        data['y'][0] = x0;
        data['error'][0] = "---";

        do {
            y = x[i] - (this.func(x[i]) * ((x[i] - x[i - 1]))) / (this.func(x[i]) - this.func(x[i - 1]));
            x.push(y);
            epsilon = this.error(y, x[i]);
            data['y'][n] = y.toFixed(8);
            data['error'][n] = Math.abs(epsilon).toFixed(8);

            n++;
            i++;

        } while (Math.abs(epsilon) > 0.000001);
        this.createTable(data['y'], data['error']);
        this.setState({
            showOutputCard: true,
            showGraph: true
        })
    }

    createTable(y, error) {
        dataInTable = []
        for (var i = 0; i < y.length; i++) {
            dataInTable.push({
                iteration: i + 1,
                y: y[i],
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
        let scope = { x: parseFloat(X) };
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

                        <span>X<sub>1</sub></span>
                        <Input name="x1" onChange={this.handleInputChange} placeholder="" />
                        <br /><br />

                    </div>

                    <Button onClick={() => this.secant(parseFloat(this.state.x0), parseFloat(this.state.x1))}>submit</Button>

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
                            layout={{ title: 'Secant Method' }}

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

export default Secant16;