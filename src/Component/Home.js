import React, {useEffect } from 'react'
import styled from 'styled-components'
import ImgSlider from './ImgSlider'
import Movies from './Movies'
import Viewers from './Viewers'



function Home() {

    // useEffect(()=>{
    //     db.collection("movies").onSnapshot((snapshot)=> {
    //         console.log(snapshot);
    //     }) // the thing inside useEffect will alwasy run when ever the home page is loading
    // },[])  

 //since my the firebase data base that nanz provide us has change there security authentication , we won't be able to do our backend for this data base
 
    
    return (
        <Container>
            <ImgSlider></ImgSlider>
            <Viewers></Viewers>
            <Movies />
        </Container>
    )
}

export default Home

const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow-x: hidden;

    &:before{
        background: url("./Disney Clone Challenge/images/home-background.png") center center / cover no-repeat fixed;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
    }
`
