import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  FaCheckCircle,
  FaPhone,
  FaEnvelope,
  FaTruck,
  FaMapMarkerAlt,
  FaCar,
  FaCalendarAlt,
  FaDollarSign,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaExclamationTriangle,
  FaInfoCircle,
  FaPrint,
} from 'react-icons/fa';
import Navbar from '@/components/CommonComponents/Navbar';
import Footer from '@/components/CommonComponents/Footer';

export default function BookingConfirmation() {
  const router = useRouter();
  const { quote_id } = router.query;
  const [quoteDetails, setQuoteDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuoteDetails = async () => {
      if (!quote_id) return;
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/form/by-quote/${quote_id}`,
          {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
          }
        );
        if (!response.ok)
          throw new Error(`Failed to fetch quote details: ${response.status}`);
        const data = await response.json();
        setQuoteDetails(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchQuoteDetails();
  }, [quote_id]);

  const handlePrint = () => {
    window.print();
  };

  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading booking details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-lg shadow-lg max-w-md mx-4">
          <FaExclamationTriangle className="text-red-500 text-4xl mx-auto mb-4" />
          <h2 className="text-xl font-bold text-gray-800 mb-2">Error Loading Booking</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => router.push('/')}
            className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  if (!quoteDetails) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-lg shadow-lg max-w-md mx-4">
          <FaInfoCircle className="text-blue-500 text-4xl mx-auto mb-4" />
          <h2 className="text-xl font-bold text-gray-800 mb-2">No Booking Found</h2>
          <p className="text-gray-600 mb-4">We couldn't find a booking with that ID.</p>
          <button
            onClick={() => router.push('/')}
            className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition-colors"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  const formResponse = { data: quoteDetails };

  return (
    <div className="min-h-screen bg-gray-50 ">
      {/* Inline Print Styles */}
      <style jsx global>{`
        @media print {
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
            color-adjust: exact;
          }
          /* Ensure Tailwind background classes are applied in print */
          .bg-rapidcolor {
            background-color: var(--rapidcolor, #FF6200) !important;
          }
          .bg-blue-900 {
            background-color: #1E3A8A !important; /* Tailwind blue-900 */
          }
          .bg-blue-50 {
            background-color: #EFF6FF !important; /* Tailwind blue-50 */
          }
          .bg-gray-50 {
            background-color: #F9FAFB !important; /* Tailwind gray-50 */
          }
          .bg-green-500 {
            background-color: #10B981 !important; /* Tailwind green-500 */
          }
          .bg-yellow-50 {
            background-color: #FFFBEB !important; /* Tailwind yellow-50 */
          }
          .bg-white {
            background-color: #FFFFFF !important;
          }
          /* Ensure text colors for contrast */
          .text-white {
            color: #FFFFFF !important;
          }
          .text-rapidcolor {
            color: var(--rapidcolor, #FF6200) !important;
          }
          /* Hide non-printable elements */
          .print\\:hidden {
            display: none !important;
          }
        }
      `}</style>

      {/* Navbar - Hidden in print */}
      <div className="print:hidden">
        <Navbar />
      </div>

      {/* Print Button - Hidden in print */}
    

      {/* Main Content - Printable Section */}
      <div id="printable-content" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          
          {/* Header */}
          <div className="bg-blue-900 text-white text-center py-8 px-4">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 print:hidden">
        
      </div>
            <img
              src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1746259898/icons/Rapid%20Email%20Logo.png"
              alt="Rapid Auto Shipping Logo"
              className="max-w-xs h-auto mx-auto mb-4"
            />
            <h1 className="text-2xl sm:text-3xl font-bold mb-2">BOOKING CONFIRMATION</h1>
            <p className="text-lg opacity-90 italic">Your Vehicle Transport is Confirmed!</p>
            <button
          onClick={handlePrint}
          className="flex items-center bg-rapidcolor hover:bg-rapidcolor-dark text-white px-4 py-2 rounded-lg transition-colors shadow-lg"
        >
          <FaPrint className="mr-2" />
          Download 
        </button>
            
          </div>

          {/* Main Content */}
          <div className="p-4 sm:p-6 lg:p-8">
            <p className="text-gray-700 mb-6 text-sm sm:text-base">
              Thank you for choosing Rapid Auto Shipping! Your vehicle transport booking has been successfully processed.
              Please review the details below and keep this confirmation for your records.
            </p>

            {/* Confirmation Box */}
            <div className="bg-gray-50 border-2 border-dashed border-rapidcolor rounded-lg p-6 text-center mb-8">
              <h2 className="text-lg sm:text-xl text-gray-800 font-semibold mb-2">BOOKING CONFIRMATION NUMBER</h2>
              <div className="text-2xl sm:text-3xl font-bold text-rapidcolor mb-2">
                RAS-{formResponse.data.quote_id}
              </div>
              <div className="text-sm sm:text-base text-gray-600 mb-4">Booking Date: {today}</div>
              <div className="inline-flex items-center bg-green-500 text-white font-bold px-4 py-2 rounded-full">
                <FaCheckCircle className="mr-2" />
                CONFIRMED
              </div>
            </div>

            {/* Customer Information */}
            <div className="mb-8">
              <h2 className="text-lg sm:text-xl font-bold text-blue-900 border-b-2 border-blue-900 pb-2 mb-4">
                Customer Information
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-blue-50 border-l-4 border-blue-900 rounded p-4">
                  <div className="font-semibold text-blue-900 text-sm mb-1">Name:</div>
                  <div className="text-gray-800">{formResponse.data.username}</div>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-900 rounded p-4">
                  <div className="font-semibold text-blue-900 text-sm mb-1">Phone:</div>
                  <div className="text-gray-800">{formResponse.data.phone}</div>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-900 rounded p-4 sm:col-span-2">
                  <div className="font-semibold text-blue-900 text-sm mb-1">Email:</div>
                  <div className="text-gray-800 break-words">{formResponse.data.email}</div>
                </div>
              </div>
            </div>

            {/* Vehicle & Route Details */}
            <div className="mb-8">
              <h2 className="text-lg sm:text-xl font-bold text-blue-900 border-b-2 border-blue-900 pb-2 mb-4">
                Vehicle & Route Details
              </h2>
              <div className="space-y-6">
                {/* Main Vehicle */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <div className="font-semibold text-blue-900 mb-2 flex items-center">
                      <FaCar className="mr-2" /> Vehicle:
                    </div>
                    <div className="bg-blue-50 border-l-3 border-blue-900 p-3 rounded">
                      {formResponse.data.year} {formResponse.data.make} {formResponse.data.model}
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-blue-900 mb-2">Vehicle Condition:</div>
                    <div className="bg-blue-50 border-l-3 border-blue-900 p-3 rounded">
                      <span className="inline-block bg-rapidcolor text-white px-3 py-1 rounded text-sm font-semibold">
                        {formResponse.data.vehicle_type}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Additional Cars */}
                {formResponse.data.cars && formResponse.data.cars.length > 0 && (
                  <div className="space-y-4">
                    {formResponse.data.cars.map((car, index) => (
                      <div key={index} className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t pt-4">
                        <div>
                          <div className="font-semibold text-blue-900 mb-2 flex items-center">
                            <FaCar className="mr-2" /> Vehicle {index + 2}:
                          </div>
                          <div className="bg-blue-50 border-l-3 border-blue-900 p-3 rounded">
                            {car.year} {car.make} {car.model}
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold text-blue-900 mb-2">Vehicle Condition:</div>
                          <div className="bg-blue-50 border-l-3 border-blue-900 p-3 rounded">
                            <span className="inline-block bg-rapidcolor text-white px-3 py-1 rounded text-sm font-semibold">
                              {car.vehicle_type}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Route Information */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <div className="font-semibold text-blue-900 mb-2 flex items-center">
                      <FaMapMarkerAlt className="mr-2 text-blue-600" /> Pickup Location:
                    </div>
                    <div className="bg-blue-50 border-l-3 border-blue-900 p-3 rounded">
                      {formResponse.data.extra_pickup_info && formResponse.data.extra_pickup_info.length > 0 ? (
                        formResponse.data.extra_pickup_info.map((pickup, index) => (
                          <div key={index} className="border-l-2 border-blue-400 pl-3 mb-3 last:mb-0">
                            <p className="mb-1"><span className="font-semibold">From:</span> {formResponse.data.ship_form}</p>
                            {pickup.address && <p className="mb-1"><span className="font-semibold">Address:</span> {pickup.address}</p>}
                            {pickup.address_type?.type && <p className="mb-1"><span className="font-semibold">Type:</span> {pickup.address_type.type}</p>}
                            {pickup.address_type?.businessType && <p className="mb-1"><span className="font-semibold">Business Type:</span> {pickup.address_type.businessType}</p>}
                            {pickup.address_type?.company_name && <p className="mb-1"><span className="font-semibold">Business Name:</span> {pickup.address_type.company_name}</p>}
                            {pickup.address_type?.vin_number && <p className="mb-1"><span className="font-semibold">VIN:</span> {pickup.address_type.vin_number}</p>}
                            {pickup.instruction && <p className="mb-1"><span className="font-semibold">Instructions:</span> {pickup.instruction}</p>}
                          </div>
                        ))
                      ) : (
                        <p>{formResponse.data.ship_form}</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold text-blue-900 mb-2 flex items-center">
                      <FaMapMarkerAlt className="mr-2 text-green-600" /> Delivery Location:
                    </div>
                    <div className="bg-blue-50 border-l-3 border-blue-900 p-3 rounded">
                      {formResponse.data.extra_delivery_info && formResponse.data.extra_delivery_info.length > 0 ? (
                        formResponse.data.extra_delivery_info.map((delivery, index) => (
                          <div key={index} className="border-l-2 border-green-400 pl-3 mb-3 last:mb-0">
                            <p className="mb-1"><span className="font-semibold">To:</span> {formResponse.data.ship_to}</p>
                            {delivery.address && <p className="mb-1"><span className="font-semibold">Address:</span> {delivery.address}</p>}
                            {delivery.address_type?.type && <p className="mb-1"><span className="font-semibold">Type:</span> {delivery.address_type.type}</p>}
                            {delivery.address_type?.businessType && <p className="mb-1"><span className="font-semibold">Business Type:</span> {delivery.address_type.businessType}</p>}
                            {delivery.address_type?.company_name && <p className="mb-1"><span className="font-semibold">Business Name:</span> {delivery.address_type.company_name}</p>}
                            {delivery.instruction && <p className="mb-1"><span className="font-semibold">Instructions:</span> {delivery.instruction}</p>}
                          </div>
                        ))
                      ) : (
                        <p>{formResponse.data.ship_to}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-blue-50 border-l-4 border-blue-900 rounded p-4">
                    <div className="font-semibold text-blue-900 text-sm mb-1 flex items-center">
                      <FaPhone className="mr-2" /> Pickup Contact:
                    </div>
                    <div className="text-gray-800 text-sm">
                      {formResponse.data.extra_pickup_info?.[0]?.person_name || formResponse.data.username},{' '}
                      {formResponse.data.extra_pickup_info?.[0]?.contact_number || formResponse.data.phone}
                    </div>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-blue-900 rounded p-4">
                    <div className="font-semibold text-blue-900 text-sm mb-1 flex items-center">
                      <FaPhone className="mr-2" /> Delivery Contact:
                    </div>
                    <div className="text-gray-800 text-sm">
                      {formResponse.data.extra_delivery_info?.[0]?.person_name || formResponse.data.username},{' '}
                      {formResponse.data.extra_delivery_info?.[0]?.contact_number || formResponse.data.phone}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Transport Details */}
            <div className="mb-8">
              <h2 className="text-lg sm:text-xl font-bold text-blue-900 border-b-2 border-blue-900 pb-2 mb-4">
                Transport Details
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-blue-50 border-l-4 border-blue-900 rounded p-4">
                  <div className="font-semibold text-blue-900 text-sm mb-1 flex items-center">
                    <FaTruck className="mr-2" /> Transport Type:
                  </div>
                  <div className="text-gray-800">{formResponse.data.transport_method}</div>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-900 rounded p-4">
                  <div className="font-semibold text-blue-900 text-sm mb-1 flex items-center">
                    <FaCalendarAlt className="mr-2" /> Pickup Date:
                  </div>
                  <div className="text-gray-800">{formResponse.data.pickup_date}</div>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-900 rounded p-4">
                  <div className="font-semibold text-blue-900 text-sm mb-1">Distance:</div>
                  <div className="text-gray-800">{formResponse.data.distance}</div>
                </div>
              </div>
            </div>

            {/* Payment Information */}
            <div className="mb-8">
              <h2 className="text-lg sm:text-xl font-bold text-blue-900 border-b-2 border-blue-900 pb-2 mb-4 flex items-center">
                <FaDollarSign className="mr-2" /> Payment Information
              </h2>
              <div className="bg-gray-50 rounded-lg overflow-hidden">
                <div className="border-b border-gray-200 p-4">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-blue-900">Total Transport Fee</span>
                    <span className="font-bold text-blue-900 text-lg">${formResponse.data.price + formResponse.data.insurance_price}.00</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="font-semibold text-blue-900 mb-3">Payment Method</div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Partial at Pickup</li>
                        <li>• Balance on Delivery</li>
                      </ul>
                    </div>
                    <div>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Card on File</li>
                        <li>• Cash / Zelle / Certified Check</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded text-sm text-gray-700">
                    <strong>Note:</strong> Balance due must be paid to the driver at the time of delivery in the form of Cash, Zelle, Check, or Card.
                  </div>
                </div>
              </div>
            </div>

            {/* Shipping Progress */}
            <div className="mb-8">
              <h2 className="text-lg sm:text-xl font-bold text-blue-900 border-b-2 border-blue-900 pb-2 mb-4">
                Shipping Progress
              </h2>
              <div className="relative pl-8">
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-rapidcolor"></div>
                <div className="space-y-6">
                  <div className="relative">
                    <div className="absolute -left-6 w-6 h-6 bg-green-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                      <FaCheckCircle className="text-white text-xs" />
                    </div>
                    <div className="font-semibold text-blue-900">Booking Confirmed</div>
                    <div className="text-sm text-gray-600">Your vehicle transport has been booked and confirmed.</div>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-6 w-6 h-6 bg-rapidcolor rounded-full border-2 border-white shadow-lg"></div>
                    <div className="font-semibold text-blue-900">Driver Assignment</div>
                    <div className="text-sm text-gray-600">A driver will be assigned to transport your vehicle.</div>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-6 w-6 h-6 bg-rapidcolor rounded-full border-2 border-white shadow-lg"></div>
                    <div className="font-semibold text-blue-900">Vehicle Pickup</div>
                    <div className="text-sm text-gray-600">Your vehicle will be picked up within the scheduled pickup window.</div>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-6 w-6 h-6 bg-rapidcolor rounded-full border-2 border-white shadow-lg"></div>
                    <div className="font-semibold text-blue-900">In Transit</div>
                    <div className="text-sm text-gray-600">Your vehicle is being transported to the destination.</div>
                  </div>
                  <div className="relative">
                    <div className="absolute -left-6 w-6 h-6 bg-rapidcolor rounded-full border-2 border-white shadow-lg"></div>
                    <div className="font-semibold text-blue-900">Vehicle Delivery</div>
                    <div className="text-sm text-gray-600">Your vehicle will be delivered to the destination address.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Information */}
            <div className="mb-8 bg-yellow-50 border-l-4 border-yellow-400 rounded-lg p-4 sm:p-6">
              <div className="flex items-center mb-4">
                <FaExclamationTriangle className="text-yellow-600 text-xl mr-3" />
                <div className="text-lg font-bold text-yellow-800">IMPORTANT INFORMATION</div>
              </div>
              <ul className="space-y-2 text-sm text-yellow-800">
                <li>• You will receive a call 4-24 hours before pickup to arrange the exact time.</li>
                <li>• Please ensure the vehicle is accessible for loading and unloading.</li>
                <li>• Remove all personal belongings from the vehicle (up to 100 lbs in trunk is permitted).</li>
                <li>• Vehicle should have no more than 1/4 tank of fuel.</li>
                <li>• Document any existing damage before transport.</li>
                <li>• Have keys and proper identification ready at pickup and delivery.</li>
              </ul>
            </div>

            {/* Next Steps */}
            <div className="mb-8">
              <h2 className="text-lg sm:text-xl font-bold text-blue-900 border-b-2 border-blue-900 pb-2 mb-4">
                NEXT STEPS
              </h2>
              <div className="bg-blue-50 rounded-lg p-4 sm:p-6">
                <div className="space-y-6">
                  {[
                    {
                      step: "1",
                      title: "Prepare Your Vehicle",
                      description: "Clean your vehicle, document any existing damage with photos, and remove personal items.",
                    },
                    {
                      step: "2",
                      title: "Await Driver Assignment",
                      description: "We'll notify you when a driver has been assigned to your shipment.",
                    },
                    {
                      step: "3",
                      title: "Coordinate Pickup",
                      description: "The driver will contact you 4-24 hours before pickup to arrange the exact time.",
                    },
                    {
                      step: "4",
                      title: "Track Your Shipment",
                      description: "Use our tracking system to monitor your vehicle's transport progress.",
                    },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start">
                      <div className="bg-blue-900 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {item.step}
                      </div>
                      <div className="ml-4">
                        <div className="font-semibold text-blue-900 mb-1">{item.title}</div>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Customer Support */}
            <div className="mb-8 bg-blue-50 rounded-lg p-4 sm:p-6 text-center">
              <div className="text-lg font-bold text-blue-900 mb-2">QUESTIONS OR CONCERNS?</div>
              <p className="text-gray-600 mb-4">Your dedicated transport coordinator is here to help!</p>
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 mb-4">
                <a href="tel:+18332334447" className="flex items-center text-rapidcolor hover:text-rapidcolor-dark font-semibold">
                  <FaPhone className="mr-2" />
                  (833) 233-4447
                </a>
                <a href="mailto:info@rapidautoshipping.com" className="flex items-center text-rapidcolor hover:text-rapidcolor-dark font-semibold">
                  <FaEnvelope className="mr-2" />
                  info@rapidautoshipping.com
                </a>
              </div>
            </div>

            {/* Trust Badges Section */}
            <div className="text-center border-t border-b border-gray-200 py-8 mb-8">
              <div className="font-bold text-blue-900 mb-4">TRUSTED & VERIFIED</div>
              <div className="flex justify-center items-center gap-6 mb-4 flex-wrap">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEA6ADJL9ERbuIbk98s5WjGh42VA2jCHuW3w&s" alt="BBB Accredited" width={80} height={60} />
                <img src="https://logos-world.net/wp-content/uploads/2023/12/Google-Review-Logo.png" alt="Google Reviews" width={80} height={60} />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWulc83HNaumGVws9oUcpQ0xD7vfvYPaonPg&s" alt="FMCSA Licensed" width={80} height={60} />
              </div>
              <div className="font-bold text-blue-900">Bonded and Fully Insured as per FMCSA Guidelines</div>
            </div>

            {/* Contact Info */}
            <div className="text-center mb-8">
              <p className="mb-4">Our team is working on your order. You will receive another email with your personalized quotation shortly.</p>
              <div className="print:hidden">
                <a
                  href="tel:+18332334447"
                  className="inline-flex items-center gap-2 bg-rapidcolor hover:bg-rapidcolor-dark text-white px-6 py-3 rounded font-bold transition-colors"
                >
                  <FaPhone /> CALL US: (833) 233-4447
                </a>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="text-center print:hidden">
              <div className="text-sm text-gray-600 mb-4">CONNECT WITH US</div>
              <div className="flex justify-center gap-4">
                <a href="https://www.facebook.com/rapidautoshipping" className="text-blue-600 hover:text-blue-800 transition-colors">
                  <FaFacebook size={32} />
                </a>
                <a href="https://x.com/ShippingRapid" className="text-blue-400 hover:text-blue-600 transition-colors">
                  <FaTwitter size={32} />
                </a>
                <a href="https://www.instagram.com/rapidautoshipping" className="text-rapidcolor hover:text-rapidcolor-dark transition-colors">
                  <FaInstagram size={32} />
                </a>
                <a href="https://www.linkedin.com/" className="text-blue-700 hover:text-blue-900 transition-colors">
                  <FaLinkedin size={32} />
                </a>
              </div>
            </div>
          </div>

          {/* Footer - Printable Section */}
          <div className="bg-blue-900 text-white text-center p-6">
            <div className="mb-2">© 2025 Rapid Auto Shipping. All Rights Reserved.</div>
            <div className="mb-4">USDOT: 4320359 | MC: 1685548</div>
            <div className="print:hidden space-x-4">
              <a href="#" className="text-white hover:text-gray-300 transition-colors">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer - Hidden in print */}
      <div className="print:hidden">
        <Footer />
      </div>
    </div>
  );
}