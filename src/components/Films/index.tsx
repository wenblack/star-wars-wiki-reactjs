import { FIlms_List } from "../FIlms_List";
import { NavBar } from "../NavBar";
import { Container } from "./styles";

export function Films() {
    return (
        <Container >
            <NavBar></NavBar>
            <h1>Filmes</h1>
            <FIlms_List></FIlms_List>
        </Container>
    )

}