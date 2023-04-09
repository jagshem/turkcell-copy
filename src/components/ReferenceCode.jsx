import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function ReferenceCode() {
  const [referenceCode, setReferenceCode] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (value === "A74b08gs1905**") {
      setReferenceCode(value);
    } else {
      setReferenceCode("");
      event.target.value = "";
      console.log("Incorrect reference code");
    }
  };

  const handleSaveClick = () => {
    if (referenceCode === "A74b08gs1905**") {
      alert("Operations performed successfully!");
      navigate("/main");
    } else {
      alert("Incorrect reference code");
    }
  };

  return (
    <div>
      <h2>
        Referans Kodunuzu Kopyalayıp İnputa Yapıştırın. <br /> Sonra Save
        Butonuna Basın.
      </h2>
      <input type="text" onChange={handleInputChange} value={referenceCode} />
      <button onClick={handleSaveClick}>Save</button>
    </div>
  );
}

export default ReferenceCode;
