import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Card, Input, Button } from 'antd';
import math from 'mathjs';


var A = [], B = [], output = [], matrixA = [], matrixB = []
const left = {
    textAlign: "left",
}
const mat = {
    width: "18%",
    height: "50%",
    marginInlineEnd: "2%",
    marginBlockEnd: "2%",
}

class LUDM25 extends Component {


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
        this.LU = this.LU.bind(this);

    }

    LU(n) {
        this.initMatrix();
        for (var i=0 ; i<n; i++) {


            output.push(<span>X<sub>{i + 1}</sub>=&nbsp;&nbsp;{math.lusolve(A,B)[i]}</span>);
            output.push(<br />)
        }
        this.setState({
            showOutputCard: true
        });

      
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
                        <Button id="matrix_button" onClick={() => this.LU(this.state.dimension)}>submit</Button>
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

export default LUDM25;