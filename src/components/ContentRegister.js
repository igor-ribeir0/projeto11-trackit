import Logo from "../styles/constants/Logo";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { urlBase } from "../styles/constants/Links";
import { ThreeDots } from "react-loader-spinner";
import {StyledContent, StyledInputDiv, StyledInput, StyledButton, StyledLink, StyledLoadingDiv} from '../styles/constants/StyledsComponents';

export default function ContentRegister() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [photo, setPhoto] = useState('');
    const [notReleased, setNotReleased] = useState(false);
    const navigate = useNavigate();

    function signUp(event){
        event.preventDefault();
        const promise = axios.post(`${urlBase}/sign-up`, {
            email: email,
            name: name,
            image: photo,
            password: password
        });
        promise.then(sucessSignUp);
        promise.catch(error => {alert(`${error.response.data.message}`)});
    }

    function sucessSignUp(){
       setNotReleased(true);

       setTimeout(() => {
        navigate('/');
       },3000)
    }

    return (
        <StyledContent>
            <Logo />
            <StyledInputDiv>
                <form onSubmit={signUp}>
                <StyledInput
                    type="email"
                    placeholder="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={notReleased}
                    required
                />
                <StyledInput
                    type="password"
                    placeholder="senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={notReleased}
                    required
                />
                <StyledInput
                    type="text"
                    placeholder="nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={notReleased}
                    required
                />
                <StyledInput
                    type="url"
                    placeholder="foto"
                    value={photo}
                    onChange={(e) => setPhoto(e.target.value)}
                    disabled={notReleased}
                    required
                />
                <StyledButton 
                type="submit" 
                disabled={notReleased}
                >
                    {!notReleased && <span>Cadastrar</span>}
                    {notReleased && (
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
                    </StyledLoadingDiv>
                    )}
                </StyledButton>
                </form>
            </StyledInputDiv>
            <Link to='/'>
                <StyledLink>Já tem uma conta? Faça login!</StyledLink>
            </Link>
        </StyledContent>
    );
}