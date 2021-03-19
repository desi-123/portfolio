import React from 'react'
import Particles from 'react-particles-js';
//import { Jumbotron } from 'reactstrap';
import Typewriter from 'typewriter-effect';

const Particle = () => {
    return (
        <header className="jumbotron jumbotron-fluid">
            <div className="container">
                <div className="particles">
                <Particles 
                    params={{
                        particles:{
                            number:{
                                value:100,
                                density:{
                                    enable:false,
                                    value_area:800
                                }
                            }
                        },

                        "interactivity":{
                            "events":{
                                "onHover":{
                                    "enable":true,
                                    "mode":"repulse"
                                }
                            }
                        }
                    }}
                />

                <div className="fullName">
                    <h4>
                        <Typewriter
                        options={{
                            strings:['FirstName:','DESALEGN','LastName:','WAGAW'],
                            autoStart:true,
                            loop:true
                        }}
                        />
                    </h4>
                </div>
                <div className="gmail">
                    <h4>
                        <Typewriter
                        options={{
                            strings:['Gmail:','desiemeng21m@gmail.com'],
                            autoStart:true,
                            loop:true
                        }}
                        />
                    </h4>
                </div>
                </div>
            </div>
        </header>
    )
}

export default Particle;
