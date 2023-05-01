import Calling from "../../../public/calling.svg";
import Directions from "../../../public/directions.svg";
import Image from "next/image";

const Header = () => {
  return (
    <div
      style={{
        background: "white",
        boxShadow: "0 0 5px grey",
        position: "fixed",
        zIndex: 5000000,
        width: "100%",
        top: 0, 
      }}
    >
      <nav
        style={{
          maxWidth: "1064px",
          margin: "0 auto",
          padding: "16px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <p className="header_title">UCMAS Airoli, Sector 19</p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
          }}
        >
          <p className="header_link">
            <Image
              priority
              src={Calling}
              alt="Call us"
              height={20}
              style={{fill: "red", color: "red"}}
              className="header_icon"
            />
            Call Now
          </p>
          <div style={{display: "flex", alignItems: "center", gap: 20}}>
            <Image priority src={Directions} alt="Direction" height={20} />
            <p className="header_link">Get Directions</p>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
