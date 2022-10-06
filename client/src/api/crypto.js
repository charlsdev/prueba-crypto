import axios from 'axios'

export const getCrypto = async () => {
   return await axios.get(`${import.meta.env.VITE_API}/crypto`)
}

export const postCrypto = async ({ nombre, precio }) => {
   return await axios.post(`${import.meta.env.VITE_API}/crypto`, { nombre, precio })
}