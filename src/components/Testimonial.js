import React, { useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
} from 'reactstrap';
import './testimonial.css'
import Avatar from "@material-ui/core/Avatar";
import axios from 'axios'
import { useEffect } from 'react'



const Testimonial = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [data, setData] = useState([])

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === data.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? data.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }
    useEffect(() => {
        getData()
    }, [])
    const getData = () => {
        axios.get('https://5e3139d0576f9d0014d644ed.mockapi.io/projectreact')
            .then(res => {

                console.log("this is response", res)

                const data = res.data;
                setData(data)

            })
    }

    const slides = data.map((item, index) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={index}
            >
                <div className="container" align="center">
                    <h4 className="comment">{item.comment}</h4>
                    <Avatar alt="Avatar Image" src={item.avatar}
                        style={{ display: "flex", margin: "50px auto 30px" }}
                        className="avatar"
                    />
                    <h5 className="name">{item.name}</h5>
                    <h6 className="job">{item.job}</h6>
                </div>


            </CarouselItem>
        );
    });

    return (
        <div style={{ backgroundColor: "#eeeeee", paddingBottom: "50px", paddingTop: "50px" }}>
            <div align="center" >
                <h1 className="testimonial">TESTIMONIALS</h1>
            </div>


            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
            >
                <CarouselIndicators items={data} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
        </div>
    );
}

export default Testimonial;