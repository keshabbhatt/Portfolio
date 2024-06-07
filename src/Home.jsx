import React from 'react';

const Banner = () => {
  return (
    <section className="flex flex-col items-center p-10 bg-black text-white">
      <img 
        src="https://scontent.fktm19-1.fna.fbcdn.net/v/t39.30808-6/339268631_245187884631173_3849200606450914357_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=CYnPCLMb2gQQ7kNvgFtaYzL&_nc_ht=scontent.fktm19-1.fna&oh=00_AYBuHaiJ9Xv4iaDYcOEijisQj5he9B3dxmbVlgmOn2xFoA&oe=6668D4AD" 
        alt="Profile" 
        className="rounded-full w-40 h-40 object-cover mb-5 border-4 border-red-500" 
      />
      <h1 className="text-5xl font-bold">Hello, I'm Kunaal</h1>
      <h2 className="text-3xl font-semibold text-red-500">Visual Designer</h2>
      <p className="text-center mt-5 max-w-2xl">By focusing on a clean, intuitive design with easy navigation and comprehensive information, the system ensures users can easily access and utilize the content provided.</p>
      <button className="bg-red-500 text-white py-2 px-5 mt-5 rounded hover:bg-red-700">ABOUT ME</button>
    </section>
  );
};

export default Banner;
