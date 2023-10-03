import { Link } from "react-router-dom";



const FooterCompany = () => {
    return (
        <div>
            <span className="font-bold text-lg text-gray-700 ">Компания</span>
            <ul className="grid gap-2">
                <Link to="/about">
                    <li >О нас</li>
                </Link>
                <Link to="wallet">
                    <li>Рестораны</li>
                </Link>
            </ul>
        </div>
    );
};

export default FooterCompany;