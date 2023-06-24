import Image1 from "./assets/img1.jpg";
import Image2 from "./assets/img2.jpg";
// import Image3 from "./assets/img3.jpg";
import Monster from "./assets/monster.png";
import Image4 from "./assets/img4.jpg";
import Image5 from "./assets/img5.jpg";
// import Image6 from "./assets/img6.jpg";
import Image7 from "./assets/img7.jpg";
import Image8 from "./assets/img8.jpg";
import Image9 from "./assets/img9.jpg";
import Image10 from "./assets/img10.jpg";
import Image11 from "./assets/img11.jpg";
import Calculator from "./assets/calculator1.jpg";
// import Image13 from "./assets/13.avif";
const PortfolioData = [
  {
    id: 1,
    btnCode: <a href="/">Coming Soon</a>,
    btnDemo: <a href="/">Coming Soon</a>,
    // btnCode: "Coming Soon",
    // btnDemo: "Coming Soon",
    // Code: "",
    // Live: "",
    title: "Book Designe",
    pic: (
      <img
        src={Image1}
        alt="hello w"
        style={{
          height: "289px",
          width: "325px",
          borderRadius: "10px",
        }}
      />
    ),
    category: "brand",
  },
  {
    id: 2,
    title: "NotePad Designe",
    btnCode: <a href="https://github.com/Muavia842/Daily-Notes/">Code</a>,
    btnDemo: <a href="https://muavia842.github.io/Daily-Notes/">Demo</a>,
    // btnCode: "Code",
    // btnDemo: "Demo",
    // Code: "https://github.com/Muavia842/Daily-Notes/",
    // Live: "https://muavia842.github.io/Daily-Notes/",
    pic: (
      <img
        src={Image2}
        alt="hello w"
        style={{
          height: "289px",
          width: "325px",
          borderRadius: "10px",
        }}
      />
    ),
    category: "designe",
  },
  {
    id: 3,
    title: "Calculator App",
    btnCode: <a href="https://github.com/Muavia842/Calculator-App">Code</a>,
    btnDemo: <a href="/comingsoon">Demo</a>,
    // btnCode: "Code",
    // btnDemo: "Demo",
    // Code: "https://github.com/Muavia842/Calculator-App",
    // Live: "/comingsoon",
    pic: (
      <img
        src={Calculator}
        alt="hello w"
        style={{
          height: "289px",
          width: "325px",
          borderRadius: "10px",
        }}
      />
    ),
    category: "designe",
  },
  {
    id: 4,
    title: "Monster Rolodex",
    btnCode: <a href="https://github.com/Muavia842/monsters-rolodex/">Code</a>,
    btnDemo: <a href="https://muavia842.github.io/monsters-rolodex/">Demo</a>,
    // btnCode: "Code",
    // btnDemo: "Demo",
    // Code: "https://github.com/Muavia842/monsters-rolodex/",
    // Live: "https://muavia842.github.io/monsters-rolodex/",
    pic: (
      <img
        src={Monster}
        alt="hello w"
        style={{
          height: "289px",
          width: "325px",
          borderRadius: "10px",
        }}
      />
    ),
    category: "designe",
  },
  {
    id: 5,
    title: "Business Card",
    btnCode: <a href="/comingsoon">Coming Soon</a>,
    btnDemo: <a href="/comingsoon">Coming Soon</a>,
    // btnCode: "Coming Soon",
    // btnDemo: "Coming Soon",
    // Live: "",
    // Code: "",
    pic: (
      <img
        src={Image4}
        alt="hello w"
        style={{
          height: "289px",
          width: "325px",
          borderRadius: "10px",
        }}
      />
    ),
    category: "designe",
  },
  {
    id: 6,
    title: "Back Pack",
    btnCode: <a href="/comingsoon">Coming Soon</a>,
    btnDemo: <a href="/comingsoon">Coming Soon</a>,
    // btnCode: "Coming Soon",
    // btnDemo: "Coming Soon",
    // Live: "",
    // Code: "",
    pic: (
      <img
        src={Image5}
        alt="hello w"
        style={{
          height: "289px",
          width: "325px",
          borderRadius: "10px",
        }}
      />
    ),
    category: "brand",
  },

  {
    id: 7,
    title: "Creative Flyer",
    btnCode: <a href="/comingsoon">Coming Soon</a>,
    btnDemo: <a href="/comingsoon">Coming Soon</a>,
    // btnCode: "Coming Soon",
    // btnDemo: "Coming Soon",
    // Live: "",
    // Code: "",
    pic: (
      <img
        src={Image8}
        alt="hello w"
        style={{
          height: "289px",
          width: "325px",
          borderRadius: "10px",
        }}
      />
    ),

    category: "brand",
  },
  {
    id: 8,
    title: "NotePad Designe",
    btnCode: <a href="/comingsoon">Coming Soon</a>,
    btnDemo: <a href="/comingsoon">Coming Soon</a>,
    // btnCode: "Coming Soon",
    // btnDemo: "Coming Soon",
    // Live: "",
    // Code: "",
    pic: (
      <img
        src={Image7}
        alt="hello w"
        style={{
          height: "289px",
          width: "325px",
          borderRadius: "10px",
        }}
      />
    ),

    category: "graphic",
  },
  {
    id: 9,
    title: "Mobile App",
    btnCode: <a href="/comingsoon">Coming Soon</a>,
    btnDemo: <a href="/comingsoon">Coming Soon</a>,
    // btnCode: "Coming Soon",
    // btnDemo: "Coming Soon",
    // Live: "",
    // Code: "",
    pic: (
      <img
        src={Image9}
        alt="hello w"
        style={{
          height: "289px",
          width: "325px",
          borderRadius: "10px",
        }}
      />
    ),

    category: "brand",
  },
  {
    id: 10,
    title: "Cup Designe",
    btnCode: <a href="/comingsoon">Coming Soon</a>,
    btnDemo: <a href="/comingsoon">Coming Soon</a>,
    // btnCode: "Coming Soon",
    // btnDemo: "Coming Soon",
    // Live: "",
    // Code: "",
    pic: (
      <img
        src={Image10}
        alt="hello w"
        style={{
          height: "289px",
          width: "325px",
          borderRadius: "10px",
        }}
      />
    ),

    category: "graphic",
  },
  {
    id: 11,
    title: "Creative Box",
    btnCode: <a href="/comingsoon">Coming Soon</a>,
    btnDemo: <a href="/comingsoon">Coming Soon</a>,
    // btnCode: "Coming Soon",
    // btnDemo: "Coming Soon",
    // Live: "",
    // Code: "",
    pic: (
      <img
        src={Image11}
        alt="hello w"
        style={{
          height: "289px",
          width: "325px",
          borderRadius: "10px",
        }}
      />
    ),

    category: "graphic",
  },
];
export default PortfolioData;
