import { Link } from "react-router-dom";

const AboutPage = () => {
    return (
        <>
            <div>
                Мы скоро откроемся!
            </div>
            <Link to={"contacts"}>
                <button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                    Звоните по нофелету!
                </button>
            </Link>

        </>

    );
};

export default AboutPage;