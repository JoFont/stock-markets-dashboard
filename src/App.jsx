import React from 'react';
import 'semantic-ui-less/semantic.less'
import SearchBar from './components/SearchBar';
import { Container } from 'semantic-ui-react';



function App() {
  return (
    <div>
      <Container>
        <SearchBar />
      </Container>
    </div>
  );
}

export default App;
