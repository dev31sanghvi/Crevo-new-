import { useState, useEffect } from "react";
("use client");
import * as React from "react";
import { cn } from "../src/utils/cn";
import * as LabelPrimitive from "@radix-ui/react-label";
import { useMotionTemplate, useMotionValue, motion } from "framer-motion";
import { z } from "zod";

const formSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required"),
  lastName: z.string().trim().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().trim().min(1, "Message is required"),
});

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const radius = 100; // change this to increase the rdaius of the hover effect
    const [visible, setVisible] = React.useState(false);

    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
      let { left, top } = currentTarget.getBoundingClientRect();

      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }
    return (
      <motion.div
        style={{
          background: useMotionTemplate`
        radial-gradient(
          ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
          var(--blue-500),
          transparent 80%
        )
      `,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="p-[2px] rounded-lg transition duration-300 group/input"
      >
        <input
          type={type}
          className={cn(
            `flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm  file:border-0 file:bg-transparent
          file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600
          focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
           disabled:cursor-not-allowed disabled:opacity-50
           dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
           group-hover/input:shadow-none transition duration-400
           `,
            className
          )}
          ref={ref}
          {...props}
        />
      </motion.div>
    );
  }
);
Input.displayName = "Input";

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(
      "text-sm font-medium text-black dark:text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className
    )}
    {...props}
  />
));
Label.displayName = LabelPrimitive.Root.displayName;

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};


function SignupFormDemo() {
  // using zod for the validation
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget); // getting form data
    // const formValues = Object.fromEntries(formData.entries()); // formdata object to plain object

    //form value obj.
    const formValues = {
      firstName: formData.get('firstName') || '',
      lastName: formData.get('lastName') || '',
      email: formData.get('email') || '',
      message: formData.get('message') || '',
    };

    try {
      const parsedData = formSchema.safeParse(formValues); // parsing data according to schema
      if (parsedData.success) {
        console.log("Form data is valid:", parsedData.data);
      } else {
        console.error("Something is up buddy !:", parsedData.error);
      }
    } catch (error) {
      console.error("Unexpected error:", error);
    }
    console.log("Form submitted");
  };
  return (
    <div className="max-w-md text-left w-full mx-auto rounded-none mt-5 md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Tyler" type="string" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Durden" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="projectmayhem@fc.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Message</Label>
          <Input id="text" placeholder="Your Message" type="text" />
        </LabelInputContainer>
        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Lets Connect
          <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
          <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </button>

        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
      </form>
    </div>
  );
}

export function TypewriterEffectDemo() {
  const words = [
    {
      text: "Let's",
    },
    {
      text: "Get",
    },
    {
      text: "In",
    },
    {
      text: "Touch.",
    },
  ];

  const [isAnimating, setIsAnimating] = useState(false);
  // const observerRef = useRef<IntersectionObserver | null>
  // Detect when the section is in view
  useEffect(() => {
    const section = document.querySelector(".typewriter-demo");
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsAnimating(entry.isIntersecting);
    });

    if (section) {
      observer.observe(section);
    } else {
      console.error("element not found ");
    }

    return () => observer.disconnect(); // Cleanup on unmount
  }, []);

  return (
    <div id="contact" className="flex flex-col h-[40rem] typewriter-demo">
      <br />
      <h1 className="mb-4 text-3xl font-extrabold  text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-500 md:text-5xl lg:text-6xl">
        Contact Form
      </h1>
      {/* {isAnimating && <TypewriterEffect words={words} />}{" "} */}
      {/* Render only when animating */}
      <SignupFormDemo />
    </div>
  );
}
