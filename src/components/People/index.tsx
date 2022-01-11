import { NavBar } from "../NavBar";
import { People_List } from "../People_List";
import { Container } from "./styles";

export function People() {
    return (
        <Container >
            <NavBar></NavBar>
            <h1>Personagens</h1>
            <People_List></People_List>
        </Container>
    )

}