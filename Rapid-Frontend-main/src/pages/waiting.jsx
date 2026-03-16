import Footer from "@/components/CommonComponents/Footer";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

function thanku() {
  const router = useRouter();
  const { quote_id } = router.query;
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!quote_id) return;

    const fetchFormData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/form/by-quote/${quote_id}`
        );
        if (response.ok) {
          const data = await response.json();
          setFormData(data);
        } else {
          // Handle redirect to 404
        }
      } catch (error) {
        console.error("Error fetching form data:", error);
        // Handle redirect to 404
      } finally {
        setLoading(false);
      }
    };

    fetchFormData();
  }, [quote_id, router]);

  if (loading) {
    return (
      <div className="max-w-md mx-auto border border-gray-300 shadow-lg p-4 sm:p-6 font-sans">
        <p className="text-gray-700 text-center">Loading booking details...</p>
      </div>
    );
  }

  if (!formData) {
    return null;
  }

  return (
    <>
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full py-4 sm:py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xl sm:text-2xl font-semibold order-2 sm:order-1 border-b-4 border-[#535353]">
            Quote ID: {formData?.quote_id}
          </div>
          <div className="order-1 sm:order-2">
            <img
              src="/images/rapidautoshipping-logo.webp"
              alt="Logo"
              className="h-8 sm:h-10 md:h-12 w-auto"
            />
          </div>
        </div>
        <div className="w-full max-w-4xl mx-auto mt-6 sm:mt-10">
          <h3 className="text-rapidcolor text-2xl sm:text-3xl md:text-4xl font-bold text-center sm:text-left">
            HELLO <span className="text-[#535353]">{formData.username},</span>
          </h3>
          <div className="w-full py-4 sm:py-6">
            <h4 className="text-rapidcolor text-2xl sm:text-3xl md:text-4xl font-semibold text-center sm:text-left">
              Essential Tips for a Smooth Auto Shipment
            </h4>

            <div className="w-full flex flex-col sm:flex-row gap-6 mt-6 sm:mt-10">
              <div className="w-full sm:w-3/5">
                <div className="text-lg sm:text-xl md:text-2xl font-semibold leading-relaxed text-center sm:text-left">
                  We have successfully received your transportation request and
                  are currently working to secure the best possible auto
                  transport rate for shipping your vehicle.
                </div>
              </div>
              <div className="w-full sm:w-2/5 flex justify-center sm:justify-end">
                <img
                  src="/images/night-page-and-thank-you-page-image-67c6c2ad9a237.webp"
                  alt="Vehicle"
                  className="w-48 sm:w-64 md:w-72 max-w-full"
                />
              </div>
            </div>
            <div className="mt-6 text-lg sm:text-xl md:text-2xl font-semibold leading-relaxed text-[#535353] text-center sm:text-left">
              Once our transportation specialists have finalized your quote, you
              will receive an email with the details.{" "}
              <span className="text-black">
                If you have any specific preferences or questions in the
                meantime, feel free to reach out.
              </span>
            </div>
            <div className="mt-4 text-lg sm:text-xl md:text-2xl font-semibold leading-relaxed text-black text-center sm:text-left">
              Call us now at
              <span className="text-rapidcolor"> (833) 233-4447</span> to speak
              with an agent.
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default thanku;