import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Card, Input, Button } from 'antd';



var A = [], B = [], matrixA = [], matrixB = [], x , epsilon, output = [],dataInTable = [], count=1
var columns = [
    {
      title: "Iteration",
      dataIndex: "iteration",
      key: "iteration"
    }
];

const left = {
    textAlign: "left",
}
const mat = {
    width: "18%",
    height: "50%",
    marginInlineEnd: "2%",
    marginBlockEnd: "2%",
}

class GSeidelIM28 extends Component {


    constructor() {
        super();
        this.state = {
            dimension: "",
            showdimensionForm: true,
            showdimensionButton: true,
            showMatrixForm: false,
            showMatrixButton: false,
            showOutputCard: false,
            inputtitle: "INPUT DIMENSION",
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.seidel = this.seidel.bind(this);

    }

    seidel(n) {
        this.initMatrix();
        x = new Array(n);
        var xold = new Array(n);
        epsilon = new Array(n);
        x.fill(0)
        xold.fill(0);
        do {
            xold = JSON.parse(JSON.stringify(x));
            for (var i=0 ; i<n ; i++) {
                var sum = 0;
                for (var j=0 ; j<n ; j++) {
                    if (i !== j) { //else i == j That is a divide number
                        sum = sum + A[i][j]*x[j];
                    }
                }
                x[i] = (B[i] - sum)/A[i][i]; //update x[i]
                
            }        
        } while(this.error(x, xold)); //if true , continue next iteration
        
        
        for (i=0 ; i<x.length ; i++) {
                output.push(x[i]);
                output.push(<br/>);
        }
        this.setState({
            showOutputCard: true
        });      
    }

    error(xnew, xold) {
        for (var i=0 ; i<xnew.length ; i++) {
            epsilon[i] = Math.abs((xnew[i]-xold[i]) / xnew[i])
        }
        this.appendTable(x, epsilon);
        for (i=0 ; i<epsilon.length ; i++) {
            if (epsilon[i] > 0.000001) {
                return true;
            }    
        }
        return false;  
    } 
    initialSchema(n) {
        for (var i=1 ; i<=n ; i++) {
            columns.push({
                title: "X"+i,
                dataIndex: "x"+i,
                key: "x"+i
            },)
        }
        for (i=1 ; i<=n ; i++) {
            columns.push({
                title: "Error"+i,
                dataIndex: "error"+i,
                key: "error"+i
            },)
        }
    }
    appendTable(x, error) {
        var tag = ''
        tag += '{"iteration": ' + count++ + ',';
        for (var i=0 ; i<x.length ; i++) {
            tag += '"x'+(i+1)+'": '+x[i].toFixed(8)+', "error'+(i+1)+'": ' + error[i].toFixed(8);
            if (i !== x.length-1) {
                tag += ','
            }
        }
        tag += '}';
        dataInTable.push(JSON.parse(tag));  
    }

    createMatrix(dimension) {

        A = []
        B = []
        matrixA = []
        matrixB = []
        output = []

        for (let i = 1; i <= dimension; i++) {
            for (let j = 1; j <= dimension; j++) {
                matrixA.push(<Input style={mat}
                    id={"a" + i + "" + j} key={"a" + i + "" + j} placeholder={"a" + i + "" + j} />)
            }
            matrixA.push(<br />)

            matrixB.push(<Input style={mat}
                id={"b" + i} key={"b" + i} placeholder={"b" + i} />)
            matrixB.push(<br />)
        }

        this.setState({
            showdimensionForm: false,
            showdimensionButton: false,
            showMatrixForm: true,
            showMatrixButton: true
        })

    }
    initMatrix() {
        for (let i = 0; i < this.state.dimension; i++) {
            A[i] = []
            for (let j = 0; j < this.state.dimension; j++) {
                A[i][j] = (parseFloat(document.getElementById("a" + (i + 1) + "" + (j + 1)).value));
            }
            B.push(parseFloat(document.getElementById("b" + (i + 1)).value));
        }
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
                    title={<b>{this.state.inputtitle}</b>}
                    bordered={true}
                    onChange={this.handleInputChange}
                >
                    {this.state.showdimensionForm &&
                        <div style={left}>
                            <span>N x N</span>
                            <Input name="dimension" placeholder="n"></Input>
                            <br /><br />
                        </div>
                    }
                    {this.state.showdimensionButton &&
                        <Button id="dimension_button" onClick={
                            () => {
                                this.createMatrix(this.state.dimension)
                                this.initialSchema(this.state.row)
                                this.setState({ inputtitle: "INPUT VALUE" })
                            }
                        }
                        >
                            submit
                        </Button>
                    }
                    {this.state.showMatrixForm &&
                        <div>
                            <span>Matrix [A]</span><br />
                            {matrixA}
                            <br />
                            <span>Vector [B]<br /></span>
                            {matrixB}
                        </div>
                    }
                    <br></br>

                    {this.state.showMatrixButton &&
                        <Button id="matrix_button" onClick={() => this.seidel(this.state.dimension)}>submit</Button>
                    }

                </Card>

                {this.state.showOutputCard &&
                    <Card
                        bordered={true}
                        style={{ position: 'relative', marginBlockStart: "2%" }}

                        title={<b>OUTPUT</b>}

                        onChange={this.handleInputChange}>

                        <p>{output}</p>
                    </Card>
                }





            </div>
        );
    }
}

export default GSeidelIM28;