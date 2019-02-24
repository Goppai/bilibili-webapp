import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './Nav.css'
class Nav extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        return(
        <div className='home-nav-list' id='home-nav-list'>
            <nav>
                <ul>
                   {this.props.data.map((item,i)=>{
                       var h3 ='#'+ item.h2;
                       return(
                           <li><a href={h3}>{item.h2}</a></li>
                       )
                   })}
                   
                </ul>
            </nav>
        </div>
         ) }}
    export default Nav;