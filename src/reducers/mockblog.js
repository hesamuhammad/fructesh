import React, { Component } from 'react'
import { connect } from "react-redux";
import {fetchDataMock, addDataMock, deleteData} from "../actions/mockblog"
import { formik, Formik } from "formik"

class Mockblog extends Component {
    componentDidMount = () => {
        this.props.fetchDataMock();
    };

    render() {
        return (
            <div>
                <h1>Mock BLOG</h1>
                <Formik
                    initialValues={{ name: "", image: "", phrase: "", date: ""}}
                    onSubmit={(values, action) => {
                        this.props.dispatch(addDataMock(values))
                    }}
                    >
                        {({
                            handeBlur,
                            handleChange,
                            values,
                            errors,
                            handleSubmit
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <input 
                                    type="text" 
                                    name="name"
                                    onChange={handleChange}
                                    onBlur={handeBlur}
                                    value={values.name} 
                                />
                                <input 
                                    type="text" 
                                    name="phrase"
                                    onChange={handleChange}
                                    onBlur={handeBlur}
                                    value={values.phrase} 
                                />
                                <input 
                                    type="text" 
                                    name="date"
                                    onChange={handleChange}
                                    onBlur={handeBlur}
                                    value={values.date} 
                                />
                                {errors.name && (
                                    <div id="feedback">{errors.name}</div>
                                )}
                                <
                            </form>
                        )}
                    </Formik>
            </div>
        )
    }
}
