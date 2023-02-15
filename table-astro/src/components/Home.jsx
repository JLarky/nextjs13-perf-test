import Pokemon from "./Pokemon";
import pokemon from "../data.json";

export default function Home() {
  return (
    <main>
      <div className="container">
        <h1>Pokemon</h1>
        <table>
          <tbody>
            {pokemon.map((pokemon) => (
              <tr key={pokemon.name}>
                <td>
                  <Pokemon data={pokemon}>{pokemon.name}</Pokemon>
                </td>
                <td>{pokemon.type.join(", ")}</td>
                <td>{pokemon.hp}</td>
                <td>{pokemon.attack}</td>
                <td>{pokemon.defense}</td>
                <td>{pokemon.special_attack}</td>
                <td>{pokemon.special_defense}</td>
                <td>{pokemon.speed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
