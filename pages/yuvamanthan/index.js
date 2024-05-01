import config from "@config/config.json";
import Base from "@layouts/Baseof";
import DisplayQuestions from "components/yuvamanthan/DisplayQuestions";
import { useZustandStore } from "@hooks/useStore";
import GameBase from "@layouts/Gameof";
import ShimmerButton from "components/magicui/shimmer-button";
import BorderBeam from "components/magicui/border-beam";
const YuvaManthan = () => {
  const { title } = config.site;
  const { showResults } = useZustandStore();
  const { startGame, setstartGame } = useZustandStore();

  const handleStartClick = () => {
    console.log("Start")
    setstartGame(true);
  };
  const handleExitClick = () => {
    // Go back to the previous page
    window.history.back();
  };
  return (
    <GameBase>
     <section className="section pb-[50px] bg-cover bg-no-repeat h-screen bg-[url('../public/images/background.png')]">
    {startGame ? (
      <>
        {!showResults ? (
          <>
            <div className="flex w-full mt-5 p-4 md:p-4 text-white justify-center">
              <div className="lg:col-10">
                
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col w-full justify-center items-center mt-5 p-4 md:p-4">
            <h1 className="font-primary font-bold">Here are your results!</h1>
            <p>
              Based on your answers, here are the top three career clusters
            </p>
          </div>
        )}
        <div className="flex w-full justify-center mt-5 p-4 md:p-4">
          <div className="mx-auto lg:col-10 ">
\           <DisplayQuestions />
          </div>
        </div>
      </>     
    ) : (
      <div className="flex flex-col px-60 gap-4 w-full justify-center items-start md:mt-80">
    <h1 className="font-primary font-bold text-white">Welcome to the <br /> Career  Interest Assessment!</h1>
    <p className="text-white text-2xl">Get started to discover your career passions.</p>
    <div className="flex space-x-4">
      <ShimmerButton className="shadow-2xl px-10"  onClick={handleStartClick}>
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          Start
        </span>
      </ShimmerButton>
      <ShimmerButton className="shadow-2xl px-10" onClick={handleExitClick}>
        <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          Exit
        </span>
      </ShimmerButton>
  </div>
</div>

    )}
</section>
</GameBase>
  );
  
};

export default YuvaManthan;
