import React from 'react'
import { useLocation } from 'react-router-dom'

function Profile() {
  var url = useLocation()
  console.log(url)
  return (
    <div>
      <h1>Profile component</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo obcaecati beatae dignissimos iste voluptatem aperiam porro fugit similique iusto explicabo nihil, corporis unde architecto vel aut necessitatibus ad ratione magni commodi voluptatum totam animi? Laborum, aliquid itaque? Debitis corporis esse quibusdam itaque dignissimos deleniti provident ullam commodi. Earum eos nesciunt corporis libero laboriosam numquam illum id natus doloribus porro repudiandae assumenda aperiam saepe magni, eaque ratione nostrum. Temporibus incidunt aliquid ex sequi atque, ut odit maiores accusamus dolor aut reiciendis? Explicabo consequatur voluptatem accusantium temporibus at, laudantium ratione veritatis quibusdam aperiam laborum in magnam, quae blanditiis odit ipsum eius dolore reprehenderit ut doloremque cupiditate ad? Necessitatibus vero similique sed sit nam, incidunt neque non natus odio nemo rem fugiat asperiores exercitationem earum consectetur est provident, officia vel consequuntur deleniti qui numquam cupiditate error nulla. Tenetur eaque voluptas praesentium cumque hic, iure quidem incidunt voluptate, totam impedit recusandae perferendis et exercitationem qui aspernatur veritatis doloremque sed eius quaerat repellendus ab fugit natus dignissimos quisquam. Doloremque, deserunt laudantium sed voluptate, maxime eligendi amet, nam placeat molestiae possimus laborum. Nesciunt, modi? Aspernatur repellat qui vitae odit neque possimus dolorem minus porro commodi sit amet fuga necessitatibus laborum, culpa quis pariatur illum placeat itaque!</p>
      {url.state}
    </div>
  )
}

export default Profile