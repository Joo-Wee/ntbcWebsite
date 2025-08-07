import Image from "next/image";

const ministries = [
    {
        name: "Men's Fellowship Ministry",
        body: "The Men's Fellowship is a brotherhood dedicated to spiritual growth and community service. We build strong relationships and support one another in our roles as Christian leaders, making a positive impact in our families and community.",
        img: "images/Men's Fellowship.jpg"
    },
    {
        name: "Women's Fellowship Ministry",
        body: "The Women's Fellowship is a supportive sisterhood where women of all ages connect and grow in faith. We foster deep friendships, provide encouragement, and serve the church and community through various compassionate outreach initiatives.",
        img: "images/Women's Fellowship.jpg"
    },
    {
        name: "Youth Ministry",
        body: "Our Youth Ministry empowers young people to grow in their faith. Through discipleship and service, we help them develop into Christ-centered leaders who positively influence their peers and community.",
        img: "images/Youth Fellowship-Pic.jpg"
    }
]

export default function Ministries(){
    return(
        <section className="px-4 sm:px-[6vw]">
            <div className="text-[32px] w-full py-[1vw] font-bold text-[#003867]">
                <h1 className="max-[900px]:text-3xl text-center">Our Ministries</h1>
            </div>
            <div className="flex flex-col">
                <div className="py-8">
                    <p className="text-base/8 text-[#003867]">
                        At New Testament Baptist Church, we believe in serving God and our community through various ministries 
                        which are all aimed at fostering spiritual growth, community outreach, and fellowship among members.
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 w-full">
                    {ministries.map((ministry, index) => (
                        <div
                        key={index}
                        className="w-full sm:w-4/5 md:w-1/2 lg:w-1/3 flex justify-center items-center flex-col h-auto"
                      >
                        <div className="w-full h-auto rounded-3xl shadow-xl border-b-4 border-[#ff0912] py-2 group">
                          <div className="relative overflow-hidden rounded-md">
                            <Image
                              src={ministry.img}
                              alt="Vector Image"
                              width={500}
                              height={500}
                              className="w-full h-auto object-cover"
                            />
                            {/* Water fill effect - overlay on image */}
                            <div className="absolute bottom-0 left-0 w-full h-0 bg-[#ff0912] opacity-80 transition-all duration-900 ease-in-out group-hover:h-full"></div>
                          </div>
                          {/* Text content - outside the water effect */}
                          <div className="flex flex-col gap-2 px-3 py-3">
                            <h2 className="text-[22px] font-bold text-[#ff0912]">{ministry.name}</h2>
                            <p className="text-base/8 text-[#003867] capitalize">{ministry.body}</p>
                          </div>
                        </div>
                      </div>))}
                </div>
            </div>
        </section>
    )
}