import Image from "next/image";

export default function Leadership(){
    return(
        <section className="ps-[6vw] pe-[6vw]">
                <div className="text-[32px] w-full py-[1vw] font-bold text-[#003867]">
                    <h1 className="max-[900px]:text-3xl text-center max-[900px]:ml-[2rem]">Our Leadership</h1>
                </div>

                <div className="flex flex-col">
                    <div className="py-8">
                        <p className="text-base/8 text-[#003867]">
                            We are blessed with dedicated pastoral leadership, headed by Pastor Peter Adjei Mensah. 
                            He is ably assisted by Pastor Frederick Adjei Boateng at our Bronkong branch. 
                            We also have a thriving branch in Kodie, led by Pastor Gideon Oppong Berko.
                        </p>
                    </div>

                    <div className="max-[900px]:justify-center flex w-full justify-between gap-5 flex-wrap">
                        <div className="max-[540px]:w-full max-[900px]:w-4/5 relative flex justify-center items-center flex-col w-[30%] h-auto">
                            <div className="w-full h-full rounded-3xl shadow-xl">
                                <Image
                                    src="/images/Pastor-Peter.png"
                                    alt="Vector Image"
                                    width={500}
                                    height={500}
                                    className="w-full h-auto rounded-md relative object-cover md:w-full"
                                />
                            </div>
                            <div className="flex flex-col gap-2 text-center py-3">
                                <h2 className="text-[22px] font-bold text-[#ff0912]">Pastor Peter Adjei Mensah</h2>
                                <p className="text-base/8 text-[#003867] capitalize">Head Pastor</p>
                            </div>
                        </div>
                        
                        <div className="max-[540px]:w-full max-[900px]:w-4/5 relative flex justify-center items-center flex-col w-[30%] h-auto">
                            <div className="w-full h-full rounded-3xl shadow-xl">
                                <Image
                                    src="/images/Pastor-Gideon.png"
                                    alt="Vector Image"
                                    width={500}
                                    height={500}
                                    className="w-full h-auto rounded-md relative object-cover md:w-full"
                                />
                            </div>
                            <div className="flex flex-col gap-2 text-center py-3">
                                <h2 className="text-[22px] font-bold text-[#ff0912]">Pastor Gideon Oppong Berko</h2>
                                <p className="text-base/8 text-[#003867] capitalize">Pastor of Kodie Branch</p>
                            </div>
                        </div>

                        <div className="max-[540px]:w-full max-[900px]:w-4/5 relative flex justify-center items-center flex-col w-[30%] h-auto">
                            <div className="w-full h-full rounded-3xl shadow-xl">
                                <Image
                                    src="/images/Pastor-Frederick.png"
                                    alt="Vector Image"
                                    width={500}
                                    height={500}
                                    className="w-full h-auto rounded-md relative object-cover md:w-full"
                                />
                            </div>
                            <div className="flex flex-col gap-2 text-center py-3">
                                <h2 className="text-[22px] font-bold text-[#ff0912]">Pastor Frederick Adjei Boateng</h2>
                                <p className="text-base/8 text-[#003867] capitalize">Assiting Pastor at Bronkong Branch</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>
    )
}