export function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1">
                <div className="w-full h-full rounded-2xl bg-background flex items-center justify-center">
                  <img
                    src="/professional-developer-portrait.png"
                    alt="Profile"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hi! I'm a <span className="text-foreground font-semibold">Senior Web & Full-Stack Developer</span> with
                years of experience building high-performance websites and applications that drive real business
                results.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in creating <span className="text-foreground font-semibold">conversion-optimized</span>{" "}
                solutions for international clients, agencies, startups, and eCommerce businesses. My focus is always on
                performance, SEO, and delivering exceptional user experiences.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you need a <span className="text-foreground font-semibold">custom WordPress theme</span>, a{" "}
                <span className="text-foreground font-semibold">high-converting Shopify store</span>, or a{" "}
                <span className="text-foreground font-semibold">full-stack web application</span>, I bring technical
                expertise and creative problem-solving to every project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
