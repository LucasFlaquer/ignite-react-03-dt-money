import { Header } from '../../components/header'
import { Summary } from '../../components/summary'
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />
      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Deenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>14/12/2024</td>
            </tr>
            <tr>
              <td width="50%">Date</td>
              <td>
                <PriceHighlight variant="outcome">- R$ 12.00,00</PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>14/12/2024</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
