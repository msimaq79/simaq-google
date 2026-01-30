"use client"

import { Search, User } from "lucide-react"
import { useState } from "react"
import SearchResultCard from "./search-result-card"
import PeopleAlsoAsk from "./people-also-ask"
import ImagesGallery from "./images-gallery"

interface ResultsViewProps {
  query: string
  onBack: () => void
}

export default function ResultsView({ query, onBack }: ResultsViewProps) {
  const [activeTab, setActiveTab] = useState("all")

  const tabs = ["All", "Images"]
  const handleImagesClick = () => {
    setActiveTab("images")
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header */}
      <header className="sticky top-0 bg-white border-b border-[#e8e8e8] z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          {/* Top Row: Logo and Profile */}
          <div className="flex items-center justify-between mb-4">
            <div
              className="text-2xl font-bold tracking-tight cursor-pointer hover:opacity-80 transition-opacity"
              onClick={onBack}
            >
              <span className="text-[#4285f4]">S</span>
              <span className="text-[#ea4335]">i</span>
              <span className="text-[#fbbc05]">m</span>
              <span className="text-[#4285f4]">a</span>
              <span className="text-[#34a853]">q</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center bg-[#f1f3f4] rounded-full px-4 py-2 w-64">
                <Search className="w-4 h-4 text-[#9aa0a6] mr-2" />
                <input type="text" value={query} readOnly className="flex-1 outline-none text-sm bg-transparent" />
              </div>
              <User className="w-8 h-8 text-[#5f6368] cursor-pointer hover:bg-[#f1f3f4] rounded-full p-1" />
            </div>
          </div>

          {/* Tabs */}
          <nav className="flex gap-6">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`text-sm py-3 border-b-2 transition-colors ${activeTab === tab.toLowerCase()
                  ? "border-[#4285f4] text-[#4285f4]"
                  : "border-transparent text-[#5f6368] hover:text-[#202124]"
                  }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      {activeTab === "all" ? (
        <div className="max-w-7xl mx-auto px-6 py-6">
          {/* Results Column */}
          <div className="space-y-4">
            <SearchResultCard
              url="linkedin.com"
              title="Simaq Shanavas"
              description="Trying to build cool stuff"
              link="https://www.linkedin.com/in/simaq-shanavas/"
            />
            <SearchResultCard
              url="1825fund.com"
              title="Fund Manager | 1825 Fund"
              description="Co-founded and managing a non-dilutive grant fund dedicated to empowering student entrepreneurs aged 18-25. Overseeing the deal-flow pipeline, evaluating student-led startups for potential grant allocation. Currently working on a collaboration with Government Incubator."
              link="https://1825fund.com"
            />
            <SearchResultCard
              url="shipbroker.io"
              title="Founder | Shipbroker.io"
              description="Building a specialized digital marketplace and toolset for the maritime industry to solve brokerage inefficiencies. Conducted extensive market research and established a network of industry professionals to validate product-market fit. Developed the MVP and waitlist page. Among top 50 teams flown out to Bangalore to pitch startup idea to Shark Tank India judge."
              link="https://shipbroker.io"
            />
            <SearchResultCard
              url="sydenham.edu"
              title="Sydenham College - BMS Student & Incubation Head"
              description="Bachelor of Management Studies (June 2025 - May 2028). Incubation Head at E-Cell, establishing college's incubation center from ground up. Setting up legal and operational frameworks, developing mentorship pipelines, and connecting industry experts with student ventures from ideation to market launch."
            />
            <SearchResultCard
              url="codecraftt.in"
              title="Founder | CodeCraftt Developers"
              description="Founded and scaled web development agency to ₹1 Lakh+ in revenue by focusing on digital transformation for traditional businesses. Managed full lifecycle from cold outreach and lead generation to delivering custom websites. Successfully helped local businesses generate leads before closing to focus on higher education."
              link="https://share.google/VARfhjgifoKTVR1zp"
            />
          </div>
        </div>
      ) : (
        <ImagesGallery />
      )}
    </div>
  )
}
