//  import React from  'react'

//  const AppBar: React.FC = () => {
//  return (
//      <header className="max-w-6xl m-auto flex items-center justify-between p-4  shadow-2xl">
//      <div  className="flex items-center gap-2">
//     <img 
//       className="w-16 h-16 rounded-md"
//         alt="logo" 
//          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT169r0eMQkJ9L7KUrkeh0AmElAU6pxkHCF2w&s'/>
//         <h1 className="text-2xl font-bold text-yellow-950">HAYFIN</h1>
//         </div>
//          <a href="#" className="text-gray-700 font-medium">
//          Sign in / Signup
//        </a>
//      </header>
//  )
//  }

 




 import Button from "../Button"

export default function Example(){
  return(
    <div className="flex flex-row gap-4 flex-wrap">
      <Button>
        Test Button
      </Button>
      <Button variant="outlined">
        Test Button
      </Button>
      <Button variant="text">
        Test Button
      </Button>
      <Button variant="outlined" color="danger">
        Test Button
      </Button>
      <Button variant="text" color="secondary">
        Test Button
      </Button>
      <Button variant="filled" color="secondary" size="lg">
        Test Button
      </Button>
      <Button variant="filled" color="secondary" size="lg" disabled={true}>
        Test Button
      </Button>
      <Button variant="filled" color="secondary" size="lg" isFullWidth={true}>
        Test Button
      </Button>
    </div>
  )
}