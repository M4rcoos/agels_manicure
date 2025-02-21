type ServiceProps = {
    icon: string;
    text: string;
};

export const ServiceItem = ({ icon, text }: ServiceProps) => (
    <>
        <div className="flex items-center border border-purple-dark rounded-lg overflow-hidden">
            <div className="bg-purple-dark p-4">
                <img src={icon} alt={text} width={40} height={40} />
            </div>
            <div className="p-4 text-purple-dark font-medium">{text}</div>
        </div>


    </>

);