import React from "react";
import Slick, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slick-overrides.css";

const Carousel: React.SFC<Settings> = props => <Slick {...props} />;

export default Carousel;
