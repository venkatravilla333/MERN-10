import React from 'react'

function Home() {
  return (
   <div style={{marginLeft: '350px'}}>
    <div style={{textAlign: 'center', marginTop: '100px', border: '2px solid black', width: '300px', padding: '20px'}}>
      
        <form>
            <label htmlFor="">Name</label>
          <div>
            <input type="text" />
          </div>
            <label htmlFor="">Email</label>
          <div>
            <input type="email" />
          </div>
            <label htmlFor="">Password</label>
          <div>
            <input type="password" />
          </div>
          <button type='submit' style={{marginTop: '10px', background: 'black', width: '100px', color: 'white', padding: '4px'}}>Login</button>
        </form>
     
      </div>
    </div>
     
  )
}

export default Home