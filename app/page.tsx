import { Button } from "@/components/ui/button"
import { ArrowRight, Code2, Laptop, Rocket } from "lucide-react"
import Link from "next/link"
import { siteConfig } from "@/lib/constants"

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-32 lg:py-36 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl animate-slide-up">
              Transform Your Online Presence with{" "}
              <span className="text-secondary">WebFlowMaster</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Professional web development services tailored for your business. We create stunning, responsive websites that drive results and enhance your digital presence.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Button size="lg" asChild>
                <Link href="/packages">
                  View Packages <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="w-full aspect-square rounded-full bg-secondary/20 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <Code2 className="w-full h-full p-12 text-secondary animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose WebFlowMaster?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              We deliver exceptional web development solutions that help your business grow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Laptop,
                title: "Modern Design",
                description: "Clean, responsive layouts that work perfectly on all devices",
              },
              {
                icon: Rocket,
                title: "Performance",
                description: "Lightning-fast websites optimized for speed and user experience",
              },
              {
                icon: Code2,
                title: "Custom Solutions",
                description: "Tailored development to meet your specific business needs",
              },
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="relative p-6 bg-background rounded-lg shadow-sm border animate-slide-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Choose from our flexible packages and let us help you create the perfect website for your business.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/packages">
              View Our Packages <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 bg-muted">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">
            Contact us: {siteConfig.contact.phone} | Location: {siteConfig.contact.location}
          </p>
          <div className="flex gap-4 justify-center mt-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href={siteConfig.contact.instagram} target="_blank">
                Instagram
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href={siteConfig.contact.github} target="_blank">
                GitHub
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}