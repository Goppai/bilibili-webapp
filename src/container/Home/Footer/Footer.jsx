import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './Footer.css'
class Footer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        return(
            <div>
                <div className='home-footer'>
                    <div className='home-footer-container'>
                        <div>
                            <h2>bilibili</h2>
                            <div>
                                <div>关于我们</div>
                                <div>联系我们</div>
                                <div>加入我们</div>
                                <div>友情链接</div>
                                <div>bilibili认证</div>
                                <div>Investor Relations</div>
                            </div>
                        </div>
                        <div>
                            <h2>传送门</h2>
                            <div>
                                <div>帮助中心</div>
                                <div>高级弹幕</div>
                                <div>活动专题页</div>
                                <div>侵权申述</div>
                                <div>活动中心</div>
                                <div>用户反馈论坛</div>
                                <div>壁纸站</div>
                                <div>名人战</div>
                                <div>专车号服务中心</div>
                            </div>
                        </div>
                        <div> 
                            <img src="" alt=""/>
                        </div>
                       
                    </div>
                    <div className='home-footer-container2'>
                        广播电视节目制作经营许可证：（沪）字第1248号 | 网络文化经营许可证：沪网文[2016]2296-134号 | 信息网络传播视听节目许可证：0910417 | 互联网ICP备案：沪ICP备13002172号-3 <br />
                        沪ICP证：沪B2-20100043 | 违法不良信息举报邮箱：help@bilibili.com | 违法不良信息举报电话：4000233233转3 | 营业执照<br />
                        上海互联网举报中心 |12318 全国文化市场举报网站 | 沪公网安备 31011002002436号 |儿童色情信息举报专区<br />
                        网上有害信息举报专区： 中国互联网违法和不良信息举报中心<br />
                        公司名称：上海宽娱数码科技有限公司 | 公司地址：上海市杨浦区政立路485号 | 电话：021-25099888
                        </div>
                </div>
            </div>
         ) 
        }}
    export default Footer;