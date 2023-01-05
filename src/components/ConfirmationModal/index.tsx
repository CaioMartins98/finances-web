import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import {
  ButtonCancel,
  ButtonConfirmation,
  Close,
  Content,
  FooterModal,
  Overlay,
  Root,
  Title,
} from "./styles";
import { X, TrashSimple } from "phosphor-react";
import { priceFormatted } from "../../utils/formatter";
interface ItemProps {
  description: string;
  amount: string;
  category: string;
}
interface ModalProps {
  handleConfirm: () => void;
  item: ItemProps;
}
export default function ConfirmationModal({ item, handleConfirm }: ModalProps) {
  return (
    <Root>
      <Dialog.Trigger asChild>
        <div>
          <TrashSimple />
        </div>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Overlay />
        <Content>
          <Title>Remover transação</Title>
          <span>
            Tem certeza que deseja remover a transação{" "}
            <strong>{item.description}</strong>
          </span>
          <span>
            da categoria <strong>{item.category}</strong> no valor de{" "}
            <strong>{priceFormatted.format(item.amount)}</strong>?
          </span>

          <FooterModal>
            <ButtonConfirmation onClick={handleConfirm}>
              Confirmar
            </ButtonConfirmation>
            <Close>
              <ButtonCancel>Cancelar</ButtonCancel>
            </Close>
          </FooterModal>
        </Content>
      </Dialog.Portal>
    </Root>
  );
}
