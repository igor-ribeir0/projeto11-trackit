import ContentToday from '../ContentToday';
import styled from 'styled-components';

export default function TodayPage(props){
    const {profilePhoto} = props;
    return(
        <StyledMain>
            <ContentToday profilePhoto={profilePhoto}/>
        </StyledMain>
    );
}

const StyledMain = styled.main`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
background-color: #FFFFFF;
`