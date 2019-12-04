import React, { useGlobal, useEffect, useState } from 'reactn';
import { Grid, Container } from 'semantic-ui-react';
import StockChart from './StockChart';
import { fetchDataOverview } from '../../services/iexAPI';

import "./StockOverview.scss";

const StockOverview = () => {
  const [activeSymbol] = useGlobal("symbol");
  const [data, setData] = useState({});

  useEffect(() => {
    if(activeSymbol !== "") {
      fetchDataOverview(activeSymbol).then(res => {
        setData(res);
      });
    }
  }, [activeSymbol]);

  const getCarrets = (type, val) => {
    if(type === "h3") {
      if(val <= 0) {
        return (
          <h3 className="red">
            <i className="caret down icon"></i>
            {val}
          </h3>
        );
      } else {
        return (
          <h3 className="green">
            <i className="caret up icon"></i>
            {val}
          </h3>
        );
      }
    }
  }

  if(data.chart && data.quote) {
    return (
      <Container fluid className="raised padded segment">
        <Grid>
          <Grid.Row>
            <Grid.Column width={6}>
              <h1>{data.quote.latestPrice || 0}</h1>
            </Grid.Column>
            <Grid.Column width={6} className="text-center">
              {getCarrets("h3", data.quote.changePercent)}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <StockChart chartData={data.chart}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  } else {
    return (
      <div></div>
    )
  }
}

export default StockOverview;
