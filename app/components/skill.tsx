import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaCheckCircle } from "react-icons/fa";

export default function Skills() {
  return (
    <Card data-aos="zoom-out" className="h-[85vh]">
      <CardHeader>
        <CardTitle className="text-3xl font-serif text-[#133E87]">Skills</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-wrap justify-evenly">
        {/* Skill: HTML */}
        <div className="pt-3 w-1/4">
          <span className="text-3xl flex text-yellow-700 hover:text-yellow-500">
            <FaCheckCircle />
            <h3 className="text-xl pl-4 pt-1 font-semibold">HTML</h3>
          </span>
          <div className="w-full h-2 border-4 border-yellow-600 rounded-lg mt-3 "></div>
          <h3 className="float-right">100%</h3>
        </div>

        {/* Skill: CSS */}
        <div className="pt-3 w-1/4 ml-5">
          <span className="text-3xl flex text-yellow-700 hover:text-yellow-500">
            <FaCheckCircle />
            <h3 className="text-xl pl-4 pt-1 font-semibold">CSS</h3>
          </span>
          <div className="w-full h-2 border-4 border-yellow-600 rounded-lg mt-3 "></div>
          <h3 className="float-right">100%</h3>
        </div>

        {/* Skill: TypeScript */}
        <div className="pt-3 w-1/4 ml-5">
          <span className="text-3xl flex text-yellow-700 hover:text-yellow-500">
            <FaCheckCircle />
            <h3 className="text-xl pl-4 pt-1 font-semibold">TypeScript</h3>
          </span>
          <div className="w-full h-2 border-2 border-yellow-600 rounded-lg mt-3">
            <div className="w-[70%] bg-yellow-700 h-1"></div>
          </div>
          <h3 className="float-right">70%</h3>
        </div>

        {/* Skill: Tailwind */}
        <div className="pt-3 w-1/4">
          <span className="text-3xl flex text-yellow-700 hover:text-yellow-500">
            <FaCheckCircle />
            <h3 className="text-xl pl-4 pt-1 font-semibold">Tailwind</h3>
          </span>
          <div className="w-full h-2 border-2 border-yellow-600 rounded-lg mt-3">
            <div className="w-[80%] bg-yellow-700 h-1"></div>
          </div>
          <h3 className="float-right">80%</h3>
        </div>

        {/* Skill: Python */}
        <div className="pt-3 w-1/4 ml-5">
          <span className="text-3xl flex text-yellow-700 hover:text-yellow-500">
            <FaCheckCircle />
            <h3 className="text-xl pl-4 pt-1 font-semibold">Python</h3>
          </span>
          <div className="w-full h-2 border-2 border-yellow-600 rounded-lg mt-3 "></div>
          <h3 className="float-right">0%</h3>
        </div>
      </CardContent>
    </Card>
  );
}
