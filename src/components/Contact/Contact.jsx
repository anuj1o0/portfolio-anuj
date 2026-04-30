import React, { useState } from 'react';
import './Contact.scss';
import { client } from '../../client';
import MotionWrap from '../wrapper/MotionWrap';

const contactInfo = [
  {
    label: 'Email',
    value: 'anujsrivastava176@gmail.com',
    href: 'mailto:anujsrivastava176@gmail.com',
    icon: 'bx-envelope',
    color: 'var(--primary)',
  },
  {
    label: 'Phone',
    value: '+91 8948647937',
    href: 'tel:+918948647937',
    icon: 'bx-phone',
    color: 'var(--secondary)',
  },
  {
    label: 'LinkedIn',
    value: 'anuj-srivastava',
    href: 'https://www.linkedin.com/in/anuj-srivastava-755277259/',
    icon: 'bxl-linkedin',
    color: '#0A66C2',
  },
  {
    label: 'GitHub',
    value: 'github.com/anuj1o0',
    href: 'https://github.com/anuj1o0',
    icon: 'bxl-github',
    color: 'var(--text-2)',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    client
      .create({
        _type: 'contact',
        name: formData.name,
        email: formData.email,
        message: formData.message,
      })
      .then(() => {
        setLoading(false);
        setSubmitted(true);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  return (
    <section className="contact section" id="contact">
      <div className="container">
        <div className="contact__header">
          <span className="section-tag">{'// contact'}</span>
          <h2 className="section-title">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className="section-subtitle">
            Open to internships, full-time roles, and interesting project collaborations.
          </p>
        </div>

        <div className="contact__grid">
          {/* Left: Info */}
          <div className="contact__info">
            <p className="contact__tagline">
              Whether you have a role in mind, a project to discuss, or just want to say hi —
              my inbox is always open.
            </p>

            <div className="contact__cards">
              {contactInfo.map(({ label, value, href, icon, color }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="contact-info-card"
                  style={{ '--info-color': color }}
                >
                  <div className="contact-info-card__icon">
                    <i className={`bx ${icon}`} />
                  </div>
                  <div className="contact-info-card__text">
                    <span className="contact-info-card__label">{label}</span>
                    <span className="contact-info-card__value">{value}</span>
                  </div>
                  <i className="bx bx-right-arrow-alt contact-info-card__arrow" />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact__form-wrapper">
            {submitted ? (
              <div className="contact__success">
                <div className="contact__success-icon">
                  <i className="bx bx-check" />
                </div>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or opportunity..."
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary contact__submit"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <i className="bx bx-loader-alt bx-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="bx bx-send" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MotionWrap(Contact, 'app__footer');
