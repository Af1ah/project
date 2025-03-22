"use client"

import { motion } from "framer-motion"
import { PackageCard } from "./package-card"
import { siteConfig } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export function PackageComparison() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Package</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Select the perfect package that suits your needs. Each package is designed to deliver exceptional value and quality.
          </p>
        </div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <motion.div variants={item}>
            <PackageCard
              name={siteConfig.packages.basic.name}
              price={siteConfig.packages.basic.price}
              features={siteConfig.packages.basic.features}
              description="Perfect for small businesses starting their online journey"
              formType="basic"
            />
          </motion.div>
          
          <motion.div variants={item}>
            <PackageCard
              name={siteConfig.packages.standard.name}
              price={siteConfig.packages.standard.price}
              features={siteConfig.packages.standard.features}
              description="Ideal for growing businesses needing more features"
              highlighted
              formType="standard"
            />
          </motion.div>
          
          <motion.div variants={item}>
            <PackageCard
              name={siteConfig.packages.premium.name}
              price={siteConfig.packages.premium.price}
              features={siteConfig.packages.premium.features}
              description="Advanced solution for businesses requiring premium features"
              formType="premium"
            />
          </motion.div>
        </motion.div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Need a Custom Solution?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We can create a tailored package that perfectly matches your specific requirements.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Contact Us for Custom Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}