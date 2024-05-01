import { careerOptions } from "data/careersOptions";
import Image from "next/image";

const ShowSurveyResultsLeg = ({ results }) => {
  const sortedResults = results.slice(0, 3);
  const topThree = sortedResults.map((result) => {
    const careerCluster = careerOptions.find(
      (cluster) => cluster.id === result.boxNumber
    );
    return {
      id: careerCluster.id,
      img: careerCluster.img,
      name: careerCluster.name,
      description: careerCluster.description,
      count: result.count,
    };
  });
  return (
    <>
      {topThree.map((result, index) => (
        <section
          key={`service-${index}`}
          className={`section ${index % 2 === 1 ? "bg-theme-light" : ""}`}
        >
          <div className="container">
            <div className="items-center gap-8 md:grid md:grid-cols-2">
              {/* Carousel */}
              <div
                className={`service-carousel ${
                  index % 2 === 0 ? "md:order-2" : ""
                }`}
              >
                <Image
                  src={result.img}
                  alt={result.count}
                  width={600}
                  height={500}
                />
              </div>
              {/* Content */}
              <div
                className={`service-content mt-5 md:mt-0 ${
                  index % 2 === 0 ? "md:order-1" : ""
                }`}
              >
                <h2 className="font-bold leading-[40px]">{result.name}</h2>
                <p className="mt-4 mb-2">{result.description}</p>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
};

export default ShowSurveyResultsLeg;
