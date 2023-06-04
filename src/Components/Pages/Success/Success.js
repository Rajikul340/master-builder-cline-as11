import React from "react";
import logo1 from "../../../image/download (3).svg";
import logo2 from "../../../image/download (4).svg";
import logo3 from "../../../image/download (5).svg";
import logo4 from "../../../image/download (6).svg";
import CountUp from "react-countup";

const Success = () => {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url("https://i.ibb.co/hKTFbQg/why-choose-us1.jpg")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content  text-neutral-content">
        <div className="lg:flex  gap-32">
          <div>
            <img src={logo1} className="w-28" alt="" />
            <h3 className="text-5xl font-bold font-serif">
            <CountUp
                start={1}
                end={600}
                duration={2.75}
                separator=" "
                onEnd={() => console.log("Ended! 👏")}
                onStart={() => console.log("Started! 💨")}
              >
                {({ countUpRef, start }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
            </h3>
            <h3 className="text-2xl font-bold uppercase font-serif">
              happiness <br /> customers
            </h3>
          </div>
          <div>
            <img src={logo2} className="w-28" alt="" />
            <h3 className="text-5xl font-bold font-serif">
            <CountUp
                start={1}
                end={1000}
                duration={2.75}
                separator=" "
                onEnd={() => console.log("Ended! 👏")}
                onStart={() => console.log("Started! 💨")}
              >
                {({ countUpRef, start }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
            </h3>
            <h3 className="text-2xl font-bold uppercase font-serif">
              Project completed
            </h3>
          </div>
          <div>
            <img src={logo3} className="w-28" alt="" />
            <h3 className="text-5xl font-bold font-serif">
              <CountUp
                start={1}
                end={300}
                duration={2.75}
                separator=" "
                onEnd={() => console.log("Ended! 👏")}
                onStart={() => console.log("Started! 💨")}
              >
                {({ countUpRef, start }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
            </h3>
            <h3 className="text-2xl font-bold uppercase font-serif">
              world branches
            </h3>
          </div>
          <div>
            <img src={logo4} className="w-28" alt="" />
            <h3 className="text-5xl font-bold font-serif">
            <CountUp
                start={1}
                end={100}
                duration={2.75}
                separator=" "
                onEnd={() => console.log("Ended! 👏")}
                onStart={() => console.log("Started! 💨")}
              >
                {({ countUpRef, start }) => (
                  <div>
                    <span ref={countUpRef} />
                  </div>
                )}
              </CountUp>
            </h3>
            <h3 className="text-2xl font-bold uppercase font-serif">
              special winner{" "}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
