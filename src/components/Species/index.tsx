import { NavBar } from "../NavBar";
import { Species_List } from "../Species-List";
import { Container } from "./styles";

export function Species() {
    return (
        <Container >
            <NavBar></NavBar>
            <h1>Espécies</h1>
            <Species_List></Species_List>
        </Container>
    )

}