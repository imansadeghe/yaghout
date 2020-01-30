import React,{Component} from "react"
import Welcome from './welcome'
class Fullpage extends Component{
    render(){
        const {children} = this.props
        return(
            <div>
           
                <div className={'fullpage ${this.props.className || ""}'}
                > {children}</div>
               
            </div>
        )
    }
}
export default Fullpage