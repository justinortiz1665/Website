import Image from "next/image"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Github } from "lucide-react"
import { getProjectBySlug, markdownToHtml, getProjectSlugs } from "@/lib/markdown"
import { YoutubeEmbed } from "@/components/youtube-embed"
import { Metadata } from "next"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const project = getProjectBySlug(params.slug)
  
  if (!project) {
    return {
      title: 'Project Not Found'
    }
  }
  
  return {
    title: project.title,
    description: project.summary || project.title
  }
}

export function generateStaticParams() {
  const slugs = getProjectSlugs()
  return slugs.map(slug => ({
    slug: slug
  }))
}

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  const contentHtml = await markdownToHtml(project.content)

  return (
    <div className="container flex flex-col gap-8 py-6 md:gap-12 md:py-12">
      {/* Header Section */}
      <div className="grid gap-8 md:grid-cols-2 md:items-center">
        <div className="flex flex-col gap-4 px-4 md:px-0">
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
            {project.title}
          </h1>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="outline" className="rounded-full border border-muted-foreground/30 bg-gray-100">
                {tag}
              </Badge>
            ))}
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mt-2 mb-4">
            {project.githubUrl && (
              <Button asChild className="bg-primary hover:bg-black text-white hover:text-white transition-colors">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> View on GitHub
                </a>
              </Button>
            )}
            {project.contactUrl && (
              <Button asChild className="bg-primary hover:bg-black text-white hover:text-white transition-colors">
                <a href={project.contactUrl}>Contact Me</a>
              </Button>
            )}
          </div>
        </div>
        <div className="order-first px-4 md:order-last md:px-0">
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <Image
              src={typeof project.image === 'string' 
                ? project.image 
                : project.image?.src || "/placeholder.svg"}
              alt={typeof project.image === 'string' 
                ? project.title 
                : project.image?.alt || project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Summary Section */}
      <section className="px-4 md:px-0">
        <Card className="p-6 md:p-8">
          <h2 className="mb-4 text-2xl font-bold">Project Summary</h2>
          <p className="text-base text-muted-foreground sm:text-lg">{project.summary}</p>
        </Card>
      </section>

      {/* Problem Section */}
      <section className="px-4 md:px-0">
        <h2 className="mb-4 text-2xl font-bold">The Problem</h2>
        <p className="text-base text-muted-foreground sm:text-lg">{project.problem}</p>
      </section>

      {/* Solution Section */}
      <section className="px-4 md:px-0">
        <h2 className="mb-4 text-2xl font-bold">The Solution</h2>
        <p className="text-base text-muted-foreground sm:text-lg">{project.solution}</p>
      </section>

      {/* Features Section */}
      <section className="px-4 md:px-0">
        <h2 className="mb-6 text-2xl font-bold">Project Features</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:gap-8">
          {project.features?.map((feature, index) => (
            <Card key={index} className="p-6">
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Additional Content Section */}
      {contentHtml && (
        <section className="px-4 md:px-0">
          <h2 className="mb-6 text-2xl font-bold">The Product's Journey</h2>
          <div className="prose prose-gray prose-headings:font-bold prose-headings:text-black prose-h3:text-xl prose-h4:text-lg prose-h4:mt-4 prose-p:mt-2 prose-ul:list-disc prose-ul:pl-5 prose-li:mt-1 max-w-none" dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </section>
      )}

      {/* Demo Video Section */}
      {project.youtubeId && (
        <section className="px-4 md:px-0">
          <h2 className="mb-6 text-2xl font-bold">Demo Video</h2>
          <div className="overflow-hidden rounded-lg">
            <YoutubeEmbed youtubeId={project.youtubeId} />
          </div>
        </section>
      )}

      {/* Back to Portfolio Button */}
      <div className="flex flex-wrap gap-3 mt-4 px-4 md:px-0">
        <Button variant="outline" asChild>
          <a href="/#portfolio">Back to Portfolio</a>
        </Button>
      </div>
    </div>
  )
}

