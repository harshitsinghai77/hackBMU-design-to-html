import React, { Component } from 'react';
import Dropzone from 'react-dropzone'

class AddProject extends Component {


    render(){
        return(
            <div className="page-wrapper">
                <div className="container-fluid">
                    <div className="row page-titles">
                        <div className="col-md-5 align-self-center">
                            <h3 className="text-themecolor">Add New Project</h3>
                        </div>
                   </div>
                    <div className="row">
                        <div className="col-12">
                            
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex no-block align-items-center">
                                        <div>
                                            <h4 className="card-title">Please fill the following details</h4>
                                        </div>
                                    </div>
                                    <form className="form">
                                        <div className="form-group m-t-40 row">
                                            <label className="col-2 col-form-label">Project Titlle</label>
                                            <div className="col-10">
                                                <input className="form-control" type="text"  /> 
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label   className="col-2 col-form-label">Project Description</label>
                                            <div className="col-10">
                                                 <textarea className="form-control" rows="5"></textarea>
                                            </div>
                                        </div>
                                        <div className="form-group row">
                                            <label   className="col-2 col-form-label">Email</label>
                                            <div className="col-10">
                                                <input className="form-control" type="email"  />
                                            </div>
                                        </div>
                                        
                                        <div className="form-group row">
                                            <label  className="col-2 col-form-label">Select</label>
                                            <div className="col-10">
                                                <select className="custom-select col-12" id="inlineFormCustomSelect">
                                                    <option selected="">Choose...</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                        </div>
                                        
                                        <div className="custom-file mb-3">
                                            <Dropzone className="dropzone" onDrop={acceptedFiles => console.log(acceptedFiles[0])}>
                                                {({getRootProps, getInputProps}) => (
                                                    <section>
                                                    <div {...getRootProps()}>
                                                        <label  className="col-2 col-form-label">Image</label>
                                                        <input {...getInputProps()} type="file" className="custom-file-input"  />
                                                        <label className="custom-file-label form-control" >Choose file</label>
                                                    </div>
                                                    </section>
                                                )}
                                            </Dropzone>
                                        </div>

                                        <div className="form-group row">
                                           <div className="col-10">
                                             <button type="button" className="btn waves-effect waves-light btn-success">Success</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        )
    }

}

export default AddProject;