import { EventsSection } from "@/components/events-section"
import { HeroSection } from "@/components/hero-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <EventsSection />
    </main>
  )
}
