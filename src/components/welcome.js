import React,{Component} from "react"

 class Welcome extends Component{
    render(){
       
        return(
            <div>{
                this.props.iq >120?
                 <h1>{this.props.name}has enough iq}</h1>:
            <h2>{this.props.name}doesn't have enough iq </h2>}

            </div>
        );
    }
}
export default Welcome