import styled from 'styled-components';
import { AppIcon, AppNameComponent, Header, SearchComponent, SearchIcon, SearchInput } from './components/headerComponent';
import { CoverImage, RecipeContainer, RecipeListContainer, RecipeName, IngText, SeeMoreText } from './components/RecipeComponent';


const Container = styled.div`
display: flex;
flex-direction:column;`;


function App() {
  return (
    <Container>
      <Header> <AppNameComponent> <AppIcon src="/hamburger.svg" />  </AppNameComponent>
      <SearchComponent> < SearchIcon src="/search-icon.svg" />
      <SearchInput placeholder= "Search your Recipe"/>
      </SearchComponent>
       Recipe finder</Header>
      <RecipeListContainer>
        <RecipeContainer>
          <CoverImage src = "/hamburger.svg"/>
          <RecipeName>Karahi</RecipeName>
          <IngText> chicken </IngText>
          <SeeMoreText> see complete Recipe </SeeMoreText>
        </RecipeContainer>
        <RecipeContainer>
          <CoverImage src = "/hamburger.svg"/>
          <RecipeName>Karahi</RecipeName>
          <IngText>chicken</IngText>
          <SeeMoreText>see complete Recipe</SeeMoreText>
        </RecipeContainer>
        <RecipeContainer>
          <CoverImage src = "/hamburger.svg"/>
          <RecipeName>Karahi</RecipeName>
          <IngText>chicken</IngText>
          <SeeMoreText>see complete Recipe</SeeMoreText>
        </RecipeContainer>
        <RecipeContainer>
          <CoverImage src = "/hamburger.svg"/>
          <RecipeName>Karahi</RecipeName>
          <IngText>chicken</IngText>
          <SeeMoreText>see complete Recipe</SeeMoreText>
        </RecipeContainer>
        <RecipeContainer>
          <CoverImage src = "/hamburger.svg"/>
          <RecipeName>Karahi</RecipeName>
          <IngText>chicken</IngText>
          <SeeMoreText>see complete Recipe</SeeMoreText>
        </RecipeContainer>
        
      </RecipeListContainer>
    </Container>
  );
}

export default App;
