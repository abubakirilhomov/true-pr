import { Link } from "react-router-dom";
import { FaUserFriends } from "react-icons/fa";
import { GiMineWagon } from "react-icons/gi";
import { FaCoins } from "react-icons/fa6";
import { FaGift } from "react-icons/fa";
import { SiBinance } from "react-icons/si";

const BottomNav = () => {

  const navItems = [
    { label: "Exchange", icon: <SiBinance />, to: "/" },
    { label: "Mine", icon: <GiMineWagon />, to: "/about" },
    { label: "Friends", icon: <FaUserFriends />, to: "/contacts" },
    { label: "Earn", icon: <FaCoins />, to: "/earn" },
    { label: "Airdrop", icon: <FaGift />, to: "/airdrop" },
  ];    

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 bg-[#1e1f22] rounded-xl px-4 py-2 flex gap-5 items-center w-[368px] h-[60px] justify-between shadow-xl border border-[#444]">
      {navItems.map((item) => {
        return (
          <Link
            key={item.to}
            to={item.to}
            className={`flex flex-col items-center text-xs text-white`}
          >
            <div className="text-xl mb-1">{item.icon}</div>
            {item.label}
          </Link>
        );
      })}
    </div>
  );
};

export default BottomNav;
