import React from "react";
import { NavLink } from "react-router-dom";
import Footer from "../components/footer";

const EtgProducts = () => {
  return (
    <div>
      <div className="bg-[lightgray]">
        <h1 className="text-[2em] text-[green] font-[bold]">
          AFFORDABLE ETG PRODUCTS{" "}
        </h1>
      </div>
      <div className="bg-[lightgray] flex justify-between gap-5 px-[3em] py-[2em]">
        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,280px))] auto-rows-auto justify-center gap-2.5 pl-[3%] pt-[2%]">
          <NavLink to="etgdetails">
            <div className="bg-[white] relative border rounded-[10px] border-solid border-[lightgray]">
              <div className="text-center bg-[green] relative z-[2] p-5 rounded-[10px]">
                <h4 className="text-[white] font-[bold] text-center">
                  HYBRID MAIZE SEEDS
                </h4>
              </div>

              <div className="p-[1em]">
                <img
                  src="https://storage.googleapis.com/ezyagric-media/image/dk.png"
                  alt="Hybrid maize seeds"
                  className="w-full h-[250px] object-cover"
                />
              </div>
            </div>
          </NavLink>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,280px))] auto-rows-auto justify-center gap-2.5 pl-[3%] pt-[2%]">
          <NavLink to="etgdetails">
            <div className="bg-[white] relative border rounded-[10px] border-solid border-[lightgray]">
              <div className="text-center bg-[green] relative z-[2] p-5 rounded-[10px]">
                <h4 className="product-name">FERTILIZERS</h4>
              </div>
              <div className="p-[1em]">
                <img
                  src="https://th.bing.com/th/id/OIP.ZONqf1OryhNO0DCl3nv91wHaE3?w=260&h=180&c=7&r=0&o=5&pid=1.7"
                  alt="Fertilizeerimage"
                  className="w-full h-[250px] object-cover"
                />
              </div>
            </div>
          </NavLink>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,280px))] auto-rows-auto justify-center gap-2.5 pl-[3%] pt-[2%]">
          <NavLink to="etgdetails">
            <div className="bg-[white] relative border rounded-[10px] border-solid border-[lightgray]">
              <div className="text-center bg-[green] relative z-[2] p-5 rounded-[10px]">
                <h4 className="text-[white] font-[bold] text-center">
                  PESTICIDES
                </h4>
              </div>

              <div className="p-[1em]">
                <img
                  src="https://images.pexels.com/photos/20525952/pexels-photo-20525952/free-photo-of-armyworm-in-pepper.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Pesticides"
                  className="w-full h-[250px] object-cover"
                />
              </div>
            </div>
          </NavLink>
        </div>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,280px))] auto-rows-auto justify-center gap-2.5 pl-[3%] pt-[2%]">
          <NavLink to="etgdetails">
            <div className="bg-[white] relative border rounded-[10px] border-solid border-[lightgray]">
              <div className="text-center bg-[green] relative z-[2] p-5 rounded-[10px]">
                <h4 className="text-[white] font-[bold] text-center">
                  CROP PROCESSING MACHINES
                </h4>
              </div>

              <div className="p-[1em]">
                <img
                  src="https://4.imimg.com/data4/NM/JR/MY-4061419/corn-grinding-mill-machine-1000x1000.jpg"
                  alt="Crop processing"
                  className="w-full h-[250px] object-cover"
                />
              </div>
            </div>
          </NavLink>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EtgProducts;
