/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/**
 * @copyright 2024 Rajatrahangdale
 * @license Apache-2.0
 */

const ratings = new Array(5);
ratings.fill({
  icons: "star",
  style: { fontVariationSettings: '"FILL" 1' },
});
const ReviewCard = ({ content, name, imgSrc, company, classes }) => {
  return (
    <div
      className={`bg-zinc-800 p-5 rounded-xl min-w-[320px] flex flex-col lg:min-w-[420px] scrub-slide`}
    >
      <div className="flex items-center gap-1 pb-3">
        {ratings.map(({ icons, style }, key) => (
          <span
            key={key}
            className="material-symbols-rounded text-yellow-300 text-[18px]"
            style={style}
          >
            {icons}
          </span>
        ))}
      </div>
      <p className="text-zinc-400 mb-8">{content}</p>
      <div className="flex items-center gap-2 mt-auto ">
        <figure className="">
          <img
            src={imgSrc}
            alt={name}
            width={44}
            height={44}
            className="image-cover"
          />
        </figure>
        <div>
          <p>{name}</p>
          <p className="text-xl text-zinc-400 tracking-wider">{company}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
