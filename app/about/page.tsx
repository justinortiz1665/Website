import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "@/components/external-link"
import { getSocialLinks } from "@/lib/env"
import { Card } from "@/components/ui/card"
import AboutCarousel from "@/components/about-carousel"

export const metadata: Metadata = {
  title: "About",
}

export default function AboutPage() {
  const socialLinks = getSocialLinks()

  return (
    <div className="container flex flex-col gap-8 py-6 md:gap-12 md:py-12">
      {/* Header */}
      <div className="flex flex-col gap-4 px-4 md:px-0">
        <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
          Traded Protein Shakes for Coffee: The Devolution of an Athletic Trainer
        </h1>
      </div>

      {/* Carousel */}
      <Card className="mx-4 overflow-hidden rounded-lg border bg-background md:mx-0">
        <AboutCarousel />
      </Card>

      {/* About Text */}
      <div className="prose prose-gray max-w-none px-4 md:px-0">
        <p className="text-base text-muted-foreground sm:text-lg mb-6">
          Hi, I&apos;m Justin Ortiz.
        </p>
        
        <p className="text-base text-muted-foreground sm:text-lg mb-6">
          Currently based in the Bay Area.
        </p>

        <p className="text-base text-muted-foreground sm:text-lg mb-6">
          I&apos;m a builder and explorer.
        </p>

        <p className="text-base text-muted-foreground sm:text-lg mb-6">
          Former content creator and athletic trainer.
        </p>

        <p className="text-base text-muted-foreground sm:text-lg mb-6">
          I am a sports medicine practitioner by trade but a techie at heart.
        </p>

        <p className="text-base text-muted-foreground sm:text-lg mb-6">
          On a journey to a new career in Product Operations and Management
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Journey</h2>

        <p className="text-base text-muted-foreground sm:text-lg mb-6">
          I began my career in athletic training, driven by a fascination with human movement and rehabilitation. Over the years, I&apos;ve been privileged to work in incredible environments, including Drum Corps International, high schools, the NFL, NCAA Division I, and the MLS. These experiences taught me invaluable lessons—mastering a craft, attention to detail, and the power of grit—all of which I now apply to other areas of interest.
        </p>

        <p className="text-base text-muted-foreground sm:text-lg mb-6">
          After 10 years in sports medicine, I&apos;m ready to embark on a new path. My current focus is on learning about product operations/management roles and responsibilities and expanding my skill set in the utilization and implementation of LLMs and AI agents. I&apos;m dedicating this time to developing new skills and exploring the opportunities that lie ahead.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Philosophy</h2>

        <p className="text-base text-muted-foreground sm:text-lg mb-6">
          Throughout my life and career, I&apos;ve been guided by two simple creeds: efficiency and care.
        </p>

        <p className="text-base text-muted-foreground sm:text-lg mb-6">
          During my college days, I worked in the service industry. One instructor challenged me with a pivotal question: &quot;How can I accomplish the same amount of tasks in fewer steps?&quot; This mindset reshaped my approach to everything I do. While perfection is a journey, practice and repetition ensure the process becomes more refined over time.
        </p>

        <p className="text-base text-muted-foreground sm:text-lg mb-6">
          The second principle is to care.
        </p>

        <p className="text-base text-muted-foreground sm:text-lg mb-6">
          I take pride in my work, whether it&apos;s through attentive interactions with patients, dedicating time to those in need, or handling even the smallest tasks with effort and intention.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Creator</h2>

        <p className="text-base text-muted-foreground sm:text-lg mb-6">
          As my professional life has taken twists and turns, a constant has been turning an idea into reality. Transforming a photograph into art, a conversation into media, or a prompt into an application. I have the passion and drive to manifest intangibles to tangibles. It is my get shit done mentality and refusing to believe that something is impossible.
        </p>

        <p className="text-base text-muted-foreground sm:text-lg mb-6">
          <strong>&quot;Do or do not, there is no try.&quot;</strong> – Yoda
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Connect</h2>

        <p className="text-base text-muted-foreground sm:text-lg mb-6">
          If you&apos;d like to learn more or follow my journey, feel free to reach out. My socials are linked below. I love collaborating, discovering something new, and building connections within the community.
        </p>

        <p className="text-base text-muted-foreground sm:text-lg mb-6">
          P.S. Are you into Magic: The Gathering? Let&apos;s connect in the arena! Add me—mumbo92#99388, or if you&apos;re in the Bay Area, let&apos;s meet up for a game of Commander or Pauper!
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col gap-4 pt-4 sm:flex-row">
          <Link 
            href="/contact"
            className="inline-flex items-center gap-2 font-medium"
          >
            <Button className="w-full text-white bg-primary hover:bg-black hover:text-white">Contact Me</Button>
          </Link>
          <ExternalLink 
            href={socialLinks.linkedin}
            className="inline-flex items-center gap-2 font-medium"
          >
            <Button className="w-full text-white bg-primary hover:bg-black hover:text-white">Connect on LinkedIn</Button>
          </ExternalLink>
          <ExternalLink 
            href={socialLinks.github}
            className="inline-flex items-center gap-2 font-medium"
          >
            <Button className="w-full text-white bg-primary hover:bg-black hover:text-white">View on GitHub</Button>
          </ExternalLink>
        </div>
      </div>
    </div>
  )
}