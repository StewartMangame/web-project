
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import image2 from "../slider/news2.png"
import image1 from '../slider/news1.png'
import image3 from '../slider/news3.png'

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000'
}

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '300px' 
}
const slideImages = [
  {
    url:'https://th.bing.com/th/id/OIP.xM6l1AK5qR8H3VeqtaXAOAHaCv?rs=1&pid=ImgDetMain',
  },
  {
    url:'https://4.bp.blogspot.com/-lCbr58OqiHI/WiAJHH8GeFI/AAAAAAAAEsE/uqjcRgbVfecSuEghsqlG-vU0i2MBs58jACLcBGAs/s1600/Agriexam.com%2BNews%2B....jpeg',
  },
  {
    url: 'https://th.bing.com/th/id/R.8f9343e84e15abf88eb5c27a3287e2d2?rik=L%2bA1AEnrb6iJdw&pid=ImgRaw&r=0',
    caption: 'Slide 3'
  },
];

const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
          
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}
export default Slideshow;


