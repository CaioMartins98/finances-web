import React from "react";
import * as Select from "@radix-ui/react-select";
import { Funnel, Check } from "phosphor-react";

interface SelectProps {
  order: string;
  setOrder: (value: string) => void;
}
function SelectOrder({ order, setOrder }: SelectProps) {
  return (
    <>
      <Select.Root value={order} onValueChange={setOrder}>
        <Select.Trigger
          style={{
            width: 150,
            height: 50,
            backgroundColor: "#9A9A9A",
            border: "none",
            color: "#ffffff",
          }}
        >
          <Select.Icon>
            <Funnel />
          </Select.Icon>
          <Select.Value placeholder="Filtro" />
        </Select.Trigger>
        <Select.Portal>
          <Select.Content>
            <Select.Viewport
              style={{
                backgroundColor: "#333333",
                width: 200,
                cursor: "pointer",
              }}
            >
              <Select.Item value="all">
                <Select.ItemText>Todos</Select.ItemText>
                <Select.ItemIndicator className="SelectItemIndicator">
                  <Check />
                </Select.ItemIndicator>
              </Select.Item>

              <Select.Item value="positive">
                <Select.ItemText>Entrada</Select.ItemText>
                <Select.ItemIndicator className="SelectItemIndicator">
                  <Check />
                </Select.ItemIndicator>
              </Select.Item>
              <Select.Item value="negative">
                <Select.ItemText>Saída</Select.ItemText>
                <Select.ItemIndicator className="SelectItemIndicator">
                  <Check />
                </Select.ItemIndicator>
              </Select.Item>
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </>
  );
}

export default SelectOrder;
