import React from 'react'
import image1 from "../assets/image1.webp"
import image2 from "../assets/image2.webp"

const Home:React.FC = () => {
  return (
    <div className='min-h-screen w-full bg-cover bg-center'  
    style={{
       backgroundImage: `url(${image2})`
    }}>
      
    </div>
  )
}

export default Home
