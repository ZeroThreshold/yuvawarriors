import { careerOptions } from "data/careersOptions";
import Image from "next/image";
import Link from "next/link";

const ShowSurveyResults = ({ results }) => {
  console.log(results);
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
    <div className="h-full flex flex-col">
      <div className="flex justify-center text-white mb-10 md:mb-0 text-5xl font-extrabold items-centers px-10">
        These are your top 3 career interests!
      </div>
      <div className="flex flex-col md:flex-row items-center justify-evenly gap-10 md:gap-0">
        {topThree.map((result, index) => (
          <div key={index} className="bg-white p-6 rounded shadow-lg">
            <div class="max-w-sm rounded overflow-hidden ">
              <Image src={result.img} alt={result.count} />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{result.name}</div>
                <p class="text-gray-700 text-base">{result.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center text-white  mt-10 md:mt-0">
        <Link href="/" className="bg-primary px-6 py-2 rounded-full">
          Exit
        </Link>
      </div>
    </div>
  );
};

export default ShowSurveyResults;
