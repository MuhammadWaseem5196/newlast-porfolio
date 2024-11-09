import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import Education from "./eduaction";
import Skills from "./skill";
import Experience from "./expirance";
import Projects from "./project";

export function Detail() {
  return (
    <div className="h-full w-full bg-[#eff7f9]">
      <Tabs defaultValue="Education" className="w-full p-4 ">
        {/* Tabs Header */}
        <TabsList className="grid w-full -p-3 h-14  grid-cols-4  font-serif font-extrabold rounded-t-lg  bg-[#608BC1]">
          <TabsTrigger
            value="Education"
            className="text-xl text-black py-2  transition-colors duration-1000  "
          >
            Education
          </TabsTrigger>
          <TabsTrigger
            value="skills"
            className="text-xl text-black py-2  transition-colors duration-1000 focus:outline-none"
          >
            Skills
          </TabsTrigger>
          <TabsTrigger
            value="Experience"
            className="text-xl text-black py-2  transition-colors duration-1000 focus:outline-none"
          >
            Experience
          </TabsTrigger>
          <TabsTrigger
            value="projects"
            className="text-xl text-black py-2  transition-colors duration-1000 focus:outline-none"
          >
            Projects
          </TabsTrigger>
        </TabsList>

        {/* Tabs Content */}
        <TabsContent
          value="Education"
          className="border-4 border-double border-[#133E87] rounded-lg p-6 bg-[#CBDCEB]"
        >
          <Education />
        </TabsContent>

        <TabsContent
          value="skills"
          className="border-4 border-double border-[#133E87] rounded-lg p-6 bg-[#CBDCEB]"
        >
          <Skills />
        </TabsContent>

        <TabsContent
          value="Experience"
          className="border-4 border-double border-[#133E87] rounded-lg p-6 bg-[#CBDCEB]"
        >
          <Experience />
        </TabsContent>

        <TabsContent
          value="projects"
          className="border-4 border-double border-[#133E87] rounded-lg p-6 bg-[#CBDCEB]"
        >
          <Projects />
        </TabsContent>
      </Tabs>
    </div>
  );
}
