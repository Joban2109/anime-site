import Link from "next/link";
import React from "react";

function AnimeDetails({ data }) {
  const [isReadMore, setIsReadMore] = React.useState(false);
  const {
    synopsis,
    animeTitle,
    otherNames,
    animeImg,
    genres,
    status,
    releasedDate,
    type,
    totalEpisodes,
    episodesList,
  } = data;
  return (
    <div className=" mt-5">
      <div className=" lg:flex items-start  lg:space-x-7">
        <img className=" sm:max-w-[230px] aspect-[5/7] object-cover rounded-lg" src={animeImg} alt="" />
        <div className=" mt-5 lg:mt-0 max-w-4xl">
          <h2 className=" line-clamp-1 font-semibold">{animeTitle}</h2>
          <h4 className=" line-clamp-1  text-secondary-light">{otherNames}</h4>
          <p
            className={`mt-5 ${!isReadMore && " line-clamp-3"} text-secondary`}
          >
            {synopsis}
          </p>
          <span
            onClick={() => setIsReadMore(!isReadMore)}
            className="hover:underline text-indigo-200  cursor-pointer"
          >
            {!isReadMore ? "Read More" : "Read Less"}
          </span>

          <div className=" mt-5">
            <h4 className=" font-semibold">Information</h4>
          </div>
          <div className="mt-5 flex gap-2 flex-wrap">
            <TextButtons text={"Status: " + status} />
            <TextButtons text={"Season: " + type} />
            <TextButtons text={"Released: " + releasedDate} />
            <TextButtons text={totalEpisodes + " Episodes"} />
          </div>
          <div className=" mt-5">
            <h4 className=" font-semibold">Genres</h4>
          </div>
          <div className=" mt-3 flex gap-2 flex-wrap">
            {genres?.map((genre, i) => (
              <TextButtons key={i} text={genre} />
            ))}
          </div>
        </div>
      </div>

      <div>
        <h2 className=" font-semibold mt-10">Episodes</h2>
        <div className=" mt-5 flex  flex-wrap  gap-3">
          {episodesList
            ?.slice(0)
            .reverse()
            .map((episode, i) => (
              <TextButtons
                key={i}
                link={`/watch/${episode.episodeId}`}
                text={episode.episodeNum}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export const TextButtons = ({ text, link, isCurrent, onClick }) => {
  if (link) {
    return (
      <Link href={link}>
        <div onClick={onClick} className={`${isCurrent ? "bg-blue-500 text-white" : "bg-primary-light border-gray-300"} rounded-md text-center min-w-[75px] hover:bg-primary-hover transition-all  px-2 py-2`}>
          <p className=" text-secondary">{text}</p>
        </div>
      </Link>
    );
  }

  return (
    <div onClick={onClick} className={`${isCurrent ? "bg-blue-500 text-white" : "bg-primary-light border-gray-300"} rounded-md text-center min-w-[75px] hover:bg-primary-hover transition-all  px-2 py-2`}>
          <p className=" text-secondary">{text}</p>
        </div>
  );
};

export default AnimeDetails;
