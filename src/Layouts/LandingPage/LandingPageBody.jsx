import React from "react";
import { LandingPageBodyCarouselItems } from "../../constants/LandingPageBodyCarouselItems";
import cn from "../../utils/cn";
const LandingPageBody = () => {
    // This is the state to define the activeindex in the carousel
    const [activeIndex, setActiveIndex] = React.useState(0);
    // Function for handling the next item
    const handleNext = () => {
      // console.log(activeIndex);
        setActiveIndex((prevIndex) => {
           return ((prevIndex+1) % (LandingPageBodyCarouselItems.length));
        });
    };
    

    // for autoplay I am using useEffect() hook

    React.useEffect(() => {
      // console.log("Use Effect is called");
        // Using setInterval hook to automatically changing the sildes
        const interval = setInterval(() => {
            handleNext();
        }, 5000);

        return () => clearInterval(interval);
    }, [activeIndex]);
    return (
        <div className={cn("text-slate-950 dark:text-slate-100")}>
            {/* Here I will try to create a carousel to show case different features of my website */}
            <div className="overflow-hidden rounded-lg shadow-lg">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                >
                    {LandingPageBodyCarouselItems.map((item) => (
                        <div
                            key={item.id}
                            className="min-w-full flex-shrink-0"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="h-64 w-full object-cover"
                            />
                            <div className="bg-white p-6 dark:bg-slate-800">
                                <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
                                <p className="text-slate-600 dark:text-slate-300">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LandingPageBody;
