"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ColorPicker } from "./color-picker"
import { FileUpload } from "./file-upload"
import { toast } from "@/components/ui/use-toast"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MessageCircle } from "lucide-react"
import { useSearchParams } from "next/navigation"

const orderFormSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  websitePurpose: z.string().min(10, "Please describe your website's purpose"),
  targetAudience: z.string().min(10, "Please describe your target audience"),
  features: z.string().min(10, "Please list the main features you need"),
  colorScheme: z.string().min(1, "Please select a color scheme"),
  referenceSites: z.string().optional(),
  additionalNotes: z.string().optional(),
  businessType: z.string().optional(),
  serviceCount: z.string().optional(),
  seoRequirements: z.string().optional(),
  customFeatures: z.string().optional(),
  integrationRequirements: z.string().optional(),
})

type OrderFormValues = z.infer<typeof orderFormSchema>

export function OrderForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const searchParams = useSearchParams()
  const plan = searchParams.get("plan") || "basic"

  const form = useForm<OrderFormValues>({
    resolver: zodResolver(orderFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      websitePurpose: "",
      targetAudience: "",
      features: "",
      colorScheme: "",
      referenceSites: "",
      additionalNotes: "",
      businessType: "",
      serviceCount: "",
      seoRequirements: "",
      customFeatures: "",
      integrationRequirements: "",
    },
  })

  async function onSubmit(data: OrderFormValues) {
    setIsSubmitting(true)
    try {
      // Handle form submission and payment integration here
      toast({
        title: "Order submitted successfully!",
        description: "We'll contact you shortly to discuss your project.",
      })
    } catch (error) {
      toast({
        title: "Error submitting order",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const getPlanFields = () => {
    switch (plan) {
      case "standard":
        return (
          <>
            <FormField
              control={form.control}
              name="businessType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Business Type</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Restaurant, Service, Consulting" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="serviceCount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number of Services/Products</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="e.g., 5" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="seoRequirements"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>SEO Requirements</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="List your SEO requirements..."
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )
      case "premium":
        return (
          <>
            <FormField
              control={form.control}
              name="businessType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Business Type</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Restaurant, Service, Consulting" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="serviceCount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Number of Services/Products</FormLabel>
                  <FormControl>
                    <Input type="number" placeholder="e.g., 5" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="seoRequirements"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>SEO Requirements</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="List your SEO requirements..."
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="customFeatures"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Custom Features</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describe any custom features you need..."
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="integrationRequirements"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Integration Requirements</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="List any third-party integrations needed..."
                      className="resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )
      default:
        return null
    }
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
          <CardDescription>Get in touch with us</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-2">
            <Phone className="h-5 w-5" />
            <span>+91 8590315575</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="h-5 w-5" />
            <span>muhammadaflah@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <MessageCircle className="h-5 w-5" />
            <span>WhatsApp: +91 8590315575</span>
          </div>
        </CardContent>
      </Card>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="mb-6">
            <h3 className="text-lg font-semibold">Selected Plan: {plan.charAt(0).toUpperCase() + plan.slice(1)}</h3>
          </div>

          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="john@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number</FormLabel>
                <FormControl>
                  <Input placeholder="+91 8590315575" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {getPlanFields()}

          <FormField
            control={form.control}
            name="websitePurpose"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Website Purpose</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Describe what you want to achieve with your website..."
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="targetAudience"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Target Audience</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Who is your target audience?"
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="features"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Required Features</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="List the main features you need..."
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="colorScheme"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Color Scheme</FormLabel>
                <FormControl>
                  <ColorPicker 
                    label="Choose your preferred color scheme"
                    value={field.value} 
                    onChange={field.onChange} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="referenceSites"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Reference Sites (Optional)</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="List any websites you like as references..."
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="additionalNotes"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Additional Notes (Optional)</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Any other information you'd like to share..."
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Processing..." : "Submit Order"}
          </Button>
        </form>
      </Form>
    </div>
  )
}