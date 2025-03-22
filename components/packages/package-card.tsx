"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import { useRouter } from "next/navigation"

interface PackageCardProps {
  name: string
  price: number
  features: string[]
  description: string
  highlighted?: boolean
  formType: "basic" | "standard" | "premium"
}

export function PackageCard({ name, price, features, description, highlighted = false, formType }: PackageCardProps) {
  const router = useRouter()

  const handleSelectPackage = () => {
    router.push(`/order?plan=${formType}`)
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <Card className={`w-full ${highlighted ? 'border-secondary shadow-lg' : ''}`}>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{name}</CardTitle>
          <CardDescription>{description}</CardDescription>
          <p className="text-3xl font-bold mt-2">₹{price.toLocaleString()}</p>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <Check className="h-5 w-5 text-secondary" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter>
          <Button 
            className="w-full"
            variant={highlighted ? "default" : "outline"}
            onClick={handleSelectPackage}
          >
            Select Package
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}