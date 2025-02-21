
import { ServiceItem } from "../services-item";
import manicure from "@/assets/nail-polish.png"
import pedicure from "@/assets/pedicure.png"
import pedicureMassagem from "@/assets/foot-massage.png"

export const CardItem = () => {
    return (
        <div id="services" className="flex justify-center px-8 bg-neutral-100">
            <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-4xl ">
                <ServiceItem icon={manicure} text="Manicure" />
                <ServiceItem icon={pedicure} text="Pedicure" />
                <ServiceItem icon={pedicureMassagem} text="Spa dos pés" />
            </div>
        </div>
    )
}