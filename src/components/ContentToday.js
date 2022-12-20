import HeaderAccess from '../styles/constants/HeaderAccess';
import FooterAccess from '../styles/constants/FooterAccess';
import styled from 'styled-components';
import uncheck from '../assets/uncheck.png';
import check from '../assets/check.png';
import dayjs from 'dayjs';
import React, {useEffect, useState} from 'react';
import {urlBase_habits} from '../styles/constants/Links';
import axios from 'axios';
import {AuthContext} from '../providers/auth';

export default function ContentToday(){
    const {token} = React.useContext(AuthContext);
    const [nameWeekDay, setNameWeekDay] = useState('');
    const [monthNumber, setMonthNumber] = useState('');
    const [listHabits, setListHabits] = useState([]);
    let weekday = dayjs().day();
    let month = dayjs().month();

    const config = {
        headers: {
            "Authorization": `Bearer ${token.token}`
        }
    }

    useEffect(() => {
        const promise = axios.get(`${urlBase_habits}/today`, config);
        promise.then(answer => {setListHabits(answer.data)});
        promise.catch(error => {alert(`${error.response.data.message}`)});

        switch(weekday){
            case 0:
                setNameWeekDay('Domingo');
            break;

            case 1:
                setNameWeekDay('Segunda');
            break;

            case 2:
                setNameWeekDay('Terça');
            break;

            case 3:
                setNameWeekDay('Quarta');
            break;

            case 4:
                setNameWeekDay('Quinta');
            break;

            case 5:
                setNameWeekDay('Sexta');
            break;

            case 6:
                setNameWeekDay('Sábado');
            break;
        }

        switch(month){
            case 0:
                setMonthNumber('01');
            break;

            case 1:
                setMonthNumber('02');
            break;

            case 2:
                setMonthNumber('03');
            break;

            case 3:
                setMonthNumber('04');
            break;

            case 4:
                setMonthNumber('05');
            break;

            case 5:
                setMonthNumber('06');
            break;

            case 6:
                setMonthNumber('07');
            break;

            case 7:
                setMonthNumber('08');
            break;

            case 8:
                setMonthNumber('09');
            break;

            case 9:
                setMonthNumber('10');
            break;

            case 10:
                setMonthNumber('11');
            break;

            case 11:
                setMonthNumber('12');
            break;
        }

    }, []);

    return(
        <StyledContentToday>
            <HeaderAccess />
            <StyledDivDay>
                <h4>{nameWeekDay}, {dayjs().date()}/{monthNumber}</h4>
                <p>Nenhum hábito concluído ainda</p>
            </StyledDivDay>
            <StyledContentHabit>

                {listHabits.map((habit) => {
                    <StyledDivHabit>
                        <StyledHabitInfo>
                            <h4>{habit.name}</h4>
                            <p>Sequência atual: {habit.currentSequence}</p>
                            <p>Seu recorde: {habit.highestSequence}</p>
                        </StyledHabitInfo>
                        <StyledCheckImage src={!habit.done && uncheck || habit.done && check} />
                    </StyledDivHabit>
                })}

            </StyledContentHabit>

            <FooterAccess />
        </StyledContentToday>
    );
}

const StyledContentToday = styled.div`
width: 375px;
height: 667px;
display: flex;
flex-direction: column;
justify-content: center;
background-color: #E5E5E5;
`;

const StyledDivDay = styled.div`
width: 100%;
    h4{
        width: 172px;
        height: 29px;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
        margin-left: 17px;
    }
    p{
        width: 278px;
        height: 22px;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #BABABA;
        white-space: nowrap;
        margin-left: 17px;
    }
`;

const StyledContentHabit = styled.div`
width: 100%;
display: flex;
flex-direction: column;
margin-top: 28px;
margin-bottom: 80px;
`;

const StyledDivHabit = styled.div`
width: 340px;
height: 94px;
background-color: #FFFFFF;
border: 1px solid #E7E7E7;
display: flex;
justify-content: space-between;
align-items: center;
margin-left: 18px;
margin-top: 10px;
`;

const StyledHabitInfo = styled.div`
width: 50%;
display: flex;
flex-direction: column;
align-items: center;
margin-left: 10px;
    h4{
        width: 172px;
        height: 25px;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 20px;
        line-height: 26px;
        color: #666666;
        white-space: nowrap;
        margin-bottom: 8px;
    }
    p{
        width: 170px;
        height: 12px;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 12px;
        line-height: 12px;
        color: #666666;
        white-space: nowrap;
        margin-bottom: 4px;
    }
`;

const StyledCheckImage = styled.img`
width: 60px;
height: auto;
margin-right: 15px;
`;