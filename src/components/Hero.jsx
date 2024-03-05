import { logo } from "../assets";
const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />
        <button
          type="button"
          className="black_btn"
          onClick={() => window.open("https://google.com")}
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden"></br>{" "}
        <span className="orange_gradient">OpenAI GPT</span>
      </h1>
      <h2 className="desc">
        {" "}
        Simplify your reading experience with Chatgpt. ChatGPT is a free-to-use
        AI system. Use it for engaging conversations, gain insights, automate
        tasks, and witness the future of AI, all in one place{" "}
      </h2>
    </header>
  );
};

export default Hero;
