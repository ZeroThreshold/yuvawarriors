import config from "@config/config.json";
import Base from "@layouts/Baseof";
import DisplayQuestions from "components/legAssessment/DisplayQuestions";
import { useZustandStore } from "@hooks/useStore";

const YuvaManthanLeg = () => {
  const { title } = config.site;
  const { showResults } = useZustandStore();

  return (
    <Base title={title}>
      <section className="section pb-[50px]">
        <div className="container">
          {!showResults ? (
            <>
              <div className="flex w-full justify-center mt-5 p-4 md:p-4">
                <div className="mx-auto lg:col-10">
                  <h1 className="font-primary font-bold">
                    Discover Your Career Passions: Career Interest Survey!
                  </h1>
                </div>
              </div>
              <div className="flex w-full justify-center mt-5 p-4 md:p-4">
                <div className="mx-auto lg:col-10">
                  <p>
                    Directions: Tick the items in each box that best describe
                    you. You may make as many or as few ticks in each box as you
                    choose.
                  </p>
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
            <div className="mx-auto lg:col-10">
              <DisplayQuestions />
            </div>
          </div>
        </div>
      </section>
    </Base>
  );
};

export default YuvaManthanLeg;
