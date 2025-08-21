import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const ContactFormSchema = z.object({
    name: z.string().nonempty("Name is required"),
    email: z.string().email("Invalid email").nonempty("Email is required"),
    subject: z.string().nonempty("Subject is required"),
    message: z.string().nonempty("Message is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: initialValues,
    resolver: zodResolver(ContactFormSchema),
  });

  const onSubmit = async (data) => {
    const payload = {
      title: data.subject,
      name: data.name,
      email: data.email,
      message: data.message,
      time: new Date().toLocaleString(),
    };

    const serviceID = import.meta.env.VITE_SERVICE_ID;
    const templateID = import.meta.env.VITE_TEMPLATE_ID;
    const publicKey  = import.meta.env.VITE_PUBLIC_KEY;

    setLoading(true);

    // Optional: show a loading toast while sending
    const promise = emailjs.send(serviceID, templateID, payload, publicKey);

    toast.promise(promise, {
      loading: "Sending your message...",
      success: "Successfully sent message 🎉",
      error: "Failed to send message. Please try again.",
    });

    try {
      await promise;
      reset();
    } catch (err) {
      console.error("Email send failed:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length) {
      // Show first error as a toast (optional)
      const firstError = Object.values(errors)[0]?.message;
      if (firstError) toast.error(String(firstError));
    }
  }, [errors]);

  return (
    <div className="flex justify-center items-center p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-lg text-gray-300 flex flex-col gap-5"
      >
        {/* Name */}
        <div>
          <label className="block mb-1" htmlFor="name">Name</label>
          <input
            {...register("name")}
            id="name"
            type="text"
            placeholder="Enter your name"
            className="w-full p-3 rounded-md bg-gray-800 border border-gray-600 focus:border-blue-500 outline-none"
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name.message}</span>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block mb-1" htmlFor="email">Email Address</label>
          <input
            {...register("email")}
            id="email"
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded-md bg-gray-800 border border-gray-600 focus:border-blue-500 outline-none"
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email.message}</span>
          )}
        </div>

        {/* Subject */}
        <div>
          <label className="block mb-1" htmlFor="subject">Subject</label>
          <input
            {...register("subject")}
            id="subject"
            type="text"
            placeholder="Subject"
            className="w-full p-3 rounded-md bg-gray-800 border border-gray-600 focus:border-blue-500 outline-none"
          />
          {errors.subject && (
            <span className="text-red-500 text-sm">{errors.subject.message}</span>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="block mb-1" htmlFor="message">Message</label>
          <textarea
            {...register("message")}
            id="message"
            rows={5}
            placeholder="Message"
            className="w-full p-3 rounded-md bg-gray-800 border border-gray-600 focus:border-blue-500 outline-none"
          />
          {errors.message && (
            <span className="text-red-500 text-sm">{errors.message.message}</span>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-4 rounded-md transition-all duration-300 text-white
            ${loading ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"}`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
