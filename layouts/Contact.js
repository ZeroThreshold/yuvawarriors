import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import { toast } from "react-toastify";
import { markdownify } from "@lib/utils/textConverter";

const ContactSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  subject: z.string(),
  message: z.string().optional(),
});

const prisma = new PrismaClient();

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title, info } = frontmatter;

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    const { success, data, error } = ContactSchema.safeParse({
      name,
      email,
      subject,
      message,
    });

    if (!success) {
      alert(`Form Error: Please enter the fields correctly`);
      return;
    }

    const body = {
      name,
      email,
      subject,
      message,
    };

    try {
      const output = await fetch(`/api/user`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      toast("Successfully submitted!", {
        position: "bottom-right",
        theme: "light",
      });
      console.log(`New user created: ${output}`);
    } catch (error) {
      console.error(`Error creating user: ${error}`);
    }
  };

  return (
    <section className="section">
      <div className="container">
        {markdownify(title, "h1", "text-center font-normal")}
        <div className="section row pb-4">
          <div className="col-12 md:col-6 lg:col-7">
            <form className="contact-form" onSubmit={handleFormSubmit}>
              <div className="mb-3">
                <input
                  className="form-input w-full rounded"
                  name="name"
                  type="text"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-input w-full rounded"
                  name="email"
                  type="email"
                  placeholder="Your email"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  className="form-input w-full rounded"
                  name="subject"
                  type="text"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  className="form-textarea w-full rounded-md"
                  rows="7"
                  name="message"
                  placeholder="Your message"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Send Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
