import { Container } from "./styles";

interface ButtonProps {
  title: string;
  onClick: () => void;
  // sem retorno, só roda a função
}

// typeScript precisa da tipagem
export function Button({ title, onClick }: ButtonProps) {
  return <Container onClick={onClick}>{title}</Container>;
}
