import PodCast from "./assets/podcast.svg";
import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineLinkedin,
} from "react-icons/ai";
import Logo from "./assets/logo.png";

const App = () => {
  const media = [
    {
      icon: <AiOutlineInstagram size={30} />,
      link: "https://instagram.com/njordships?igshid=YmMyMTA2M2Y=",
    },
    {
      icon: <AiFillFacebook size={30} />,
      link: "https://m.facebook.com/106249942212822/",
    },
    {
      icon: <AiOutlineTwitter size={30} />,
      link: "https://twitter.com/njordships?t=qqpfJd2pSU78dncTeu-NEg&s=09",
    },
    {
      icon: <AiOutlineLinkedin size={30} />,
      link: "https://www.linkedin.com/company/njordships/",
    },
  ];
  return (
    <div className="h-screen w-full flex items-center flex-col lg:flex-row">
      <div className="hidden lg:inline-flex w-[40%] p-24">
        <img src={PodCast} alt="announcement" />
      </div>
      <div className="bg-[#ffffff] p-4 lg:hidden">
        <img src={Logo} />
      </div>
      <div className="lg:w-[60%] bg-gradient-to-br from-lightBlue to-darkBlue h-screen flex flex-col items-center lg:justify-center">
        <div className="lg:bg-[#ffffff] p-6 lg:max-w-xl mx-auto lg:rounded-xl lg:shadow-lg ">
          <img src={Logo} alt="logo" className="hidden lg:inline-flex" />

          <p className="text-[#ffffff] lg:text-[#000000] mt-10">
            Exercitation laboris enim labore nulla eiusmod do. Non in nostrud
            non laboris anim anim elit duis ipsum sit. Velit amet aute esse
            pariatur ipsum ipsum deserunt mollit irure quis fugiat. Anim aliqua
            laborum sint aute irure consequat irure deserunt.
          </p>
          <h2 className="text-[#ffffff] text-4xl font-bold lg:text-darkBlue text-center mt-4 lg:mt-0 p-4">
            COMING SOON
          </h2>
        </div>
        <div className="text-center">
          {media.map(({ icon, link }) => (
            <a
              href={link}
              className="bg-[#ffffff] rounded-full p-4 inline-block m-4"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
