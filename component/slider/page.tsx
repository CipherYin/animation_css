
import {createCustomStyle} from "@/lib/customStyle"


type SliderProperty = {
    width: String,
    height: String,
    quantity: number,
    reverse?: String; 
    images: string[];
}

const Slider = ({
    width, 
    height, 
    quantity, 
    reverse,
    images 
}: SliderProperty) => {
    const sliderStyle = createCustomStyle({
        '--width': width,
        '--height': height,
        '--quantity': quantity,
      });
    return ( 
        <div className="slider" style={sliderStyle} data-reverse={reverse ? "true" : undefined}>
            <div className="list">
                {images.map((image, index) => (
                    <div className="item" style={createCustomStyle({ '--position': index + 1 })} key={index}>
                        <img src={image} alt={`slider ${index + 1}`} />
                    </div>
                ))}
            </div>
    </div>
    );
}
 
export default Slider;