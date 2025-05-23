import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";
import { 
  ArrowRight, 
  Code,
  Mail, 
  Github, 
  Linkedin, 
  Twitter,
  Newspaper
} from "lucide-react";

export function HomePage() {
  return (
    <div className="px-4 gap-6 flex flex-col sm:px-20 py-12 w-full">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center space-y-8 pt-0 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 flex flex-col justify-center items-center"
        >
          <div className="sm:size-96 size-48 flex justify-center">
            <img src="https://ucarecdn.com/9e59f77f-db92-4fc6-b430-eb8359dffc0e/60821454679799092561.jpg" alt="Profile Picture" className="object-cover rounded-full" />
          </div>
          <Badge variant="outline" className="px-4 py-1 text-sm">
            Full-Stack Developer
          </Badge> 
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Hi, I'm <span className="text-gradient">Muhammad Farhan</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            I build modern, responsive web applications with cutting-edge technologies.
            Let's create something amazing together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button asChild size="lg" className="rgb-border">
            <Link to="/projects">
              View My Work
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/contact">Contact Me</Link>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex gap-4"
        >
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/mhmdd-farhan" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://linkedin.com/in/muhammad-farhan-569018185/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://www.threads.net/@mhmdd_frhnn" target="_blank" rel="noopener noreferrer">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://cv.muhammad-farhan.com" target="_blank" rel="noopener norefferer">
              <Newspaper className="h-5 w-5" />
              <span className="sr-only">CV</span>
            </a>
          </Button>
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
            <p className="text-muted-foreground">Some of my recent work</p>
          </div>
          <Button asChild variant="ghost">
            <Link to="/projects">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <Card className="overflow-hidden h-full glow">
                <div className="relative h-48 w-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm p-2 rounded-full">
                    {project.icon}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="default">{tag}</Badge>
                    ))}
                  </div>
                  <div className="flex justify-between gap-4">
                    <Button asChild variant="outline" className="w-[50%]">
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        View Project
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="w-[50%]">
                      <a href={project.live as string} target="_blank" rel="noopener noreferrer">
                        { project.live ? "Live" : "Soon"}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="space-y-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">My Skills</h2>
          <p className="text-muted-foreground">Technologies I work with</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            { name: "React", icon: <Code className="h-6 w-6" />, color: "bg-blue-500" },
            { name: "TypeScript", icon: <Code className="h-6 w-6" />, color: "bg-blue-700" },
            { name: "Node.js", icon: <Code className="h-6 w-6" />, color: "bg-green-600" },
            { name: "Next.js", icon: <Code className="h-6 w-6" />, color: "bg-black" },
            { name: "Tailwind CSS", icon: <Code className="h-6 w-6" />, color: "bg-cyan-500" },
            { name: "MongoDB", icon: <Code className="h-6 w-6" />, color: "bg-green-500" },
            { name: "GraphQL", icon: <Code className="h-6 w-6" />, color: "bg-pink-600" },
            { name: "Docker", icon: <Code className="h-6 w-6" />, color: "bg-blue-600" },
          ].map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.05 * index, duration: 0.3 }}
              className="animate-float"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <Card className="h-full">
                <CardContent className="flex items-center gap-3 p-4">
                  <div className={`${skill.color} p-2 rounded-md text-white`}>
                    {skill.icon}
                  </div>
                  <span className="font-medium">{skill.name}</span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <Button asChild variant="outline">
            <Link to="/skills">
              View All Skills
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted rounded-lg p-8 text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">Let's Work Together</h2>
          <p className="text-muted-foreground">
            I'm currently available for freelance work and open to new opportunities.
            If you have a project in mind or just want to chat, feel free to reach out.
          </p>
          <Button asChild size="lg" className="rgb-border">
            <Link to="/contact">
              Get in Touch
              <Mail className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
