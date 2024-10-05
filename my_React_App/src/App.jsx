import './App.css'
import List from './Components/List' 
import Container from './Components/Container'
import  './Components/List.css'
import  './Components/Container.css'
function App() {
   let List2 = ["nirmala","rahul","monu","sonu"];
  //  let List2 = [];
  return (
    <>
    <Container >
       <h1 className="text-3xl font-bold underline">
      Hello world!
      </h1>
      <List list={List2}/>
      </Container>


        <Container>
          <p>helllo hey</p>
        </Container>
    </>
  )
}

export default App
