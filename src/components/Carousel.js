import {Swiper} from "swiper";
import {Pagination} from "@mui/material";
import {Autoplay, Navigation} from "swiper/modules";
import {SwiperSlide} from "swiper/vue";

const Carousel = () => {
  return (

<Swiper modules = {[Navigation,Pagination,Autoplay]} spaceBetween={50} slidesPerView={1} navigation
    pagination={{clickable: true}}
    autoplay = {{delay: 3000}}>

    <SwiperSlide>
        <img src="diapositiva1.jpg" alt="Slide 1" className="Slide"/>
        <img src="diapositiva2.jpeg" alt="Slide 2" className="Slide"/>
        <img src="diapositiva3.jpeg" alt="Slide 3" className="Slide"/>
    </SwiperSlide>

</Swiper>



  )};

export default Carousel;