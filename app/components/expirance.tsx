import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Experience() {
  const Experience = [
    {
      company: "Shanfoods",
      position: "Admin Officer",
      rest: [
        "Building Maintenance",
        "Gate Controlling",
        "Surveillance Management",
        "Labour-Uniform",
        "Compliance",
      ],
      from: "March-2018",
      To: "April-2022",
      Detail:
        "I was glad to say that I worked with Shanfoods. It's a great company that keeps its workers happy and provides a good environment.",
    },
  ];

  return (
    <Card data-aos="zoom-in" className="h-[85vh] overflow-y-scroll bg-white border border-gray-200 shadow-lg">
      <CardHeader>
        <CardTitle className="text-3xl font-serif text-[#133E87]">Experience</CardTitle>
      </CardHeader>

      <CardContent className="-mt-10">
        <section className="text-gray-600 body-font overflow-hidden bg-gray-50">
          <div className="container px-5 py-24 mx-auto">
            <div className="-my-8 divide-y-2 divide-gray-200">
              {Experience.map((item, i) => (
                <div key={i} className="py-8 flex flex-wrap md:flex-nowrap">
                  <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                    <span className="font-semibold title-font text-yellow-600">{item.position}</span>
                    <span className="mt-1 text-gray-500 text-sm">{`${item.from} - ${item.To}`}</span>
                  </div>
                  <div className="md:flex-grow">
                    <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                      {item.company}
                    </h2>
                    <p className="leading-relaxed text-gray-700">{item.Detail}</p>
                    <ul className="list-disc pt-3 pl-4 space-y-1 text-gray-600">
                      {item.rest.map((one, i) => (
                        <li key={i}>{one}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </CardContent>
    </Card>
  );
}
