import React from "react";

class ChildComponent extends React.Component {

    state = {
        // firstName: '',
        // lastName: '',
        jobShow: false
    }

    handleChangeFirstName = (event) => {
        this.setState({
            
            firstName: event.target.value
        })
    }
    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        alert("Click")
        console.log('>>> check data input: ', this.state)
    }
    
    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleOnclickDelete = (job) => {
        console.log('>>> handleOnclickDelete: ', job)
        this.props.deleteAJob(job)
    }

    render() {
        let { arrJobs } = this.props;
        let { showJobs } = this.state;
        let check = showJobs === true ? 'showJobs = true' : 'showJobs = false';
        console.log('>>> check conditional: ', check)
        return (
            <>
                {showJobs === false ?
                    <div>
                        <button onClick={() => this.handleShowHide()}>Show</button>
                    </div>
                    :
                    <>
                        <div className="job-lists">
                            {
                                arrJobs.map((item, index) => {
                                    if(+item.salary > 400) {
                                        return (
                                            <div key={item.id}>
                                                {item.title} - {item.salary}
                                                <></> <span onClick={() => this.handleOnclickDelete(item)}>x</span>
                                            </div>
                                        )
                                    }
                                })
                            }
                              </div>
                        <div>
                            <button onClick={() => this.handleShowHide()}>Hide</button>
                        </div>
                    </>
                }
            </>
        )
    // render () {

    //     console.log('>>> check props: ', this.props)
    //     // let name = this.props.name;
    //     // let age = this.props.age;
    //     //key:value

    //     let { name, age, arrJobs } = this.props;
    //     let {jobShow} = this.state.jobShow;
    //     let check = jobShow === true ? 'jobShow = true' : 'jobShow = false'
    //     console.log(check);

    //     return (
    //         <>
    //             {jobShow === false ?
    //                 <div><button onClick={() => this.handleShowHide()}>Show</button></div>
    //             :
                
    //             <>
    //                 <div>child component: {this.props.name}</div>
    //                 <div>child component name: {name} - {age}</div>
    //                 <div className="job-list">
    //                 {
    //                     arrJobs.map((item, index) =>{
    //                         return (
    //                             <div>
    //                                 {item.jobName} - {item.salary}
    //                             </div>
    //                         )
    //                     })
    //                 }
    //                 </div>
    //                 <div>
    //                     <button onClick={() => this.handleShowHide()}>Hide</button>
    //                 </div>
    //             </>
    //             }
    //         </>
    //     )
            
        
    // }
}
}

export default ChildComponent;