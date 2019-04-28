import React, { Component } from 'react'
import { Card, Input, Button, Table } from 'antd';
import 'antd/dist/antd.css';


const left = {
    textAlign: "left",
}
const mat = {
    
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
var x, y, tableTag, regressionMatrixX, regressionMatrixY, answer

class LinearR41 extends Component {

    constructor() {
        super();
        x = []
        y = []

        tableTag = []
        this.state = {
            nPoints: 0,
            m: 0,
            interpolatePoint: 0,
            showInputForm: true,
            showInputButton: true,
            showTableInput: false,
            showTableButton: false,
            showOutputCard: false,
            inputtitle: "INPUT",
        }
        this.handleInputChange = this.handleInputChange.bind(this);


    }
    createTableInput(n, m) {
        for (let i = 1; i <= n; i++) {
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
    initialValue(n, m) {
        x = new Array(m + 1)
        y = []
        for (var i = 1; i <= n; i++) {
            x[i] = parseInt(document.getElementById("x" + i).value);

        }
        for (i = 1; i <= n; i++) {
            y[i] = parseFloat(document.getElementById("y" + i).value);
        }
    }
    linear(n, m) {
        answer = this.summation(x, y)

        this.setState({
            showOutputCard: true
        })
    }
    summation(A, B) {
        var sum = 0
        for (var i = 1; i < A.length; i++) {
            sum += Math.pow(A[i] - B[i], 2)
        }
        return sum
    }

    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    render() {
        return (


            <div>
                <br/>>
                    <Card
                      bordered={true}
                      onChange={this.handleInputChange}
                    >
                        {this.state.showInputForm && 
                            <div>
                                <span>Number of points(n)</span>
                                <Input name="nPoints"></Input>

                                <span>Order(m)</span>
                                <Input name="m" ></Input>
                            </div> 
                        }                        
                        {this.state.showTableInput && 
                        <div>
                            <Table columns={columns} 
                            dataSource={tableTag} 
                            pagination={false} 
                            bordered={true} ></Table>
                        </div>
                        }
                        <br></br>
                        {this.state.showInputButton && 
                            <Button id="dimention_button" onClick= {
                                ()=> this.createTableInput(parseInt(this.state.nPoints), parseInt(this.state.m))}
                            >
                                submit<br></br>
                            </Button>
                        }
                        {this.state.showTableButton && 
                            <Button 
                                id="matrix_button"                                 
                                onClick= {()=> {this.initialValue(parseInt(this.state.nPoints), parseInt(this.state.m)); 
                                                this.linear(parseInt(this.state.nPoints), parseInt(this.state.m))}}
                                >
                                Submit
                            </Button>
                        }
                        
                    </Card>                   

                    {this.state.showOutputCard &&
                        <Card
                        title={"Output"}
                        bordered={true}
                        
                        >
                            <p >Matrix A = {JSON.stringify(regressionMatrixX)}</p><br/>
                            <p >Matrix B = {JSON.stringify(regressionMatrixY)}</p><br/>
                            <p >x = {JSON.stringify(answer)}</p> 
                        </Card>                        
                    }

                   
                </div>



        );
    }
}
export default LinearR41;