import styled from 'styled-components'

const StyledBurger = styled.button`
position: absolute;
top: 5%;
left: 90%;
display: flex;
flex-direction: column;
justify-content: space-around;
height: 3rem;
width: 2rem;
cursor: pointer;
background-color: transparent;
border: none;
z-index: 10;
padding: 0;

&:focus {
    outline: none;
}
span{
    height: 0.25rem;
    width: 2rem;
    background-color: yellow;
    position: relative;
    border-radius: 10px;
}`

export default StyledBurger