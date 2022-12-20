import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import React from 'react';
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function FooterAccess(){
    const navigate = useNavigate();
    const percentage = 0;

    function goHabit(){
        navigate('/habitos');
    }

    function goToday(){
        navigate('/hoje');
    }

    function goHistoric(){
        navigate('/historico');
    }

    return(
        <StyledFooter>
            <p onClick={goHabit}>Hábitos</p>
            <button onClick={goToday}>
                <CircularProgressbar
                    value={percentage}
                    text={`Hoje`}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                        backgroundColor: "#3e98c7",
                        textColor: "#fff",
                        pathColor: "#fff",
                        trailColor: "transparent"
                    })}
                />
            </button>
            <p onClick={goHistoric}>Histórico</p>

        </StyledFooter>
    );
}

const StyledFooter = styled.div`
width: 100%;
height: 95px;
display: flex;
justify-content: space-around;
align-items: center;
position:fixed;
bottom: 0;
left: 0;
    p{
        width: 69px;
        height: 22px;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #52B6FF;
    }
    button{
        width: 91px;
        height: 91px;
        border-radius: 60px;
        border: none;
        background-color: #52B6FF;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #FFFFFF;
    }
`;