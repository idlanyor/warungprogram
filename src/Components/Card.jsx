export default function Card() {
    return (
        <div className="card flex justify-center items-center relative max-w-screen-2xl h-screen">
            <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center" style={{
                backgroundImage: "url(https://i.ibb.co/7yQhcDG/wp.jpg)",
                filter: "brightness(0.4)"
            }}></div>
            <div className="left-1/2 space-y-5 px-8 transform -translate-x-1/2 -translate-y-1/2 text-center text-white w-full z-10 animate__animated animate__fadeInUp">
                <h1 className="text-3xl font-extrabold">Warung Program</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus cum aspernatur mollitia nostrum praesentium veniam tempore molestias quae optio nisi, quo nam ducimus amet ratione corporis accusamus vitae fuga maiores accusantium eos officia eveniet dolor distinctio. Quae velit temporibus error officia laudantium facilis, expedita asperiores excepturi delectus ad! Asperiores, eaque.
                    lorem vestibulum, nec sodales nisi ultricies.</p>
                <button type="button"
                    className="text-white bg-[#00008B] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2">
                    Learn More&emsp;
                    <svg className="w-6 h-6 text-white" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </button>
            </div>
        </div>
    )
}