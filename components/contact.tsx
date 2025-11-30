"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function Contact() {
  const { toast } = useToast()
  const { language } = useLanguage()
  const t = translations[language]
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    toast({
      title: t.contact.messageSent,
      description: t.contact.messageSentDesc,
    })
    setFormData({ name: "", email: "", company: "", message: "" })
  }

  return (
    <section id="contact" className="py-24 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-4">
            <span className="text-accent text-sm font-bold">{t.contact.badge}</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">{t.contact.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
            {t.contact.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div>
            <Card className="p-8 bg-card border-2 border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  {
                    id: "name",
                    label: t.contact.form.fullName,
                    type: "text",
                    placeholder: "John Doe",
                    value: formData.name,
                    key: "name",
                  },
                  {
                    id: "email",
                    label: t.contact.form.email,
                    type: "email",
                    placeholder: "john@company.com",
                    value: formData.email,
                    key: "email",
                  },
                  {
                    id: "company",
                    label: t.contact.form.company,
                    type: "text",
                    placeholder: "Your Company",
                    value: formData.company,
                    key: "company",
                    required: false,
                  },
                ].map((field) => (
                  <div key={field.id}>
                    <Label htmlFor={field.id} className="text-primary font-medium">
                      {field.label} {field.required !== false && "*"}
                    </Label>
                    <div>
                      <Input
                        id={field.id}
                        type={field.type}
                        required={field.required !== false}
                        value={field.value}
                        onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                        className="mt-2 border-2 focus:border-accent"
                        placeholder={field.placeholder}
                      />
                    </div>
                  </div>
                ))}

                <div>
                  <Label htmlFor="message" className="text-primary font-medium">
                    {t.contact.form.projectDetails} *
                  </Label>
                  <div>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="mt-2 border-2 focus:border-accent min-h-32"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                </div>

                <div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-accent text-primary hover:bg-accent/90 font-bold text-lg group"
                  >
                    {t.contact.form.sendMessage}
                    <Send className="w-5 h-5 ml-2" />
                  </Button>
                </div>
              </form>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {[
              { icon: Mail, title: t.contact.emailUs, lines: ["contact@bnbsolutions.com", "support@bnbsolutions.com"] },
              { icon: Phone, title: t.contact.callUs, lines: ["+1 (555) 123-4567", "Mon-Fri, 9AM-6PM EST"] },
              {
                icon: MapPin,
                title: t.contact.visitUs,
                lines: ["123 Tech Boulevard, Suite 400", "San Francisco, CA 94105"],
              },
            ].map((info, index) => {
              const IconComponent = info.icon
              return (
                <div key={index}>
                  <Card className="p-8 bg-primary border-2 border-tertiary">
                    <div className="flex items-start gap-4">
                      <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-cream mb-2">{info.title}</h3>
                        {info.lines.map((line, lineIndex) => (
                          <p key={lineIndex} className="text-cream/80 leading-relaxed">
                            {line}
                            {lineIndex === 0 && info.icon === MapPin && <br />}
                          </p>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
