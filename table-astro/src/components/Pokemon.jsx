const pokemon =
  typeof document !== "undefined" &&
  JSON.parse(window.__ASTRO_DATA__.textContent).pokemon;

export default function Pokemon({ name, children }) {
  return (
    <a
      href="#"
      onClick={() =>
        alert(JSON.stringify(pokemon.find((p) => p.name === name)))
      }
    >
      {children}
    </a>
  );
}
