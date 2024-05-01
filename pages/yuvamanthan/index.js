import config from "@config/config.json";
import Base from "@layouts/Baseof";
import DisplayQuestions from "components/yuvamanthan/DisplayQuestions";
import { useZustandStore } from "@hooks/useStore";
import GameBase from "@layouts/Gameof";
import ShimmerButton from "components/magicui/shimmer-button";
import BorderBeam from "components/magicui/border-beam";
import Link from "next/link";

const StartPage = () => {
  const { setstartGame } = useZustandStore();

  const handleStartClick = () => {
    setstartGame(true);
  };

  return (
    <div className="flex flex-col px-4 h-full md:h-40 md:px-60 gap-4 w-full justify-center items-start md:mt-80">
      <h1 className="font-primary font-bold text-white">
        Welcome to the <br /> Career Interest Assessment!
      </h1>
      <p className="text-white text-2xl">
        Get started to discover your career passions.
      </p>
      <div className="flex space-x-4">
        <ShimmerButton className="shadow-2xl px-10" onClick={handleStartClick}>
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
            Start
          </span>
        </ShimmerButton>
        <Link href="/">
          <ShimmerButton className="shadow-2xl px-10">
            <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              Exit
            </span>
          </ShimmerButton>
        </Link>
      </div>
    </div>
  );
};

const YuvaManthan = () => {
  const { showResults, startGame } = useZustandStore();
  return (
    <GameBase>
      <section
        className={`section md:bg-cover md:bg-no-repeat ${
          startGame ? "md:h-screen" : "h-screen"
        } bg-[url('../public/images/background.png')]`}
      >
        {!startGame && <StartPage />}
        {startGame && !showResults && (
          <div className="px-3 md:px-10">
            <DisplayQuestions />
          </div>
        )}
      </section>
    </GameBase>
  );
};

export default YuvaManthan;
