import * as React from 'react'
import {render} from 'react-dom'
interface PropsTypes{
    name:String
}
export class Hello extends React.Component<PropsTypes,{}>{
    render(){
        const {name}=this.props
        return(
            <div>
                hello {name}
            </div>
        )
    }
}
render(
    <Hello name="rxJs"/>,
    document.getElementById('react-root')
)