import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider /><br />
    <SectionTitle>Technologies</SectionTitle>
    <br />
    <SectionText>
      I've worked with a range of technologies in the web development world.From
      Back-end to design
    </SectionText>

    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-end</ListTitle>
          <ListParagraph>
            Experience with <br /> React.js(react-bootstrap/material-ui)<br />Vue.js<br />Bootstrap<br />
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-end</ListTitle>
          <ListParagraph>
            Experience with <br /> Node <br /> PHP(Laravel)<br />Databases(Firebase,MongoDB,Mysql)
          </ListParagraph>
         
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>CI/CD</ListTitle>
          <ListParagraph>
            Experience with <br /> github/bitbucked ci/cd <br /> Googling
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
