import { useEffect, useState } from 'react'
import { toast } from 'wc-toast'

import Boxing from './components/Boxing'
import ModalAdd from './components/ModalAdd'
import { IconAdd } from './assets/icons/IconAdd'
import './assets/css/App.css'

import { getCrypto } from './api/crypto'


function App() {
   const [show, setShow] = useState(false)
   const [crypto, setCrypto] = useState([])

   useEffect(() => {
      async function getApiCrypto() {
         const resp = await getCrypto()

         if (resp.status === 200) {
            toast.success(`${resp.data.msg}`)
            setCrypto(resp.data.data)
         } else {
            toast.inf(`${resp.data.msg}`)
         }
      }

      getApiCrypto()
   }, [])


   return (
      <>
         <div className="container">
            <wc-toast></wc-toast>

            <div className="row mt-4 mb-3">
               <div className="col-md-6 mx-auto text-center tittle">
                  Cryptomonedas
               </div>
            </div>

            <div className="row">
               <div className="col-md-4">
                  <button
                     className="btn btn-outline-danger btn-sm btnGeneral"
                     onClick={ () => setShow(true) }
                  >
                     <IconAdd />
                     Añadir
                  </button>
               </div>
            </div>

            <div className="row mt-4">
               {
                  crypto.map((item) => (
                     <div className="col-md-3 mb-3" key={item.id}>
                        <Boxing item={item} />
                     </div>
                  ))
               }
            </div>

         </div>

         <ModalAdd
            setShow={setShow}
            show={show}
            setCrypto={setCrypto}
            crypto={crypto}
         />
      </>
   )
}

export default App
