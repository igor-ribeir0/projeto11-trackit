import ContentRegister from '../ContentRegister';
import styled from 'styled-components';

export default function RegisterPage(){
    return(
        <StyledMain>
            <ContentRegister />
        </StyledMain>
    );
}

const StyledMain = styled.main`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: #E5E5E5;
`