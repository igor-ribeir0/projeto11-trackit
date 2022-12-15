import styled, { ThemeConsumer } from 'styled-components';
import Logo from '../styles/constants/Logo';
import {Link, useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';
import {urlBase} from '../styles/constants/Links';
import {ThreeDots} from 'react-loader-spinner';

export default function ContentLogin(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [list, setList] = useState([]);
    const [released, setReleased] = useState(false);
    const navigate = useNavigate();

    function fazerLogin(event){
        event.preventDefault();
        const promise = axios.get(`${urlBase}/login`, {
            email: email,
            password: password
        });
        promise.then(answer => {setList(answer.data)});
        promise.catch(alert('Email ou senha inválido!'));
    }

    useEffect(() => {
        if(list.length !== 0){
            setReleased(true);
            navigate("/hoje");
        }
    }, []);

    return(
        <StyledContentLogin>
            <Logo />
            <StyledInputDiv>
                <form onSubmit={fazerLogin}>
                    <StyledInput 
                        type='email' 
                        placeholder='email' 
                        value={email} 
                        onChange={e => setEmail(e.target.value)}
                        disabled={released}
                        required 
                    />
                    <StyledInput 
                    type='password' 
                    placeholder='senha' 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    disabled={released}
                    required 
                    />
                    <StyledButton 
                        type='submit'
                        disabled={released}
                    >
                        {!released && <span>Entrar</span>}
                        {released && 
                        <StyledLoadingDiv>
                            <ThreeDots 
                                height="13" 
                                width="51" 
                                radius="9"
                                color="white" 
                                ariaLabel="three-dots-loading"
                                visible={true}
                                margin-left="36"
                            />
                        </StyledLoadingDiv>}
                    </StyledButton>
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
font-family: 'Lexend Deca', sans-serif;
font-size: 16px;
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
const StyledLoadingDiv = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`