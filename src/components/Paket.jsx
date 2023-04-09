import React, { useState } from "react";
import "./Main.css";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [selectedAmount, setSelectedAmount] = useState("");
  const [warning, setWarning] = useState("");

  const amounts = [
    { label: "40 TL", value: 40 },
    { label: "80 TL", value: 80 },
    { label: "100 TL", value: 100 },
    { label: "200 TL", value: 200 },
    { label: "400 TL", value: 400 },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!selectedAmount || !phoneNumber) {
      setWarning("Lütfen tüm alanları doldurun");
      return;
    }
    console.log("Phone Number:", phoneNumber);
    console.log("Selected Amount:", selectedAmount);
    navigate("/payment"); // /payment sayfasına yönlendirme
  };

  return (
    <div className="container">
      <div className="links-container">
        <div className="links-box">
          <a href="/main">
            TL Yükle<i class="fa-solid fa-money-check"></i>
          </a>
        </div>
        <div className="links-box">
          <a href="/faturasız">Faturasız Paket Yükle</a>
        </div>
        <div className="links-box active">
          <a href="/paket">
            Turkcell Ek Paket Al<i class="fa-solid fa-box-open"></i>
          </a>
        </div>
      </div>
      <div className="form-container">
        <h2>Turkcell'e hoş geldiniz!</h2>
        <p>Ek paket satın alma alanı. Lütfen aşağıdaki bilgileri girin</p>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="phoneNumber" className="form__label">
              GSM Numarası
            </label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(event) => setPhoneNumber(event.target.value)}
              placeholder="5XX-XXX-XXXX"
              required
              className="form__input"
            />
          </div>
          <div className="form-group">
            <label htmlFor="selectedAmount" className="form__label">
              Yüklenecek Miktarı Seçin
            </label>
            <select
              id="selectedAmount"
              value={selectedAmount}
              onChange={(event) => setSelectedAmount(event.target.value)}
              className="form__input"
            >
              <option value="">Lütfen seçin</option>
              {amounts.map((amount) => (
                <option key={amount.value} value={amount.value}>
                  {amount.label}
                </option>
              ))}
            </select>
          </div>
          {warning && <div className="warning">{warning}</div>}
          <button type="submit" className="form__button">
            Ödemeye Geç
          </button>
        </form>
      </div>
    </div>
  );
};

export default Main;
