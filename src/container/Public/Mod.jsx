import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './Mod.css'
import Image from 'react-image-webp'
import aa from '../../images/ad1.jpg'
class Mod extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        
    }
    render() {

        const that=this;
        let items = [{id:1,link:'',h2:'笑爆！柯南史上最强角色！开起挂来连柯南基德都害怕！9分钟带你一探究竟！',img:{aa} },
                    {id:2,link:'',h2:'asda',img:{aa} },
                    {id:3,link:'',h2:'asda',img:{aa} },
                    {id:4,link:'',h2:'asda',img:{aa} },
                    {id:5,link:'',h2:'asda',img:{aa} },
                    {id:6,link:'',h2:'asda',img:{aa} },
                    {id:7,link:'',h2:'asda',img:{aa} },
                    {id:8,link:'',h2:'asda',img:{aa} },
                    {id:9,link:'',h2:'asda',img:{aa} },
                    {id:10,link:'',h2:'asda',img:{aa} }];
        let items_right = [{id:1,link:'',h2:'笑爆！柯南史上最强角色！开起挂来连柯南基德都害怕！9分钟带你一探究竟！',img: require('../../images/ad1.jpg'),set:'19',score:'1万' },
                    {id:2,link:'',h2:'【鬼谷说】奇虾：初代霸主的故事,笑爆！柯南史上最强角色！',set:'19',img:''},
                    {id:3,link:'',h2:'【鬼谷说】奇虾：初代霸主的故事',set:'19',img:''},
                    {id:4,link:'',h2:'【鬼谷说】奇虾：初代霸主的故事',set:'19',img:''},
                    {id:5,link:'',h2:'【鬼谷说】奇虾：初代霸主的故事',set:'19',img:''},
                    {id:6,link:'',h2:'【鬼谷说】奇虾：初代霸主的故事',set:'19',img:''},
                    {id:7,link:'',h2:'【鬼谷说】奇虾：初代霸主的故事',set:'19',img:''},
                    {id:8}
                    ];
        return (
            <div>
                <div className="mod clearfix" id={that.props.data.h2}>
                    <div className="mod-left">
                    <div className="mod-left-header clearfix">
                        
                            <span className='mod-left-header-img'>

                            </span>
                            <span className='mod-left-header-h1'>
                                {this.props.data.h2}
                            </span>
                            <span className='mod-left-header-button mod-left-header-button1'>
                                有新动态
                            </span>
                            <span className='mod-left-header-button'>
                                最新投稿
                            </span>
                            <span className='mod-left-header-float'>
                               更多
                               <i className='icon-read'></i>
                            </span>
                            <span className='mod-left-header-float'>
                            <i className='icon-right'>

                            </i>
                            <strong> {this.props.data.dynamic}</strong>条新动态
                            </span>
                        
                    </div>
                    <div className="mod-left-container">
                         {
                             items.map(function (item,i,items) {
                                
                                 
                                return (
                                    
                                     <div className="mod-left-container-model"  key={item.id}>
                                     <a href={item.link}>
                                     <Image webp={that.props.data.model[i].image} src={that.props.data.model[2].image}  alt=""/>
                                     <h2>{item.h2}</h2>
                                     <span><i className='icon-views'></i> {that.props.data.model[i].view}</span>
                                     <span><i className='icon-viewers'></i>{that.props.data.model[i].viewers}</span>
                                     </a>
                                     </div>)
                               
                            })
                         }

                    </div>
                </div>
            
            <div className="mod-right">
                <div className="mod-right-header clearfix">
                    <span className='mod-right-header-h1'>排行</span>
                    <span className='mod-right-header-button    mod-left-header-button1'>全部</span>
                    <span className='mod-right-header-button'>原创</span>
                    <span className='mod-right-header-float'>三日 <i></i> <span className=' mod-right-header-float2'>一周</span></span>
                   
                </div>
                <div className="mod-right-container">
                {
    
                items_right.map(function (item,i,items) {
                
                
                if(item.id===items.length){
                    return (
                        <div className="mod-right-container-items"  key={item.id}>
                            <div className='mod-right-container-footer'> 
                            查看更多<span></span>
                            </div>
                        </div>
                    )
                                }
                                else if (item.id===1){
                                    return (
                                    
                                        <div className="mod-right-container-items"  key={item.id}>
                                        <span className='mod-right-container-items-span'>{item.id}</span>
                                        <a href={item.link}>
                                            <img className={item.id==1 ? 'mod-right-container-items-a-img':''} src={item.img} alt=""/>
                                            <div className='mod-right-container-items-a-div'>
                                             <span className='mod-right-container-items-a-span mod-right-container-items_1-a-span'>{item.h2}</span>
                                             <span className='mod-right-container-items-a-span2 mod-right-container-items_1-a-span2'>
                                             综合评分：{item.score}
                                             </span>
                                             </div>
                                         </a>
                                         </div>)   
                                }
                                else
                                return (
                                    
                                    <div className="mod-right-container-items"  key={item.id}>
                                    <span className={item.id<=3?'mod-right-container-items-span':''}>{item.id}</span>
                                    <a href={item.link}>
                                        <img className={item.id==1 ? 'mod-right-container-items-a-img':''} src={item.img} alt=""/>
                                         <span className='mod-right-container-items-a-span'>{item.h2}</span>
                                     
                                     </a>
                                     </div>)
                               
                            })
                         }
                    
                </div>
                </div>
            </div>   
            </div>
        )
    }
}

export default Mod