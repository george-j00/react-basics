
import './App.css'
import Counter from './components/Counter'
import EnhancedCounter from './components/EnhancedCounter'
import ProfileCard from './components/ProfileCard'
import Form from './components/form'

function App() {

const data = [
  {
    id:1 , 
    name:'George Jose',
    email:'subin@gmail.com'
  },
  {
    id:2 , 
    name:'Edward johnson',
    email:'edward@gmail.com'
  }
]

  return (
    <>
    <div>
      {/* <ProfileCard  addressData = { data }/> */}
      {/* <Counter /> */}
      <EnhancedCounter />
      {/* <Form />  */}
    </div>
    </>
  )   
}

export default App 
