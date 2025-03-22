"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with product management, shopping cart, and payment integration.",
    image: "/portfolio/ecommerce.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    link: "#",
  },
  {
    title: "Business Website",
    description: "Modern business website with responsive design and contact form integration.",
    image: "/portfolio/business.jpg",
    tags: ["React", "Tailwind CSS", "Form Handling"],
    link: "#",
  },
  {
    title: "Portfolio Website",
    description: "Clean and professional portfolio website showcasing creative work.",
    image: "/portfolio/portfolio.jpg",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Restaurant Website",
    description: "Beautiful restaurant website with menu management and online reservations.",
    image: "/portfolio/restaurant.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Booking System"],
    link: "#",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our collection of successful projects. Each website is crafted with attention to detail and modern design principles.
            </p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {projects.map((project, index) => (
              <motion.div key={index} variants={item}>
                <Card className="overflow-hidden group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href={project.link}>View Project</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's create something amazing together. Contact us to discuss your project requirements.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
} 