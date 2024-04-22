import { HoverEffect } from "../pages/card-hover";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "Web Development",
    description:
    "We craft high-performance, user-friendly websites and applications that drive results. From concept to completion, we handle every aspect of the development process to ensure your online presence reflects your brand and exceeds your audience's expectations.",
    link: "https://stripe.com",
  },
  {
    title: "Lead Generation",
    description:
    "We help you attract qualified leads and convert them into loyal customers. Our data-driven strategies and targeted campaigns increase brand awareness, nurture leads, and ultimately boost your ROI. Let us fill your sales pipeline with potential customers ready to do business.",
    link: "https://netflix.com",
  },
  {
    title: "Content Creation",
    description:
    "We create engaging and informative content that captures your audience's attention and keeps them coming back for more. Our skilled content creators craft compelling website copy, blog posts, social media content, and more, all designed to achieve your specific goals. Let us tell your brand story in a way that resonates with your target audience.",
    link: "https://google.com",
  },

];
