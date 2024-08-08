import Image from "next/image";

import "./normal.css"
import Slider from "@/component/slider/page";


const NormalAutoSilder = () => {
    const slider1Images = [
        '/images/auto_slider/slider1_1.png',
        '/images/auto_slider/slider1_2.png',
        '/images/auto_slider/slider1_3.png',
        '/images/auto_slider/slider1_4.png',
        '/images/auto_slider/slider1_5.png',
        '/images/auto_slider/slider1_6.png',
        '/images/auto_slider/slider1_7.png',
        '/images/auto_slider/slider1_8.png',
        '/images/auto_slider/slider1_9.png',
        '/images/auto_slider/slider1_10.png'
      ];
      const slider2Images = [
        '/images/auto_slider/slider2_1.png',
        '/images/auto_slider/slider2_2.png',
        '/images/auto_slider/slider2_3.png',
        '/images/auto_slider/slider2_4.png',
        '/images/auto_slider/slider2_5.png',
        '/images/auto_slider/slider2_6.png',
        '/images/auto_slider/slider2_7.png',
        '/images/auto_slider/slider2_8.png',
        '/images/auto_slider/slider2_9.png',
      ];
    return ( 
        <>
            <Image src="/logo.png" className="img" alt="" height={500} width={1200}/>
            <Slider
                width="100px"
                height="50px"
                images={slider1Images}
                quantity={10}
            />
            <Slider
                width="120px"
                height="120px"
                quantity={9}
                images={slider2Images}
                reverse="true"

            />
          
        </>
       
    );
}
 
export default NormalAutoSilder;