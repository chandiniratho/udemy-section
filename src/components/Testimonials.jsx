import React, { useRef, useState, useEffect } from "react";
import testimonialsData from "../data/testimonials.json";
import "../assets/styles.css"; // Make sure this has matching styles

const Testimonials = () => {
    const scrollRef = useRef(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);
    const scrollAmount = 320; // Card width to scroll by

    useEffect(() => {
        const handleScroll = () => {
            if (!scrollRef.current) return;
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

            setShowLeftArrow(scrollLeft > 0);
            setShowRightArrow(scrollLeft + clientWidth < scrollWidth);
        };

        const element = scrollRef.current;
        element?.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial state check
        return () => element?.removeEventListener("scroll", handleScroll);
    }, []);

    const scroll = (direction) => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth"
            });
        }
    };

    const testimonials = testimonialsData?.data?.dynamicWebContent?.contents || [];
    const heading = testimonialsData?.data?.dynamicWebContent?.heading || "See what others are achieving through learning";

    if (testimonials.length === 0) {
        return (
            <div className="testimonials-section">
                <h2 className="testimonials-heading">{heading}</h2>
                <p className="no-testimonials">No testimonials available at the moment.</p>
            </div>
        );
    }

    return (
        <div className="testimonials-section">
            <h2 className="testimonials-heading">{heading}</h2>

            <div className="testimonials-carousel-wrapper">
                {showLeftArrow && (
                    <button className="carousel-btn left-btn" onClick={() => scroll("left")}>
                        ‹
                    </button>
                )}

                <div className="testimonials-carousel" ref={scrollRef}>
                    {testimonials.map((testimonial, index) => {
                        const author = testimonial.contents?.[0];

                        return (
                            <div className="testimonial-card" key={index}>
                                <blockquote className="testimonial-quote">“</blockquote>
                                <p
                                    className="testimonial-description"
                                    dangerouslySetInnerHTML={{ __html: testimonial.description }}
                                ></p>

                                <div className="testimonial-footer">
                                    {author?.image?.url && (
                                        <img
                                            className="testimonial-avatar"
                                            src={author.image.url}
                                            alt={author?.heading || "Author"}
                                        />
                                    )}
                                    <div className="testimonial-author-info">
                                        <p className="testimonial-author-name">{author?.heading}</p>
                                        <p
                                            className="testimonial-author-title"
                                            dangerouslySetInnerHTML={{ __html: author?.description }}
                                        ></p>
                                    </div>
                                </div>

                                {testimonial.contentUrl && (
                                    <a
                                        className="testimonial-link"
                                        href={testimonial.contentUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        dangerouslySetInnerHTML={{ __html: testimonial.contentUrlText }}
                                    ></a>
                                )}
                            </div>
                        );
                    })}
                </div>

                {showRightArrow && (
                    <button className="carousel-btn right-btn" onClick={() => scroll("right")}>
                        ›
                    </button>
                )}
            </div>
        </div>
    );
};

export default Testimonials;
