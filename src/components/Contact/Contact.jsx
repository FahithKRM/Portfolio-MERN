import "./Contact.css";
import CircumIcon from "@klarr-agency/circum-icons-react"; // React

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "88cea98f-62d5-49c8-b738-d8e80bc83ccd");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  return (
    <div id="contact" className="contact">
      <h1 className="contact-title">Get in touch</h1>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Lets Talk</h1>
          <p>I am currently available to take on new projects, ...</p>
          <div className="contact-details">
            <div className="contact-detail">
              <CircumIcon name='mail' />
              <p>krmfahith@gmail.com</p>
            </div>
            <div className="contact-detail">
            <CircumIcon name='phone' />
            <p>(+94) 759 594 185</p>
            </div>
            <div className="contact-detail">
            <CircumIcon name='location_on' />
            <p>Batticaloa, Sri Lanka</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} action="" className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder="Enter your name" name="name" id="" required/>
          <label htmlFor="">Your Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            id=""
            required
          />
          <label htmlFor="">Write your message here</label>
          <textarea
            name="message"
            id=""
            rows={8}
            placeholder="Enter your message"
            required
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
