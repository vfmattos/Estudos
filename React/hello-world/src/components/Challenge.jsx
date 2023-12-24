
function Challenge() {
    const a = 10;
    const b = 5;
  return (
    <div>
        <p>{a}</p>
        <p>{b}</p>

        <button onClick={() => console.log(a + b)}>Somar</button>
    </div>
  )
}

export default Challenge