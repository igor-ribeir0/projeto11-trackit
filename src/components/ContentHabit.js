import styled from 'styled-components';
import HeaderAccess from '../styles/constants/HeaderAccess';
import FooterAccess from '../styles/constants/FooterAccess';
import add from '../assets/add.png';
import React, {useState, useEffect} from 'react';
import trash from '../assets/trash.jpg';
import {urlBase_habits} from '../styles/constants/Links';
import {AuthContext} from '../providers/auth';
import axios from 'axios';

export default function ContentHabit(){
    const [habitName, setHabitName] = useState('');
    const [appear, setAppear] = useState(false);
    const days = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
    const {token} = React.useContext(AuthContext);
    const [listHabits, setListHabits] = useState([]);
    const [newArray, setNewArray] = useState([]);
    const [selectedDays, setSelectedDays] = useState([]);

    useEffect(() => {
        const config = {
            headers: {
                "Authorization": `Bearer ${token.token}`
            }
        }
        const promise = axios.get(`${urlBase_habits}`, config);
        promise.then(answer => {setNewArray(answer.data)});
        promise.catch(error => alert(`${error.response.data.message}`));
    }, []);

    function addHabit(){
        setAppear(true);
    }

    function saveHabit(event){
        event.preventDefault();
        const promise = axios.post(`${urlBase_habits}`, {
            name: habitName,
            days: selectedDays
        });
        promise.then(answer => {console.log(answer.data)});
        promise.catch(error => alert(`${error.response.data.message}`));
        setSelectedDays([]);
        setHabitName('');
        setListHabits(newArray);
        setAppear(false);
    }

    function selectDay(day){
        const inTheList = selectedDays.includes(day);

        if(inTheList){
            const index = selectedDays.indexOf(day);
            const newArray = [...selectedDays];
            newArray.splice(index, 1);
            setSelectedDays(newArray);
        }
        else{
            setSelectedDays([...selectedDays, day]);
        }
    }

    return (
        <StyledContentHabit>
            <HeaderAccess />

            <StyledHeader>
                <h3>Meus hábitos</h3>
                <img onClick={addHabit}src={add} />
            </StyledHeader>

            <StyledMainHabit appear={appear}>
                    <StyledDivHabit>
                        <StyledInput
                            type='text'
                            placeholder='nome do hábito'
                            value={habitName}
                            onChange={e => setHabitName(e.target.value)}
                        />

                        <StyledDivDays>
                            <div>
                                {days.map((day,i) => 
                                <StyledButton 
                                    onClick={() => selectDay(i)} 
                                    key={i}
                                    verify={selectedDays.includes(i)}
                                >
                                    {day}
                                </StyledButton>)}
                            </div>
                        </StyledDivDays>

                        <StyledDivConfirmButton>
                            <p>Cancelar</p>
                            <StyledSaveButton onClick={saveHabit}>Salvar</StyledSaveButton>
                        </StyledDivConfirmButton>

                    </StyledDivHabit>
            </StyledMainHabit>

            <StyledMainCreatedHabits>

                {listHabits.map((habit) => {
                    <StyledDivCreatedHabit>
                        <StyledTitleHabit>
                            <h3>{habit.name}</h3>
                            <img src={trash} />
                        </StyledTitleHabit>

                        <div>
                            {days.map((days,i) => 
                            <StyledButton key={i}>
                                {days}
                            </StyledButton>)}
                        </div>
                    </StyledDivCreatedHabit>
                })}

            </StyledMainCreatedHabits>

            <StyledStatusHabit verify={newArray.length !== 0}>
                <p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            </StyledStatusHabit>

            <FooterAccess />
        </StyledContentHabit>
    );
}

const StyledContentHabit = styled.div`
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
margin-top: -150px;
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
    img{
        width: 40px;
        height: 35px;
        margin-right: 17px;
    }
`;

const StyledStatusHabit = styled.div`
width: 100%;
display: ${props => props.verify? 'none':'flex'};
justify-content: center;
align-items: center;
    p{
        width: 338px;
        height: 74px;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 18px;
        line-height: 23px;
        color: #666666; 
    }
`;

const StyledMainHabit = styled.main`
width: 100%;
display: ${props => props.appear? 'flex' : 'none'};
justify-content: center;
align-items: center;
margin-bottom: 29px;
`;

const StyledDivHabit = styled.div`
width: 340px;
height: 180px;
border-radius: 5px;
background-color: #FFFFFF;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const StyledInput = styled.input`
width: 303px;
height: 45px;
border-radius: 5px;
border: 1px solid #D4D4D4;
font-family: 'Lexend Deca', sans-serif;
font-size: 16px;
margin-bottom: 10px;
    &::placeholder{
        width: 54px;
        height: 25px;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 18px;
        line-height: 25px;
    }
`;

const StyledDivDays = styled.div`
width: 100%;
display: flex;
justify-content: flex-start;
align-items: center;
    div{
        margin-left: 19px;
    }
`;

const StyledButton = styled.button`
width: 30px;
height: 30px;
border-radius: 5px;
border: 1px solid #D4D4D4;
background-color:${props => props.verify? '#808080': '#FFFFFF'};
font-family: 'Lexend Deca', sans-serif;
font-weight: 400;
font-size: 20px;
color: #D4D4D4;
margin-left: 5px;
`;

const StyledDivConfirmButton = styled.div`
width: 100%;
display: flex;
justify-content: flex-end;
align-items: center;
margin-top: 29px;
    p{
        width: 69px;
        height: 20px;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: #52B6FF;
    }
`;

const StyledMainCreatedHabits = styled.main`
width: 100%;
display: none;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const StyledDivCreatedHabit = styled.div`
width: 340px;
height: 91px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #FFFFFF;
margin-bottom: 10px;
    div{
        width: 100%;
        margin-left: 8px;
    }   
`;

const StyledTitleHabit = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
    h3{
        width: 172px;
        height: 25px;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 20px;
        line-height: 26px;
        color: #666666;
        white-space: nowrap;
        margin-bottom: 8px;
        margin-left: 10px;
    }
    img{
        width: 30px;
        height: auto;
        margin-top: -25px;
        margin-right: 5px;
    }
`;

const StyledSaveButton = styled.button`
width: 84px;
height: 35px;
border-radius: 5px;
background-color: #52B6FF;
color: #FFFFFF;
font-family: 'Lexend Deca', sans-serif;
font-weight: 400;
font-size: 18px;
border: none;
margin-left: 23px;
margin-right: 20px;
`