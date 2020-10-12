import React,{useState} from 'react'
import styled from './banner.less'
export default function Header(){
    const [hotList,sethotList]=useState([
        {
            id:0,
            title:'JAVA'
        },
        {
            id:1,
            title:'IOS'
        },
        {
            id:2,
            title:'数据'
        },
        {
            id:3,
            title:'安全'
        },
        {
            id:4,
            title:'搜索'
        },
        {
            id:5,
            title:'算法'
        },
        {
            id:6,
            title:'运营'
        },
        {
            id:7,
            title:'视觉'
        },
        {
            id:8,
            title:'交互'
        },
        {
            id:9,
            title:'前端'
        },
    ])
    function hotSearchRender(){
    return hotList.map((item)=>(<a href='#' key={item.id}>{item.title}</a>))
    }
    return(
        <div>
            <div className={styled.pic}>
                <div className={styled.mask}></div>
                <img src="https://img.alicdn.com/tfs/TB14TEEm7CWBuNjy0FaXXXUlXXa-1440-478.png" alt=""/>
                <div className={styled.info}>
                    <div className={styled.title}>
                        <p>If not now, when?</p>
                        <p>If not me, who?</p>
                        <p style={{fontSize:'34px'}}>此时此刻，非我莫属！</p>
                    </div>
                    <div className={styled.search}>
                        <div className={styled.search_input}>
                            <input type="text" placeholder='请输入职位关键词'/>
                        </div>    
                            <div className={styled.search_btn}>搜索</div>    
                    </div>
                    <div className={styled.hotSearch}>
                        <span>热门搜索:</span>
                    {hotSearchRender()}
                    </div>
                </div>
            </div>
        </div>
    )
}