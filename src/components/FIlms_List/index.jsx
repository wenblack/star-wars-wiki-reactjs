import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function FIlms_List() {
    const [nextFilm, setNextFilm] = useState(1);

    const [film, setFilm] = useState([]);

    function next() {
        if (nextFilm == 6) {
            alert("Você já está no último Filme")
            return
        }
        setNextFilm(nextFilm + 1)
    }
    function previous() {
        if (nextFilm == 1) {
            alert("Você já está no primeiro Filme")
            return
        }
        setNextFilm(nextFilm + -1)
    }
    useEffect(() => {
        api.get('films/' + nextFilm)
            .then(reponse => setFilm(reponse.data))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, [{ next }]);
    return (
        <Container>

            <table>
                <thead>
                    <tr>
                        <th>Título </th>
                        <th> Episódio </th>
                        < th > Diretor</th>
                        < th > Produtor </th>
                        < th > Lançamento</th>
                    </tr>
                </thead>
                < tbody >
                    <tr>
                        <td className="deposit">
                            {film.title}
                        </td>
                        <td className="deposit">
                            {film.episode_id} °
                        </td>
                        <td className="deposit">
                            {film.director}
                        </td>
                        <td className="deposit">
                            {film.producer}
                        </td>
                        <td className="deposit">
                            {film.release_date}
                        </td>
                    </tr>

                </tbody>
            </ table>
            <div>
                <button type="button" onClick={previous}>
                    -
                </button>

                {nextFilm}
                <button type="button" onClick={next}>
                    +
                </button>
            </div>
        </Container>
    )
}