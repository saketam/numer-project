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

class Cramer21 extends Component {

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
        this.cramer = this.cramer.bind(this);

    }

    cramer() {
        this.initMatrix();
        var counter = 0;
        output = []
        // eslint-disable-next-line eqeqeq
        while (counter != this.state.dimension) {
            var transformMatrix = JSON.parse(JSON.stringify(A));//Deep copy
            for (var i = 0; i < this.state.dimension; i++) {
                for (var j = 0; j < this.state.dimension; j++) {
                    if (j === counter) {
                        transformMatrix[i][j] = B[i]
                        break;
                    }
                }
            }
            counter++;

            output.push(<span>X<sub>{counter}</sub>=&nbsp;&nbsp;{Math.round(math.det(transformMatrix)) / Math.round(math.det(A))}</span>)
            output.push(<br />)
        }


        this.setState({
            showOutputCard: true
        });
    }

    createMatrix(dimension) {
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
            showMatrixButton: true,
            inputtitle: "INPUT DIMENSION",
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
                        <Button id="matrix_button" onClick={() => this.cramer()}>submit</Button>
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

export default Cramer21;