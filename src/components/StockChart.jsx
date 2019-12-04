import React, { useGlobal} from 'reactn'
import { Container } from 'semantic-ui-react'

const StockChart = () => {
  const [activeSymbol, setActiveSymbol] = useGlobal("symbol");
  console.log(activeSymbol);
  return (
    <Container fluid className="raised very padded segment">
        Chart!
    </Container>
  )
}

export default StockChart
