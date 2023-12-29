import {Component} from 'react'
import Comp1 from "./Comp1"
import Comp2 from "./Comp2"
class App extends Component{
  render(){
    return(<div>
      <h1>ClassComp</h1>
      <p>Just Demo</p>
         <Comp1 label="Button1" sty={{"color":"blue","font-size":"20px","background":"red"}}/>
         <Comp2 label="Button2" sty={{"color":"green","font-size":"30px","background":"yellow"}}/>
    </div>)
  }
}
export default App