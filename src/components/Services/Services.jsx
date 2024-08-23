import "./Services.css";
import services_data from "../../assets/services_data";

const Services = () => {
  return (
    <div id="services" className="services">
      <h1 className="services-title">My Services</h1>
      <div className="services-container">
        {services_data.map((service, index) => {
          return (
            <div className="services-format" key={index}>
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
              {/* <div className="services-readmore">
                <p>Read More</p>
              </div> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
