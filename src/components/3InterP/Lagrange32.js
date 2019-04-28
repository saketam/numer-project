import React, { Component } from 'react'
import { Card, Input, Button, Table } from 'antd';
import 'antd/dist/antd.css';


const left = {
    textAlign: "left",
}
const mat = {
    width: "18%",
    height: "50%",
    marginInlineEnd: "2%",
    marginBlockEnd: "2%",
}


var columns = [
    {
        title: "No.",
        dataIndex: "no",
        key: "no"
    },
    {
        title: "X",
        dataIndex: "x",
        key: "x"
    },
    {
        title: "Y",
        dataIndex: "y",
        key: "y"
    }
];
var x, y, tableTag, interpolatePoint, tempTag, fx

class Lagrange extends Component {

    constructor() {
        super();
        x = []
        y = []
        interpolatePoint = []
        tempTag = []
        tableTag = []
        this.state = {
            nPoints: 0,
            X: 0,
            interpolatePoint: 0,
            showInputForm: true,
            showInputButton: true,
            showTableInput: false,
            showTableButton: false,
            showOutputCard: false,
            inputtitle: "INPUT"
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.lagrange = this.lagrange.bind(this);

    }
    createTableInput(n) {
        for (var i = 1; i <= n; i++) {
            x.push(<Input style={mat}

                id={"x" + i} key={"x" + i} placeholder={"x" + i} />);
            y.push(<Input style={mat}

                id={"y" + i} key={"y" + i} placeholder={"y" + i} />);
            tableTag.push({
                no: i,
                x: x[i - 1],
                y: y[i - 1]
            });
        }


        this.setState({
            showInputForm: false,
            showInputButton: false,
            showTableInput: true,
            showTableButton: true
        })
    }
    createInterpolatePointInput() {
        for (var i = 1; i <= this.state.interpolatePoint; i++) {
            tempTag.push(<Input style={mat}
                id={"p" + i} key={"p" + i} placeholder={"p" + i} />)
        }
    }
    initialValue() {
        x = []
        y = []
        for (var i = 1; i <= this.state.nPoints; i++) {
            x[i] = parseFloat(document.getElementById("x" + i).value);
            y[i] = parseFloat(document.getElementById("y" + i).value);
        }
        for (i = 1; i <= this.state.interpolatePoint; i++) {
            interpolatePoint[i] = parseFloat(document.getElementById("p" + i).value);
        }
    }
    L(X, index, n) {
        var numerate = 1/*ตัวเศษ*/, denominate = 1/*ตัวส่วน*/;
        for (var i = 1; i <= n; i++) {
            if (i !== index) {
                numerate *= x[i] - X;
                denominate *= x[i] - x[index];
            }
        }
        console.log(numerate / denominate)
        return parseFloat(numerate / denominate);
    }

    lagrange(n, X) {
        fx = 0
        this.initialValue()
        for (var i = 1; i <= n; i++) {
            fx += this.L(X, i, n) * y[i];
        }
        this.setState({
            showOutputCard: true
        })

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
                    bordered={true}
                    title={<b>{this.state.inputtitle}</b>}
                    onChange={this.handleInputChange}
                >
                    {this.state.showTableInput &&
                        <div>
                            <Table columns={columns}
                                dataSource={tableTag}
                                pagination={false}
                                bordered={true}
                                bodyStyle={{ overflowY: "scroll" }}>
                            </Table>
                            <br />
                            <span>interpolatePoint {parseInt(this.state.interpolatePoint) === 2 ? "(Linear)" :
                                parseInt(this.state.interpolatePoint) === 3 ? "(Quadratic)" :
                                    "(Polynomial)"}</span>{tempTag}
                        </div>}

                    {this.state.showInputForm &&
                        <div style={left}>
                            <span>Number of points(n)</span>
                            <Input name="nPoints" ></Input>
                            <br /><br />

                            <span>X</span>
                            <Input name="X" ></Input>
                            <br /><br />
                            <span>interpolatePoint</span>
                            <Input name="interpolatePoint" ></Input>
                            <br /><br />

                        </div>
                        /***ฟหกฟกหฟกหฟหกฟก */
                    }

                    <br></br>
                    {this.state.showInputButton &&
                        <Button id="dimention_button" onClick={
                            () => {
                                this.createTableInput(parseInt(this.state.nPoints));
                                this.createInterpolatePointInput()
                                this.setState({ inputtitle: "INPUT qweqwe" })
                            }
                        }
                        >
                            Submit<br></br>
                        </Button>
                    }
                    {this.state.showTableButton &&
                        <Button
                            id="matrix_button"
                            onClick={() => this.lagrange(parseInt(this.state.interpolatePoint), parseFloat(this.state.X))}>
                            Submit
                            </Button>
                    }

                </Card>


                {this.state.showOutputCard &&
                    <Card
                        title={<b>OUTPUT</b>}
                        bordered={true}
                        style={{ position: 'relative', marginBlockStart: "2%" }}
                    >
                        <p>{fx}</p>
                    </Card>
                }
            </div>

        );
    }
}
export default Lagrange;