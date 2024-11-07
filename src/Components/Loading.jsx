import loader from "/loader.webp";
const Loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center" >
      <img className="w-full  bg-cover"  src={loader} alt="" />
    </div>
  );
};

export default Loading;
