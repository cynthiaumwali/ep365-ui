"use client";
import React from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Card } from "@/components/ui/card";
import Section from "../common/Section";
import SectionTitle from "../common/SectionTitle";
import SectionDesc from "../common/SectionDesc";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

const onContactSubmit = () => { };

const ContactUS = () => {
  const contactForm = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
    },
  });

  return (
    <Section id="contact" className="pb-20 md:pb-24 border-x border-divide">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex flex-col w-full md:w-1/2 items-start text-start gap-4">
          <div className="p-4 bg-white rounded-xl shadow mb-4">
            <Mail className="text-primary w-6 h-6" />
          </div>
          <SectionTitle title="Contact Us" className="mb-4" />
          <SectionDesc description="We are always looking for ways to improve our products and services.
            Contact us and let us know how we can help you." />
          <SectionDesc description="info@ep365.com . +1 (800) 123 XX21 . support@yoursaas.ai" className="my-4" />
        </div>

        <div className="w-full md:w-1/2 space-y-4">
          <Card className="relative overflow-hidden shadow-none">
            <BorderBeam
              duration={8}
              size={300}
              reverse
              className="absolute inset-0 z-10 pointer-events-none from-transparent via-primary to-transparent"
            />
            <Form {...contactForm}>
              <form
                onSubmit={contactForm.handleSubmit(onContactSubmit)}
                className="space-y-4 max-w-xl p-8 rounded-xl"
              >
                <FormField
                  control={contactForm.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <Label htmlFor="name" className="mb-3">
                        Full Name
                      </Label>
                      <FormControl>
                        <Input id="name" placeholder="Full name" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={contactForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <Label htmlFor="email" className="mb-3">
                        Email Address
                      </Label>
                      <FormControl>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Email address"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={contactForm.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <Label htmlFor="company" className="mb-3">
                        Company
                      </Label>
                      <FormControl>
                        <Input id="company" placeholder="Company" {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={contactForm.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <Label htmlFor="message" className="mb-3">
                        Message
                      </Label>
                      <FormControl>
                        <Textarea
                          id="message"
                          placeholder="Your message..."
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <Button className="bg-black w-full md:w-1/2">
                  Submit
                </Button>
              </form>
            </Form>
          </Card>
        </div>
      </div>
    </Section>
  );
};

export default ContactUS;
