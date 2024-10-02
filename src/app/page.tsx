import { Sparkles, Droplet, Shield } from "lucide-react";
import DownloadCatalogue from "./_components/DownloadCatalogue";

export default function LandingPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Revolutionize Your Cleaning Routine
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Discover our range of eco-friendly, powerful cleaning solutions
                for a spotless home.
              </p>
            </div>
            <div className="space-x-4">
              <DownloadCatalogue />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
            Why Choose Clean Touch?
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <Sparkles className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Powerful Cleaning</h3>
              <p className="text-gray-500">
                Our products are formulated for maximum effectiveness on tough
                stains.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Shield className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Eco-Friendly</h3>
              <p className="text-gray-500">
                All our products are biodegradable and safe for the environment.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Droplet className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Versatile Solutions</h3>
              <p className="text-gray-500">
                From kitchen to bathroom, we have specialized products for every
                need.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Ready to Transform Your Cleaning?
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Download our catalogue now and discover the full range of Clean
                Touch products.
              </p>
            </div>
            <DownloadCatalogue />
          </div>
        </div>
      </section>
      {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
            Stay Connected
          </h2>
          <div className="mx-auto max-w-sm space-y-4">
            <p className="text-gray-500 text-center">
              Subscribe to our newsletter for cleaning tips, product updates,
              and exclusive offers.
            </p>
            <form className="flex flex-col gap-2">
              <Input placeholder="Enter your email" type="email" />
              <Button className="bg-blue-600 hover:bg-blue-700" type="submit">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section> */}
    </main>
  );
}
