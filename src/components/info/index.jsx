import React,{useState,useEffect} from 'react'
import styled from './info.less'
import {List} from 'react-virtualized';
export default function Info() {
    const list = [
        'Brian Vaughn1',
        'Brian Vaughn2',
        'Brian Vaughn3',
        'Brian Vaughn4',
        'Brian Vaughn5',
        'Brian Vaughn6',
        'Brian Vaughn7',
        'Brian Vaughn8',
        'Brian Vaughn9',
        'Brian Vaughn10',
        'Brian Vaughn1',
        'Brian Vaughn2',
        'Brian Vaughn3',
        'Brian Vaughn4',
        'Brian Vaughn5',
        'Brian Vaughn6',
        'Brian Vaughn7',
        'Brian Vaughn8',
        'Brian Vaughn9',
        'Brian Vaughn10',
        // And so on...
      ];
       const [move,setMove] = useState(0)
       const [timer,settimer] = useState(null)
       useEffect(() => {
        settimer(
            setTimeout(()=>{
                if(move>-400){
                    setMove(move=>move-5)
                }else{
                    setMove(10)
                }
           },300)
        )
       },[move])

    // 清除定时器
    function clearTimer(){
        clearTimeout(timer)
    }

    //启动定时器
    function startTimer(){
        settimer(
            setTimeout(()=>{
                if(move>-400){
                    setMove(move=>move-5)
                }else{
                    setMove(10)
                }
           },300)
        )
    }
    function rowRenderer({
        key, // Unique key within array of rows
        index, // Index of row within collection
        isScrolling, // The List is currently being scrolled
        isVisible, // This row is visible within the List (eg it is not an overscanned row)
        style, // Style object to be applied to row (to position it)
      }) {
        return (
          <div key={key} style={style} >
            <div className={styled.item}>
                <a href='https://job.alibaba.com/zhaopin/PositionDetail.htm?spm=a2obv.11410899.0.0.55ef6c61PhKq4D&positionCode=GP668397&' className={styled.left}>蚂蚁集团-智能客服运营专家（渠道运营）{index}</a>
                <div className={styled.center}>杭州</div>
                <div className={styled.right}>51分钟前</div>
            </div>
          </div>
        );
      }
    return (
        <div>
            <section>
                <div className={styled.info}>
                    <div className={styled.title}>
                        最新职位
                        <a href="https://job.alibaba.com/zhaopin/positionList.html?">更多</a>
                    </div>
                    <div className={styled.list}>
                    <ul style={{top:`${move}px`}} onMouseOver={clearTimer} onMouseOut={startTimer}>
                    <List
                        width={850}
                        height={300}
                        rowCount={list.length}
                        rowHeight={50}
                        rowRenderer={rowRenderer}
                        autoHeight={true}
                    />
                    </ul>
                </div>
                </div>
                <div className={styled.logo}>
                    <a href="https://www.aliyun.com/careers?spm=a2obv.11410899.0.aliyun.21786c61JPAEKM">
                        <img src="https://img.alicdn.com/tfs/TB1SbxarYj1gK0jSZFOXXc7GpXa-2546-848.png" alt="" style={{ width: '179px', height: '60px' }} />
                    </a>
                    <a href="https://job.alibaba.com/zhaopin/informationPlatformBu.htm?spm=a2obv.11410899.0.xinxipingtai.55ef6c61fEKHAC">
                        <img src="https://img.alicdn.com/tfs/TB18tFCCH2pK1RjSZFsXXaNlXXa-240-34.svg" alt="" />
                    </a>
                </div>
            </section>
        </div>
    )
}