import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertContactSubmissionSchema } from "@shared/schema";
import type { InsertContactSubmission } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Send, MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";

export default function ContactSection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertContactSubmission>({
    resolver: zodResolver(insertContactSubmissionSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      projectType: "",
      budget: "",
      message: "",
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      return apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: "Quote Request Submitted",
        description: "Thank you for your interest! We will contact you within 24 hours.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ['/api/contact'] });
    },
    onError: (error: Error) => {
      toast({
        title: "Submission Failed",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactSubmission) => {
    submitMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="contact-title">
            Start Your Project Today
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="contact-description">
            Ready to bring your construction vision to life? Contact us for a free consultation and detailed project estimate.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <Card className="shadow-xl" data-testid="contact-form-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-card-foreground mb-6" data-testid="contact-form-title">
                Get Your Free Quote
              </h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="contact-form">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John" {...field} data-testid="input-firstName" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Doe" {...field} data-testid="input-lastName" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john@example.com" {...field} data-testid="input-email" />
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
                          <Input type="tel" placeholder="(555) 123-4567" {...field} data-testid="input-phone" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="projectType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Type</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-projectType">
                              <SelectValue placeholder="Select Project Type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="residential">Residential Construction</SelectItem>
                            <SelectItem value="commercial">Commercial Construction</SelectItem>
                            <SelectItem value="renovation">Renovation & Remodeling</SelectItem>
                            <SelectItem value="infrastructure">Infrastructure</SelectItem>
                            <SelectItem value="design-build">Design-Build</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="budget"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Estimated Budget</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger data-testid="select-budget">
                              <SelectValue placeholder="Select Budget Range" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="under-100k">Under $100,000</SelectItem>
                            <SelectItem value="100k-500k">$100,000 - $500,000</SelectItem>
                            <SelectItem value="500k-1m">$500,000 - $1,000,000</SelectItem>
                            <SelectItem value="1m-5m">$1,000,000 - $5,000,000</SelectItem>
                            <SelectItem value="over-5m">Over $5,000,000</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Description</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell us about your project vision, timeline, and any specific requirements..."
                            className="resize-none"
                            rows={4}
                            {...field}
                            data-testid="input-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg font-semibold h-auto"
                    disabled={submitMutation.isPending}
                    data-testid="button-submit"
                  >
                    <Send className="mr-3" size={20} />
                    {submitMutation.isPending ? "Submitting..." : "Submit Quote Request"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-xl" data-testid="contact-info-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-6" data-testid="contact-info-title">
                  Contact Information
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start" data-testid="contact-location">
                    <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mr-4 mt-1">
                      <MapPin className="text-accent-foreground" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-1">Our Location</h4>
                      <p className="text-muted-foreground">
                        1234 Construction Ave<br />
                        Builder's District, BD 12345
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start" data-testid="contact-phone">
                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4 mt-1">
                      <Phone className="text-primary-foreground" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-1">Phone Numbers</h4>
                      <p className="text-muted-foreground">
                        Office: (555) 123-BUILD<br />
                        Emergency: (555) 911-HELP
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start" data-testid="contact-email">
                    <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mr-4 mt-1">
                      <Mail className="text-secondary-foreground" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-1">Email Addresses</h4>
                      <p className="text-muted-foreground">
                        info@premierconstruction.com<br />
                        projects@premierconstruction.com
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start" data-testid="contact-hours">
                    <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center mr-4 mt-1">
                      <Clock className="text-muted-foreground" size={20} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-1">Business Hours</h4>
                      <p className="text-muted-foreground">
                        Mon-Fri: 7:00 AM - 6:00 PM<br />
                        Saturday: 8:00 AM - 4:00 PM<br />
                        Sunday: Emergency Only
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-xl" data-testid="contact-benefits-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-6" data-testid="contact-benefits-title">
                  Why Choose Premier Construction?
                </h3>
                
                <div className="space-y-4">
                  {[
                    "Licensed & Fully Insured",
                    "35+ Years of Experience",
                    "Free Project Estimates",
                    "Quality Guarantee",
                    "On-Time Project Delivery",
                    "24/7 Emergency Support"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center" data-testid={`contact-benefit-${index}`}>
                      <CheckCircle className="text-accent mr-3" size={20} />
                      <span className="text-card-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 pt-6 border-t border-border">
                  <div className="text-center" data-testid="contact-satisfaction">
                    <div className="text-3xl font-bold text-accent mb-2">98%</div>
                    <div className="text-muted-foreground">Client Satisfaction Rate</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
