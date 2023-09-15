import { Container } from "./styles";
import heroImage from "../../assets/images/Hero-3.jpg";

export function Hero() {
  return (
    <Container>
      <img src={heroImage} alt="" />
    </Container>
  );
}
