import React from "react";
import { withRouter } from "react-router-dom";
import Color from "../HOC/Color";
class Home extends React.Component{

    componentDidMount(){
        setTimeout(() => {
            this.props.history.push("/todo")
        }, 3000);
    }
    render() {
        return (
            <>
            <div>Hello world HomePage</div>
           
            </>
        )
    }
}
export default withRouter(Home)
