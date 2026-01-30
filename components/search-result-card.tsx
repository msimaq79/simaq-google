"use client"

interface SearchResultCardProps {
  url: string
  title: string
  description: string
  link?: string
}

export default function SearchResultCard({ url, title, description, link }: SearchResultCardProps) {
  const handleClick = () => {
    if (link) {
      window.open(link, "_blank")
    }
  }

  return (
    <div className="mb-6">
      <p className="text-xs text-[#5f6368] mb-1">{url}</p>
      <h3
        className="text-lg text-[#4285f4] hover:underline cursor-pointer mb-2"
        onClick={handleClick}
        role={link ? "button" : undefined}
        tabIndex={link ? 0 : undefined}
      >
        {title}
      </h3>
      <p className="text-sm text-[#545454] leading-relaxed">{description}</p>
    </div>
  )
}
