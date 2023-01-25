import { useMemo } from "react";
import {
  AmountCard,
  HeaderCard,
  SummaryCard,
  SummaryContainer,
  TitleCard,
} from "./styles";
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react";
import { defaultTheme } from "../../styles/themes/default";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { priceFormatted } from "../../utils/formatter";

function Summary() {
  const { transactions } = useSelector(
    (state: RootState) => state.transactions
  );

  const summary = useMemo(() => {
    return transactions.reduce(
      (acc: any, transaction: any) => {
        if (transaction.transactionType === "positive") {
          acc.positive += transaction.amount;
          acc.total += transaction.amount;
        } else {
          acc.negative += transaction.amount;
          acc.total -= transaction.amount;
        }

        return acc;
      },
      {
        positive: 0,
        negative: 0,
        total: 0,
      }
    );
  }, [transactions]);

  return (
    <SummaryContainer>
      <SummaryCard>
        <HeaderCard>
          <TitleCard>Entradas</TitleCard>
          <ArrowCircleUp size={32} color={defaultTheme["green-300"]} />
        </HeaderCard>
        <AmountCard>{priceFormatted.format(summary.positive)}</AmountCard>
      </SummaryCard>
      <SummaryCard>
        <HeaderCard>
          <TitleCard>Saídas</TitleCard>
          <ArrowCircleDown size={32} color={defaultTheme["red-300"]} />
        </HeaderCard>
        <AmountCard>{priceFormatted.format(summary.negative)}</AmountCard>
      </SummaryCard>
      <SummaryCard variant="green">
        <HeaderCard>
          <TitleCard>Total</TitleCard>
          <CurrencyDollar size={32} color={defaultTheme.white} />
        </HeaderCard>
        <AmountCard>{priceFormatted.format(summary.total)}</AmountCard>
      </SummaryCard>
    </SummaryContainer>
  );
}

export default Summary;
