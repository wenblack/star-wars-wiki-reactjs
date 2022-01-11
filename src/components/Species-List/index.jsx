import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function Species_List() {
    const [nextVehicles, setNextVehicles] = useState(1);

    const [Vehicles, setVehicles] = useState([]);

    function next() {
        if (nextVehicles == 10) {
            alert("Você já está na última espécie")
            return
        }
        setNextVehicles(nextVehicles + 1)
    }
    function previous() {
        if (nextVehicles == 1) {
            alert("Você já está na primeira espécie")
            return
        }
        setNextVehicles(nextVehicles + -1)
    }
    useEffect(() => {
        api.get('species/' + nextVehicles)
            .then(reponse => setVehicles(reponse.data))
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
                        <th> Classificação</th>
                        < th > Altura média </th>
                        < th > Cor da Pele </th>
                        < th > Cor dos Cabelos </th>
                        < th > Cor dos Olhos</th>
                    </tr>
                </thead>
                < tbody >
                    <tr>
                        <td className="deposit">
                            {Vehicles.name}
                        </td>
                        <td className="deposit">
                            {Vehicles.classification}
                        </td>
                        <td className="deposit">
                            {Vehicles.average_height} cm
                        </td>
                        <td className="deposit">
                            {Vehicles.skin_colors}
                        </td>
                        <td className="deposit">
                            {Vehicles.hair_colors}
                        </td>
                        <td className="deposit">
                            {Vehicles.eye_colors}
                        </td>

                    </tr>

                </tbody>
            </ table>
            <div>
                <button type="button" onClick={previous}>
                    -
                </button>

                {nextVehicles}
                <button type="button" onClick={next}>
                    +
                </button>
            </div>
        </Container>
    )
}