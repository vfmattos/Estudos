
// eslint-disable-next-line react/prop-types
const Container = ( {children, myValue} ) => {
  return (
    <div>  
        {children} 
        <p>{myValue}</p>
    </div>

  )
}

export default Container