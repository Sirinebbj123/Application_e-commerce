import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import "../Styles/home.css"; 

class Contact extends Component {
  constructor(props) {
    super(props);
    this.form = React.createRef();
    this.state = {
      location: '',
    };
  }

  componentDidMount() {
    this.getLocation();
  }

  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  };

  showPosition = (position) => {
    this.setState({
      location: `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`,
    });
  };

  sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_zyqzfc3', 'template_195oveb', this.form.current, 'Ueatxj78Qi_6MyHDz')
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  render() {
    return (
      <section className='oki'>
      <div className="container" >
      <div className="row">
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h1>Contacter nous</h1>
          <form className="mt-4" ref={this.form} onSubmit={this.sendEmail}>
            <div className="mb-3">
              <label htmlFor="from_name" className="form-label">
                nom
              </label>
              <input type="text" className="form-control" id="from_name" name="from_name" />
            </div>
            <div className="mb-3">
              <label htmlFor="user_email" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" id="user_email" name="user-email" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea className="form-control" id="message" name="message" rows="3"></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="location" className="form-label">
                Votre adresse
              </label>
              <input
                type="text"
                className="form-control"
                id="location"
                name="location"
                value={this.state.location}
                disabled
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Envoyer
            </button>
          </form>
        </div>
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24037.84462597204!2d10.751463162788728!3d34.74996210422197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDU5JzM1LjkiTiAxMMKwMTEnNTkuNCJF!5e0!3m2!1sen!2stn!4v1701116538209!5m2!1sen!2stn"
            width="100%"
            height="300"
            style={{ border: "1px solid #ccc" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
    </section>
    
    );
  }
}

export default Contact;
