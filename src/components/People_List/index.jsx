import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function People_List() {
    const [nextPerson, setNextPerson] = useState(1);

    const [person, setPerson] = useState([]);

    function next() {
        setNextPerson(nextPerson + 1)
    }
    function previous() {
        if (nextPerson == 1) {
            alert("Você já está no primeiro personagem")
            return
        }
        setNextPerson(nextPerson + -1)
    }
    useEffect(() => {
        api.get('people/' + nextPerson)
            .then(reponse => setPerson(reponse.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, [{ next }]);
    return (
        <Container>

            <table>
                <thead>
                    <tr>
                        <th>Nome </th>
                        <th> Altura </th>
                        < th > Peso </th>
                        < th > Gênero</th>
                        < th > Cor do Cabelo </th>
                        < th > Cor dos Olhos</th>
                        < th > Aniversário</th>
                    </tr>
                </thead>
                < tbody >
                    <tr>
                        <td className="deposit">
                            {person.name}
                        </td>
                        <td className="deposit">
                            {person.height} cm
                        </td>
                        <td className="deposit">
                            {person.mass} kg
                        </td>
                        <td className="deposit">
                            {person.gender}
                        </td>
                        <td className="deposit">
                            {person.hair_color}
                        </td>
                        <td className="deposit">
                            {person.eye_color}
                        </td>
                        <td className="deposit">
                            {person.birth_year}
                        </td>

                    </tr>

                </tbody>
            </ table>
            <div>
                <button type="button" onClick={previous}>
                    -
                </button>

                {nextPerson}
                <button type="button" onClick={next}>
                    +
                </button>
            </div>

        </Container>
    )
}