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
        title: "x",
        dataIndex: "x",
        key: "x"
    },
    {
        title: "y",
        key: "y",
        dataIndex: "y"
    }
];
var X = [], yE = []
var exactEq=""



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
            exact: "",
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

    euler(start, finish, x0, y0, h) {
        X = []
        yE = []
        dataInTable = []
        var y = y0
        var xi = x0
        for (let i = start; i < finish; i += h) {
            y = y + this.func(xi, y,this.state.fx) * h
            xi += h
            yE.push(y)
            X.push(xi)
        }
        // exactEq = this.func(xi, y,this.state.exact)
        exactEq     =this.state.exact 
    
        this.createTable(X, yE)
        this.setState({
            showOutputCard: true,
            showGraph: true
        })
    }


    func(X, Y, ffx) {
        let expr = math.compile(ffx);
        let scope = { x: parseFloat(X), y: parseFloat(Y) };
        console.log(ffx  +" "+ expr.eval(scope))
        return expr.eval(scope);
    }

    

    createTable(x, y) {
        dataInTable = []
        for (let i = 0; i < x.length; i++) {
            dataInTable.push({
                x: x[i],
                y: y[i]
            });
        }

    }


    render() {

        return (
            <div >

                <br />

                <Card


                    title={<b>INPUT</b>}
                    onChange={this.handleInputChange}


                >
                    <div style={left} >
                        <span>f(x)</span>
                        <Input name="fx"  placeholder="" />
                        <br /><br />

                        <span>x<sub>0</sub></span>
                        <Input name="x0"  placeholder="" />
                        <br /><br />

                        <span>y<sub>0</sub></span>
                        <Input name="y0"  placeholder="" />
                        <br /><br />

                        <span>start</span>
                        <Input name="start"  placeholder="" />
                        <br /><br />

                        <span>finish</span>
                        <Input name="finish"  placeholder="" />
                        <br /><br />

                        <span>h</span>
                        <Input name="h"  placeholder="" />
                        <br /><br />

                        <span>exact equation</span>
                        <Input name="exact"  placeholder="" />
                        <br /><br />

                    </div>
                    <Button onClick={
                        () => this.euler(parseFloat(this.state.start), parseFloat(this.state.finish), parseFloat(this.state.x0), parseFloat(this.state.y0), parseFloat(this.state.h))
                    }>summit</Button>
                </Card>

                {this.state.showGraph &&
                    <Card
                        bordered={true}
                        style={{ position: 'relative', marginBlockStart: "2%" }}
                    >
                        <Plot
                            data={[
                                {
                                    x: X,
                                    y: yE,
                                    type: 'scatter',
                                    name: 'euler',
                                    marker: { color: 'blue' },
                                },
                                {
                                    x: X,
                                    y: X.map(function (x) {
                                        return math.compile(exactEq).eval({x: x})
                                    }),
                                    type: 'scatter',
                                    name: 'exact',
                                    marker: { color: 'red' },
                                },
                            ]}
                            layout={{ title: 'Euler\'s' }}
                        />
                    </Card>
                }

                {this.state.showOutputCard &&
                    <Card
                        title={<b>OUTPUT</b>}
                        bordered={true}
                        style={{ position: 'relative', marginBlockStart: "2%" }}
                        id="outputCard"
                    >
                        <Table columns={columns}
                            bordered={true}
                            dataSource={dataInTable}
                        ></Table>
                    </Card>
                }







            </div>

        );
    }
}

export default EulerM71;