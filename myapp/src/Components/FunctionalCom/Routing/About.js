import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function About() {
 var navigate = useNavigate()
  return (
    <div>
      <h1>About component</h1>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi nobis unde nesciunt impedit voluptate natus est autem cum architecto! Rerum, voluptatum iure. Placeat unde eum quis et, nam laborum aut? Voluptatibus, blanditiis animi voluptates, soluta consectetur aperiam impedit, optio itaque praesentium cum aliquam nihil aliquid nulla? Quas laborum enim perspiciatis vero eaque, aperiam harum animi quae id nobis illo aspernatur repellendus nemo autem. Deleniti modi enim praesentium nobis fugit tempora repellat reprehenderit, exercitationem nostrum dignissimos adipisci laboriosam harum quia! Repudiandae suscipit quibusdam enim facere vero, exercitationem corporis eos ut atque et itaque quis inventore tenetur. Accusantium nam distinctio nisi quam repellendus quos esse, velit voluptatibus maxime vel eius aspernatur sed alias quibusdam deleniti officia minus? Aliquam, recusandae id. Corrupti nulla magni, deleniti numquam tenetur aliquid facere fugiat culpa vel assumenda enim sapiente. Possimus ex quia tempore accusamus eveniet, aut fugiat quo est dolorem iure a voluptatum velit temporibus alias modi eius blanditiis cumque rem eligendi quos. Dolore voluptatem aperiam provident nisi repellendus, praesentium suscipit esse sint neque, hic quibusdam ullam officiis minima. Magnam non iusto possimus laudantium ea officia facere consequuntur vitae neque adipisci doloremque perspiciatis illo aspernatur, accusamus tenetur, alias ipsum. Sed optio cupiditate tempora sapiente veniam, laudantium quis?

      <button onClick={()=>navigate('/')}>Goto Home</button>
    </div>
  )
}

export default About