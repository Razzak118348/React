import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <h1>Vite + React</h1>
    <Device name="Laptop" pirce="50"></Device>
    <Device name="mobile" pirce="30" model="eoslie"></Device>
    <Device ></Device>
    <Person></Person>
    <Person></Person>
    <Person></Person>
    <Person></Person>
    <Student gread='8' score='99'></Student>
    <Student grad='4' score='49'></Student>
    <Student gread='5' score='33'></Student>
    <Student></Student>
    <Developer></Developer>
    <Raju></Raju>
    </>
  )
}


function Device(props){
  console.log(props)
  return <h2> This device : Laptop</h2>
}


function Person(){
  const age = 23;
  const person={name:'Abdur Razzak', age:23}
 return <h3>hi this is {person.name} age: {age}</h3>

}
const {gread='1',score='0'} ={grad:'7',score:'99'};


function Student ({grad,score}){
  return (
  <div className='raju'>
    <h3>This is a student </h3>
    <p>Score: {score} </p>

    <P>age:{grad} </P>
  </div>

  )
}

// set style directly 
function Developer(){
  const developerStyle={
    margin:'20px',
    padding:'20px',
    border:'2px solid purple',
    borderRadius:'20px',
  }
  return (
    <div style={developerStyle}>
      {/* <div style={{
    margin:'20px',
    padding:'20px',
    border:'2px solid purple',
    borderRadius:'20px',}>
    </div> */} 
    {/* this is same  */}
      <h5>Devo devo</h5>
      <p>Coding:</p>

    </div>
  )
}


// another way to set style by classname 
  function Raju(){
    return (
      <div className='raju'>
        <h3>This is about of mine</h3>
        <p>age:22</p>
      </div>
    )
  }



export default App
