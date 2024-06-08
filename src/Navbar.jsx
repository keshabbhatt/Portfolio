import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
   <>
   <div className="navbar bg-base-100 bg-gray-800">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl text-white">welcomegi</a>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://scontent.fktm19-1.fna.fbcdn.net/v/t39.30808-6/339268631_245187884631173_3849200606450914357_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=CYnPCLMb2gQQ7kNvgFtaYzL&_nc_ht=scontent.fktm19-1.fna&oh=00_AYBuHaiJ9Xv4iaDYcOEijisQj5he9B3dxmbVlgmOn2xFoA&oe=6668D4AD" />
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
   </>
  );
};

export default Navbar;
