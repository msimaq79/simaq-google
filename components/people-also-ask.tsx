"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface PeopleAlsoAskProps {
  question: string
  answer: string
}

export default function PeopleAlsoAsk({ question, answer }: PeopleAlsoAskProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="mb-6 border border-[#dadce0] rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 bg-[#f9f9f9] hover:bg-[#f0f0f0] transition-colors text-left"
      >
        <span className="text-sm font-medium text-[#202124]">{question}</span>
        {isOpen ? <ChevronUp className="w-5 h-5 text-[#5f6368]" /> : <ChevronDown className="w-5 h-5 text-[#5f6368]" />}
      </button>
      {isOpen && (
        <div className="px-4 py-3 bg-white border-t border-[#dadce0]">
          <p className="text-sm text-[#545454] leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}
