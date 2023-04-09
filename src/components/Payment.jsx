import React, { useState } from "react";
import "./Payment.css";

const Payment = () => {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationMonth, setExpirationMonth] = useState("");
  const [expirationYear, setExpirationYear] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [agreement, setAgreement] = useState(false);

  const handleCardNameChange = (event) => {
    setCardName(event.target.value);
  };

  const handleCardNumberChange = (event) => {
    setCardNumber(event.target.value);
  };

  const handleExpirationMonthChange = (event) => {
    setExpirationMonth(event.target.value);
  };

  const handleExpirationYearChange = (event) => {
    setExpirationYear(event.target.value);
  };

  const handleSecurityCodeChange = (event) => {
    setSecurityCode(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleAgreementChange = (event) => {
    setAgreement(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Payment form submitted");
    console.log(`Card Name: ${cardName}`);
    console.log(`Card Number: ${cardNumber}`);
    console.log(`Expiration Month: ${expirationMonth}`);
    console.log(`Expiration Year: ${expirationYear}`);
    console.log(`Security Code: ${securityCode}`);
    console.log(`Phone Number: ${phoneNumber}`);
    console.log(`Full Name: ${fullName}`);
    console.log(`Agreement: ${agreement}`);
  };

  return (
    <div className="payment-form">
      <form onSubmit={handleSubmit} className="payment-form">
        <h2>ÖDEME BİLGİLERİ</h2>
        <label>
          Ad - Soyad:
          <input
            type="text"
            value={cardName}
            onChange={handleCardNameChange}
            placeholder="Kart Sahibinin Adı"
          />
        </label>
        <p>
          LÜTFEN AD VE SOYADINIZI KARTINIZIN ÜZERİNDE YAZDIĞI ŞEKİLDE GİRİNİZ
        </p>
        <label>
          Kart Numarası:
          <input
            type="text"
            value={cardNumber}
            onChange={handleCardNumberChange}
            maxLength={16}
          />
        </label>
        <br />
        <label>
          Son Kullanma Tarihi:
          <select
            value={expirationMonth}
            onChange={handleExpirationMonthChange}
          >
            <option value="">Ay</option>
            <option value="01">01 - Ocak</option>
            <option value="02">02 - Şubat</option>
            {/* Devam eden aylar */}
            <option value="05">05 - Mayıs</option>
          </select>
          <select value={expirationYear} onChange={handleExpirationYearChange}>
            <option value="">Yıl</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            {/* Devam eden yıllar */}
            <option value="2025">2025</option>
          </select>
        </label>
        <br />
        <label>
          Güvenlik Kodu:
          <input
            type="text"
            value={securityCode}
            onChange={handleSecurityCodeChange}
            maxLength={3}
          />
        </label>
        <br />
        <h2>Sözleşme Bilgileri</h2>
        <label>
          GSM Numarası:
          <input
            type="tel"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder="5XX-XXX-XXXX"
            required
          />
        </label>
        <br />
        <label>
          Ad - Soyad:
          <input
            type="text"
            value={fullName}
            onChange={handleFullNameChange}
            placeholder="Adınız Soyadınız"
            required
          />
        </label>
        <br />
        <div>
          <input
            type="checkbox"
            id="agreement"
            checked={agreement}
            onChange={handleAgreementChange}
            required
          />
          <label htmlFor="agreement">
            Sözleşmeyi okudum ve kabul ediyorum.
          </label>
        </div>
        <br />
        <button type="submit">Ödeme Yap</button>
      </form>
    </div>
  );
};

export default Payment;
