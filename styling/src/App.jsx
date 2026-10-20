
import React from 'react'
import Loader from './Loader'
import Navbar from './Navbar'

const App = () => {
  // const age = 15
  // console.log(`david is ${age} years old`);
  

  // internal Styling
  const styles = {
    width: '300px',
    height: '300px',
    backgroundColor: 'red',
    borderRadius: '50px'
  }
  return (
   <>
    <Navbar/>
   {/* inline styling */}
   <h1 style={{color:'purple', fontSize:'100px',fontWeight:400}}>Welcome To Class</h1>
   {/* internal styling */}
   <div style={styles}></div>

   {/* External styling  */}
   <button className='btn'>Click Me</button>
   <Loader/>
  
   </> 
  )
}

export default App