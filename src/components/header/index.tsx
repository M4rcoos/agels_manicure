import logo from "@/assets/logo.png";
import { FaCalendarAlt } from "react-icons/fa";


import { Link } from "react-router-dom";


export const Header = () => {

    return (
        <header className="bg-black flex h-36 items-center justify-between px-2 py-8 sm:px-3 sm:py-8 md:px-2 md:py-8 lg:px-10 lg:py-8">
            <Link to={'/'}>
                <img
                    src={logo}
                    width={450}
                    height={150}
                    alt="icone de um copo de cafe roxo e um texto ao lado escrito coffe delivery"
                />

            </Link>
            <a href="https://minhaagendavirtual.com.br/agendamentos/incluir/nailsdebora/33347475A" target="_blank">
                <div className="flex h-[38px] items-center justify-center rounded-md gap-2 px-2 py-6 border border-white">
                    <p className="text-white font-mono">Agendar Horário</p>
                    <FaCalendarAlt className="lg:size-6 text-white size-9" />
                </div>
            </a>

        </header>
    );
};