import { useState } from "react";
import ReactPlayer from "react-player";
function App() {
  const [play, setPlay] = useState(false);
  const [play2, setPlay2] = useState(false);
  const [play3, setPlay3] = useState(false);
  const [play4, setPlay4] = useState(false);
  const [hidden, setHidden] = useState("");
  const [hidden2, setHidden2] = useState("hidden");
  const [hidden3, setHidden3] = useState("hidden");
  const [hidden4, setHidden4] = useState("hidden"); 

  const handlePlayOnClick = () => {
    setPlay(true);
    // setHidden("hidden");
  };


  const hahdleEnded = () => {
    setPlay2(true);
    setHidden2("");
    setHidden("hidden");
  };
  return (
    <>
      <div className="relative m-4 h-96">
        <div className={`${hidden} absolute top-0 left-0`}>
          <ReactPlayer
            url={process.env.PUBLIC_URL + "./video/start.mp4"}
            // url={url}
            playing={play}
            muted={false}
            volume={0.8}
            onEnded={hahdleEnded}
            // loop={loop}
            // controls
          />
        </div>

        <div className={`${hidden2} absolute top-0 left-0`}>
          <ReactPlayer
            url={process.env.PUBLIC_URL + "./video/choise waiting.mp4"}
            playing={play2}
            muted={false}
            volume={0.8}
            // onEnded={switchUrl}
            loop={true}
            // controls
          />
        </div>
        <div className={`${hidden3} absolute top-0 left-0`}>
          <ReactPlayer
            url={process.env.PUBLIC_URL + "./video/help.mp4"}
            playing={play3}
            muted={false}
            volume={0.8}
            onBuffer={true}
            // onEnded={switchUrl}
            // loop={true}
            // controls
          />
        </div>
        <div className={`${hidden4} absolute top-0 left-0`}>
          <ReactPlayer
            url={process.env.PUBLIC_URL + "./video/money.mp4"}
            playing={play4}
            muted={false}
            volume={0.8}
            onBuffer={true}
            // onEnded={switchUrl}
            // loop={true}
            // controls
          />
        </div>
      </div>
      <div className="">
        <button className="border-2 border-black" onClick={handlePlayOnClick}>
          Play
        </button>
        {play2 && (
          <>
            <button
              className="border-2 border-black"
              onClick={() => {
                // setChoise1(
                //   "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
                // );
                setHidden2("hidden");
                setHidden3("");
                setPlay2(false);
                setPlay3(true);
              }}
            >
              Choise 1 Help
            </button>
            <button className="border-2 border-black"  onClick={() => {
                // setChoise1(
                //   "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
                // );
                setHidden2("hidden");
                setHidden4("");
                setPlay2(false);
                setPlay4(true);
              }}>
              Choise 2 Leave
            </button>
            {/* <button className="border-2 border-black" onClick={() => {}}>
              Choise 3
            </button> */}
          </>
        )}
      </div>
    </>
  );
}

export default App;
