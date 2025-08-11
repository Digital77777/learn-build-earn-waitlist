import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const schema = z.object({
  email: z.string().email("Please enter a valid email"),
  university: z.string().max(120).optional().or(z.literal("")),
});

type FormValues = z.infer<typeof schema>;

const WaitlistForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    try {
      const { error } = await supabase
        .from("waiting_list")
        .insert({
          email: values.email.trim(),
          university: values.university ? values.university.trim() : null,
        });

      if (error) {
        if ((error as any)?.code === "23505") {
          toast.message("You're already on the list with this email.");
        } else {
          throw error;
        }
      } else {
        toast.success("You're on the list! We'll notify you before launch.");
        reset();
      }
    } catch (e) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section id="waitlist" aria-labelledby="waitlist-title">
      <div className="container py-12 md:py-16">
        <h2 id="waitlist-title" className="text-center text-2xl font-bold md:text-3xl">
          Reserve Your Spot
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-sm text-muted-foreground">
          We’ll email you first when we launch. No spam.
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto mt-6 grid max-w-xl gap-3 sm:grid-cols-[1fr_auto]"
          aria-label="Email signup form"
        >
          <div className="grid gap-3 sm:col-span-2">
            <div>
              <Input
                type="email"
                placeholder="Email address"
                aria-invalid={!!errors.email}
                aria-describedby="email-error"
                {...register("email")}
              />
              {errors.email && (
                <p id="email-error" className="mt-1 text-xs text-destructive">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <Input type="text" placeholder="University / College (optional)" {...register("university")} />
            </div>
          </div>
          <Button type="submit" variant="hero" size="xl" disabled={isSubmitting}>
            {isSubmitting ? "Reserving..." : "Reserve My Spot"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default WaitlistForm;
