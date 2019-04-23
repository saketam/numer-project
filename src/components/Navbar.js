import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';



import logo from '../img/logo.svg';

import Text_header from './Text_header';


import '../css/index.css';
import '../css/Navbar.scss';

import {
    Layout, Menu, Icon
} from 'antd';

const {
    Sider
} = Layout;


const SubMenu = Menu.SubMenu;



class Navbar extends Component {

    state = {
        collapsed: false,
        openKey:[''],
    };

    changepage =  (props)=>{

    }



    

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }
    

    render() {


        return (


            <Sider
                collapsible
                collapsed={this.state.collapsed}
                onCollapse={this.onCollapse}

                style={{                     
                      marginTop: 0,
                }}                
                




            >

                <div className="logo" />
                <img src={logo} className="Nav_logo" alt="logo" />

                <Menu
                    style={{
                        textAlign: "left",                       
                        
                    }}
                    theme="dark"
                    defaultSelectedKeys={['1']}
                    mode="vertical"
                    onClick={this.changepage}
                    >

                    <Menu.Item key="1" >
                        <Icon type="home"/>
                        <span>Homepage</span>
                       
                    </Menu.Item>

                    <SubMenu 
                        key="1RoE"
                        title={<span><Icon style={{color : "violet" }} type="calculator"/>
                        <span>Root of Equation</span></span>}
                    >
                        <Menu.Item key="11">Graphical Medthod</Menu.Item>
                        <Menu.Item key="12">Bisection</Menu.Item>
                        <Menu.Item key="13">False Position</Menu.Item>
                        <Menu.Item key="14">One Point Iteration</Menu.Item>
                        <Menu.Item key="15">Newton-Raphson</Menu.Item>
                        <Menu.Item key="16">Secant Medthod</Menu.Item>
                    </SubMenu>

                    <SubMenu 
                        key="2LinearA"
                        title={<span><Icon style={{color : "indigo" }} type="calculator"/>
                        <span>Linear Algbraic Equations</span></span>}
                    >
                        <Menu.Item key="21">Cramer’s Rule</Menu.Item>
                        <Menu.Item key="22">Gauss Elimination Method</Menu.Item>
                        <Menu.Item key="23">Gauss-Jordan Method</Menu.Item>
                        <Menu.Item key="24">Matrix Inversion Method</Menu.Item>
                        <Menu.Item key="25">LU Decomposition Method </Menu.Item>
                        <Menu.Item key="26">CholeskyDecomposition Method</Menu.Item>
                        <Menu.Item key="27">Jacobi Iteration Method</Menu.Item>
                        <Menu.Item key="28">Gauss-Seidel Iteration Method</Menu.Item>
                        <Menu.Item key="29">Conjugate Gradient Method</Menu.Item>
                    </SubMenu>

                    <SubMenu 
                        key="3InterP"
                        title={<span><Icon style={{color : "blue"}} type="calculator"/>
                        <span>Interpolation</span></span>}
                    >
                        <Menu.Item key="31">Newton Divide Difference</Menu.Item>
                        <Menu.Item key="32">Lagrange</Menu.Item>
                        <Menu.Item key="33">Spline</Menu.Item>
                    </SubMenu>

                    <SubMenu
                        key="4LS"
                        title={<span><Icon  style={{color : "green" }} type="calculator"/>
                        <span>Least Square</span></span>}
                    >
                        <Menu.Item key="41">Linear Regression</Menu.Item>
                        <Menu.Item key="42">Polynomial Regression</Menu.Item>
                        <Menu.Item key="43">Multiple Linear Regression</Menu.Item>
                    </SubMenu>

                    <SubMenu 
                        key="5Integrate"
                        title={<span><Icon style={{color : "yellow"}} type="calculator"/>
                        <span>Integration</span></span>}
                    >
                        <Menu.Item key="51">Composite Trapezoidal Rule</Menu.Item>
                        <Menu.Item key="52">Composite Simpson's Rule</Menu.Item>
                    </SubMenu>

                    <SubMenu 
                        key="6Diff"
                        title={<span><Icon style={{color : "orange" }} type="calculator"/>
                        <span>Differentiation</span></span>}
                    >
                        <Menu.Item key="61">Forward Divided-Differences O(h)</Menu.Item>
                        <Menu.Item key="62">Backward Divided-Differences O(h)</Menu.Item>
                        <Menu.Item key="63">Central Divided-Differences O(h{<sup>2</sup>})</Menu.Item>
                        <Menu.Item key="64">Forward Divided-Differences O(h{<sup>2</sup>})</Menu.Item>
                        <Menu.Item key="65">Backward Divided-Differences O(h{<sup>2</sup>})</Menu.Item>
                        <Menu.Item key="66">Central Divided-Differences O(h{<sup>4</sup>})</Menu.Item>
                    </SubMenu>

                    <SubMenu 
                        key="7DE"
                        title={<span><Icon style={{color : "red" }} type="calculator"/>
                        <span>Ordinary differential equation</span></span>}
                    >
                        <Menu.Item key="71">Euler's Method</Menu.Item>
                        <Menu.Item key="72">Heun's Method</Menu.Item>
                        <Menu.Item key="73" >Modifier Euler's Method</Menu.Item>
                    </SubMenu>

                </Menu>
            </Sider>



        );
    }
}

export default Navbar;