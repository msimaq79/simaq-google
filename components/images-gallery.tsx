"use client"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

export default function ImagesGallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const images = [
    {
      url: "/images/simaq-working.jpg",
      caption: "Working on projects",
    },
    {
      url: "/images/grouphoto.jpeg",
      caption: "Group Photo at Daydream Mumbai : 12 hr game jam organised by Hackclub",
    },
    {
      url: "/images/aiagents.jpeg",
      caption: "Group picture at Google Mumbai during AI Agents Masterclass",
    },
  ]

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1)
    }
  }

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedIndex !== null) {
      setSelectedIndex(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1)
    }
  }

  return (
    <>
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="flex flex-col cursor-pointer group"
              onClick={() => setSelectedIndex(index)}
            >
              <div className="aspect-[4/3] overflow-hidden rounded-lg border border-[#e8e8e8] bg-[#f8f9fa]">
                <img
                  src={image.url || "/placeholder.svg"}
                  alt={image.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-sm text-[#5f6368] mt-2 line-clamp-2">{image.caption}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedIndex(null)}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
            onClick={() => setSelectedIndex(null)}
          >
            <X className="w-8 h-8" />
          </button>

          {/* Previous Button */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/50 hover:bg-black/70 rounded-full p-2"
            onClick={handlePrevious}
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Next Button */}
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors bg-black/50 hover:bg-black/70 rounded-full p-2"
            onClick={handleNext}
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Image and Caption */}
          <div className="max-w-5xl max-h-[90vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[selectedIndex].url}
              alt={images[selectedIndex].caption}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            <p className="text-white text-center mt-4 text-lg">{images[selectedIndex].caption}</p>
            <p className="text-gray-400 text-sm mt-2">{selectedIndex + 1} / {images.length}</p>
          </div>
        </div>
      )}
    </>
  )
}
