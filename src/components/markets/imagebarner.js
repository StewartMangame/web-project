import barner from "../markets/barner.jpg";
const ImageBanner = () => {
  return (
    <div>
      <div className="h-[70vh] relative bg-[green]">
        <div style={{ height: "100%" }}>
          <img
            src={barner}
            className="w-full h-[inherit] object-cover"
            alt="banner_image"
            preload
          />
        </div>
        <div className="bg-[rgb(226,214,214)] justify-center p-[0.7em]">
          <h2 className="text-[3em] text-[green] text-center font-[bold] items-center border-b-2 border-b-[green] border-solid">
            AVAILABLE MARKETS
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ImageBanner;
