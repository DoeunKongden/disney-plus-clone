import React from 'react'
import styled from 'styled-components'

function Detail() {
    return (
       <Container>
           <Background>
               <img src='./Bao.jfif' />
           </Background>

           <Title>
                <img src='./bao-logo-removebg.png' />
           </Title>

           <Controls>
                <PlayBtn>
                    <img src='./Disney Clone Challenge/images/play-icon-black.png' />
                    <span>Play</span>
                </PlayBtn>

                <TrailerBtn>
                    <img src='./Disney Clone Challenge/images/play-icon-white.png' />
                    <span>Trailer</span>
                </TrailerBtn>

                <AddBtn>
                    <span>+</span>
                </AddBtn>

                <GroupWatchBtn>
                    <img src='./Disney Clone Challenge/images/group-icon.png' />
                </GroupWatchBtn>
           </Controls>

           <SubTitle>
               2018. 7m. Family, Fantasy, Kids, Animation
           </SubTitle>

           <Description>
                The film is about an aging and lonely Chinese-Canadian mother, suffering from empty nest syndrome, 
                who receives an unexpected second chance at motherhood when she makes a steamed bun (baozi) that comes to life. 
                The film won the Academy Award for Best Animated Short Film at the 91st Academy Awards.
           </Description>
       </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw - 5px); 
    position: relative;
`

const Background = styled.div`
     position: fixed;
     top: 0;
     left: 0;
     bottom: 0;
     right: 0;
     z-index: -1;
     opacity: 0.8;

     img{
         width: 100%;
         height: 100%;
         object-fit: cover;
     }
`

const Title = styled.div`
     height: 30vh;
     width: 35vw;
     min height: 170px;
     min-width: 200px;
    
    img{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const Controls = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 50px;

`

const PlayBtn = styled.button`
    border-radius: 4px;
    font-size: 15px;
    padding: 0px 24px;
    margin-right: 22px;
    display: flex;
    align-items: center;
    height: 56px;
    background: rgb(249, 249, 249);
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;

    &:hover{
        background: rgb(198, 198, 198);

    }
`

const TrailerBtn = styled(PlayBtn)`
    background: rgb(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
    text-transform: uppercase;
    letter-spacing: 1.8px;
`

const AddBtn = styled.button`
    maring-right: 20px;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center; 
    justify-content: center;
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;

    span{
        font-size: 30px;
        color: white;

    }
`

const GroupWatchBtn = styled(AddBtn)`
    background: rgb(0, 0, 0);
    margin: 0px 20px;
`

const SubTitle = styled.div`
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 26px;

`

const Description = styled.div`
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
    max-width: 760px;
`
