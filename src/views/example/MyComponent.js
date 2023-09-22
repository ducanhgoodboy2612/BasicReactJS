import React from "react";
import ChildComponent from "./ChildComponent";
class MyComponent extends React.Component {

    state = {
        title: '',
        salary: '', 
        arrJobs: [
            {id: "j1", title: 'Dev', salary: '500'},
            {id: "j2", title: 'Tester', salary: '400'},
            {id: "j3", title: 'PM', salary: '1000'}
        ]
    }

    handleChangeFirstName = (event) => {
        this.setState({
            
            title: event.target.value
        })
    }
    handleChangeLastName = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        if (!this.state.title || !this.state.salary) {
            alert('Missing required params')
            return;
        }
        console.log('>>> check data input: ', this.state)
        this.addNewJob({
            id: Math.floor(Math.random() * 1001),
            title: this.state.title,
            salary: this.state.salary
        })

        this.setState({
            title: '',
            salary: ''
        })
    }

    addNewJob = (job) => {
        console.log('check job from parent: ', job)
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
        })

    }
    deleteAJob = (job) => {
        let currenJobs = this.state.arrJobs;
        currenJobs = currenJobs.filter(item => item.id !== job.id);
        this.setState({
            arrJobs: currenJobs
        })
    }

    render () {

        let age = 20
        return (
            <>
            <div>Hello my component</div>
            <form>
                    <label htmlFor="fname">First name:</label><br />
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={(event) => this.handleChangeFirstName(event)}
                    />
                    <br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input
                        type="text"
                        value={this.state.salary}
                        onChange={(event) => this.handleChangeLastName(event)}

                    /><br /><br />
                    <input type="submit" value={'click me'}
                        onClick={(event) => this.handleSubmit(event)}
                    />
            </form> 
            <ChildComponent
                   
                    arrJobs={this.state.arrJobs}
                    deleteAJob={this.deleteAJob}
            />

            </>
            
        )
            
        
    }
}

export default MyComponent;