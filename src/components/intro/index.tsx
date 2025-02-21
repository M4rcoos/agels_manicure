
import debora from "@/assets/foto-debora.jpg"


export const BeautyServices = () => {

    return (
        <div className="bg-white p-6 flex flex-col items-center">
            <h2 className="text-purple-dark text-2xl font-bold text-center">Tudo o que você precisa, no conforto da sua casa!</h2>
            <p className="text-base-text text-center mt-2">Suas unhas impecáveis no conforto e comodidade da sua casa!</p>

            <div className="mt-6 flex flex-col md:flex-row items-center md:rounded-bl-[36px]  rounded-bl-[36px]   gap-6 bg-purple-light  rounded-tr-[36px] rounded-md">
                <div className=" w-full md:w-1/3">
                    <img
                        src={debora}
                        alt="Manicure e Pedicure"
                        width={400}
                        className=" rounded-tr-[36px] rounded-bl-[36px] rounded-md h-full"
                    />
                </div>
                <div className="w-full md:w-1/2 text-start md:text-left flex justify-center flex-col items-center p-3">
                    <h3 id="about-me" className="text-xl font-semibold text-purple-dark font-baloo text-center">Quem é Débora anjos?</h3>
                    <p className="text-base-text mt-2 font-roboto ">Desde a adolescência, minha paixão sempre foi cuidar das unhas e realçar a beleza das pessoas.</p>
                    <p className="mt-4 text-base-text  font-roboto "> Decidi transformar esse amor em profissão, me especializando em técnicas profissionais para oferecer um serviço impecável.
                        <p className="text-base-text mt-2 font-roboto "></p>
                        Hoje, sou uma empreendedora dedicada, esposa, mãe e cristã, que escolheu o caminho do empreendedorismo para ter mais tempo com a família e, ao mesmo tempo, elevar a autoestima de cada cliente que passa pelas minhas mãos. Cada detalhe é pensado com carinho, dedicação e profissionalismo, porque sua beleza merece o melhor! 💅💖</p>
                    <h3 className="text-xl font-semibold text-purple-dark mt-6 font-baloo text-center">Manicure e Pedicure</h3>
                    <p className="mt-4 text-base-text  font-roboto">Deixe suas unhas impecáveis sem sair de casa! Ou se preferir te recebo com todo carinho na minha residência!</p>
                </div>

            </div>


        </div>
    );
};
