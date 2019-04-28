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
        title: "XL",
        dataIndex: "xl",
        key: "xl"
    },
    {
        title: "XR",
        dataIndex: "xr",
        key: "xr"
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

class Bisection12 extends Component {
    constructor() {
        super()
        this.state = {
            fx: "",
            xl: "",
            xr: "",
            showOutputCard: false,
            showGraph: false,
        }
        this.bisection = this.bisection.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    bisection(xl, xr) {
        fx = this.state.fx;
        var increaseFunction = false;
        var xm = 0;
        var epsilon = parseFloat(0.000000);
        var n = 0;
        var data = []
        data['xl'] = []
        data['xr'] = []
        data['x'] = []
        data['error'] = []

        if (this.func(xl) < this.func(xr)) {
            increaseFunction = true;
        }

        do {
            xm = (xl + xr) / 2;
            if (this.func(xm) * this.func(xr) < 0) {
                epsilon = this.error(xm, xr);
                if (increaseFunction) {
                    xl = xm;
                }
                else {
                    xr = xm;
                }

            }
            else {
                epsilon = this.error(xm, xl);
                if (increaseFunction) {
                    xr = xm;
                }
                else {
                    xl = xm;
                }
            }
            data['xl'][n] = xl;
            data['xr'][n] = xr;
            data['x'][n] = xm.toFixed(8);
            data['error'][n] = Math.abs(epsilon).toFixed(8);
            n++;
        } while (Math.abs(epsilon) > 0.000001);

        this.createTable(data['xl'], data['xr'], data['x'], data['error']);

        this.setState({
            showOutputCard: true,
            showGraph: true
        })
    }

    createTable(xl, xr, x, error) {
        dataInTable = []
        for (var i = 0; i < xl.length; i++) {
            dataInTable.push({
                iteration: i + 1,
                xl: xl[i],
                xr: xr[i],
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
                //onChange={this.handleChange}


                >
                    <div style={left}>
                        <span>f(x)</span>
                        <Input name="fx" onChange={this.handleInputChange} placeholder="" />
                        <br /><br />

                        <span>X<sub>l</sub></span>
                        <Input name="xl" onChange={this.handleInputChange} placeholder="" />
                        <br /><br />

                        <span>X<sub>r</sub></span>
                        <Input name="xr" onChange={this.handleInputChange} placeholder="" />
                        <br /><br />
                    </div>

                    <Button onClick={() => this.bisection(parseFloat(this.state.xl), parseFloat(this.state.xr))}>submit</Button>

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
                            layout={{ title: 'Bisection' }}

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

export default Bisection12;