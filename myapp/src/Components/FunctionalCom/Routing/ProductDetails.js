import React from 'react'
import { useParams } from 'react-router-dom'

function ProductDetails() {
  var obj = useParams()
  
  return (
    <div>
      <h2> ProductDetails:  {obj.id}</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla earum, officiis iure, fuga quia porro consequuntur repellat quisquam culpa, nemo architecto. Fugiat rerum cum iure assumenda ratione doloremque ipsam maxime, ex dolores temporibus, qui maiores reiciendis tempora veniam eos neque voluptatibus? Vitae mollitia eum animi, ullam officiis sit placeat itaque, illum facilis, optio repellendus aliquam! Consequuntur, ratione libero quis unde rerum, debitis est minima illo maxime adipisci ipsum voluptatem assumenda doloremque! Ea tempore quam pariatur tenetur amet sed nisi voluptatum accusamus doloribus perspiciatis cum, asperiores iusto assumenda illum corrupti laborum alias molestias ut? Voluptatem, totam perferendis. Sapiente velit est accusamus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nostrum ab deleniti! Delectus architecto eligendi eum molestiae repellat eius dignissimos eveniet iste! Saepe quasi fuga harum illum aliquam tenetur eaque sint, quaerat ad id omnis laboriosam sunt cum vel, praesentium quo veniam adipisci, unde voluptatem totam amet! Reprehenderit laboriosam asperiores illo, officia corporis necessitatibus sit quos aliquam porro? Necessitatibus consequuntur accusamus, atque, aspernatur laborum, cum harum sapiente similique ex inventore eligendi omnis ratione animi porro quidem nulla eum nisi! Repellat odio laborum quas tenetur molestiae exercitationem consectetur veniam quaerat nihil aperiam labore recusandae architecto fugiat alias minus, nam veritatis expedita.</p>
    
    </div>
    
  )
}

export default ProductDetails