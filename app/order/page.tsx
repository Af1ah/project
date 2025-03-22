"use client"

import { OrderForm } from "@/components/forms/order-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useSearchParams } from "next/navigation"

export default function OrderPage() {
  const searchParams = useSearchParams()
  const plan = searchParams.get("plan") || "basic"

  const getPlanFeatures = () => {
    switch (plan) {
      case "portfolio":
        return [
          {
            title: "Portfolio Showcase",
            description: "Beautiful gallery layouts for your work"
          },
          {
            title: "Project Details",
            description: "Detailed project pages with images and descriptions"
          },
          {
            title: "Contact Integration",
            description: "Easy contact form for potential clients"
          },
          {
            title: "Responsive Design",
            description: "Looks great on all devices"
          }
        ]
      case "business":
        return [
          {
            title: "Business Profile",
            description: "Professional business information display"
          },
          {
            title: "Service Showcase",
            description: "Highlight your services or products"
          },
          {
            title: "Contact & Location",
            description: "Maps integration and contact information"
          },
          {
            title: "Testimonials",
            description: "Showcase client reviews and feedback"
          }
        ]
      case "ecommerce":
        return [
          {
            title: "Product Catalog",
            description: "Organized product listings with categories"
          },
          {
            title: "Shopping Cart",
            description: "Secure payment processing integration"
          },
          {
            title: "Order Management",
            description: "Track and manage orders efficiently"
          },
          {
            title: "Inventory System",
            description: "Real-time stock management"
          }
        ]
      default:
        return [
          {
            title: "Custom Website Development",
            description: "Tailored solutions that match your brand and business needs"
          },
          {
            title: "Responsive Design",
            description: "Websites that look great on all devices"
          },
          {
            title: "SEO Optimization",
            description: "Built with search engines in mind"
          },
          {
            title: "Fast Performance",
            description: "Optimized for speed and user experience"
          }
        ]
    }
  }

  return (
    <main className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Order Your Website</h1>
            <p className="text-muted-foreground">
              Fill out the form below and we'll get back to you shortly to discuss your project.
            </p>
          </div>
          <OrderForm />
        </div>
      </div>
    </main>
  )
}