

import styled from 'styled-components'
import user from '../assets/user.jpg'


let ProfileDiv = styled.div`
box-shadow : 0 4px 8px rgba(0 , 0 , 0 , 0.2);
display:inline-flex;
background-color : #f4f4f4;
padding : 2rem;
align-items: center;
justify-content : center;
margin: 0 1rem;

@media(max-width: 768px){
flex-direction : column;
}
`

let ProfilePicture = styled.img`
width: 150px;
height: 150px;
border-radius: 50%;
object-position: center;
object-fit : cover;
margin-right : 2rem;

@media(max-width: 768px){
margin-right: 0;
margin-bottom: 1rem;
}
`

let DetailsDiv = styled.div`
display : flex;
flex-direction : column;
align-items : flex-start;

h2{
font-size : 25px;
}

p{
font-size : 20px;
}

@media(max-width: 768px){
    h2{
    font-size : 21px;
    margin-bottom: 0;
    }

    p{
    font-size : 17px;
    }
}

`

export default function ProfileCard(){
    return (
        <div>
            <ProfileDiv>
                <ProfilePicture src={user} />
                <DetailsDiv>
                    <h2>Name and last name</h2>
                    <p>Short discription about user profile</p>
                </DetailsDiv>
            </ProfileDiv>
        </div>
    )
}