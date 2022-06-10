
import styled from 'styled-components'

const StyledSideBar = styled.div`
    height: 100%;
    width: calc(100vw - 80vw);
    position: fixed;
    z-index: 11;
    top: 0;
    right: 0;
    overflow-x: hidden;
    padding-top: 10vh;
    transform: ${({open})=> open ? 'translateX(0)' : 'translateX(200%)'};
    transition: transform 0.3s ease-in-out;
    button{
        position: absolute;
        top: 5%;
        font-size: 2rem;
        margin-left: 2vw;
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
        align-items: center;
        .nav-link {
            padding-bottom: 5vw;
            font-size: 3vw;
            }
        .nav-link:hover{
            cursor: pointer;
            text-decoration: underline;
        }
    }
    @media (max-width: 768px){
        width: 100vw;
        button{
            font-size: 1.5rem;
            margin-left: 3vw;
        }
            .nav-link {
                padding-bottom: 0;
                font-size: 5vw;
                }
      
    }

`

export default StyledSideBar;