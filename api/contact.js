import { z } from "zod";
import { randomUUID } from "crypto";

// Define the schema for contact submissions
const insertContactSubmissionSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  projectType: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().optional(),
});

// In-memory storage for demo purposes
// In production, you'd use a database
let contactSubmissions = new Map();

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    try {
      // Validate request body
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      
      // Create contact submission
      const id = randomUUID();
      const submission = {
        ...validatedData,
        id,
        phone: validatedData.phone || "",
        projectType: validatedData.projectType || "",
        budget: validatedData.budget || "",
        message: validatedData.message || "",
        createdAt: new Date(),
      };
      
      contactSubmissions.set(id, submission);
      
      res.status(201).json({ 
        message: "Contact submission received successfully",
        id: submission.id 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: "Invalid form data",
          errors: error.errors 
        });
      } else {
        console.error('Contact submission error:', error);
        res.status(500).json({ 
          message: "Internal server error" 
        });
      }
    }
  } else if (req.method === 'GET') {
    try {
      const submissions = Array.from(contactSubmissions.values());
      res.json(submissions);
    } catch (error) {
      console.error('Get submissions error:', error);
      res.status(500).json({ 
        message: "Internal server error" 
      });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).json({ message: 'Method not allowed' });
  }
}