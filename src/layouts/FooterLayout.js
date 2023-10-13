import React from "react";
import FooterLogo from "../components/footer/FooterLogo";
import FooterCompany from "../components/footer/FooterCompany";
import FooterPartners from "../components/footer/FooterPartners";
import FooterDocs from "../components/footer/FooterDocs";
import FooterContacts from "../components/footer/FooterContacts";
import FooterSocials from "../components/footer/FooterSocials";



const Footer = () => {
    return (
        <footer className="bg-slate-100">
            <div className="flex-wrap gap-5 flex justify-between 2xl:grid-cols-6 w-3/4 mx-auto py-3 text-sm text-gray-500">
                <FooterLogo />
                <FooterCompany />
                <FooterPartners />
                <FooterDocs />
                <FooterContacts />
                <FooterSocials />
            </div>
            <hr className="mx-auto w-11/12 border-gray-300" />
            <span className="flex justify-center text-gray-500 text-sm p-4">
                <a href="/">© 2023 eDalivery™</a>. All Rights Reserved.
            </span>
        </footer>
    );
};

export default Footer;