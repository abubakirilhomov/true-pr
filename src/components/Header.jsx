import React from "react";
import coin from "../assets/Group 9.png"
const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="bg-[#32363C]">
        <p>Earn per tap</p>
        <div>
          <img src={coin} alt="coin" />
          <p>+12</p>
        </div>
      </div>

      <div className="bg-[#32363C]">
        <p>Coins to level up</p>
        <span>10 M</span>
      </div>

      <div className="bg-[#32363C]">
        <p>Profit per hour</p>

        <div>
          <img src={coin} alt="" />
          <span>+636</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
