import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useLocation } from "react-router-dom";
import CryptoJS from "crypto-js";

function Payment() {
  const data = useLocation();
  let totalAmount = data.state.totalAmount;
  let totalItem = data.state.totalItem;

  let transaction_uuid = uuidv4();
  // console.log(transaction_uuid);

  let Message = `total_amount=${totalAmount},transaction_uuid=${transaction_uuid},product_code=EPAYTEST`

  var hash = CryptoJS.HmacSHA256(Message, "8gBm/:&EnhH.1/q");
  var hashInBase64 = CryptoJS.enc.Base64.stringify(hash);
  //document.write(hashInBase64);

  // console.log(data.state.totalAmount);
  // console.log(data.state.totalItem);

  return (
    <div>
      <form
        action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
        method="POST"
      >
        <input
          type="text"
          id="amount"
          name="amount"
          value={totalAmount}
          required
        />

        <input
          type="text"
          id="tax_amount"
          name="tax_amount"
          value="0"
          required
        />

        <input
          type="text"
          id="total_amount"
          name="total_amount"
          value={totalAmount}
          required
        />

        <input
          type="text"
          id="transaction_uuid"
          name="transaction_uuid"
          value={transaction_uuid}
          required
        />

        <input
          type="text"
          id="product_code"
          name="product_code"
          value="EPAYTEST"
          required
        />

        <input
          type="text"
          id="product_service_charge"
          name="product_service_charge"
          value="0"
          required
        />

        <input
          type="text"
          id="product_delivery_charge"
          name="product_delivery_charge"
          value="0"
          required
        />

        <input
          type="text"
          id="success_url"
          name="success_url"
          value="http://localhost:5173/success"
          required
        />

        <input
          type="text"
          id="failure_url"
          name="failure_url"
          value="http://localhost:5173/failure"
          required
        />

        <input
          type="text"
          id="signed_field_names"
          name="signed_field_names"
          value="total_amount,transaction_uuid,product_code"
          required
        />

        <input
          type="text"
          id="signature"
          name="signature"
          value={hashInBase64}
          required
        />

        <input value="Submit" type="submit" />
      </form>
    </div>
  );
}

export default Payment;
