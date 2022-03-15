
import { useState } from "react"
// primer paso para definir un componente es el nombre
// el nombre de un componente siempre debe iniciar en mayuscula
// ahora el componente basicamente es una funcion por ende podermos crearlo
// usando function o arrow function
const PrimerComponente = () => {

  // como usar una variable es un componente
  const edad = 99
  // esta funcion retornar una vista
  // en react unsamos return () para indicar que lo que este dentro de los
  // parentesis sera el objeto visual que vamos a retornar
  // algo importante es que react solo puede retornar un componente a la vez
  // retorna solo un div
   return (
     <div>
       <h1>hola mundo{count}</h1>
       <div>
         <h4> hola</h4>
       </div>
     </div>
   )
}
// luego de crear es el componente debemos exportarlo
// esto es como decir que este archivo

export default PrimerComponente