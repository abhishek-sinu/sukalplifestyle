import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Header from './Header';
import Footer from './Footer';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  // State for form fields
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationType, setNotificationType] = useState('success');
  const [notificationMsg, setNotificationMsg] = useState('');

  const SERVICE_ID = "service_wdoh0ry";
  const TEMPLATE_ID = "template_0lnxccb";
  const PUBLIC_KEY = "DPUFxxOM3f2oYWU8s";

  const handleSend = (e) => {
    e.preventDefault();
    setSending(true);
    const combinedMessage =
      `Name: ${name || "-"}\nPhone: ${phone || "-"}\nSubject: ${subject || "-"}\nMessage: ${message}`;
    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      {
        message: combinedMessage,
        from_email: "spvyaspujabook.hyd@gmail.com",
        to_email: "sukalplifestyles@gmail.com"
      },
      PUBLIC_KEY
    )
      .then((result) => {
        setNotificationType('success');
        setNotificationMsg('Message sent successfully!');
        setShowNotification(true);
        setName("");
        setPhone("");
        setSubject("");
        setMessage("");
        setTimeout(() => setShowNotification(false), 3000);
        console.log('Email sent successfully:', result);
      })
      .catch((err) => {
        setNotificationType('error');
        setNotificationMsg('Failed to send. Please try again later.');
        setShowNotification(true);
        setTimeout(() => setShowNotification(false), 3000);
        console.error('Email send error:', err);
      })
      .finally(() => setSending(false));
  };

  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col justify-center items-center bg-white py-20 px-4">
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-xl shadow-lg p-10">
          {/* Left: Contact Info */}
          <div>
            <div className="uppercase tracking-widest text-yellow-700 font-semibold text-sm mb-2">Get in Touch</div>
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#101c36] mb-6 leading-tight">
              We'd Love to <span className="italic text-yellow-700">Hear from You</span>
            </h1>
            <p className="mt-6 text-xl text-gray-700 font-medium max-w-lg mb-8">
              Whether you have a question about our products, need styling advice, or want to explore a partnership — our team is here to help.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="bg-yellow-100 p-3 rounded">
                  <FaMapMarkerAlt className="text-yellow-700 w-6 h-6" />
                </span>
                <div>
                  <div className="font-semibold text-gray-900">Visit Us</div>
                  <div className="text-gray-600 text-sm">
                    A/306, Rajclassic CHSL, Opp Shalom hospital,<br />
                    Indralok Phase - 6, Bhayander East,<br />
                    Thane – 401105, Mumbai, Maharashtra
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="bg-yellow-100 p-3 rounded">
                  <FaPhoneAlt className="text-yellow-700 w-6 h-6" />
                </span>
                <div>
                  <div className="font-semibold text-gray-900">Call Us</div>
                  <div className="text-gray-600 text-sm">9307020467</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="bg-yellow-100 p-3 rounded">
                  <FaEnvelope className="text-yellow-700 w-6 h-6" />
                </span>
                <div>
                  <div className="font-semibold text-gray-900">Email Us</div>
                  <div className="text-gray-600 text-sm">sukalplifestyles@gmail.com</div>
                </div>
              </div>
            </div>
          </div>
          {/* Right: Contact Form */}
          <form className="space-y-6" onSubmit={handleSend}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 text-gray-700 focus:outline-none focus:border-yellow-700"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  disabled={sending}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  placeholder="9876543210"
                  className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 text-gray-700 focus:outline-none focus:border-yellow-700"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  disabled={sending}
                  required
                  pattern="[0-9]{10,15}"
                  title="Please enter a valid phone number"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
              <input
                type="text"
                placeholder="How can we help?"
                className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 text-gray-700 focus:outline-none focus:border-yellow-700"
                value={subject}
                onChange={e => setSubject(e.target.value)}
                disabled={sending}
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
              <textarea
                placeholder="Tell us what you're looking for..."
                className="w-full bg-gray-50 border border-gray-200 rounded px-4 py-3 text-gray-700 focus:outline-none focus:border-yellow-700"
                rows={5}
                value={message}
                onChange={e => setMessage(e.target.value)}
                disabled={sending}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="mt-4 w-full md:w-auto px-8 py-3 bg-yellow-600 text-white font-semibold rounded shadow hover:bg-yellow-600 transition flex items-center justify-center gap-2"
              disabled={sending}
            >
              <span>&rarr;</span> {sending ? 'Sending...' : 'SEND MESSAGE'}
            </button>
          </form>
          {/* Notification Popup */}
          {showNotification && (
            <div
              style={{
                position: 'fixed',
                top: 24,
                right: 24,
                zIndex: 9999,
                minWidth: 220,
                padding: '14px 28px',
                borderRadius: 8,
                background: notificationType === 'success' ? '#22c55e' : '#ef4444',
                color: '#fff',
                fontWeight: 600,
                boxShadow: '0 2px 16px rgba(0,0,0,0.12)',
                fontSize: 18,
                display: 'flex',
                alignItems: 'center',
                gap: 10
              }}
              role="alert"
            >
              {notificationType === 'success' ? (
                <svg width="28" height="28" fill="#fff" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM7 10.414l5.207-5.207-1.414-1.414L7 7.586 5.207 5.793 3.793 7.207 7 10.414z"/></svg>
              ) : (
                <svg width="28" height="28" fill="#fff" viewBox="0 0 16 16"><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>
              )}
              <span>{notificationMsg}</span>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
