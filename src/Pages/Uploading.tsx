import React, { useState } from "react";
import { FaPlusCircle,FaCamera } from "react-icons/fa";
import mixcover4 from "../assets/Cover.jpg";
import { Loader } from "lucide-react";

const Uploading: React.FC = () => {
  const [mixData, setMixData] = useState({
    producer: "",
    songTitle: "",
    artist: "",
    genre: "",
    releasingDate: "",
    description: "",
    audioUrl: "",
    audioFile: null,
    imageUrl: "",
    imageFile: null
  })

  const [loading, setLoading] = useState(false)

  const handleAudioChange = (event: any) => {
    const file = event.target.files[0]
    setMixData((prevData) => ({
      ...prevData,
      audioFile: file,
      audioUrl: URL.createObjectURL(file)
    }))
  }

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    setMixData((prevData) => ({
      ...prevData,
      imageFile: file,
      imageUrl: URL.createObjectURL(file)
    }))
  }

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setMixData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    try {
      
      const formData = new FormData();
      formData.append("producer", mixData.producer)
      formData.append("songTitle", mixData.songTitle)
      formData.append("artist", mixData.artist)
      formData.append("genre", mixData.genre)
      formData.append("releasingDate", mixData.releasingDate)
      formData.append("description", mixData.description)
      if(mixData.audioFile){
        formData.append("audioFile", mixData.audioFile)
      }
      if(mixData.imageFile){
        formData.append("imageFile", mixData.imageFile)
      };

      const options = {
        method: "POST",
        body: formData,
      };

      const response = await fetch("http://localhost:5000/mix/createMix", options);
      window.location.replace("/")
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-[#161720] min-h-screen w-full">
      <form action="" onSubmit={handleSubmit}>
        <div className="p-7 flex flex-col justify-center items-center">
          <h1 className="font-raleway font-bold text-[25px] text-white">
            Upload Mixes Here...
          </h1>
          <div className="bg-[#63636332] w-[800px] h-fit mt-6 flex flex-col items-center gap-2 rounded-sm border border-dashed border-[#ffffff32] py-5">
            <p className="font-raleway font-bold text-white mt-4">
              Browse for files or drag and drop them here
            </p>
            <label htmlFor="audioInput">
            <div className="bg-[#fa0153] w-[200px] h-12 rounded-3xl flex items-center p-4 gap-2 cursor-pointer">
              <FaPlusCircle className="text-[20px]" />
              <p className="font-raleway font-bold text-[15px]">
                Browse to your file
              </p>
            </div>
            </label>
            <input id="audioInput" type="file" accept="audio/*" onChange={handleAudioChange} className="hidden" />
            {mixData.audioUrl && (
              <div className="bg-white p-2 rounded-lg">
                <audio controls className="h-7">
                  <source src={mixData.audioUrl} />
                  Your browser doesn't support
                </audio>
            </div>
            )}
            <p className="text-[10px] text-[#ffffff9c]">
              Accepted file types are MP3, FLAC, WAV, AIFF, OGG, & M4A
            </p>
          </div>
        </div>

      <div className="p-8 flex justify-center items-center">
        {/* Form of Uploading */}
        
        <div className="w-[800px] h-[700px] bg-[#63636332] p-6">
          <div className="flex flex-row">
          <div className="w-44 h-44 bg-[#ffffff32] overflow-hidden relative">
            <img
              src={mixData.imageFile ? mixData.imageUrl : mixcover4}
              alt="cover"
              className="w-full h-full object-cover"
            />

            <label htmlFor="imageInput">
              <div className="w-[150px] h-8 bg-[#fa0153] absolute bottom-2 left-1/2 transform -translate-x-1/2 rounded-3xl flex flex-row items-center p-4 gap-2 cursor-pointer">
                  <FaCamera />
                  <p className="font-raleway font-semibold text-[15px]">Add Image</p>
              </div>
            </label>
            <input id="imageInput" type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
          </div>

          <div className="flex flex-col gap-[34px]">
          <div className=" clear-start flex flex-col ml-6 gap-2">
            <label className="font-raleway font-bold text-white text-[14px] ">Producer</label>
            <input type="text"
            name="producer"
            value={mixData.producer}
            onChange={handleInputChange}
            className=" w-[500px] h-10 bg-[#ffffff32] outline-none text-white font-raleway font-semibold p-2"/>
          </div>

          <div className="flex flex-row">
          <div className=" clear-start flex flex-col ml-6 gap-2">
            <label className="font-raleway font-bold text-white text-[14px] ">Song Title</label>
            <input type="text" 
             name="songTitle"
             value={mixData.songTitle}
             onChange={handleInputChange}
            className=" w-[238px] h-10 bg-[#ffffff32] outline-none text-white font-raleway font-semibold p-2"/>
          </div>
          <div className=" clear-start flex flex-col ml-6 gap-2">
            <label className="font-raleway font-bold text-white text-[14px] ">Artists</label>
            <input type="text" 
             name="artist"
             value={mixData.artist}
             onChange={handleInputChange}
            className=" w-[238px] h-10 bg-[#ffffff32] outline-none text-white font-raleway font-semibold p-2"/>
          </div>
          </div>
          
          </div>
          </div>

          <div className="mt-10 gap-[20px] flex flex-col">
          <div className="clear-start flex flex-col gap-2">
            <label className="font-raleway font-bold text-white text-[14px]">Genre</label>
            <input type="text" 
             name="genre"
             value={mixData.genre}
             onChange={handleInputChange}
            className=" w-[700px] h-10 bg-[#ffffff32] outline-none text-white font-raleway font-semibold p-2"/>
          </div>
          <div className="clear-start flex flex-col gap-2">
            <label className="font-raleway font-bold text-white text-[14px]">Releasing Date</label>
            <input type="date" 
             name="releasingDate"
             value={mixData.releasingDate}
             onChange={handleInputChange}
            className=" w-[700px] h-10 bg-[#ffffff32] outline-none text-white font-raleway font-semibold p-2"/>
          </div>
          <div className="clear-start flex flex-col gap-2">
          <textarea 
          name="description"
          value={mixData.description}
          onChange={handleInputChange}
          className="bg-[#ffffff32] w-[700px] h-32 outline-none p-2 font-raleway font-semibold text-white" placeholder="Description of the Mixtape"></textarea>
          </div>

          <button className="bg-[#fa0153] w-[700px] p-2 font-raleway text-white font-semibold rounded-sm hover:bg-[#c46182]">
            {loading ? <Loader className="w-5 h-5 animate-spin" /> : "Upload the Mix" }
          </button>
          </div>
        </div>
        </div>
        </form>
    </div>
  );
};

export default Uploading;
