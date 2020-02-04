import React from 'react'
import './history.css'

export default function Jumbotron() {
    return (
        <div>
            <div className="jumbotronHistory jumbotron-fluid">
                <div className="container" align="center">
                    <h1 className="title">OUR HISTORY</h1>
                    <div class="container">
                        <div class="row">
                            <div class="col-sm col-history">
                                <h5 className="col-title">Establishment</h5>

                                <p className="col-text">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin facilisis, velit non fringilla pharetra, elit odio</p>
                            </div>
                            <div class="col-sm col-history">
                                <h5 className="col-title">First Success</h5>
                                <p className="col-text">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin facilisis, velit non fringilla pharetra, elit odio</p>

                            </div>
                            <div class="col-sm col-history">
                                <h5 className="col-title">New Technologies</h5>
                                <p className="col-text">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin facilisis, velit non fringilla pharetra, elit odio</p>

                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}
