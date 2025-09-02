import ListGroup from "./components/ListGroup.tsx";


function App() {

    const handleSelectItem = (item: string) => {
        console.log(item)
    };

  return (
      <div className='m-3 h-screen'>
          <h1 className='text-4xl p-3 mb-4 text-center bg-pink-300'>Tailwind</h1>
          <ListGroup items={['Java', 'JavaScript', 'Docker', 'aws', 'TypeScript']} heading={'Skills'} onSelectItem={handleSelectItem}/>
      </div>
  )
}

export default App
