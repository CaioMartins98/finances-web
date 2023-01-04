import React from "react";
import {
  AmountCard,
  HeaderCard,
  SummaryCard,
  SummaryContainer,
  TitleCard,
} from "./styles";
import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from "phosphor-react";
import { defaultTheme } from "../../styles/themes/default";
function Summary() {
  return (
    <SummaryContainer>
      <SummaryCard>
        <HeaderCard>
          <TitleCard>Entradas</TitleCard>
          <ArrowCircleUp size={32} color={defaultTheme["green-300"]} />
        </HeaderCard>
        <AmountCard>R$ 17.400,00</AmountCard>
      </SummaryCard>
      <SummaryCard>
        <HeaderCard>
          <TitleCard>Saídas</TitleCard>
          <ArrowCircleDown size={32} color={defaultTheme["red-300"]} />
        </HeaderCard>
        <AmountCard>R$ 2.400,00</AmountCard>
      </SummaryCard>
      <SummaryCard variant="green">
        <HeaderCard>
          <TitleCard>Total</TitleCard>
          <CurrencyDollar size={32} color={defaultTheme.white} />
        </HeaderCard>
        <AmountCard>R$ 15.000,00</AmountCard>
      </SummaryCard>
    </SummaryContainer>
  );
}

export default Summary;
