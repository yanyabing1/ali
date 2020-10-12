import React,{useState} from 'react'
export default function Foot(){
    const footstyle={
        height:'44px',
        color:'#2C2F33',
        lineHeight:'44px',
        textAlign:'center',
        color:'gray',
        footSize:'12px',
        background:'#2C2F33',
    }
    return(
        <div style={footstyle}>
            阿里巴巴集团 Copyright ©1999-2020 版权所有
        </div>
    )
}