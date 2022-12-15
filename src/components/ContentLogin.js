import styled from 'styled-components';
import Logo from '../styles/constants/Logo';
import {Link} from "react-router-dom";

export default function ContentLogin(){
    return(
        <StyledContentLogin>
            <Logo />
            <StyledInputDiv>
                <form>
                    <StyledInput type='email' placeholder='email' required />
                    <StyledInput type='password' placeholder='senha' required />
                    <StyledButton type='submit'><span>Entrar</span></StyledButton>
                </form>
            </StyledInputDiv>
            <Link to='/cadastro'>
                <StyledLink>Não tem uma conta? Cadastre-se!</StyledLink>
            </Link>
        </StyledContentLogin>
    );
}

const StyledContentLogin = styled.div`
width: 375px;
height: 667px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #FFFFFF;
margin-top: 30px;
`
const StyledInputDiv = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const StyledInput = styled.input`
width: 303px;
height: 45px;
border-radius: 5px;
border: 1px solid #D4D4D4;
background-color: #FFFFFF;
margin: 3px 36px;
    &::placeholder{
        width: 54px;
        height: 25px;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 20px;
        line-height: 25px;  
    }
`
const StyledButton = styled.button`
width: 303px;
height: 45px;
border-radius: 5px;
background-color: #52B6FF;
margin-top: 3px;
margin-bottom: 25px;
margin-left: 35px;
margin-right: 35px;
    &:hover{
        cursor: pointer;
    }
    span{
        width: 64px;
        height: 26px;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 21px;
        line-height: 26px;
        color: #FFFFFF
    }
`
const StyledLink = styled.span`
width: 232px;
height: 17px;
font-family: 'Lexend Deca', sans-serif;
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #52B6FF;
`