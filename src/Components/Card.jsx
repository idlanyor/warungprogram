export default function Card() {
    return (
        <div className="card relative max-w-xl h-[450]">
            <div className="card-text animate__animated animate__fadeInUp">
                <h1 className="text-3xl font-extrabold">Warung Program</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id aliquam leo. Morbi eleifend mauris eget
                    lorem vestibulum, nec sodales nisi ultricies.</p>
                <button type="button"
                    className="text-white bg-[#00008B] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2">
                    Learn More&emsp;
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </button>
            </div>
        </div>
    )
}