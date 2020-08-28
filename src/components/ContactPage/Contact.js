import React from "react";
import Title from "../Title";
export default function Contact() {
  return (
    <section className="py-5">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <Title title="contact us" />
          <form className="mt-5">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="firstname"
                placeholder="Full Name"
              ></input>
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email : ex@ex.ex"
              ></input>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="subject"
                placeholder="Subject"
              ></input>
            </div>{" "}
            <div className="form-group">
              <textarea
                rows="5"
                className="form-control"
                name="message"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="form-group mt-3">
              <input type="submit" className="form-control bg-primary text-white" value="Send"></input>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
