import React from 'react'
import styled from 'styled-components'
import { Button } from './button'
import bgVideo from '../assets/videos/hero.mp4'
const Hero = () => {
    return (
        <HeroContainer>
            <HeroBG>
                <Video src={bgVideo} type="video/mp4" autoPlay loop muted playsInline />
            </HeroBG>
            <HeroContent>
                <HeroItems>
                    <HeroH1> Open Doors Global </HeroH1>
                    <Button primary="true" round="true" to="/page-2">Join Us</Button>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero

const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    height: 100vh;
    position: relative;
    padding: 0 1rem;
    margin-top: -40px;
    margin: 0px;

    :before {
        content: "";
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 2;
        background: linear-gradient(180 deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), 
            linear-gradient(180 deg, rgba(0,0,0,0.2) 0%, transparent 100%);
    }
`
const HeroBG = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%
    height: 100%;
    overflow: hidden;
    filter: drop-shadow(8px 8px 10px gray);
`
const Video = styled.video`
    width: 100%
    height 100%;
    -o-object-fit: cover;
    object-fit: cover;
    filter: drop-shadow(8px 8px 10px gray);
`
const HeroContent = styled.div`
    z-index: 3;
    height: calc(100vh - 80px);
    max-height: 100%;
    padding: 0rem calc((100vw - 1300px) / 2);
`
const HeroItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
    max-height: 100%;
    padding: 0;
    color: #fff;
    line-height: 1.1;
    font-weight: bold;
`
const HeroH1 = styled.h1`
    font-size: clamp(1.5rem, 6vw, 4rem);
    margin-bottom: 10px;
    // letter-spacing: 1px;
    font-weight: 400;
    font-style:
    padding: 0 1rem;
    filter: drop-shadow(2px 2px 4px black);

`
// rafc