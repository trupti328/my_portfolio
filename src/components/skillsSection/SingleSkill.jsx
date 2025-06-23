const SingleSkill = ({ text, imgSvg }) => {
  return (
    <div className="flex flex-col items-center focus:outline-none focus:ring-0">
      <div className="focus:outline-none focus:ring-0">
        {imgSvg}
      </div>
      <p className="mt-4 text-center">{text}</p>
    </div>
  );
};

export default SingleSkill;
