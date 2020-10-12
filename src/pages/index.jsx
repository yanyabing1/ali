import React from 'react'
import Header from '../components/header/index.jsx'
import Banner from '../components/banner/index.jsx'
import Info from '../components/info/index.jsx'
import Foot from '../components/foot/index.jsx'
export default function Home(){
    return(
        <div>
            <Header />
            <Banner />
            <Info />
            <Foot />
        </div>
    )
}