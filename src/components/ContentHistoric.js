import styled from 'styled-components';
import HeaderAccess from '../styles/constants/HeaderAccess';
import FooterAccess from '../styles/constants/FooterAccess';

export default function ContentHistoric(){
    return(
        <StyledContentHistoric>
            <HeaderAccess />
            <StyledHeader>
                <h3>Histórico</h3>
            </StyledHeader>
            <StyledFrase>Em breve você poderá ver o histórico dos seus hábitos aqui!</StyledFrase>
            <FooterAccess />
        </StyledContentHistoric>
    );
}

const StyledContentHistoric = styled.div`
width: 375px;
height: 667px;
display: flex;
flex-direction: column;
justify-content: center;
background-color: #E5E5E5;
`;

const StyledHeader = styled.header`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
margin-top: -330px;
margin-bottom: 28px;
    h3{
        width: 148px;
        height: 29px;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
        margin-left: 17px;
    }
`;

const StyledFrase = styled.p`
width: 338px;
height: 74px;
font-family: 'Lexend Deca', sans-serif;
font-weight: 400;
font-size: 18px;
line-height: 23px;
color: #666666; 
margin-left: 10px;
`