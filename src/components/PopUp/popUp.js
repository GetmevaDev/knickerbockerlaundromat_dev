import React from "react"
import useLocalStorage from "use-local-storage"
import ReactMarkdown from "react-markdown"
import { graphql, useStaticQuery } from "gatsby"
import CloseWarning from "../../images/CloseWarning.svg"
import * as classes from "./popup.module.scss"
import MailchimpForm from "../MailInput/MainInput"

export function PopUp() {
  const data = useStaticQuery(graphql`
    {
      strapiPopUpWarning {
        Text
        Name_Link
        Link
        PhoneNumber
        Switch_PopUp
        MaxWidthBlock
      }
    }
  `)

  const {
    Text,
    Name_Link,
    Link,
    PhoneNumber,
    Switch_PopUp,
    MaxWidthBlock,
  } = data.strapiPopUpWarning

  const [cleanPopUp, setCleanPopUp] = useLocalStorage("PopUpOff", true, {
    syncData: true,
  })

  const removeCard = () => {
    setCleanPopUp(!cleanPopUp)
  }

  return Switch_PopUp ? (
    <div
      style={{
        opacity: cleanPopUp ? 1 : 0,
        pointerEvents: cleanPopUp ? `auto` : `none`,
      }}
      className={classes.overlay}
    >
      <div
        style={{
          maxWidth: MaxWidthBlock ? `${MaxWidthBlock}px` : 439,
          transform: `scale(${cleanPopUp ? 1 : 0})`,
          transition: ".5s",
          display: "flex",
          flexDirection: "column",
        }}
        className={classes.cardWarning}
      >
        <button
          onMouseDown={removeCard}
          onMouseUp={removeCard}
          className={classes.buttonClose}
          type={`button`}
        >
          <img src={CloseWarning} alt="Close" />
        </button>
        <ReactMarkdown>{Text}</ReactMarkdown>
        <MailchimpForm />
        <div className={classes.linkContainer}>
          <a className={classes.linkWarning} href={Link}>
            {Name_Link}
          </a>
          <a className={classes.callWarning} href={`tel:${PhoneNumber}`}>
            Click To Call
          </a>
        </div>
      </div>
    </div>
  ) : null
}
