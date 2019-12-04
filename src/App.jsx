import React from 'reactn';
import 'semantic-ui-less/semantic.less'
import SearchBar from './components/SearchBar';
import { Container, Grid } from 'semantic-ui-react';
import Menu from './components/Menu';
import StockOverview from './components/StockOverview/StockOverview';
import Calendar from './components/Calendar';



function App() {
  return (
    <div>
      <Container className="very padded">
        <SearchBar />
        <Menu/>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <StockOverview />
            </Grid.Column>
            <Grid.Column width={8}>
              <Calendar />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
