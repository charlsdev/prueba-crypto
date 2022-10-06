import React from 'react'

function Boxing({ item }) {
   return (
      <>
         <div className='boxing'>
            <h3 className="nameMoney">
               { item.name }
            </h3>
            <div className="usdMoney">
               <span>$</span> { item.price }
            </div>

            <h5 className='idMoney'>
               { item.id }
            </h5>
         </div>
      </>
   )
}

export default Boxing