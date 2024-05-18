import { NavLink } from "react-router-dom";

const Marketlist = () => {
  return (
    <div>
      <div className="bg-[rgb(226,214,214)] grid grid-cols-[repeat(auto-fill,minmax(250px,280px))] auto-rows-auto justify-center gap-[30px] pt-[8%] pb-[0%] px-[16%]">
        <NavLink to="Admarc">
          <img
            src="https://www.future-agricultures.org/wp-content/uploads/2020/10/Melissa-Cooperman-IFPRI-Malawi-Trader-Feature.jpg"
            alt="Market-images"
            className="h-[300px] w-[900px] transition-[0.3s] rounded-[10px] hover:scale-110"
          />
          <h2 className="text-[1.5em] text-[green] font-[bold] text-center pt-[10%]">
            <u>ADMARC</u>
          </h2>
        </NavLink>
        <NavLink to="EtgProducts">
          <img
            src="https://scontent.fblz1-1.fna.fbcdn.net/v/t39.30808-6/439867295_1010487444127278_2631811285208005899_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFUavzoJucJ4CkIQ-4HPfBEWGrWpVgRYFhYatalWBFgWMwWmiThSCOCDNauoR5QdTZHXBhLcI4PdYEMksIUGRAw&_nc_ohc=Q2wuFR0NXmMQ7kNvgH9qRZO&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fblz1-1.fna&oh=00_AYAtiucSY8AuyGmdkRHuw_CcEmFzau_urCSmSXZ37_HdZA&oe=664BCEBF"
            alt="Market-images"
            className="h-[300px] w-[900px] transition-[0.3s] rounded-[10px] hover:scale-110"
          />
          <h2 className="text-[1.5em] text-[green] font-[bold] text-center pt-[10%]">
            <u>ETG</u>
          </h2>
        </NavLink>
        <NavLink to="Fertmwproducts">
          <img
            src="https://th.bing.com/th/id/R.a0ed58bcc088df775cd1e6cf97c16a84?rik=rIa3aqxd4WUntQ&pid=ImgRaw&r=0"
            alt="Market-images"
            className="h-[300px] w-[900px] transition-[0.3s] rounded-[10px] hover:scale-110"
          />
          <h2 className="text-[1.5em] text-[green] font-[bold] text-center pt-[10%]">
            <u>FERTMW</u>
          </h2>
        </NavLink>
      </div>

      <div className="bg-[rgb(226,214,214)] justify-center pl-[42%] pt-[5%] p-[2em]">
        <div className="bg-[orange] border w-[200px] h-[50px] items-center rounded-[50%] border-solid border-[green]">
          <NavLink to="deliveryform">
            <div className="text-[green] font-[bold]">
              <h1>SELL YOUR PRODUCTS</h1>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default Marketlist;
