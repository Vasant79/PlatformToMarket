import { z } from "zod";

// validating form inputs
const formSchema = z.object({
  name: z.string().min(4).max(16),
  email: z.string().email({ message: "Enter a valid email addess" }),
});

export { formSchema };
