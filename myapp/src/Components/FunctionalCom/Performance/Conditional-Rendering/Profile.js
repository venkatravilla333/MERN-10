import React from 'react'

function Profile(props) {
  return (
     <div id='profile'>
        <h2>Profile</h2>
        <h4>Sachin</h4>
        <h4>Male</h4>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, nisi aperiam suscipit ducimus sequi voluptate quasi. Ipsum doloremque voluptatem laudantium, possimus magni perferendis, fugit quaerat atque sequi unde impedit animi.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, nisi aperiam suscipit ducimus sequi voluptate quasi. Ipsum doloremque voluptatem laudantium, possimus magni perferendis, fugit quaerat atque sequi unde impedit animi.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, nisi aperiam suscipit ducimus sequi voluptate quasi. Ipsum doloremque voluptatem laudantium, possimus magni perferendis, fugit quaerat atque sequi unde impedit animi.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, nisi aperiam suscipit ducimus sequi voluptate quasi. Ipsum doloremque voluptatem laudantium, possimus magni perferendis, fugit quaerat atque sequi unde impedit animi.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, nisi aperiam suscipit ducimus sequi voluptate quasi. Ipsum doloremque voluptatem laudantium, possimus magni perferendis, fugit quaerat atque sequi unde impedit animi.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, nisi aperiam suscipit ducimus sequi voluptate quasi. Ipsum doloremque voluptatem laudantium, possimus magni perferendis, fugit quaerat atque sequi unde impedit animi.

      </p>
      <button onClick={props.toggleLogout}>Logout</button>
      </div>
  )
}

export default Profile