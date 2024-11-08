// import loader from "/loader.webp";
// const Loading = () => {
//   return (
//     <div className="w-full h-screen flex justify-center items-center" >
//     </div>
//   );
// };

// export default Loading;


const Loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      <div className="cube">
        <div className="face front"></div>
        <div className="face back"></div>
        <div className="face left"></div>
        <div className="face right"></div>
        <div className="face top"></div>
        <div className="face bottom"></div>
      </div>
    </div>
  );
};

export default Loading;

