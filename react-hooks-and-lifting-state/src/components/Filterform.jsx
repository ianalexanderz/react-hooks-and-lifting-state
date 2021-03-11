export default function FilterContainer(props) {
  // the shared state will live here
  //
  const formStyles = {
    border: '.3em solid green',
    display: 'flex',
    'justify-content': 'center',
    alignItems: 'center'
  }

  return (
    <div style={formStyles}>
      <form onSubmit={props.handleFruitSubmit}>
        <label htmlFor='fruit-filter'>Enter A Fruit!</label>

        <input 
          type="text"
          value={props.fruitInputValue}
          onChange={props.handleFruitChange}
          placeholder='enter a fruit 🍉'
          id='fruit-filter'
        />
      
      <input 
        type='submit'
        value='Submit to the FRUIT'
      />
    </form>
  </div>
  )
}

