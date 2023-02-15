const pokemon =
  typeof document !== "undefined" &&
  JSON.parse(window.__ASTRO_DATA__.textContent).pokemon;

export default function Pokemon({ id, children }) {
  return (
    <a
      href="#"
      onClick={() => alert(JSON.stringify(pokemon.find((p) => p.id === id)))}
    >
      {children}
    </a>
  );
}
