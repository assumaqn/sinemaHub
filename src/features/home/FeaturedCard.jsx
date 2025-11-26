function FeaturedCard({ icon, heading, description }) {
  return (
    <div className=" bg-stone-800/100  rounded-md ">
      <div className="py-8 px-5 space-y-3">
        <div className="flex items-center justify-center mb-3">{icon}</div>
        <h3 className="text-sm tracking-wide text-stone-200">{heading}</h3>
        <p className="text-sm text-stone-400 font-normal">{description}</p>
      </div>
    </div>
  );
}

export default FeaturedCard;
