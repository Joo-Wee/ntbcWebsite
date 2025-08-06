export default function Services(){
    // Service data array
    const services = [
        {
            name: "Tuesday Bible Study",
            time: "7:00pm - 8:00pm"
        },
        {
            name: "Friday Women's Fellowship", 
            time: "9:30am - 10:30am"
        },
        {
            name: "Friday Prayers",
            time: "7:00pm - 8:00pm"
        },
        {
            name: "Sunday Church Service",
            time: "9:30am - 12:30pm"
        },
        {
            name: "Sunday Men's Fellowship",
            time: "12:45pm - 1:15pm"
        },
        {
            name: "Sunday Youth Meeting",
            time: "6:30pm - 8:00pm"
        }
    ];

    return(
        <section className="pt-[8vh]">
            <div className="ps-[12vw] pe-[12vw] text-[32px] w-full py-[1vw] font-bold text-[#003867]">
                <h1 className="max-[900px]:text-3xl text-center max-[900px]:ml-[2rem]">Worship With Us</h1>
            </div>

            <div className="ps-[12vw] pe-[12vw] flex flex-col">
                <div className="py-8">
                    <p className="text-base/8 text-[#003867]">
                    Our doors are always open to anyone seeking truth, hope, and fellowship in Christ. 
                    We offer Spirit-led services and programs for every age and stage of life.
                    </p>
                </div>
            </div>

            <div className="bg-cover bg-center bg-no-repeat relative opacity-80 lg:h-auto sm:h-86"
            style={{
                backgroundImage: `url('/images/DSCN4799.JPG')`,
                backgroundSize: 'cover',
                transition: 'background-image 8s fade'
            }}
            >
            <div className="absolute inset-0 bg-[#003867] opacity-90 z-10"></div>
            <div className="ps-[12vw] pe-[12vw] flex flex-col relative z-20">
                <div className="py-8 text-center">
                    <h2 className="text-[28px] capitalize font-black text-[#ff0912]" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>Weekly Services & Fellowship Times</h2>
                </div>

                <div className="pt-1">
                <div className="max-w-4xl mx-auto">
        
                    <div className="space-y-0">  
                        {services.map((service, index) => (
                            <div key={index} className="flex justify-between items-center py-6 text-[#FAFAFA] border-b border-[#ea9da0] group cursor-pointer hover:bg-[#ff0912] hover:text-[#FAFAFA] transition-colors px-4">
                                <div>
                                    <h3 className="text-xl font-bold">{service.name}</h3>
                                </div>
                                <div>
                                    <p className="text-xl font-bold leading-relaxed">
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