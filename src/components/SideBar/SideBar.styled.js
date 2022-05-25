import styled from 'styled-components'

const StyledSideBar = styled.div`
    height: 100%;
    width: calc(100vw - 80vw);
    position: fixed;
    z-index: 11;
    top: 0;
    right: 0;
    overflow-x: hidden;
    margin-right: 5vw;
    padding-top: 10vh;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'}

    button{
        position: fixed;
        top: 5%;
        margin-right: 70%;
        cursor: pointer;
        border: none;
        background-color: transparent;
        &:focus {
            outline: none;
        }
    }

    ul, ul.nav-list{
        top: 35%;
        position:relative;
        display: flex;
        flex-direction: column;
        .nav-link {
            padding-bottom: 5vw;
            font-size: 20px;
            }
        .nav-link:hover{
            cursor: pointer;
        }
    }
`

export default StyledSideBar