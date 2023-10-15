import { Link } from "react-router-dom";
import footlogo from "../../content/footer.png"


const FooterLogo = () => {
    return (
        <div className="flex flex-col sm:w-40 justify-start">
            <Link to="/about">
                <img className="w-40 mb-3" src={footlogo} alt="не загрузилась" />
            </Link>
            <p className="text-[12px] text-gray-500 indent-5">
                eDalivery - ipsum dolor sit amet consectetur, adipisicing elit. Repellat animi dolores velit dignissimos atque voluptates reiciendis officia minus qui!
            </p>
        </div>
    );
};

export default FooterLogo;