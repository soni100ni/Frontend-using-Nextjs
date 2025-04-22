"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
const musicSchoolContent=
[
    {
      "title": "Visit Our Campus",
      "description": "Come explore our state-of-the-art music school located at 123 Harmony Street, Melody City. Our campus features fully equipped studios, practice rooms, and performance halls designed for both beginners and professionals."
    },
    {
      "title": "Get in Touch by Phone",
      "description": "We’re happy to answer any questions! Give us a call at +1 (234) 567-8901 during our working hours. Whether you're curious about classes, events, or pricing, we're here to help."
    },
    {
      "title": "Reach Us by Email",
      "description": "For general inquiries, lesson information, or collaboration opportunities, email us at info@musicschool.com. We usually respond within 24 hours on business days."
    },
    {
      "title": "Our Opening Hours",
      "description": "We’re open Monday to Friday from 9:00 AM to 6:00 PM. Weekend classes and events are scheduled separately. Check our calendar for special programs and extended hours."
    },
    {
      "title": "Follow Us Online",
      "description": "Stay updated with the latest news, student performances, and music tips by following us on Instagram (@musicschool), Facebook, YouTube, and Twitter. Join our growing online community!"
    }
  ];

const WhyChooseUs = () => {
return (
    <div>
<StickyScroll content={musicSchoolContent} />
    </div>
)
}

export default WhyChooseUs

