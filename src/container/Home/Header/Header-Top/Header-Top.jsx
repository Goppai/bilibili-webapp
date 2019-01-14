import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './Header-Top.css'
class HeaderTop extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <div className="header-top">
                    <nav className='clearfix'>
                       <div className='pull-left pull '>
                        <a href="" id='bilibili'> <i className='header-icon-bilibili-tv header-iconfont'></i>主站</a>
                        <a href="">画友</a>
                        <a href="">音频</a>
                        <a href="">游戏中心</a>
                        <a href="">直播</a>
                        <a href="">会员购</a>
                        <a href="">漫画</a>
                        <a href="" id='download'> <i className='header-icon-bilibili-iphone header-iconfont'></i>下载APP</a>
                       </div>
                       <div className="search-form">
                        <a href='' className='href-leaderboard'> <span>排行榜</span></a>                        
                        <form className='search-bar'>
                            <input type="text" placeholder="你是你爸妈充话费送的吗？" />  
                            <button className='search-submit' type="submit"></button>  
                        </form>  
                       </div>
                       <div className="pull-right pull">
                        <a id="user-img" href="" ><img  src="" alt=""/></a>
                        <a href="">大会员</a>
                        <a href="">消息</a>
                        <a href="">动态</a>
                        <a href="">稍后观看</a>
                        <a href="">收藏夹</a>
                        <a href="">历史</a>
                        <a href="" id='post'>投稿</a>
                       </div>
                    </nav>
                </div>
            </div>
        )
    }
}

export default HeaderTop