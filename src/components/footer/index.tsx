export function Footer() {
    return (
        <footer className="bg-black text-white py-10 mt-4 ">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-center gap-9 flex-col">
                    <div className="flex items-cente justify-center flex-col">
                        <h4 className="text-lg font-semibold mb-4 text-center">Empresa</h4>
                        <ul className="space-y-1">
                            <li><a href="#about-me" className="hover:text-blue-400 text-center">Quem Somos</a></li>
                            <li><a href="#services" className="hover:text-blue-400 text-center">Nossos serviços</a></li>
                        </ul>
                    </div>

                    <a href="https://api.whatsapp.com/send?phone=5511957769723&text=Oie%20D%C3%A9bora%20tudo%20bem?%0AGostaria%20de%20agendar%20um%20horario!!" className=" text-center px-8 bg-green-400 text-white py-2 rounded-md hover:bg-green-400">WhatsApp</a>

                    <div className="medias-socias flex space-x-4">
                        <a href="https://www.facebook.com/debora.ketllyn.7/?locale=sw_KE&_rdr" className="text-gray-400 hover:text-white"><i className="fa fa-facebook">Facebook</i></a>
                        <a href="https://www.instagram.com/anjos.nails_/?igsh=M3RndTVkaXllaW9k&utm_source=qr" className="text-gray-400 hover:text-white"><i className="fa fa-instagram">Instagram</i></a>
                    </div>
                    <i className="fa fa-instagram">feito com 🤍<a href="https://www.instagram.com/marcoos.v/" className="text-gray-400 hover:text-white">Marcos Dev</a></i>
                </div>
            </div>
        </footer>

    )
}