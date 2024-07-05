import React, { useState } from "react";
import NavbarA from "../../Components/NavbarA/NavbarA";
import Cards from "../../Components/Cards/Cards";
import "./community.css";

function Community() {
  const [screenSize, setScreenSize] = React.useState(window.innerWidth);
 
  const [selectedOption, setSelectedOption] = useState('');
  const handleResize = () => {
    setScreenSize(window.innerWidth);
 };
 React.useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
 }, []);
  const [posts, setPosts] = useState([
    {
      name: "John Doe",
      title: "Hoe je kunt passen",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo.",
      img: "https://images.pexels.com/photos/5637717/pexels-photo-5637717.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      name: "Harry Potter",
      title: "Hoe af te vallen",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo.",
      img: "https://images.pexels.com/photos/5067957/pexels-photo-5067957.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      name: "Hermione Granger",
      title: "Hoe aan te komen",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo.",
      img: "https://images.pexels.com/photos/6975756/pexels-photo-6975756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ]);

  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleChange = (event) => {
      setSelectedOption(event.target.value);
  };

  return (
    <div>
      {/* <NavbarA /> */}
      {screenSize > 786 ? (
        <>
          <Cards />
        </>
      ) : (
        <></>
      )}
      <div className="">
      <div className="community-head flex flex-col justify-center items-center gap-2 py-5 text-[30px]">
        <h1 className="font-semibold">GezondFit50+ Community</h1>
        <p>Doe mee aan het gesprek met andere leden van de gemeenschap.</p>
      </div>
      <div className="flex lg:flex-row flex-col justify-center">
<div className="bg-slate-100 h-[102vh] lg:w-[75%] px-4">
<div className="">
<div className="w-full rounded-md">
  <div className="flex w-full h-full relative">
    <div className="w-full">
      <h1 className="text-center font-semibold text-[30px] py-3">Community Chat</h1>
      <div className="py-2">
        <div className="h-[80vh] w-full bg-gray-300 rounded-md py-4 overflow-y-auto">
          <div
            className="w-full flex justify-start items-center"
          >
            <div className="flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]">
              <div>
                <img
                  className="w-[38px] h-[38px] border-2 border-white rounded-full max-w-[38px] p-[3px] object-cover"
                  src="https://images.pexels.com/photos/1474705/pexels-photo-1474705.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
              </div>
              <div className="flex justify-center items-start flex-col lg:w-full w-[80%] bg-green-500 shadow-lg shadow-orange-500/50 text-white py-1 px-2 rounded-sm">
                <h1 className="text-black font-semibold">BLOG</h1>
                <p>Stark</p>
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam voluptatem commodi, itaque ea nihil iste sapiente. Sequi illum harum similique quam pariatur mollitia deleniti ducimus ea quibusdam, vitae totam reiciendis?</span>
              </div>
            </div>
            
          </div>
          <div className="w-full flex justify-end items-center">
            <div className="chat-a flex justify-start items-start gap-2 md:px-3 py-2 max-w-full lg:max-w-[85%]">
              <div className="flex justify-center items-end flex-col w-[80%] bg-blue-500 shadow-lg shadow-blue-500/50 text-white py-1 px-2 rounded-sm">
              <h1 className="font-semibold text-end">Bericht</h1>
                <span>Met mij gaat het goed, hoe gaat het met jou?</span>
              </div>
              <div>
                <img
                  className="w-[38px] h-[38px] border-2 border-white rounded-full max-w-[38px] p-[3px] object-cover"
                  src="https://images.pexels.com/photos/1474705/pexels-photo-1474705.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <form className="flex gap-3">
        <div className="w-full flex">
        <label htmlFor="options"></label>
            <select id="options" value={selectedOption} onChange={handleChange} className="border-slate-700 outline-none bg-[#d1d5db]">
                <option value="" className="">Selecteer</option>
                <option value="option1">Blog</option>
                <option value="option2">Prestatie</option>
                <option value="option3">Citaat</option>
                <option value="option4">Tekst</option>
            </select>
           

        <input
          className="w-full flex justify-between px-2 border border-slate-700 items-center py-[5px] focus:border-blue-500 rounded-md outline-none bg-transparent text-[#878787]"
          type="text"
          placeholder="Voer uw bericht in"
        />
        </div>
        
        <button className="shadow-lg text-[15px] bg-cyan-500 hover:shadow-cyan-500/50 text-semibold w-[75px] h-[35px] rounded-md text-white flex justify-center items-center">
          Verstuur
        </button>
      </form>
    </div>
  </div>
</div>
</div>
 
</div>
<div className="lg:w-[25%]">
  <div className="text-center py-3 text-[30px] font-semibold">
<h1>Community Leden</h1>
  </div>
  <div className="flex flex-col lg:h-[80vh] px-2 overflow-y-auto gap-2">
    <div className="flex gap-2 items-center bg-[#d1d5db] py-2 px-2 w-[98%] mx-auto rounded-md">
      <img src="https://images.pexels.com/photos/6787391/pexels-photo-6787391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="w-[40px] h-[40px] rounded-full object-cover" />
      <h1 className="text-[20px]">Naam</h1>
    </div>
    <div className="flex gap-2 items-center bg-[#d1d5db] py-2 px-2 w-[98%] mx-auto rounded-md">
      <img src="https://images.pexels.com/photos/6787391/pexels-photo-6787391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="w-[40px] h-[40px] rounded-full object-cover" />
      <h1 className="text-[20px]">Naam</h1>
    </div>
    <div className="flex gap-2 items-center bg-[#d1d5db] py-2 px-2 w-[98%] mx-auto rounded-md">
      <img src="https://images.pexels.com/photos/6787391/pexels-photo-6787391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="w-[40px] h-[40px] rounded-full object-cover" />
      <h1 className="text-[20px]">Naam</h1>
    </div>
  </div>
  
</div>
      </div>


      </div>

    </div>
  );
}

export default Community;