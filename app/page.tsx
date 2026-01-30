"use client"

import { useState } from "react"
import HomeView from "@/components/home-view"
import ResultsView from "@/components/results-view"

export default function Page() {
  const [showResults, setShowResults] = useState(false)
  const [query, setQuery] = useState("who is simaq?")

  const handleSearch = () => {
    setShowResults(true)
  }

  const handleBackToHome = () => {
    setShowResults(false)
  }

  return (
    <div className="min-h-screen bg-white text-[#202124]">
      {!showResults ? (
        <HomeView query={query} setQuery={setQuery} onSearch={handleSearch} />
      ) : (
        <ResultsView query={query} onBack={handleBackToHome} />
      )}
    </div>
  )
}
