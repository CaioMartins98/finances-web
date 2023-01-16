import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import {
  ButtonCancel,
  ButtonConfirmation,
  Close,
  Content,
  Description,
  DescriptionContainer,
  Divider,
  FooterModal,
  Overlay,
  Root,
  Title,
} from "./styles";
import { X, TrashSimple, Trash } from "phosphor-react";
import { priceFormatted } from "../../utils/formatter";
interface ItemProps {
  description: string;
  amount: number;
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
          <Trash />
        </div>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Overlay />
        <Content>
          <Title>Remover transação</Title>
          <Divider />
          <DescriptionContainer>
            <Description>
              Tem certeza que deseja remover a transação{" "}
              <strong>{item.description}</strong>
            </Description>
            <Description>
              da categoria <strong>{item.category}</strong> no valor de{" "}
              <strong>{priceFormatted.format(item.amount)}</strong>?
            </Description>
          </DescriptionContainer>
          <Divider />
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
