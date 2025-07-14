import React from 'react'
import Navbar from './Navbar'

const Add = () => {
    return (
        <div>
            <Navbar/>
            


            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">



                        <div className="row p-5 g-5">
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label htmlFor="" className="form-label">ID:</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Name:</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Roll Number:</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Admission number:</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">College:</label>
                                <textarea name="" id="" className="form-control"></textarea>

                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success">Submit</button>

                            </div>

                            </div>

                        </div>





                    </div>
                </div>
            </div>




      
    )
}

export default Add