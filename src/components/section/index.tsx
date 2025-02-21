
import mulher from "@/assets/mulher.png"

export const Section = () => {

    return (
        <div className="bg-white p-6 flex flex-col items-center">
            <h1 className="font-baloo font-bold text-3xl text-purple-dark">Fique por dentro das novidades</h1>
            <p className="text-base font-roboto m-4">
                Descontos e novidades sobre cuidados. Débora Anjos sempre traz o melhor atendimento pra voce se sentir confortavel.
            </p>
            <img src={mulher} />
            <a
                href="https://www.instagram.com/anjos.nails_/?igsh=M3RndTVkaXllaW9k&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 lex items-center gap-2 transition-transform duration-300 hover:-translate-y-1 text-base hover:text-white bg-purple-light p-2 rounded-md hover:bg-purple-dark"
            >

                Seguir no Instagram
            </a>

        </div>
    );
};
