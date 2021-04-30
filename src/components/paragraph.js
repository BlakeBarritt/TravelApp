import React from 'react'
import styled from 'styled-components'

const Paragraph = () => {
    return (
        <div>
            <Parah1> Welcome</Parah1>
            <P1>openDOORS is a Global Membership Community that specializes in the converging markets of Travel, Hospitality, Real Estate, and Lifestyle Management.
            </P1>
            <P2>
            Our members are made up of individuals, Hotels, Businesses & Brands that share in core beliefs of Loyalty, Transparency, Genuine Hospitality and Community. 
            </P2>
        </div>
    )
}

export default Paragraph

const Parah1 = styled.h1`
text-align: center;
font-size: clamp(1.5rem, 6vw, 4rem);
margin-top: 20px;
// letter-spacing: 1px;
font-weight: 400;
font-style:
padding: 0 1rem;
`

const P1 = styled.h1`
font-size: clamp(1.2rem, 1vw, 1rem);
text-align: center;
margin: 10px;
// letter-spacing: 1px;
font-weight: 200;
font-style:
padding: 0 1rem;
`

const P2 = styled.h1`
font-size: clamp(1.2rem, 1vw, 1rem);
text-align: center;
margin: 10px;
// letter-spacing: 1px;
font-weight: 200;
font-style:
padding: 0 1rem;
`