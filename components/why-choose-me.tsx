import { CheckCircle2 } from "lucide-react"

const benefits = [
  "Clean & scalable code architecture",
  "Fast delivery with agile methodology",
  "SEO & performance optimized",
  "Long-term support & maintenance",
  "Clear communication throughout",
  "Responsive & mobile-first design",
]

export function WhyChooseMe() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose Me?</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            Delivering excellence in every project with a commitment to quality and client satisfaction
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
              >
                <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-left font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
