import React from 'react'
import './aboutbanner.css'

export default function AboutBanner() {
    return (
        <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container" align="center">

                    <div class="container">
                        <div class="row">
                            <div class="col-sm col-history">
                                <h5 className="col-title">245</h5>

                                <p className="tagline">Vegetables<br />and  fruits</p>
                            </div>
                            <div class="col-sm col-history">
                                <h5 className="col-title">382</h5>
                                <p className="tagline">Reliable<br />partners</p>

                            </div>
                            <div class="col-sm col-history">
                                <h5 className="col-title">1,267</h5>
                                <p className="tagline">Satisfied<br />customers</p>

                            </div>
                            <div class="col-sm col-history">
                                <h5 className="col-title">474</h5>
                                <p className="tagline">New blog<br />articles</p>

                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}
