import styled from "styled-components";

export const Header = styled.div`
color: white;
background-color: black;
display: flex;
flex-direction:row;
align-items: center;
justify-content: space-between;
padding: 20px;
font-size: 25px;
font-weight: bold;
box-shaddow: 0 3px 6px 0 #555;
`;

export const AppNameComponent = styled.div`
display: flex;
align-items: center;
`;

export const AppIcon = styled.img`
width: 35px;
height: 35px;
margin: 15px;

`;
export const SearchComponent = styled.div`
display: flex;
flex-direction: row;
background-color: white;
padding: 4px;
border-radius: 4px;
width: 50%;

`;
export const SearchIcon = styled.img`

width: 30px;
height: 30px;
`;

export const SearchInput = styled.input`
border: none;
outline: none;
margin-left: 15px;
font-size: 15px;
font-weight: bold;

`;