import React,{useState} from 'react'
import styled from './header.less'
export default function Header(){
    const [menuList] = useState([
            {
                id:0,
                title:`首  页`
            },
            {
                id:1,
                title:'社会招聘'
            },
            {
                id:2,
                title:'校园招聘'
            },
            {
                id:3,
                title:'了解阿里'
            },
            {
                id:4,
                title:'个人中心'
            },
        ])
        const [actColor,setactColor] =useState(0)
    //对菜单块进行渲染
    function menuRender(){
        return menuList.map(((item,index)=>(<li key={item.id}><a href='#' 
        className={actColor==item.id?'head_active':''}
        onClick={()=>{menuclick(item.id)}}
        >{item.title}</a></li>)))
    }
    //当菜单栏被点击
    function menuclick(index){
        setactColor(index)
    }
    return(
        <div className={styled.head}>
            <div className={styled.head_menu}>
                <img src="https://img.alicdn.com/tfs/TB1Zv8_lxSYBuNjSspjXXX73VXa-390-63.png" alt="" title='Alibaba'/>
                <i>|</i>
                <span>社招官网</span>
                <ul>
                   {menuRender()}
                </ul>
            </div>
            <div className={styled.head_login}>
                <span>欢迎来到阿里巴巴集团招聘！</span>
                <a href="">登录</a>
                <i>|</i>
                <a href="">注册</a>
            </div>
        </div>
    )
}