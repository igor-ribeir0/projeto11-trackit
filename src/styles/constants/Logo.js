import styled from 'styled-components';
import logo from '../../assets/logo.svg';

export default function Logo(){
    return(
        <StyledImage src={logo} />
    );
}

const StyledImage = styled.img`
width: 180px;
height: 178px;
margin-bottom: 32px;
`