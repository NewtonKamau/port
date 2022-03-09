import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello World
      </SectionTitle>
      <SectionText>
        I aspire to be a valuable resource in an esteemed organization and help
        develop software that is going to meet individual client needs.
      </SectionText>
      <Button onClick={() => (window.location = "#")}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
