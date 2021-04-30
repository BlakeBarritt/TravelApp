import styled from 'styled-components'
import { Link } from 'gatsby'

export const Button = styled(Link) `
    background: ${({ primary }) => (primary ? '#1b0d0d' : '#000000')};
    white-space: nowrap;
    padding: ${({ big }) => (big ? '16px 40px' : '10px 32px')};
    color: #fff;
    font-size: ${({ big }) => (big ? '20px' : '16px')};
    outline: none;
    border: none;
    min-width: 100px;
    cursor: pointer;
    font-weight: 400;
    text-decoration: none;
    transition .3s !important;
    opacity: .9;

    &:hover {
        background: ${({ primary }) => (primary ? '#000000' : '#1b0d0d')};
        transform: translateY(-1px);
    }
`