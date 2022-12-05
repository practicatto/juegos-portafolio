export function Audio({ title }) {
  return (
    <div>
      <audio controls>
        <source src={title} type="audio/mpeg" />
        Audio no es soportado por este navegador
      </audio>
    </div>
  )
}
