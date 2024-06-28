import React, { useState, useRef } from "react"
import useLocalStorage from "use-local-storage"

const MailchimpForm = () => {
  const [isChecked, setIsChecked] = useState(false)
  const [cleanPopUp, setCleanPopUp] = useLocalStorage("PopUpOff", true)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const iframeRef = useRef(null)

  const handleCheckboxChange = event => {
    setIsChecked(event.target.checked)
  }

  const handleIframeLoad = () => {
    setIsSubmitting(false)
    setIsSubmitted(true)
    removeCard()
  }

  const handleSubmit = () => {
    setIsSubmitting(true)
    removeCard()
  }

  const removeCard = () => {
    setCleanPopUp(false)
  }

  return (
    <div id="mc_embed_shell">
      <div id="mc_embed_signup">
        {isSubmitted ? (
          <div className="success-message">
            <p>Thank you for subscribing!</p>
          </div>
        ) : (
          <form
            action="https://knickerbockerlaundromat.us10.list-manage.com/subscribe/post?u=20441683fc9a837201832f86c&id=0ec9b38f23&f_id=002d5be5f0"
            method="post"
            className="validate"
            style={{ margin: 0 }}
            target="hidden_iframe"
            onSubmit={handleSubmit}
          >
            <div id="mc_embed_signup_scroll">
              <div
                className="mc-field-group"
                style={{ width: "100%", maxWidth: "500px", margin: "0 auto" }}
              >
                <input
                  type="email"
                  name="EMAIL"
                  className="required email"
                  id="mce-EMAIL"
                  required
                  placeholder="Enter your email below to get your discount code"
                  style={{
                    width: "100%",
                    padding: "14px",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                    fontSize: "15px",
                    margin: 0,
                  }}
                />
              </div>
              <div
                className="mc-field-group"
                style={{
                  width: "100%",
                  maxWidth: "500px",
                  margin: "0 auto",
                  paddingTop: "10px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <input
                  type="checkbox"
                  id="mce-agree"
                  name="AGREE"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
                <label
                  htmlFor="mce-agree"
                  style={{ marginLeft: "10px", fontSize: "15px" }}
                >
                  I agree to receive marketing emails and promotional offers
                </label>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "20px",
                  width: "100%",
                  maxWidth: "500px",
                  margin: "0 auto",
                  paddingTop: "10px",
                }}
              >
                <input
                  type="submit"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  value="Subscribe"
                  disabled={!isChecked || isSubmitting}
                  style={{
                    background:
                      isChecked && !isSubmitting ? "#0047AB" : "#cccccc",
                    color: "#fff",
                    fontWeight: "600",
                    fontSize: "16px",
                    lineHeight: "24px",
                    borderRadius: "6px",
                    textAlign: "center",
                    border: "none",
                    cursor:
                      isChecked && !isSubmitting ? "pointer" : "not-allowed",
                    width: "100%",
                    padding: "14px",
                    display: "block",
                    margin: 0,
                  }}
                />
              </div>
            </div>
            <iframe
              ref={iframeRef}
              name="hidden_iframe"
              style={{ display: "none" }}
              onLoad={handleIframeLoad}
              title="hidden_iframe"
            ></iframe>
          </form>
        )}
      </div>
    </div>
  )
}

export default MailchimpForm
