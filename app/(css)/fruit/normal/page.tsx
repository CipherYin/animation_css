import FruitCarousel from "@/component/fruit/page";
import "./normal.css"
const MyFruit = () => {
    const resources=[
        {
            name: "Strawberry",
            img: "/images/fruit/fruit_strawberry.png",
            backgound: "#EA3D41"
        },
        {
            name: "avocado",
            img: "/images/fruit/fruit_avocado.png",
            backgound: "#2D5643"
        },
        {
            name: "orange",
            img: "/images/fruit/fruit_orange.png",
            backgound: "#E7A043"
        }
    ]
    const names = resources.map(resource => resource.name);
    const imgs = resources.map(resource => resource.img);
    const backgrounds = resources.map(resource => resource.backgound);
    return ( 
        <>
            <FruitCarousel
               names={names}
               imgs={imgs}
               backgrounds={backgrounds}
            />
        </>
     );
}
 
export default MyFruit;