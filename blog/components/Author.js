/*
 * @Author: wangtao
 * @Date: 2021-11-15 15:25:17
 * @LastEditors: 汪滔
 * @LastEditTime: 2021-11-15 15:34:17
 * @Description: 自我介绍
 */

import {Avatar,Divider} from 'antd'
import {GithubOutlined,QqOutlined,WechatOutlined} from '@ant-design/icons'

const Author =()=>{

    return (
        <div className="author-div comm-box">
            <div> <Avatar size={100} src="http://blogimages.jspang.com/blogtouxiang1.jpg"  /></div>
            <div className="author-introduction">
                光头程序员，专注于WEB和移动前端开发。要录1000集免费前端视频的傻X。此地维权无门，此时无能为力，此心随波逐流。
                <Divider>社交账号</Divider>
                <Avatar size={28} icon={<GithubOutlined/>} className="account"  />
                <Avatar size={28} icon={<QqOutlined/>}  className="account" />
                <Avatar size={28} icon={<WechatOutlined />}  className="account"  />

            </div>
        </div>
    )

}

export default Author