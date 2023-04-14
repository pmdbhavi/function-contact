import {v4 as uuidv4} from 'uuid'
import {useState} from 'react'
import Contacts from './components/Contacts'
import {MainCon,Heading,Form,Text,MobileNo,Button,Ul,Li,Name,Hr,Mobile} from './styledComponents'

const initialContactsList = [
  {
    id: uuidv4(),
    name: 'Ram',
    mobileNo: 9999988888,
    isFavorite: false,
  },
  {
    id: uuidv4(),
    name: 'Pavan',
    mobileNo: 8888866666,
    isFavorite: true,
  },
  {
    id: uuidv4(),
    name: 'Nikhil',
    mobileNo: 9999955555,
    isFavorite: false,
  },
]

const App=()=>{
      const [list,setList]=useState(initialContactsList)

      const [name,setName]=useState('')

      const onChangeName=(event)=>{
        setName(event.target.value)
      }

      const [mobileNo,setNumber]=useState('')

      const onChangeNumber=(event)=>{
        setNumber(event.target.value)
      }

      const isToggle=(id)=>{
        setList(prevState=>(prevState.map(each=>{
          if(each.id===id){
            return ({...each,isFavorite:!each.isFavorite})
          }
          return each
        })))
    }

      const addContact=(event)=>{
        event.preventDefault()
        if(name.length!==0 && mobileNo.length===10){
          const newContact={
            id:uuidv4(),
            name,
            mobileNo,
            isFavorite:false
          }
        
        setList(prevState=>(
          [...prevState,newContact]
        ))
        setName('')
        setNumber('')
        }
        else{
          alert("Please enter the valid details")
        }
      }
      return(
        <MainCon>
          <Heading>Contacts</Heading>
          <Form onSubmit={addContact}>
            <Text type="text" placeholder="Name" value={name} onChange={onChangeName} />
            <MobileNo type="number" placeholder="Mobile Number" value={mobileNo} onChange={onChangeNumber} />
            <Button type="submit">Add Contacts</Button>
          </Form>
          <Ul>
            <Li>
              <Name>Name</Name>
              <Hr/>
              <Mobile>Mobile Number</Mobile>
            </Li>
            {list.map(eachContact=>(
              <Contacts details={eachContact} key={eachContact.id} getToggle={isToggle} />
            ))}
          </Ul>
        </MainCon>
      )
}

export default App