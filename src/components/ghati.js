import React,{Component} from "react"
import Welcome from "./welcome"

class ghati extends Component{
    constructor(props){
        super(props)
        this.state = { time:new Date() }
    }
    componentDidMount(){
      this.interval =  setInterval ( () => this.tick(),1000 )
    }
      tick (){
        this.setState({
            time:new Date()
        })
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }
    toggleWatch(){
        if(this.state.pause){   
            this.interval = setInterval(()=>this.tick(),1000)
            this.setState({pause: false})
            
        }else{
            clearInterval(this.interval)
            this.setState({
                pause:true
            })
        }
    }
  
    render(){
        return(
                    <div onClick = {()=>this.toggleWatch()}>
            <h1>time is {this.state.time.toLocaleTimeString()}</h1>
                    <Welcome name="mary" iq={190}/>
                    <Welcome name="mori" iq={100}/>
                    </div>
        )
    }
}
export default ghati