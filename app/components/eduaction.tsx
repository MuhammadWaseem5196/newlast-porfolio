import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Education() {
  return (
    <Card data-aos="zoom-in" className="h-[85vh] overflow-y-scroll">
      <CardHeader>
        <CardTitle className="text-3xl font-serif">Education</CardTitle>
      </CardHeader>

      <CardContent className="-mt-10">
        <section className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div className="-my-8 divide-y-2 divide-gray-100">
              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="font-semibold title-font text-gray-700">
                    Bachelor&apos;s Degree
                  </span>
                  <span className="mt-1 text-gray-500 text-sm">From 2022 Till 2026</span>
                </div>
                <div className="md:flex-grow">
                  <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                    Federal Urdu University Karachi (Gulshan Campus)
                  </h2>
                  <p className="leading-relaxed">
                    Bachelor&apos;s from Urdu University is very educational and effective. I am specializing in marketing, which is my favorite subject.
                  </p>
                </div>
              </div>

              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="font-semibold title-font text-gray-700">
                    Intermediate
                  </span>
                  <span className="mt-1 text-gray-500 text-sm">From 2017 To 2019</span>
                </div>
                <div className="md:flex-grow">
                  <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                    Board of Secondary Education Karachi
                  </h2>
                  <p className="leading-relaxed">
                    Studied higher education in the field of commerce.
                  </p>
                </div>
              </div>

              <div className="py-8 flex flex-wrap md:flex-nowrap">
                <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                  <span className="font-semibold title-font text-gray-700">
                    AI Specialization In Marketing
                  </span>
                  <span className="text-sm text-gray-500">From 2024 Till 2026</span>
                </div>
                <div className="md:flex-grow">
                  <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                    At Governor House Karachi Sindh (Initiative by Kamran Khan Tessori, Governor Sindh)
                  </h2>
                  <p className="leading-relaxed">
                    We are learning AI, starting with HTML and covering all the required languages and frameworks. It will help us grow, InshaAllah.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </CardContent>
    </Card>
  );
}
