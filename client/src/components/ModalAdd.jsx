import { useState } from 'react'
import { Modal, Form } from 'react-bootstrap'
import { IMaskInput } from 'react-imask'
import { toast } from 'wc-toast'

import { postCrypto } from '../api/crypto'

import { letterSpaceRgx, numberRgx } from '../helpers/regex'

function ModalAdd({ show, setShow, setCrypto, crypto }) {
   const [register, setRegister] = useState({
      name: '',
      price: ''
   })

   const handleClose = () => {
      setShow(false)
      setRegister({
         name: '',
         price: ''
      })
   }

   const handleSubmit = async (e) => {
      e.preventDefault()

      let nombre = register.name.trim(),
         precio = register.price.trim()

      if (
         nombre === '' ||
         precio === ''
      ) {
         toast('Campos vacíos o con espacios...', { icon: { type: 'custom', content: '💁' } })
      } else {
         try {
            const resp = await postCrypto({
               nombre, precio
            })

            if (resp.status === 200) {
               toast.success(`${resp.data.msg}`)
               setCrypto([...crypto, resp.data.data])
               setRegister({
                  name: '',
                  price: ''
               })
               setShow(false)
            } else {
               toast.inf(`${resp.data.msg}`)
            }
         } catch (e) {
            console.error(e)
            toast.error('Error al enviar los datos')
         }
      }
   }

   return (
      <>
         <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            centered
         >
            <Form className="form-control" onSubmit={handleSubmit}>
               <Modal.Header className="header__modal">
                  <Modal.Title className="tittle__modal">
                     REGISTRAR NUEVA MONEDA
                  </Modal.Title>
               </Modal.Header>

               <Modal.Body className="body__modal">
                  <div className="row">
                     <div className="col-md-12 mb-2">
                        <label className="form-label ">Moneda</label>
                        <IMaskInput
                           mask={letterSpaceRgx}
                           type="text"
                           className="form-control"
                           name="name"
                           placeholder="Ingrese el nombre de la moneda: Ej. Bitcoin"
                           required
                           value={register.name}
                           onChange={(e) =>
                              setRegister({
                                 ...register,
                                 name: e.target.value,
                              })
                           }
                        />
                     </div>

                     <div className="col-md-12 mb-2">
                        <label className="form-label ">Valor</label>
                        <IMaskInput
                           mask={numberRgx}
                           type="text"
                           className="form-control"
                           name="usd"
                           placeholder="Ingrese el valor de la moneda: Ej. 50000"
                           required
                           value={register.price}
                           onChange={(e) =>
                              setRegister({
                                 ...register,
                                 price: e.target.value,
                              })
                           }
                        />
                     </div>
                  </div>
               </Modal.Body>

               <Modal.Footer className="footer__modal">
                  <button
                     type="button"
                     className="btn btn-outline-secondary btn-sm btnGeneral"
                     onClick={handleClose}
                  >
                     Cerrar
                  </button>

                  <button
                     type="submit"
                     className="btn btn-outline-danger btn-sm btnGeneral"
                  >
                     Guardar
                  </button>
               </Modal.Footer>
            </Form>
         </Modal>
      </>
   )
}

export default ModalAdd