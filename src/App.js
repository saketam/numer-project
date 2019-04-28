import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './css/App.css';
import './css/Navbar.scss'; 
import './css/TextHeader.scss'; 
import './css/and.css';



/*import all content */
import Home from './components/Home';

import Graph11 from './components/1RoE/Graph11'
import Bisection12 from './components/1RoE/Bisection12'
import FalsePo13 from './components/1RoE/FalsePo13'
import OnePointI14 from './components/1RoE/OnePointI14'
import NewtonR15 from './components/1RoE/NewtonR15'
import Secant16 from './components/1RoE/Secant16'

import Cramer21 from './components/2LinearA/Cramer21'
import GEliminateM22 from './components/2LinearA/GEliminateM22'
import GJordanM23 from './components/2LinearA/GJordanM23'
import MatrixIM24 from './components/2LinearA/MatrixIM24'
import LUDM25 from './components/2LinearA/LUDM25'
import CholeskyDM26 from './components/2LinearA/CholeskyDM26'
import JacobiIM27 from './components/2LinearA/JacobiIM27'
import GSeidelIM28 from './components/2LinearA/GSeidelIM28'
import ConjugateGM29 from './components/2LinearA/ConjugateGM29'

import NewtonDD31 from './components/3InterP/NewtonDD31'
import Lagrange32 from './components/3InterP/Lagrange32'
import Spline33 from './components/3InterP/Spline33'

import LinearR41 from './components/4LS/LinearR41'
import PolynomialR42 from './components/4LS/PolynomialR42'
import MultiLinearR43 from './components/4LS/MultiLinearR43'

import ComTrapeR51 from './components/5Integrate/ComTrapeR51'
import ComSimpsonR52 from './components/5Integrate/ComSimpsonR52'

import ForwardOH61 from './components/6Diff/ForwardOH61'
import BackwardOH62 from './components/6Diff/BackwardOH62'
import CentralOH263 from './components/6Diff/CentralOH263'
import ForwardOH264 from './components/6Diff/ForwardOH264'
import BackOH265 from './components/6Diff/BackOH265'
import CentralOH466 from './components/6Diff/CentralOH466'

import EulerM71 from './components/7DE/EulerM71'
import HeunM72 from './components/7DE/HeunM72'
import ModifierEulerM73 from './components/7DE/ModifierEulerM73'
/*********************/

import Starfield from './components/StarfieldCanvas';
import TextHeader from './components/TextHeader';

import logo from './img/logo.svg';

import 'antd/dist/antd.css';
import { Layout, Menu, Icon} from 'antd';
const { Sider ,Header, Content, Footer} = Layout;
const SubMenu = Menu.SubMenu;


class App extends Component {


  changepage = (props) =>{
    console.log(props.key)

    if (props.key.localeCompare("1") === 0) {
      this.setState({header_color:"aliceblue" , header_text:"homepage"});     
      ReactDOM.render(<Home/>, document.getElementById("content"));
    }

    if (props.key.localeCompare("11") === 0) {
      this.setState({header_color:"violet" ,header_text:"Graphical Method"});     
      ReactDOM.render(<Graph11></Graph11>, document.getElementById("content"));
    }
    else if (props.key.localeCompare("12") === 0) {
      this.setState({header_color:"violet" ,header_text:"Bisection"});     
      ReactDOM.render(<Bisection12></Bisection12>, document.getElementById("content"));
    }
    else if (props.key.localeCompare("13") === 0) {
      this.setState({header_color:"violet" ,header_text:"False Position"});     
      ReactDOM.render(<FalsePo13></FalsePo13>, document.getElementById("content"));
    }
    else if (props.key.localeCompare("14") === 0) {
      this.setState({header_color:"violet" ,header_text:"One Point Iteration"});     
      ReactDOM.render(<OnePointI14></OnePointI14>, document.getElementById("content"));
    }
    else if (props.key.localeCompare("15") === 0) {
      this.setState({header_color:"violet" ,header_text:"Newton-Raphson"});     
      ReactDOM.render(<NewtonR15></NewtonR15>, document.getElementById("content"));
    }
    else if (props.key.localeCompare("16") === 0) {
      this.setState({header_color:"violet" ,header_text:"Secant Method"});     
      ReactDOM.render(<Secant16></Secant16>, document.getElementById("content"));
    }



    else if (props.key.localeCompare("21") === 0) {
      this.setState({header_color:"indigo" ,header_text:"Cramer’s Rule"});     
      ReactDOM.render(<Cramer21></Cramer21>, document.getElementById("content"));    
    }
    else if (props.key.localeCompare("22") === 0) {
      this.setState({header_color:"indigo" ,header_text:"Gauss Elimination Method"});     
      ReactDOM.render(<GEliminateM22></GEliminateM22>, document.getElementById("content"));    
    }
    else if (props.key.localeCompare("23") === 0) {
      this.setState({header_color:"indigo" ,header_text:"Gauss-Jordan Method"});     
      ReactDOM.render(<GJordanM23></GJordanM23>, document.getElementById("content"));    
    }
    else if (props.key.localeCompare("24") === 0) {
      this.setState({header_color:"indigo" ,header_text:"Matrix Inversion Method"});     
      ReactDOM.render(<MatrixIM24></MatrixIM24>, document.getElementById("content"));    
    }
    else if (props.key.localeCompare("25") === 0) {
      this.setState({header_color:"indigo" ,header_text:"LU Decomposition Method"});     
      ReactDOM.render(<LUDM25></LUDM25>, document.getElementById("content"));    
    }
    else if (props.key.localeCompare("26") === 0) {
      this.setState({header_color:"indigo" ,header_text:"Cholesky Decomposition Method"});     
      ReactDOM.render(<CholeskyDM26></CholeskyDM26>, document.getElementById("content"));    
    }
    else if (props.key.localeCompare("27") === 0) {
      this.setState({header_color:"indigo" ,header_text:"Jacobi Iteration Method"});     
      ReactDOM.render(<JacobiIM27></JacobiIM27>, document.getElementById("content"));    
    }
    else if (props.key.localeCompare("28") === 0) {
      this.setState({header_color:"indigo" ,header_text:"Gauss-Seidel Iteration Method"});     
      ReactDOM.render(<GSeidelIM28></GSeidelIM28>, document.getElementById("content"));    
    }
    else if (props.key.localeCompare("29") === 0) {
      this.setState({header_color:"indigo" ,header_text:"Conjugate Gradient Method"});     
      ReactDOM.render(<ConjugateGM29></ConjugateGM29>, document.getElementById("content"));    
    }


    else if (props.key.localeCompare("31") === 0) {
      this.setState({header_color:"blue" ,header_text:"Newton Divide Difference"});     
      ReactDOM.render(<NewtonDD31></NewtonDD31>, document.getElementById("content"));    
    }
    else if (props.key.localeCompare("32") === 0) {
      this.setState({header_color:"blue" ,header_text:"Lagrange"});     
      ReactDOM.render(<Lagrange32></Lagrange32>, document.getElementById("content"));    
    }
    else if (props.key.localeCompare("33") === 0) {
      this.setState({header_color:"blue" ,header_text:"Spline"});     
      ReactDOM.render(<Spline33></Spline33>, document.getElementById("content"));    
    }



    else if (props.key.localeCompare("41") === 0) {
      this.setState({header_color:"green" ,header_text:"Linear Regression"});     
      ReactDOM.render(<LinearR41></LinearR41>, document.getElementById("content"));    
    }
    else if (props.key.localeCompare("42") === 0) {
      this.setState({header_color:"green" ,header_text:"Polynomial Regression"});     
      ReactDOM.render(<PolynomialR42></PolynomialR42>, document.getElementById("content"));    
    }
    else if (props.key.localeCompare("43") === 0) {
      this.setState({header_color:"green" ,header_text:"Multiple Linear Regression"});     
      ReactDOM.render(<MultiLinearR43></MultiLinearR43>, document.getElementById("content"));    
    }



    else if (props.key.localeCompare("51") === 0) {
      this.setState({header_color:"yellow" ,header_text:"Composite Trapezoidal Rule"});     
      ReactDOM.render(<ComTrapeR51></ComTrapeR51>, document.getElementById("content"));    
    }
    else if (props.key.localeCompare("52") === 0) {
      this.setState({header_color:"yellow" ,header_text:"Composite Simpson's Rule"});     
      ReactDOM.render(<ComSimpsonR52></ComSimpsonR52>, document.getElementById("content"));    
    }


    else if (props.key.localeCompare("61") === 0) {
      this.setState({header_color:"orange" ,header_text:"Forward Divided-Differences O(h)"});     
      ReactDOM.render(<ForwardOH61></ForwardOH61>, document.getElementById("content"));    
    }
    else if (props.key.localeCompare("62") === 0) {
      this.setState({header_color:"orange" ,header_text:"Backward Divided-Differences O(h)"});     
      ReactDOM.render(<BackwardOH62></BackwardOH62>, document.getElementById("content"));    
    }
    else if (props.key.localeCompare("63") === 0) {    
      this.setState({header_color:"orange" ,header_text:"Central Divided-Differences O(h2)"});     
      ReactDOM.render(<CentralOH263></CentralOH263>, document.getElementById("content"));    
    }
    else if (props.key.localeCompare("64") === 0) {
      this.setState({header_color:"orange" ,header_text:"Forward Divided-Differences O(h2)"});     
      ReactDOM.render(<ForwardOH264></ForwardOH264>, document.getElementById("content"));    
    }
    else if (props.key.localeCompare("65") === 0) {
      this.setState({header_color:"orange" ,header_text:"Backward Divided-Differences O(h2)"});     
      ReactDOM.render(<BackOH265/>, document.getElementById("content"));    
    }
    else if (props.key.localeCompare("66") === 0) {
      this.setState({header_color:"orange" ,header_text:"Central Divided-Differences O(h4)"});     
      ReactDOM.render(<CentralOH466></CentralOH466>, document.getElementById("content"));    
    }



    else if (props.key.localeCompare("71") === 0) {
      this.setState({header_color:"red" ,header_text:"Euler's Method"});     
      ReactDOM.render(<EulerM71></EulerM71>, document.getElementById("content"));    
    }
    else if (props.key.localeCompare("72") === 0) {
      this.setState({header_color:"red" ,header_text:"Heun's Method"});     
      ReactDOM.render(<HeunM72></HeunM72>, document.getElementById("content"));    
    }
    else if (props.key.localeCompare("73") === 0) {
      this.setState({header_color:"red" ,header_text:"Modifier Euler's Method"});     
      ReactDOM.render(<ModifierEulerM73></ModifierEulerM73>, document.getElementById("content"));    
    }




    
  }

  state = {
    collapsed: false,
    header_text : "Homepage",
    header_color : "#b5ffff"
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }


  render() {


    return (
      <div className="App" >
        <Starfield />

        <Layout style={{ minHeight: '100vh', background: "none" }}>
          <Sider
            collapsible
            collapsed={this.state.collapsed}
            onCollapse={this.onCollapse}
            style={{
              marginTop: 0,
            }}
          >

            <div style={{margin: "16px", background: this.state.header_color ,height : "10vmin",}}>
              <img src={logo} className="Nav_logo" alt="logo" />
            </div>
            

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
                <Icon type="home" />
                <span>Homepage</span>

              </Menu.Item>

              <SubMenu                
                key="1RoE"
                title={<span><Icon style={{ color: "violet" }} type="calculator" />
                  <span>Root of Equation</span></span>}
              >
                <Menu.Item key="11">Graphical Method</Menu.Item>
                <Menu.Item key="12">Bisection</Menu.Item>
                <Menu.Item key="13">False Position</Menu.Item>
                <Menu.Item key="14">One Point Iteration</Menu.Item>
                <Menu.Item key="15">Newton-Raphson</Menu.Item>
                <Menu.Item key="16">Secant Method</Menu.Item>
              </SubMenu>

              <SubMenu
                key="2LinearA"
                title={<span><Icon style={{ color: "indigo" }} type="calculator" />
                  <span>Linear Algbraic Equations</span></span>}
              >
                <Menu.Item key="21">Cramer’s Rule</Menu.Item>
                <Menu.Item key="22">Gauss Elimination Method</Menu.Item>
                <Menu.Item key="23">Gauss-Jordan Method</Menu.Item>
                <Menu.Item key="24">Matrix Inversion Method</Menu.Item>
                <Menu.Item key="25">LU Decomposition Method </Menu.Item>
                <Menu.Item key="26">Cholesky Decomposition Method</Menu.Item>
                <Menu.Item key="27">Jacobi Iteration Method</Menu.Item>
                <Menu.Item key="28">Gauss-Seidel Iteration Method</Menu.Item>
                <Menu.Item key="29">Conjugate Gradient Method</Menu.Item>
              </SubMenu>

              <SubMenu
                key="3InterP"
                title={<span><Icon style={{ color: "blue" }} type="calculator" />
                  <span>Interpolation</span></span>}
              >
                <Menu.Item key="31">Newton Divide Difference</Menu.Item>
                <Menu.Item key="32">Lagrange</Menu.Item>
                <Menu.Item key="33">Spline</Menu.Item>
              </SubMenu>

              <SubMenu
                key="4LS"
                title={<span><Icon style={{ color: "green" }} type="calculator" />
                  <span>Least Square</span></span>}
              >
                <Menu.Item key="41">Linear Regression</Menu.Item>
                <Menu.Item key="42">Polynomial Regression</Menu.Item>
                <Menu.Item key="43">Multiple Linear Regression</Menu.Item>
              </SubMenu>

              <SubMenu
                key="5Integrate"
                title={<span><Icon style={{ color: "yellow" }} type="calculator" />
                  <span>Integration</span></span>}
              >
                <Menu.Item key="51">Composite Trapezoidal Rule</Menu.Item>
                <Menu.Item key="52">Composite Simpson's Rule</Menu.Item>
              </SubMenu>

              <SubMenu
                key="6Diff"
                title={<span><Icon style={{ color: "orange" }} type="calculator" />
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
                title={<span><Icon style={{ color: "red" }} type="calculator" />
                  <span>Ordinary differential equation</span></span>}
              >
                <Menu.Item key="71">Euler's Method</Menu.Item>
                <Menu.Item key="72">Heun's Method</Menu.Item>
                <Menu.Item key="73" >Modifier Euler's Method</Menu.Item>
              </SubMenu>

            </Menu>
          </Sider>

          <Layout>

            <Header style={{ padding: 24, marginBottom: 150, position: 'relative' }} >
              <TextHeader color={this.state.header_color} >{this.state.header_text}</TextHeader>
            </Header>

            {/*Content App.css */}
            <Content className="Content" >          
              <div id="content" style={{ margin : 20 , minHeight: '70vh' ,}}>
                  <Home/>
              </div>
            </Content>

            <Footer style={{ textAlign: 'center', marginTop: 50 ,bottom : 0 }}>
              ©2019 Created by Thanapat Sutthiphibool
              
            </Footer>

          </Layout>
        </Layout>
        







      </div>
    );
  }
}

export default App;
