import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';

import logo from '../../images/logo.png';

const NavbarItem = ({ title, classProps}) => {
    return (
        <li className={'mx-4 cursor-pointer ${classProps}'}>
            {title}
        </li>
    )
}

const Navbar = () => {
    return (
        <nav className="w-full flex md:justify-center justify-between items-center p-4">
            <div className="md:flex-[0.5] flex-initial justify-center item-center">
                <img src={logo} alt="Logo" className="w-32 cursor-pointer" />
            </div>
            <ul className="text-white md:flex hiddent list-none flex-row justify-between items-center flex-initial">
                {["Market", "Exchange", "Tutorials", "Wallets"].map((item, index) =>)}
            </ul>
        </nav>
    );
}

export default Navbar;