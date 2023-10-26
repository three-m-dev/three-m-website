import { Link } from "react-router-dom";

const ImageMenu = () => {
  return (
    <div className="flex flex-col md:flex-row">
      <div
        className="relative h-[100vw] w-screen bg-red-500 md:h-[33.33vw] lg:w-1/3"
        style={{
          backgroundImage:
            "url('https://st3.depositphotos.com/12674628/17009/i/450/depositphotos_170095988-stock-photo-modern-warehouse.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-3xl font-bold uppercase tracking-wider text-white">
          Services
        </span>
      </div>
      <div
        className="relative h-[100vw] w-screen bg-blue-500 object-cover md:h-[33.33vw] lg:w-1/3"
        style={{
          backgroundImage:
            "url('https://static4.depositphotos.com/1003697/322/i/450/depositphotos_3225540-stock-photo-factory-indoor-interior.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-3xl font-bold uppercase tracking-wider text-white">
          Careers
        </span>
      </div>
      <Link
        to="/services"
        className="relative h-[100vw] w-screen bg-green-500 md:h-[33.33vw] lg:w-1/3"
        style={{
          backgroundImage:
            "url('https://st2.depositphotos.com/1075946/9910/i/450/depositphotos_99105084-stock-photo-metallurgy-workers-using-digital-tablet.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-3xl font-bold uppercase tracking-wider text-white">
          Contact
        </span>
      </Link>
    </div>
  );
};

export default ImageMenu;
