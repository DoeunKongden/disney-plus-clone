import React from 'react'
import styled from 'styled-components'

function Header() {
    return (
        <Nav>

          <Logo src='./Disney Clone Challenge/images/logo.svg' />
            <NavMenu>
                <a>
                    <img src='./Disney Clone Challenge/images/home-icon.svg' />
                    <span>Home</span>
                </a>

                <a>
                    <img src='./Disney Clone Challenge/images/search-icon.svg' />
                    <span>Search</span>
                </a>

                <a>
                    <img src='./Disney Clone Challenge/images/watchlist-icon.svg' />
                    <span>Watch list</span>
                </a>

                <a>
                    <img src='./Disney Clone Challenge/images/original-icon.svg' />
                    <span>original</span>
                </a>

                <a>
                    <img src='./Disney Clone Challenge/images/movie-icon.svg' />
                    <span>Movies</span>
                </a>

                <a>
                    <img src='./Disney Clone Challenge/images/series-icon.svg' />
                    <span>Series</span>
                </a>
            </NavMenu>

            <UserImg src='./my pf.jpg' />

        </Nav>
    )
}

export default Header

const  Nav = styled.nav`
    height: 70px;
    background-color: #090b13;
    color: white;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;
`
const Logo = styled.img`
    width: 80px;

`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;

    a{
        display: flex;
        align-items: center;
        padding: 0 30px;
        cursor: pointer;

        img{
            height: 20px;
        }

        span{
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;

            &:after{
                content: "";
                height:  2px;
                background-color: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 0;
                transform-origin: left center;
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                transform: scaleX(0);
            }
        }

        &:hover{
            span:after{
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }


`

const UserImg = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
`
