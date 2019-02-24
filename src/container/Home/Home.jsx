import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from './Header/Header'
import HeaderNav from './Header/Header-Nav/Header-Nav'
import Ad from './Ad/Ad'
import BiliLive from './Bili-Live/Bili-Live'
import FanDrama from './Fan-Drama/Fan-Drama'
import Mod from '../Public/Mod'
import Nav from '../Home/Nav/Nav'
import Footer from '../Home/Footer/Footer'
class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.orderScroll =  this.orderScroll.bind(this)
    }
    componentDidMount() {
        
        window.addEventListener('scroll', this.orderScroll);
     
     }
     
     orderScroll() {
        const nav = document.getElementById('home-nav-list');
        const navLi = document.querySelectorAll('#home-nav-list li');
        const mod = document.querySelectorAll('.mod');
        const modList = Array.prototype.slice.call(mod,0);
        const navList = Array.prototype.slice.call(navLi,0);
        const a =  Math.floor(( (document.documentElement.scrollTop - 1860)/484) );
        const b= Math.abs(a);
        if(document.documentElement.scrollTop<500){
            nav.style.top='30%';
        }
        else{
            nav.style.top='10%';
        }
        if(document.documentElement.scrollTop>=1860){
        navList.map((item,i)=>{
            if(b===i)
            {navLi[i].style.color='white';
            navLi[i].style.backgroundColor='#00a1d6'; }
            else
            {navLi[i].style.color='black';
            navLi[i].style.backgroundColor='#f6f9fa';  }

        })}
        else{
            navList.map((item,i)=>{
                navLi[i].style.color='black';
                navLi[i].style.backgroundColor='#f6f9fa';    
            } )
        }
     }
    render() {
        const moduleData = [{h2:'音乐',backGroundImageX:123,backGroundImageY:456,model:[{image:require('../../images/251_03.webp'),view:5333,viewers:'1123'},
                                                                                        {image:require('../../images/251_02.jpg'),view:9999,viewers:'45345'},
                                                                                        {image:require('../../images/251_01.webp'),view:1234,viewers:'534534'},
                                                                                        {image:require('../../images/251_04.webp'),view:6547,viewers:'56456'},
                                                                                        {image:require('../../images/251_05.webp'),view:11,viewers:'64674'},
                                                                                        {image:require('../../images/251_06.webp'),view:34565,viewers:'43645'},
                                                                                        {image:require('../../images/251_01.webp'),view:993214,viewers:'56756'},
                                                                                        {image:require('../../images/251_03.webp'),view:9868,viewers:'1231'}, {image:require('../../images/251_01.webp'),view:993214,viewers:'56756'},
                                                                                        {image:require('../../images/251_03.webp'),view:9868,viewers:'1231'}],dynamic:3241,},
                            {h2:'游戏',backGroundImageX:123,backGroundImageY:456,model:[{image:require('../../images/251_03.webp'),view:5333,viewers:'1123'},
                                                                                        {image:require('../../images/251_02.jpg'),view:9999,viewers:'45345'},
                                                                                        {image:require('../../images/251_01.webp'),view:1234,viewers:'534534'},
                                                                                        {image:require('../../images/251_04.webp'),view:6547,viewers:'56456'},
                                                                                        {image:require('../../images/251_05.webp'),view:11,viewers:'64674'},
                                                                                        {image:require('../../images/251_06.webp'),view:34565,viewers:'43645'},
                                                                                        {image:require('../../images/251_01.webp'),view:993214,viewers:'56756'},
                                                                                        {image:require('../../images/251_03.webp'),view:9868,viewers:'1231'}, {image:require('../../images/251_01.webp'),view:993214,viewers:'56756'},
                                                                                        {image:require('../../images/251_03.webp'),view:9868,viewers:'1231'}],dynamic:9999,},
                            {h2:'国创',backGroundImageX:123,backGroundImageY:456,model:[{image:require('../../images/251_03.webp'),view:5333,viewers:'1123'},
                                                                                        {image:require('../../images/251_02.jpg'),view:9999,viewers:'45345'},
                                                                                        {image:require('../../images/251_01.webp'),view:1234,viewers:'534534'},
                                                                                        {image:require('../../images/251_04.webp'),view:6547,viewers:'56456'},
                                                                                        {image:require('../../images/251_05.webp'),view:11,viewers:'64674'},
                                                                                        {image:require('../../images/251_06.webp'),view:34565,viewers:'43645'},
                                                                                        {image:require('../../images/251_01.webp'),view:993214,viewers:'56756'},
                                                                                        {image:require('../../images/251_03.webp'),view:9868,viewers:'1231'}, {image:require('../../images/251_01.webp'),view:993214,viewers:'56756'},
                                                                                        {image:require('../../images/251_03.webp'),view:9868,viewers:'1231'}],dynamic:8341,},
                            {h2:'生活',backGroundImageX:123,backGroundImageY:456,model:[{image:require('../../images/251_03.webp'),view:5333,viewers:'1123'},
                                                                                        {image:require('../../images/251_02.jpg'),view:9999,viewers:'45345'},
                                                                                        {image:require('../../images/251_01.webp'),view:1234,viewers:'534534'},
                                                                                        {image:require('../../images/251_04.webp'),view:6547,viewers:'56456'},
                                                                                        {image:require('../../images/251_05.webp'),view:11,viewers:'64674'},
                                                                                        {image:require('../../images/251_06.webp'),view:34565,viewers:'43645'},
                                                                                        {image:require('../../images/251_01.webp'),view:993214,viewers:'56756'},
                                                                                        {image:require('../../images/251_03.webp'),view:9868,viewers:'1231'}, {image:require('../../images/251_01.webp'),view:993214,viewers:'56756'},
                                                                                        {image:require('../../images/251_03.webp'),view:9868,viewers:'1231'}],dynamic:3423,},
                            {h2:'舞蹈',backGroundImageX:123,backGroundImageY:456,model:[{image:require('../../images/251_03.webp'),view:5333,viewers:'1123'},
                                                                                        {image:require('../../images/251_02.jpg'),view:9999,viewers:'45345'},
                                                                                        {image:require('../../images/251_01.webp'),view:1234,viewers:'534534'},
                                                                                        {image:require('../../images/251_04.webp'),view:6547,viewers:'56456'},
                                                                                        {image:require('../../images/251_05.webp'),view:11,viewers:'64674'},
                                                                                        {image:require('../../images/251_06.webp'),view:34565,viewers:'43645'},
                                                                                        {image:require('../../images/251_01.webp'),view:993214,viewers:'56756'},
                                                                                        {image:require('../../images/251_03.webp'),view:9868,viewers:'1231'}, {image:require('../../images/251_01.webp'),view:993214,viewers:'56756'},
                                                                                        {image:require('../../images/251_03.webp'),view:9868,viewers:'1231'}],dynamic:7777,},
                            {h2:'鬼畜',backGroundImageX:123,backGroundImageY:456,model:[{image:require('../../images/251_03.webp'),view:5333,viewers:'1123'},
                                                                                        {image:require('../../images/251_02.jpg'),view:9999,viewers:'45345'},
                                                                                        {image:require('../../images/251_01.webp'),view:1234,viewers:'534534'},
                                                                                        {image:require('../../images/251_04.webp'),view:6547,viewers:'56456'},
                                                                                        {image:require('../../images/251_05.webp'),view:11,viewers:'64674'},
                                                                                        {image:require('../../images/251_06.webp'),view:34565,viewers:'43645'},
                                                                                        {image:require('../../images/251_01.webp'),view:993214,viewers:'56756'},
                                                                                        {image:require('../../images/251_03.webp'),view:9868,viewers:'1231'}, {image:require('../../images/251_01.webp'),view:993214,viewers:'56756'},
                                                                                        {image:require('../../images/251_03.webp'),view:9868,viewers:'1231'}],dynamic:6666,},
                            {h2:'时尚',backGroundImageX:123,backGroundImageY:456,model:[{image:require('../../images/251_03.webp'),view:5333,viewers:'1123'},
                                                                                        {image:require('../../images/251_02.jpg'),view:9999,viewers:'45345'},
                                                                                        {image:require('../../images/251_01.webp'),view:1234,viewers:'534534'},
                                                                                        {image:require('../../images/251_04.webp'),view:6547,viewers:'56456'},
                                                                                        {image:require('../../images/251_05.webp'),view:11,viewers:'64674'},
                                                                                        {image:require('../../images/251_06.webp'),view:34565,viewers:'43645'},
                                                                                        {image:require('../../images/251_01.webp'),view:993214,viewers:'56756'},
                                                                                        {image:require('../../images/251_03.webp'),view:9868,viewers:'1231'}, {image:require('../../images/251_01.webp'),view:993214,viewers:'56756'},
                                                                                        {image:require('../../images/251_03.webp'),view:9868,viewers:'1231'}],dynamic:4444,}];
        return (
            <div>
                <Header/>
                <HeaderNav/>
                <Ad />
                <BiliLive />
                <FanDrama />
                {moduleData.map((item,i)=>{
                    return(
                        <Mod data={moduleData[i]}/>
                    )
                })}
                <Nav data={moduleData} />
                <Footer />
            </div>
        )
    }
}

export default Home