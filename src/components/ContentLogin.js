import Logo from '../styles/constants/Logo';
import {Link, useNavigate} from 'react-router-dom';
import React, {useState} from 'react';
import axios from 'axios';
import {urlBase} from '../styles/constants/Links';
import {ThreeDots} from 'react-loader-spinner';
import {StyledContent, StyledInputDiv, StyledInput, StyledButton, StyledLink, StyledLoadingDiv} from '../styles/constants/StyledsComponents';
import {AuthContext} from '../providers/auth';

export default function ContentLogin(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [notReleased, setNotReleased] = useState(false);
    const navigate = useNavigate();
    const {setUser} = React.useContext(AuthContext);
    const {setToken} = React.useContext(AuthContext);

    function login(event){
        event.preventDefault();
        const promise = axios.post(`${urlBase}/login`, {
            email: email,
            password: password
        });
        promise.then(sucessLogin);
        promise.then(answer => setUser({image: answer.data.image}));
        promise.then(answer => setToken({token: answer.data.token}));
        promise.catch(error => {alert(`${error.response.data.message}`)});
    }

    function sucessLogin(){
        setNotReleased(true);

        setTimeout(() => {
            navigate('/hoje');
        },3000);
    }

    return(
        <StyledContent>
            <Logo />
            <StyledInputDiv>
                <form onSubmit={login}>
                    <StyledInput 
                        type='email' 
                        placeholder='email' 
                        value={email} 
                        onChange={e => setEmail(e.target.value)}
                        disabled={notReleased}
                        required 
                    />
                    <StyledInput 
                    type='password' 
                    placeholder='senha' 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    disabled={notReleased}
                    required 
                    />
                    <StyledButton 
                        type='submit'
                        disabled={notReleased}
                    >
                        {!notReleased && <span>Entrar</span>}
                        {notReleased && 
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
        </StyledContent>
    );
}