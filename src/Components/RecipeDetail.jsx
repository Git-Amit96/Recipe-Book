import { useParams } from 'react-router-dom';
import RecipeData from '../utils/RecipeData';
import { useState } from "react";
import Instructions from "./Instructions";
import Footer from "./Footer";

const RecipeDetail = () => {

    const [isVisible, setIsVisible] = useState(null);
    const { recipeId } = useParams();
    const sample = RecipeData(recipeId);
    function summarizeText(summary) {

        const plainText = summary.replace(/<\/?[^>]+(>|$)/g, "");
        const truncatedText = plainText.substring(0) + ".";
        const finalText = truncatedText.substring(0, truncatedText.lastIndexOf(" "));
        return finalText;
    }

    const renderStars = (rating) => {
        const fullStar = "⭐";
        const stars = (rating / 20).toFixed(0);
        return (
            <span className="text-yellow-800">
                {fullStar.repeat(stars)}
            </span>
        );
    };

    return (
        <div>
            <div className="mt-8">
                {
                    sample == null ? <div className='px-32'>Loading...</div>
                        :
                        <div className=''>
                            <div className='w-[100%] max-w-[1300px] mx-auto'>
                                <div className="flex gap-3 flex-wrap mx-auto border-b w-[80%] pb-8">
                                    <div className="w-[40%] ">
                                        <img src={sample.image} alt="img" className=" rounded-lg " />
                                    </div>
                                    <div className="max-w-[50%] pl-5 flex flex-col gap-3">
                                        <div className="text-black text-[30px] font-bold">
                                            <h1 className="">{sample.title}</h1>
                                        </div>
                                        <div className="font-medium text-slate-600 flex gap-4 flex-wrap">
                                            {sample.cuisines.map((dish) => (
                                                <h4 className=" rounded-md px-1 py-0.5 shadow-md bg-yellow-200" key={dish}>{dish}</h4>))
                                            }
                                        </div>
                                        <div
                                            className={` w-fit px-3 py-1 mt-2 rounded-full text-sm font-semibold shadow-md ${sample.vegetarian ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}
                                        >
                                            {sample.vegetarian ? "Veg" : "Non-Veg"}
                                        </div>
                                        <div className="mt-3 flex items-center">
                                            <span className="text-md text-gray-500">Health Rating:</span>
                                            <span className="ml-2">{renderStars(sample.healthScore)}</span>
                                        </div>
                                        <div>
                                            <span className="text-md text-gray-500">Time: </span>
                                            <span className="text-orange-800">{sample.readyInMinutes} minutes</span>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-[20px] font-bold text-black">Summary</h3>
                                        <p className="text-gray-600 leading-relaxed text-justify">{summarizeText(sample.summary)}</p>
                                    </div>
                                </div>
                                <div className="mt-5 mx-auto w-[80%]">
                                    <div className="text-black text-[40px] font-bold font-serif text-center mb-6">
                                        <h1> 🤤 Craving Right?
                                            <div>So let&apos;s Make It 👨🏽‍🍳</div></h1>
                                    </div>
                                    {sample.analyzedInstructions[0].steps.map((ele, index) => (<Instructions key={ele.number} instruction={ele} showCards={index == isVisible ? true : false} setCardsVisibilty={(check) => check ? setIsVisible(index) : setIsVisible(null)} />))}
                                </div>
                            </div>
                            <Footer />
                        </div>
                }
            </div>
        </div>
    );
};

export default RecipeDetail;


