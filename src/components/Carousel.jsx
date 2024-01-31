import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
    const [currImageIndex, setCurrentImageIndex] = useState(0);

    const prev = () => {
        if (currImageIndex > 0) {
            setCurrentImageIndex(currImageIndex - 1);
        } else {
            setCurrentImageIndex(images.length - 1);
        }
    };

    const next = () => {
        if (currImageIndex < images.length - 1) {
            setCurrentImageIndex(currImageIndex + 1);
        } else {
            setCurrentImageIndex(0);
        }
    }

    return (
        <>
            <div className="main-container">
                <div className="button-container">
                    <div>
                        <button className="left-btn" onClick={prev}>
                            <ArrowBackIosIcon style={{ fill: "white" }} />
                        </button>
                    </div>
                    <div>
                        <button className="right-btn" onClick={next}>
                            <ArrowForwardIosIcon style={{ fill: "white" }} />
                        </button>
                    </div>
                </div>
                <div className="image-span-container">
                    <span className="text title">{images[currImageIndex].title}</span>
                    <img src={images[currImageIndex].img} alt="" />
                    <span className="text subtitle">{images[currImageIndex].subtitle}</span>
                </div>
            </div>
        </>
    );
}

export default Carousel;