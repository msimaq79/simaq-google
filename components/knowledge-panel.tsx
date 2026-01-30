"use client"

import { ArrowLeft } from "lucide-react"

interface KnowledgePanelProps {
  onBack: () => void
}

export default function KnowledgePanel({ onBack }: KnowledgePanelProps) {
  return (
    <div className="bg-white border border-[#dadce0] rounded-lg shadow-sm overflow-hidden">
      {/* Header Button */}
      <button
        onClick={onBack}
        className="w-full flex items-center gap-2 px-4 py-3 text-[#4285f4] hover:bg-[#f9f9f9] border-b border-[#dadce0] text-sm font-medium"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </button>

      {/* Panel Content */}
      <div className="p-4">
        <h2 className="text-xl font-bold text-[#202124] mb-1">Simaq</h2>
        <p className="text-xs text-[#5f6368] mb-4">Business Intern Candidate</p>

        <p className="text-sm text-[#545454] leading-relaxed mb-6">
          Simaq is a BMS student at Sydenham College and a serial builder known for ventures in maritime tech and
          student VC.
        </p>

        {/* Stats Grid */}
        <div className="space-y-4 border-t border-[#dadce0] pt-4">
          <div>
            <p className="text-xs text-[#5f6368] font-medium">Born</p>
            <p className="text-sm text-[#202124]">Mumbai, India</p>
          </div>
          <div>
            <p className="text-xs text-[#5f6368] font-medium">Education</p>
            <p className="text-sm text-[#202124]">Sydenham College</p>
          </div>
        </div>
      </div>
    </div>
  )
}
