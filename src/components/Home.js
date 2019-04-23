import React, { Component } from 'react';
import picpro from '../img/tt02.png';
import '../css/Home.scss'





class Home extends Component {
    render() {

        return (
            <div >

                <img src={picpro} alt={picpro} className="puff-in-center" />
                <div className="info expand">
                    <span >Thanapat  Sutthiphibool</span><br/>
                    <span >59-040626-1006-2</span>
                </div>

                    <br/>
                    <br/>

                <div className="infoU">
                    <span className="expand t1">part of Numerical Medthods course</span><br/><br/>
                    <span className="expand t2">Department of Computer and Information Science</span><br/>
                    <span className="expand t3">Faculty of Applied Science </span><br/>
                    <span className="expand t4"> King mongkut's University of Technology North Bangkok</span>
                </div>



            </div>

        );
    }
}

export default Home;