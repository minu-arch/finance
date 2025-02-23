
import type React from "react"
import { useState } from "react"
import { Card } from "@ui/card"
import ForgotHeader from "./components/forgot-header"
import ForgotContent from "./components/forgot-content"
import ForgotFooter from "./components/forgot-footer"
import { useNavigate } from "react-router"
import BackButton from "./components/back-button"

export default function ForgotPassword() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send a request to your backend
    // For this example, we'll just set isSubmitted to true
    setIsSubmitted(true)
  }

  const handleBack = () => {
    navigate("/auth")
  }

  return (
    <div className="min-h-screen flex items-center justify-center  p-4">
      <Card className="w-full max-w-md relative">
        <BackButton handleBack={handleBack} />
        <ForgotHeader />
        <ForgotContent isSubmitted={isSubmitted} email={email} setEmail={setEmail} handleSubmit={handleSubmit} />
        <ForgotFooter isSubmitted={isSubmitted} handleSubmit={handleSubmit} />
      </Card>
    </div>
  )
}

