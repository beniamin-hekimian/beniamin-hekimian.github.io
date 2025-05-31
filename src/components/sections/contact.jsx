"use client";

import { ArrowRight } from "lucide-react";
import { toast } from "sonner";
import { FloatingInput, FloatingTextarea } from "@/components/floating-input";
import { Button } from "@/components/ui/button";

// helper function
const formatDateTime = (date) => {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(date);
};

export default function Contact() {

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "b8482f24-5eca-486b-beef-bea698522010");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
		const now = new Date();
		const formattedDateTime = formatDateTime(now);

    if (data.success) {
			toast("Form Submitted Successfully", {
				description: formattedDateTime,
			});
			event.target.reset();
    } else {
			toast("Submission failed", {
				description: `Attempted on ${formattedDateTime}`,
			});
      console.log("Error", data);
    }
  };

	return (
    <section id="contact" className="mb-12">
			<div className="container mx-auto px-4 lg:px-12">
				<h2 className="text-3xl font-semibold mb-4 text-center">Contact Us</h2>
				<p className="text-center mb-8">Whether you need a professional website, beautiful photography, or dynamic video editing, I'm just a message away!</p>
				<form method="post" onSubmit={handleSubmit} className="flex flex-col justify-center gap-6">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<FloatingInput label="Name" type="text" name="name" required />
						<FloatingInput label="Email" type="email" name="email" required />
					</div>
					<FloatingInput label="Subject" type="text" name="subject" required />
					<FloatingTextarea label="Message" name="message" required />
					<Button type="submit" className="self-center flex items-end gap-2 hover:cursor-pointer">
						Submit now
						<ArrowRight size="16" />
					</Button>
				</form>
			</div>
    </section>
  )
}
