import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/mucyo1.png'
import { FaHome,FaClock,FaMusic,FaBroadcastTower,FaHeart,FaListUl,FaChevronDown, FaChevronUp,FaSignOutAlt } from 'react-icons/fa'

const MixesPage:React.FC = () => {
    const navigate = useNavigate()
    const [isGenreOpen, setIsGenreOpen] = useState<boolean>(false)

    const recomend =[
        {
            id:1,
            icon:<FaHome/>,
            name:"Feed"
        },
        {
            id:2,
            icon:<FaClock/>,
            name:"Recents"
        },
        {
            id:3,
            icon:<FaMusic/>,
            name:"Acid Mixes"
        },
        {
            id:4,
            icon:<FaBroadcastTower/>,
            name:"Live Mix"
        }
    ]

    const yourMusic = [
        {
            id:1,
            icon:<FaHeart/>,
            name:"Favourite"
        },
        {
            id:2,
            icon:<FaListUl/>,
            name:"PlayList"
        },
        
    ]

    const genre = [
        {
           id:1,
           name:"All Genre"
        },
        {
            id:2,
            name:"AfroBeats"
         },
         {
            id:3,
            name:"Hip Hop"
         },
         {
            id:4,
            name:"Gospel"
         },
         {
            id:1,
            name:"Electronics"
         },
         {
            id:1,
            name:"Rock & Pop"
         },
    ]

    const handleGenre = ()=>{
        setIsGenreOpen(prevState=> !prevState)
    }
  return (
    <div className='min-h-screen w-full bg-[#161720]'>
        {/* Left NavBar */}
      <div className='md:max-w-[250px] max-w-[150px] p-4 h-screen border-r-2 border-[#ffffff32] overflow-y-auto scrollbar-thumb-[#fa0153] scrollbar-track-[#161720] scrollbar-thin left-0 flex flex-col items-start md:items-center'>
       <div onClick={()=> navigate('/LandingPage')}>
        <img src={logo} alt="logo" className='w-[60px] md:w-[108px] mt-4 md:mt-6 cursor-pointer'/>
       </div>

       <div className='md:mt-10 mt-4'>
        {recomend.map((reco)=>(
            <div key={reco.id} className='mt-4 flex flex-row gap-3 text-white cursor-pointer hover:text-[#fa0153]'>
            <h2 className='text-[18px] mt-[2px]'>{reco.icon}</h2>
            <h2 className='font-raleway text-[17px]'>{reco.name}</h2>
            </div>
        ))}
       </div>

       <div className='mt-10'>
        <h1 className='font-raleway font-thin text-[20px] text-white'>Your Music</h1>

        {yourMusic.map((your)=>(
            <div key={your.id}  className='mt-6 flex flex-row gap-3 text-white cursor-pointer hover:text-[#fa0153]'>
            <h2 className='text-[18px] mt-[2px]'>{your.icon}</h2>
            <h2 className='font-raleway text-[17px]'>{your.name}</h2>
            </div>
        ))}
       </div>

       <div className='mt-10'>
        <h1 
        onClick={handleGenre}
        className='font-raleway font-thin text-[20px] text-white mr-6 flex flex-row justify-center items-center gap-1'>
        {isGenreOpen ? <FaChevronUp className='text[15px]'/>: <FaChevronDown className='text[15px] text-[#fa0153]'/>}
        Genres
        </h1>
        {isGenreOpen &&(
            <div className="mt-0 p-4 w-26 h-full rounded-md bg-[#323232]">
              {genre.map((gen) => (
                <div key={gen.id} className='flex flex-row gap-3 text-white cursor-pointer hover:text-[#fa0153]'>
                  <h2 className='font-raleway text-[17px]'>{gen.name}</h2>
                </div>
              ))}
            </div>
          )}
       </div>

       <div className='mt-10 flex flex-row mr-4 gap-3 text-[#767575] cursor-pointer hover:text-[#fa0153]'>
          <FaSignOutAlt className='text-[18px] mt-[2px]'/>
          <h2 className='font-raleway text-[17px] font-bold'>Log Out</h2>
       </div>
      </div>
    </div>
  )
}

export default MixesPage
