import React, { Component } from "react";
import ReactDOM from "react-dom";

import caller from '../../caller'
import ReactTable from "react-table";
import "react-table/react-table.css";

class ViewReport extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            showTable:false,
            patientDetails:{id:'5c160a040681c418567c0b64'},
            
        };
    }
    componentDidMount() {
            debugger;
            return caller.fetchData('/survey/getSurvey', this.state.patientDetails,
                res => {
                    if(res.status === 200 ) {
                        debugger;
                        let data = JSON.parse(res.text);;
                        this.setState({showTable:true, patientDetails:data.data})
                    }
                }
            )
    }
    editMethod(id) {
        debugger;
        this.props.action(id);
    }
    deleteMethod(id) {
        debugger;
    }
    render() {
        return (
                <div className="patientViewConatiner">
                    {this.state.showTable?<div>
                       <ReactTable
                            data={this.state.patientDetails}
                            columns={[

                                  {
                                    Header: "Name",
                                    accessor: "name"
                                  },
                                  {
                                    Header: "Age",
                                    id: "age"
                                  },
                                  {
                                    Header: "Father/Mother/Spouse",
                                    accessor: "relationname"
                                  },
                                  {
                                    Header: "Email",
                                    accessor: "email"
                                  },
                                  {
                                    Header: "Mobile Number",
                                    accessor: "mobilenumber"
                                  },
                                  {   
                                    Header: "Edit",
                                    id: "button",
                                    accessor: d => (<div className="link" onClick={() => this.editMethod(d)}>Edit</div>)
                                   },                          
                                   {
                                    Header: "Delete",
                                    id: "button2",
                                    accessor: d => (<div className="link" onClick={() => this.deleteMethod(d)}>Delete</div>)
                                   },                          
                                   {
                                    Header: "Take Survey",
                                    id: "button3",
                                    accessor: d => (<div className="link" onClick={() => this.props.takeSurvey(d)}>Take Survey</div>)
                                   }
                            ]}
                            defaultPageSize={10}
                            className="-striped -highlight"
                          />
                    </div>:''}
                </div>
        );
    }
}
export default ViewReport;