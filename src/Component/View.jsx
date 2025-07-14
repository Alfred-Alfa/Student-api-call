import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const View = () => {
    const [studentData, changestudentData] = useState(
       {"status":"success","data":[]}
    )

        const fetchData=()=>{
            axios.get("http://18.144.111.41/view_all_students.php").then(
                (response)=>{

                    changestudentData(response.data)

                }
            ).catch()
        }


            useEffect(()=>{fetchData()},[])


    return (
        <div>
            <Navbar />
            <div class="container">
                <div class="row">
                    <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div class="row g-5 p-5">

                            <table class="table table-striped">
                                <thead style={{ color: 'black' }}>
                                    <tr >
                                        <th scope="col">ID</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Roll Number</th>
                                        <th scope="col">Admission Number</th>
                                        <th scope="col">College</th>


                                    </tr>
                                </thead>
                                <tbody>
                                    {studentData.data.map(
                                        (value, index) => {
                                            return (
                                                <tr>
                                                    <td>{value.id}</td>
                                                    <td>{value.name}</td>
                                                    <td>{value.roll_number}</td>
                                                    <td>{value.admission_number}</td>

                                                    <td>{value.college}</td>

                                                </tr>
                                            )
                                        }
                                    )}
                                </tbody>
                            </table>

                        </div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default View