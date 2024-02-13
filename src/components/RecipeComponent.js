import styled from "styled-components";



export const RecipeListContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
padding: 30px;
gap: 20px;
justify-content: space-evenly;
`;

export const RecipeContainer = styled.div`
display: flex;
flex-direction: column;
padding: 10px;
width: 300px;
box-shadow: 0 3px 10px 0 #ooo;
`;

export const CoverImage = styled.img`
height: 200px;
`;

export const RecipeName = styled.span`
font-size: 18px;
font-weight: bold;
color: black;
margin: 10px 0;
`;
export const IngText = styled.span`
font-size: 18px;
border: solid 1px green;
cusror:pointer;
padding: 10px 15px;
border-radius: 4px;
color: green;
text-align: center;


`;
export const SeeMoreText = styled(IngText)`
color: #eb3300;
border: solid 1px #eb3300;

`;
