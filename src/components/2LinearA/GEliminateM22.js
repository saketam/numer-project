import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Card, Input, Button } from 'antd';


var A = [], B = [], X, output = [], matrixA = [], matrixB = []
const left = {
    textAlign: "left",
}
const mat = {
    width: "18%",
    height: "50%",
    marginInlineEnd: "2%",
    marginBlockEnd: "2%",
}

class GEliminateM22 extends Component {

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
        this.gaussE = this.gaussE.bind(this);

    }

    gaussE(n) {
        this.initMatrix();
        A = []
        B = []
        output = []

        this.initMatrix()
        if (A[0][0] === 0) { //pivoting
            var tempRow = JSON.parse(JSON.stringify(A[0]));
            var tempColumn = B[0];
            A[0] = A[1];
            A[1] = tempRow;
            B[0] = B[1];
            B[1] = tempColumn;
        }
        //Forward eliminated
        for (var k = 0; k < n; k++) {
            for (var i = k + 1; i < n; i++) {
                var factor = A[i][k] / A[k][k];
                for (var j = k; j < n; j++) {
                    A[i][j] = A[i][j] - factor * A[k][j];
                }
                B[i] = B[i] - factor * B[k];

            }
        }

        //Backward Substitution
        X = new Array(n);
        X[n - 1] = B[n - 1] / A[n - 1][n - 1]; //find Xn
        for (i = n - 2; i >= 0; i--) { //find Xn-1 to X1
            var sum = B[i];
            for (j = i + 1; j < n; j++) {
                sum = sum - A[i][j] * X[j];

            }
            console.log(sum + "  " + A[i][i])
            X[i] = (sum / A[i][i])
            X[i].toFixed(2)
        }
        for (i = 0; i < n; i++) {
            output.push(<span>X<sub>{i + 1}</sub>=&nbsp;&nbsp;{X[i]}</span>);
            output.push(<br />)
        }

        console.log("A" + A)
        console.log("B" + B)

        this.setState({
            showOutputCard: true
        });
    }

    createMatrix(dimension) {

        A = []
        B = []
        X = []
        matrixA = []
        matrixB = []
        output = []

        for (var i = 1; i <= dimension; i++) {
            for (var j = 1; j <= dimension; j++) {
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
        for (var i = 0; i < this.state.dimension; i++) {
            A[i] = []
            for (var j = 0; j < this.state.dimension; j++) {
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

                    {this.state.showMatrixForm &&
                        <div>
                            <span>Matrix [A]</span><br />
                            {matrixA}
                            <br />
                            <span>Vector [B]<br /></span>
                            {matrixB}
                        </div>
                    }

                    {this.state.showdimensionButton &&
                        <Button id="dimension_button" onClick={
                            () => {
                                this.createMatrix(this.state.dimension)
                                this.setState({ inputtitle: "INPUT VALUE" })
                            }
                        }
                        >
                            submit
                        </Button>
                    }
                    <br></br>

                    {this.state.showMatrixButton &&
                        <Button id="matrix_button" onClick={() => this.gaussE(this.state.dimension)}>submit</Button>
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

export default GEliminateM22;