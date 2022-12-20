import styled from 'styled-components';
import logo from '../../assets/acessLogo.svg';
import React from 'react';
import {AuthContext} from '../../providers/auth';

export default function HeaderAccess(){
    const {user} = React.useContext(AuthContext);

    return(
        <StyledHeader>
            <StyledImageLogo src={logo} />
            <StyledImageProfile src={user.image}/>
        </StyledHeader>
    );
}

const StyledHeader = styled.header`
width: 375px;
height: 70px;
display: flex;
justify-content: space-between;
align-items: center;
background-color: #126BA5;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
position: fixed;
top: 0;
right: auto;
`;

const StyledImageLogo = styled.img`
width: 100px;
height: 49px;
margin-left: 18px;
`;

const StyledImageProfile = styled.img`
width: 51px;
height: 51px;
border-radius: 99px;
margin-right: 18px;
`;