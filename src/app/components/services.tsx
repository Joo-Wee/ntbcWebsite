export default function Services(){
    const services = [
        { name: "Tuesday Bible Study", time: "7:00pm - 8:00pm" },
        { name: "Friday Women's Fellowship", time: "9:30am - 10:30am" },
        { name: "Friday Prayers", time: "7:00pm - 8:00pm" },
        { name: "Sunday Church Service", time: "9:30am - 12:30pm" },
        { name: "Sunday Men's Fellowship", time: "12:45pm - 1:15pm" },
        { name: "Sunday Youth Meeting", time: "6:30pm - 8:00pm" }
    ];
    return(
        <section id="services" className="pt-[8vh]">
            <div className="text-[32px] w-full py-[1vw] font-bold text-[#003867]">
                <h1 className="max-[900px]:text-3xl text-center">Worship With Us</h1>
            </div>
            <div className="flex flex-col">
                <div className="py-8">
                    <p className="text-base/8 text-[#003867]">
                    Our doors are always open to anyone seeking truth, hope, and fellowship in Christ. 
                    We offer Spirit-led services and programs for every age and stage of life.
                    </p>
                </div>
            </div>
            <div className="bg-cover bg-center bg-no-repeat relative opacity-80 min-h-[30vh] w-full"
            style={{
                backgroundImage: `url('/images/DSCN4799.JPG')`,
                backgroundSize: 'cover',
                transition: 'background-image 8s fade'
            }}
            >
            <div className="absolute inset-0 bg-[#003867] opacity-90 z-10"></div>
            <div className="flex flex-col relative z-20 px-2 sm:px-0 max-w-4xl mx-auto">
                <div className="py-8 text-center">
                    <h2 className="text-2xl sm:text-[28px] capitalize font-black text-[#ff0912] text-shadow">Weekly Services & Fellowship Times</h2>
                </div>
                <div className="pt-1">
                <div className="mx-auto w-full">
                    <div className="space-y-0">
                        {services.map((service, index) => (
                            <div key={index} className="flex flex-col sm:flex-row justify-between items-center py-4 sm:py-6 text-[#FAFAFA] border-b border-[#ea9da0] group cursor-pointer hover:bg-[#ff0912] hover:text-[#FAFAFA] transition-colors px-2 sm:px-4">
                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold">{service.name}</h3>
                                </div>
                                <div>
                                    <p className="text-lg sm:text-xl font-bold leading-relaxed">
                                        {service.time}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    )
}