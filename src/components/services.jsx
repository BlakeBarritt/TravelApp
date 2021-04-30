import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import {FiAnchor} from 'react-icons/fi'
import Img from 'gatsby-image'


const Services = ({heading}) => {
    const data = useStaticQuery(graphql`
        query ServicesQuery {
            allServicesJson {
            edges {
                node {
                alt
                name
                img {
                    childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                    }
                }
                }
            }
            }
        }
    `)

    function getServices(data) {
        const servicesArray = []
        data.allServicesJson.edges.forEach((item, index) => {
            servicesArray.push(
                <ProductCard key={index}>
                    <ProductImg
                        src={item.node.img.childImageSharp.fluid.src}
                        alt={item.node.alt}
                        fluid={item.node.img.childImageSharp.fluid}
                    />
                    <ProductInfo> 
                        <TextWrap> 
                            <FiAnchor />
                            <ProductTitle>{item.node.name}</ProductTitle>
                        </TextWrap>
                    </ProductInfo>
                </ProductCard>
            )
        })
        return servicesArray;
    }
    return (
        <ProductsContainer>
            <ProductsHeading>{heading}</ProductsHeading>
                <ProductWrapper>
                    {getServices(data)}
                </ProductWrapper>
        </ProductsContainer>
    )
}

export default Services
// Styles 
const ProductsContainer = styled.div`
    min-height: 100vh;
    padding: 5rem calc((100vw - 1300px) / 2);
    background: #fff;
    color: #fff;
    margin-top: -40px;
`
const ProductsHeading = styled.div`
    font-size: clamp(1.2rem, 5vw, 3rem);
    text-align: center;
    margin-top: 5rem;
    margin-bottom: 1rem;
    color: #000;
`
const ProductWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    justify-items: center;
    padding: 0 2rem;

    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr 1fr;
    }
    @media screen and (max-width: 1200px) {
        grid-template-columns: 1fr;
    }
`
const ProductCard = styled.div`
    line-height: 2;
    width: 100%;
    height: 500px;
    position: relative;
    border-radius: 10px;
    transition: 0.2s ease;
`

const ProductImg = styled(Img)`
    height: 100%;
    max-width: 100%;
    position: absolute;
    border-radius: 10px;
    filter: brightness(70%);
    transition: .4s cubic-bezier(0.075, 0.082, 0.165, 1);

    &:hover{
        filter: brightness(100%);
    }
`

const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 2rem;

    @media screen and (max-width: 280px){
        padding: 0 1 rem;
    }
`

const TextWrap = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    top: 150px;
    left: 150px;
`

const ProductTitle = styled.div`
    font-weight: 400;
    font-size: 1rem;
    margin-left: 0.5rem;
`