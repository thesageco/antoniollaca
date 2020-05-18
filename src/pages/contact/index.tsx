import React, { useEffect, useState, FormEvent } from 'react';
import './index.scss';
import handleFormSubmit from './form-submission-handler.js'

interface ContactProp {
  lang: String;
}

function formPlaceholderLang(lang: String){
  switch(lang){
    case 'EN': 
       return ["Email", "Subject", "Message"];
    case 'FR': 
      return ["Email", "Mensaje", "Mensaje"];
    case 'SP': 
      return ["Email", "Sujeto", "Mensaje"];
    default: 
      return ["", "", ""];
  }
}

export default function Contact(props: ContactProp) {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [honey, setHoney] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [formPlaceholder, setFormPlaceholder] = useState(["","",""]);
  
  useEffect(() => {
    setFormPlaceholder(formPlaceholderLang(props.lang));
  }, [props.lang]);
  
  const toggleSubmit = () => {
    setSubmitted(true);
  }
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setClicked(true);
    handleFormSubmit(e, toggleSubmit);
  }

  return (
  <div className="contact container">
    <div className="sub-container container">
      <h1>Contact</h1>
      <div className="form">
        <form id="gform" method="POST" action={"https://script.google.com/macros/s/AKfycbxWqclxQL4PVhHwNIPHS6bZYzuP6yXwlNXdGNj8VombQHdNHwg/exec"} onSubmit={handleSubmit}>
          <input
            name="email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder={formPlaceholder[0]}
            required
            disabled={submitted}
          />
          <input
            name="subject"
            className="subject"
            type="text"
            value={subject}
            onChange={e => setSubject(e.target.value)}
            placeholder={formPlaceholder[1]}
            required
            maxLength={100}
            autoComplete="nope"
            disabled={submitted}
          />
          <textarea
            name="message"
            className="message"
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder={formPlaceholder[2]}
            required
            autoComplete="nope"
            disabled={submitted}
          />
          <input
            className="ohgg"
            type="text"
            value={honey}
            onChange={e => setHoney(e.target.value)}
            placeholder="honey"
            disabled={submitted}
          />
          <div className="send">
            <button type="submit" disabled={submitted}>{clicked ? (submitted?"Submitted!":<div className="loader"></div>):"Send"}</button>
          </div>
        </form>
      </div>
    </div>
  </div>)
}