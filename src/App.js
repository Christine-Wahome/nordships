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
    <div className="h-screen w-full flex items-center">
      <div className="w-[40%] p-24">
        <img src={PodCast} alt="announcement" />
      </div>
      <div className="w-[60%] bg-gradient-to-br from-lightBlue to-darkBlue h-screen flex flex-col items-center justify-center">
        {/* <div>
          <img src={Logo} />
        </div> */}
        <div className="bg-[#ffffff] p-6 max-w-xl mx-auto rounded-xl shadow-lg ">
          <img src={Logo} alt="logo" />

          <p className="mt-10">
            Exercitation laboris enim labore nulla eiusmod do. Non in nostrud
            non laboris anim anim elit duis ipsum sit. Velit amet aute esse
            pariatur ipsum ipsum deserunt mollit irure quis fugiat. Anim aliqua
            laborum sint aute irure consequat irure deserunt.
          </p>
          <h2 className="text-4xl font-bold text-darkBlue text-center p-4">
            COMING SOON
          </h2>
        </div>
        <div>
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
