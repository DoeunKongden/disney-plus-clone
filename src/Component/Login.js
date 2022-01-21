import React from 'react';
import styled from 'styled-components';

function Login() {
  return ( 
    <Container>
        <Content>
            <CTALogoOne src="./Disney Clone Challenge/images/cta-logo-one.svg" />
                <SignUp>GET ALL THERE</SignUp>

            <Description>
                Disney plus page clone by : Doeun Kongden. I'm a web developer in training , currnetly training myself to be better at frontend so I move on to my back end skils
                and succeed in being a full stack developer. #From-No-Stack-to-Full-Stack.
            </Description>

            <CTALogoTwo src="./Disney Clone Challenge/images/cta-logo-two.png" />
        </Content>
    </Container>
)}

export default Login;


const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    justify-content: center;

    &:before{
        bcakground-position: top;
        background-size: cover;
        background: url("./Disney Clone Challenge/images/login-background.jpg") center center / cover no-repeat fixed;
        content: " ";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        opacity: 0.7;
    }

`

const Content = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    align-items: center;
`

const CTALogoOne = styled.img`

`

const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0px;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover{
        background-color: #0483ee;
    }
`

const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
`

const CTALogoTwo = styled.img`
    width: 90%;
    
`

