"use client"

import type React from "react"
import { Search, Mic } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HomeViewProps {
  query: string
  setQuery: (query: string) => void
  onSearch: () => void
}

export default function HomeView({ query, setQuery, onSearch }: HomeViewProps) {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      onSearch()
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      {/* Logo */}
      <div className="mb-8 text-6xl font-bold tracking-tight">
        <span className="text-[#4285f4]">S</span>
        <span className="text-[#ea4335]">i</span>
        <span className="text-[#fbbc05]">m</span>
        <span className="text-[#4285f4]">a</span>
        <span className="text-[#34a853]">q</span>
      </div>

      {/* Search Bar */}
      <div className="w-full max-w-2xl mb-8">
        <div className="flex items-center bg-white border border-[#e8e8e8] rounded-full px-4 py-3 shadow-md hover:shadow-lg transition-shadow">
          <Search className="w-5 h-5 text-[#9aa0a6] mr-3" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Explore Simaq's portfolio..."
            className="flex-1 outline-none text-base bg-transparent placeholder-[#9aa0a6]"
          />
          <button onClick={onSearch} className="ml-2">
            <Search className="w-5 h-5 text-[#4285f4] cursor-pointer hover:text-[#1f5fb5]" />
          </button>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mb-12">
        <Button
          onClick={onSearch}
          className="bg-[#f8f9fa] text-[#3c4043] border border-[#dadce0] hover:bg-white hover:border-[#c6c6c6] hover:shadow-sm transition-all px-6 py-2 rounded-full"
        >
          Google Search
        </Button>
        <Button
          onClick={onSearch}
          className="bg-[#f8f9fa] text-[#3c4043] border border-[#dadce0] hover:bg-white hover:border-[#c6c6c6] hover:shadow-sm transition-all px-6 py-2 rounded-full"
        >
          I'm Feeling Lucky
        </Button>
      </div>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-[#f2f2f2] border-t border-[#dadce0] px-6 py-4">
        <div className="flex gap-6 justify-center text-sm text-[#70757a]">
          <a href="#" className="hover:text-[#202124]">
            India
          </a>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#202124]">
              About
            </a>
            <a href="#" className="hover:text-[#202124]">
              Advertising
            </a>
            <a href="#" className="hover:text-[#202124]">
              Business
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
