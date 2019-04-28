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
        title: "Y",
        key: "y",
        dataIndex: "y"
    }
];
const xValues = math.range(-10, 10, 0.5).toArray();




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
        this.SavetoVariable = this.SavetoVariable.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    SavetoVariable() {
        fx = this.state.fx;
        var data = []
        data['x'] = []
        data['y'] = []


        for (let i = parseInt(this.state.start); i <= parseInt(this.state.finish); i++) {
            data['x'].push(i);
            data['y'].push(this.func(i));
            console.log(typeof (i))
        }
        console.log("fx " + fx +
            "\nstart " + this.state.start +
            "\nfinish " + this.state.finish
        )
        this.createTable(data['x'], data['y']);
        this.setState({
            showOutputCard: true,
            showGraph: true
        })

    }
    createTable(x, y) {
        dataInTable = []
        for (var i = 0; i < parseInt(this.state.finish - this.state.start); i++) {
            dataInTable.push({
                iteration: i + 1,
                x: x[i],
                y: y[i]
            });
        }

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
                    <Button onClick={() => this.SavetoVariable(parseFloat(this.state.start), parseFloat(this.state.finish))}>submit</Button>
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
                            layout={{ title: 'Graphical Method' }}
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

export default Graph11;