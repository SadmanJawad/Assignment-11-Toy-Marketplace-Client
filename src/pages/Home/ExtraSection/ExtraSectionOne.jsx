import { Link } from "react-router-dom";

const ExtraSectionOne = () => {
    return (
        <div className="w-5/6 mx-auto mb-32 border border-sky-500" data-aos="flip-right">
            <div className="hero bg-base-200 rounded-lg">
                <div className="hero-content py-8 md:py-14 max-w-full flex flex-col lg:flex-row">
                    <div className="w-full lg:w-3/5">
                        <iframe
                            width="100%"
                            height="315"
                            src="https://www.youtube.com/embed/MVlbP7BkJEU?controls=0" 
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="text-center w-full lg:w-2/5 mt-4 lg:mt-0">
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">Hello there</h1>
                        <p className="mb-4">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Link to="/alltoys">
                            <button className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-gray-600 border-none hover:border-sky-300 bg-sky-500 mt-4 lg:mt-0">All Toys</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraSectionOne;