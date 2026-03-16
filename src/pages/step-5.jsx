import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { MdOutlinePhone, MdCheckCircle, MdErrorOutline } from "react-icons/md";
import { FaFileContract, FaSignature } from "react-icons/fa";
import DynamicStepper from "@/components/CommonComponents/Stepper";

export default function AgreementPage() {
  const [companyName, setCompanyName] = useState("Our Company");
  const [serviceName, setServiceName] = useState("Our Service");
  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();
  const { quote_id } = router.query;

  useEffect(() => {
    if (!quote_id) return;

    const fetchDynamicWords = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/form/by-quote/${quote_id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch dynamic words");
        }
        const data = await response.json();
        setCompanyName(data.companyName || "TechCorp");
        setServiceName(data.serviceName || "CloudSync");
        setFormData(data);
      } catch (err) {
        setError("Failed to load dynamic content.");
        console.error("Error fetching dynamic words:", err);
        setCompanyName("TechCorp");
        setServiceName("CloudSync");
      } finally {
        setIsLoading(false);
      }
    };

    fetchDynamicWords();
  }, [quote_id]);

  const toda = new Date();
  const today = toda.toDateString(toda);

  const handleSubmit = async () => {
    if (!isChecked) return;

    setIsSubmitting(true);

    // Construct HTML email content
    const emailHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Booking Confirmation - Rapid Auto Shipping</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f5f7fa; font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; width: 100% !important;">
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f5f7fa;">
        <tr>
            <td align="center" style="padding: 20px 0;">
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" style="max-width: 600px; background-color: #ffffff; border-radius: 10px; width: 100%;">
                    <!-- Header Section -->
                    <tr>
                        <td style="background-color: #003366; padding: 20px; text-align: center; color: #ffffff;">
                            <img src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1746259898/icons/Rapid%20Email%20Logo.png" alt="Rapid Auto Shipping Logo" style="max-width: 250px; height: auto; display: block; margin: 0 auto 10px;">
                            <h1 style="font-size: 24px; font-weight: bold; margin: 10px 0; color: #ffffff;">BOOKING CONFIRMATION</h1>
                            <p style="font-size: 16px; font-style: italic; color: #ffffff; opacity: 0.9;">Your Vehicle Transport is Confirmed!</p>
                        </td>
                    </tr>
                    <!-- Main Content -->
                    <tr>
                        <td style="padding: 20px;">
                            <p style="font-size: 16px; color: #333;">Thank you for choosing Rapid Auto Shipping! Your vehicle transport booking has been successfully processed. Please review the details below and keep this confirmation for your records.</p>
                            <!-- Confirmation Box -->
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f9f9f9; border-radius: 10px; padding: 20px; margin: 20px 0; text-align: center; border: 2px dashed #FF6600;">
                                <tr>
                                    <td>
                                        <h2 style="font-size: 20px; color: #333;">BOOKING CONFIRMATION NUMBER</h2>
                                        <div style="font-size: 28px; font-weight: bold; color: #FF6600; margin: 10px 0;">RAS-${
                                          formData.quote_id
                                        }</div>
                                        <div style="font-size: 16px;">Booking Date: ${today}</div>
                                        <div style="background-color: #28a745; color: #ffffff; font-weight: bold; padding: 8px 20px; border-radius: 30px; display: inline-block; margin: 15px 0; font-size: 16px;">
                                            <span style="margin-right: 5px;">✓</span> CONFIRMED
                                        </div>
                                    </td>
                                </tr>
                            </table>
                            <!-- Customer Info Section -->
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 20px;">
                                <tr>
                                    <td style="padding-bottom: 10px;">
                                        <h2 style="font-size: 18px; font-weight: bold; color: #003366; border-bottom: 2px solid #003366; padding-bottom: 10px;">Customer Information</h2>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                                            <tr>
                                                <td style="width: 50%; padding: 10px;">
                                                    <div style="background-color: #f0f4f8; border-radius: 8px; border-left: 4px solid #003366; padding: 15px;">
                                                        <div style="font-weight: bold; color: #003366; font-size: 14px;">Name:</div>
                                                        <div style="font-size: 15px;">${
                                                          formData.username
                                                        }</div>
                                                    </div>
                                                </td>
                                                <td style="width: 50%; padding: 10px;">
                                                    <div style="background-color: #f0f4f8; border-radius: 8px; border-left: 4px solid #003366; padding: 15px;">
                                                        <div style="font-weight: bold; color: #003366; font-size: 14px;">Phone:</div>
                                                        <div style="font-size: 15px;">${
                                                          formData.phone
                                                        }</div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="width: 50%; padding: 10px;">
                                                    <div style="background-color: #f0f4f8; border-radius: 8px; border-left: 4px solid #003366; padding: 15px;">
                                                        <div style="font-weight: bold; color: #003366; font-size: 14px;">Email:</div>
                                                        <div style="font-size: 15px;">${
                                                          formData.email
                                                        }</div>
                                                    </div>
                                                </td>
                                                <td style="width: 50%; padding: 10px;"></td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            <!-- Vehicle & Route Details Section -->
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 20px;">
                                <tr>
                                    <td style="padding-bottom: 10px;">
                                        <h2 style="font-size: 18px; font-weight: bold; color: #003366; border-bottom: 2px solid #003366; padding-bottom: 10px;">Vehicle & Route Details</h2>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                                            <tr>
                                                <td width="50%" style="padding-right: 10px;">
                                                    <div style="margin-bottom: 10px;">
                                                        <span style="font-weight: bold; color: #003366; display: block; margin-bottom: 3px;">Vehicle:</span>
                                                        <div style="background-color: #f0f4f8; padding: 8px 12px; border-radius: 4px; border-left: 3px solid #003366;">
                                                            ${formData.year} ${
      formData.make
    } ${formData.model}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td width="50%" style="padding-left: 10px;">
                                                    <div style="margin-bottom: 10px;">
                                                        <span style="font-weight: bold; color: #003366; display: block; margin-bottom: 3px;">Vehicle Condition:</span>
                                                        <div style="background-color: #f0f4f8; padding: 8px 12px; border-radius: 4px; border-left: 3px solid #003366;">
                                                            <span style="display: inline-block; padding: 5px 10px; border-radius: 4px; font-size: 14px; font-weight: bold; color: white; background-color: #FF6600;">
                                                                ${
                                                                  formData.vehicle_type
                                                                }
                                                            </span>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            ${
                                              formData.cars &&
                                              formData.cars.length > 0
                                                ? formData.cars
                                                    .map(
                                                      (car, index) => `
                                            <tr>
                                                <td width="50%" style="padding-right: 10px;">
                                                    <div style="margin-bottom: 10px;">
                                                        <span style="font-weight: bold; color: #003366; display: block; margin-bottom: 3px;">Vehicle:</span>
                                                        <div style="background-color: #f0f4f8; padding: 8px 12px; border-radius: 4px; border-left: 3px solid #003366;">
                                                            ${car.year} ${car.make} ${car.model}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td width="50%" style="padding-left: 10px;">
                                                    <div style="margin-bottom: 10px;">
                                                        <span style="font-weight: bold; color: #003366; display: block; margin-bottom: 3px;">Vehicle Condition:</span>
                                                        <div style="background-color: #f0f4f8; padding: 8px 12px; border-radius: 4px; border-left: 3px solid #003366;">
                                                            <span style="display: inline-block; padding: 5px 10px; border-radius: 4px; font-size: 14px; font-weight: bold; color: white; background-color: #FF6600;">
                                                                ${car.vehicle_type}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            `
                                                    )
                                                    .join("")
                                                : ""
                                            }
                                            <tr>
                                                <td width="50%" style="padding-right: 10px;">
                                                    <div style="margin-bottom: 10px;">
                                                        <span style="font-weight: bold; color: #003366; display: block; margin-bottom: 3px;">Pickup Location:</span>
                                                        <div style="background-color: #f0f4f8; padding: 8px 12px; border-radius: 4px; border-left: 3px solid #003366;">
                                                            ${
                                                              formData.extra_pickup_info &&
                                                              formData
                                                                .extra_pickup_info
                                                                .length > 0
                                                                ? formData.extra_pickup_info
                                                                    .map(
                                                                      (
                                                                        pickup,
                                                                        index
                                                                      ) => `
                                                            <div style="border-left: 2px solid #0055cc; padding-left: 10px; margin-bottom: 10px;">
                                                                <p style="margin-bottom: 5px;"><span style="font-weight: bold; color: #003366;">From:</span> ${
                                                                  formData.ship_form
                                                                }</p>
                                                                ${
                                                                  pickup.address
                                                                    ? `<p style="margin-bottom: 5px;"><span style="font-weight: bold; color: #003366;">Address:</span> ${pickup.address}</p>`
                                                                    : ""
                                                                }
                                                                ${
                                                                  pickup
                                                                    .address_type
                                                                    ?.type
                                                                    ? `<p style="margin-bottom: 5px;"><span style="font-weight: bold; color: #003366;">Address Type:</span> ${pickup.address_type.type}</p>`
                                                                    : ""
                                                                }
                                                                ${
                                                                  pickup
                                                                    .address_type
                                                                    ?.businessType
                                                                    ? `<p style="margin-bottom: 5px;"><span style="font-weight: bold; color: #003366;">Business Type:</span> ${pickup.address_type.businessType}</p>`
                                                                    : ""
                                                                }
                                                                ${
                                                                  pickup
                                                                    .address_type
                                                                    ?.company_name
                                                                    ? `<p style="margin-bottom: 5px;"><span style="font-weight: bold; color: #003366;">Business Name:</span> ${pickup.address_type.company_name}</p>`
                                                                    : ""
                                                                }
                                                                ${
                                                                  pickup
                                                                    .address_type
                                                                    ?.vin_number
                                                                    ? `<p style="margin-bottom: 5px;"><span style="font-weight: bold; color: #003366;">VIN Number:</span> ${pickup.address_type.vin_number}</p>`
                                                                    : ""
                                                                }
                                                                ${
                                                                  pickup.instruction
                                                                    ? `<p style="margin-bottom: 5px;"><span style="font-weight: bold; color: #003366;">Instructions:</span> ${pickup.instruction}</p>`
                                                                    : ""
                                                                }
                                                            </div>
                                                            `
                                                                    )
                                                                    .join("")
                                                                : `<p>${formData.ship_form}</p>`
                                                            }
                                                        </div>
                                                    </div>
                                                </td>
                                                <td width="50%" style="padding-left: 10px;">
                                                    <div style="margin-bottom: 10px;">
                                                        <span style="font-weight: bold; color: #003366; display: block; margin-bottom: 3px;">Delivery Location:</span>
                                                        <div style="background-color: #f0f4f8; padding: 8px 12px; border-radius: 4px; border-left: 3px solid #003366;">
                                                            ${
                                                              formData.extra_delivery_info &&
                                                              formData
                                                                .extra_delivery_info
                                                                .length > 0
                                                                ? formData.extra_delivery_info
                                                                    .map(
                                                                      (
                                                                        delivery,
                                                                        index
                                                                      ) => `
                                                            <div style="border-left: 2px solid #00cc00; padding-left: 10px; margin-bottom: 10px;">
                                                                <p style="margin-bottom: 5px;"><span style="font-weight: bold; color: #003366;">To:</span> ${
                                                                  formData.ship_to
                                                                }</p>
                                                                ${
                                                                  delivery.address
                                                                    ? `<p style="margin-bottom: 5px;"><span style="font-weight: bold; color: #003366;">Address:</span> ${delivery.address}</p>`
                                                                    : ""
                                                                }
                                                                ${
                                                                  delivery
                                                                    .address_type
                                                                    ?.type
                                                                    ? `<p style="margin-bottom: 5px;"><span style="font-weight: bold; color: #003366;">Address Type:</span> ${delivery.address_type.type}</p>`
                                                                    : ""
                                                                }
                                                                ${
                                                                  delivery
                                                                    .address_type
                                                                    ?.businessType
                                                                    ? `<p style="margin-bottom: 5px;"><span style="font-weight: bold; color: #003366;">Business Type:</span> ${delivery.address_type.businessType}</p>`
                                                                    : ""
                                                                }
                                                                ${
                                                                  delivery
                                                                    .address_type
                                                                    ?.company_name
                                                                    ? `<p style="margin-bottom: 5px;"><span style="font-weight: bold; color: #003366;">Business Name:</span> ${delivery.address_type.company_name}</p>`
                                                                    : ""
                                                                }
                                                                ${
                                                                  delivery.instruction
                                                                    ? `<p style="margin-bottom: 5px;"><span style="font-weight: bold; color: #003366;">Instructions:</span> ${delivery.instruction}</p>`
                                                                    : ""
                                                                }
                                                            </div>
                                                            `
                                                                    )
                                                                    .join("")
                                                                : `<p>${formData.ship_to}</p>`
                                                            }
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="width: 50%; padding: 10px;">
                                                    <div style="background-color: #f0f4f8; border-radius: 8px; border-left: 4px solid #003366; padding: 15px;">
                                                        <div style="font-weight: bold; color: #003366; font-size: 14px;">Pickup Contact:</div>
                                                        <div style="font-size: 15px;">${
                                                          formData
                                                            .extra_pickup_info?.[0]
                                                            ?.person_name ||
                                                          formData.username
                                                        }, ${
      formData.extra_pickup_info?.[0]?.contact_number || formData.phone
    }</div>
                                                    </div>
                                                </td>
                                                <td style="width: 50%; padding: 10px;">
                                                    <div style="background-color: #f0f4f8; border-radius: 8px; border-left: 4px solid #003366; padding: 15px;">
                                                        <div style="font-weight: bold; color: #003366; font-size: 14px;">Delivery Contact:</div>
                                                        <div style="font-size: 15px;">${
                                                          formData
                                                            .extra_delivery_info?.[0]
                                                            ?.person_name ||
                                                          formData.username
                                                        }, ${
      formData.extra_delivery_info?.[0]?.contact_number || formData.phone
    }</div>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            <!-- Transport Details Section -->
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 20px;">
                                <tr>
                                    <td style="padding-bottom: 10px;">
                                        <h2 style="font-size: 18px; font-weight: bold; color: #003366; border-bottom: 2px solid #003366; padding-bottom: 10px;">Transport Details</h2>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                                            <tr>
                                                <td style="width: 50%; padding: 10px;">
                                                    <div style="background-color: #f0f4f8; border-radius: 8px; border-left: 4px solid #003366; padding: 15px;">
                                                        <div style="font-weight: bold; color: #003366; font-size: 14px;">Transport Type:</div>
                                                        <div style="font-size: 15px;">${
                                                          formData.transport_method
                                                        }</div>
                                                    </div>
                                                </td>
                                                <td style="width: 50%; padding: 10px;">
                                                    <div style="background-color: #f0f4f8; border-radius: 8px; border-left: 4px solid #003366; padding: 15px;">
                                                        <div style="font-weight: bold; color: #003366; font-size: 14px;">Pickup Date:</div>
                                                        <div style="font-size: 15px;">${
                                                          formData.pickup_date
                                                        }</div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="width: 50%; padding: 10px;">
                                                    <div style="background-color: #f0f4f8; border-radius: 8px; border-left: 4px solid #003366; padding: 15px;">
                                                        <div style="font-weight: bold; color: #003366; font-size: 14px;">Distance:</div>
                                                        <div style="font-size: 15px;">${
                                                          formData.distance
                                                        }</div>
                                                    </div>
                                                </td>
                                                <td style="width: 50%; padding: 10px;"></td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            <!-- Price Breakdown Section -->
            <div style="margin-bottom: 25px;">
                <h2 style="font-size: 18px; font-weight: bold; color: #003366; border-bottom: 2px solid #003366; padding-bottom: 10px;">Payment Information</h2>
                <table cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse: collapse;">
                    <tr style="border-bottom: 1px solid #eee;">
                        <td style="padding: 10px 0; font-weight: bold; color: #003366;">Base Transport Fee</td>
                        <td style="padding: 10px 0; text-align: right;">$${
                          formData.price
                        }.00</td>
                    </tr>
                    
                    <tr style="border-bottom: 1px solid #eee;">
                        <td style="padding: 10px 0; font-weight: bold; color: #003366;">Insurance Coverage</td>
                       <td style="padding: 10px 0; text-align: right;">
  ${formData.insurance_price ? `$${formData.insurance_price}` : "included"}
</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #eee;">
                        <td style="padding: 10px 0; font-weight: bold; color: #003366;">Door-to-Door Service</td>
                        <td style="padding: 10px 0; text-align: right;">Included</td>
                    </tr>
                    <tr>
                        <td style="padding: 15px 0; font-weight: bold; color: #003366; font-size: 18px;">TOTAL</td>
                        <td
                            style="padding: 15px 0; text-align: right; font-weight: bold; color: #FF6600; font-size: 18px;">
                           $${
                             Number(formData.price) + formData.insurance_price
                           }.00 </td>
                    </tr>

                     <!-- Payment Method Row -->
  <tr>
    <td colspan="2" style="padding: 10px;">
      <table style="width: 100%; border-collapse: collapse;">
      
      <p style="padding: 2px; font-weight: bold; color: #003366; text-align: left;">Payment Method</p>
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 10px; font-weight: 600; font-size: 16px; color: #1a3c5e; text-align: left; width: 50%;">
           <ul style="list-style-type: disc; margin: 10px 0 0 20px; padding: 0; font-weight: 400;">
              <li style="margin-bottom: 8px;">Partial at Pickup</li>
              <li>Balance on Delivery</li>
            </ul>
          </td>
          <td style="padding: 10px; font-weight: 600; font-size: 16px; color: #1a3c5e; text-align: left; width: 50%;">
            <ul style="list-style-type: none; margin: 10px 0 0 0; padding: 0; font-weight: 400;">
              <li >Card on File</li>
              <li>Cash / Zelle / Certified Check</li>
            </ul>
          </td>
        </tr>
                </table>
            </div>
            <div style="margin:auto;">
            <a 
  href="https://rapidautoshipping.com/acknowledge?quote_id=${
    formData.quote_id
  }" 
  style="font:bold; display: inline-block; margin-left: auto; margin-right: auto; padding-left: 1.5rem; padding-right: 1.5rem; padding-top: 0.75rem; padding-bottom: 0.75rem; background-color: #ea580c; color: #ffffff; border-radius: 0.5rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1); transition-property: color, background-color, border-color, text-decoration-color, fill, stroke; transition-duration: 200ms;"
>
  I Acknowledge
</a>
</div>
                            <!-- Shipping Progress -->
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 20px;">
                                <tr>
                                    <td style="padding-bottom: 10px;">
                                        <h2 style="font-size: 18px; font-weight: bold; color: #003366; border-bottom: 2px solid #003366; padding-bottom: 10px;">Shipping Progress</h2>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding-left: 30px; position: relative;">
                                        <div style="position: absolute; top: 0; left: 15px; width: 2px; height: 100%; background-color: #FF6600;"></div>
                                        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                                            <tr>
                                                <td style="position: relative; padding-bottom: 20px;">
                                                    <div style="position: absolute; top: 5px; left: -30px; width: 30px; height: 30px; border-radius: 50%; background-color: #ffffff; border: 2px solid #28a745; z-index: 1;"></div>
                                                    <div style="font-weight: bold; color: #003366; font-size: 16px;">Booking Confirmed</div>
                                                    <div style="font-size: 14px; color: #666;">Your vehicle transport has been booked and confirmed.</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="position: relative; padding-bottom: 20px;">
                                                    <div style="position: absolute; top: 5px; left: -30px; width: 30px; height: 30px; border-radius: 50%; background-color: #ffffff; border: 2px solid #FF6600; z-index: 1;"></div>
                                                    <div style="font-weight: bold; color: #003366; font-size: 16px;">Driver Assignment</div>
                                                    <div style="font-size: 14px; color: #666;">A driver will be assigned to transport your vehicle.</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="position: relative; padding-bottom: 20px;">
                                                    <div style="position: absolute; top: 5px; left: -30px; width: 30px; height: 30px; border-radius: 50%; background-color: #ffffff; border: 2px solid #FF6600; z-index: 1;"></div>
                                                    <div style="font-weight: bold; color: #003366; font-size: 16px;">Vehicle Pickup</div>
                                                    <div style="font-size: 14px; color: #666;">Your vehicle will be picked up within the scheduled pickup window.</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="position: relative; padding-bottom: 20px;">
                                                    <div style="position: absolute; top: 5px; left: -30px; width: 30px; height: 30px; border-radius: 50%; background-color: #ffffff; border: 2px solid #FF6600; z-index: 1;"></div>
                                                    <div style="font-weight: bold; color: #003366; font-size: 16px;">In Transit</div>
                                                    <div style="font-size: 14px; color: #666;">Your vehicle is being transported to the destination.</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="position: relative;">
                                                    <div style="position: absolute; top: 5px; left: -30px; width: 30px; height: 30px; border-radius: 50%; background-color: #ffffff; border: 2px solid #FF6600; z-index: 1;"></div>
                                                    <div style="font-weight: bold; color: #003366; font-size: 16px;">Vehicle Delivery</div>
                                                    <div style="font-size: 14px; color: #666;">Your vehicle will be delivered to the destination address.</div>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            <!-- Important Information -->
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #fef8e8; border-radius: 10px; padding: 20px; margin: 20px 0; border-left: 4px solid #ffc107;">
                                <tr>
                                    <td>
                                        <div style="font-size: 18px; font-weight: bold; color: #856404; margin-bottom: 10px;">IMPORTANT INFORMATION</div>
                                        <ul style="padding-left: 20px; color: #856404; font-size: 14px;">
                                            <li style="margin-bottom: 8px;">You will receive a call 4-24 hours before pickup to arrange the exact time.</li>
                                            <li style="margin-bottom: 8px;">Please ensure the vehicle is accessible for loading and unloading.</li>
                                            <li style="margin-bottom: 8px;">Remove all personal belongings from the vehicle (up to 100 lbs in trunk is permitted).</li>
                                            <li style="margin-bottom: 8px;">Vehicle should have no more than 1/4 tank of fuel.</li>
                                            <li style="margin-bottom: 8px;">Document any existing damage before transport.</li>
                                            <li style="margin-bottom: 8px;">Have keys and proper identification ready at pickup and delivery.</li>
                                            <li style="margin-bottom: 8px;">All cancellations are subject to a 20% fee on the total booking amount.</li>
                                        </ul>
                                    </td>
                                </tr>
                            </table>
                            <!-- Next Steps -->
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 20px;">
                                <tr>
                                    <td style="padding-bottom: 10px;">
                                        <h2 style="font-size: 18px; font-weight: bold; color: #003366; border-bottom: 2px solid #003366; padding-bottom: 10px;">NEXT STEPS</h2>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="background-color: #f0f4f8; border-radius: 10px; padding: 20px;">
                                        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                                            <tr>
                                                <td style="padding-bottom: 15px;">
                                                    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                                                        <tr>
                                                            <td style="width: 30px; vertical-align: top;">
                                                                <div style="background-color: #003366; color: #ffffff; width: 30px; height: 30px; border-radius: 50%; text-align: center; line-height: 30px; font-weight: bold;">1</div>
                                                            </td>
                                                            <td style="padding-left: 15px;">
                                                                <div style="font-weight: bold; color: #003366; font-size: 16px;">Prepare Your Vehicle</div>
                                                                <p style="font-size: 14px; color: #666;">Clean your vehicle, document any existing damage with photos, and remove personal items.</p>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding-bottom: 15px;">
                                                    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                                                        <tr>
                                                            <td style="width: 30px; vertical-align: top;">
                                                                <div style="background-color: #003366; color: #ffffff; width: 30px; height: 30px; border-radius: 50%; text-align: center; line-height: 30px; font-weight: bold;">2</div>
                                                            </td>
                                                            <td style="padding-left: 15px;">
                                                                <div style="font-weight: bold; color: #003366; font-size: 16px;">Await Driver Assignment</div>
                                                                <p style="font-size: 14px; color: #666;">We'll notify you when a driver has been assigned to your shipment.</p>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style="padding-bottom: 15px;">
                                                    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                                                        <tr>
                                                            <td style="width: 30px; vertical-align: top;">
                                                                <div style="background-color: #003366; color: #ffffff; width: 30px; height: 30px; border-radius: 50%; text-align: center; line-height: 30px; font-weight: bold;">3</div>
                                                            </td>
                                                            <td style="padding-left: 15px;">
                                                                <div style="font-weight: bold; color: #003366; font-size: 16px;">Coordinate Pickup</div>
                                                                <p style="font-size: 14px; color: #666;">The driver will contact you 4-24 hours before pickup to arrange the exact time.</p>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                                                        <tr>
                                                            <td style="width: 30px; vertical-align: top;">
                                                                <div style="background-color: #003366; color: #ffffff; width: 30px; height: 30px; border-radius: 50%; text-align: center; line-height: 30px; font-weight: bold;">4</div>
                                                            </td>
                                                            <td style="padding-left: 15px;">
                                                                <div style="font-weight: bold; color: #003366; font-size: 16px;">Track Your Shipment</div>
                                                                <p style="font-size: 14px; color: #666;">Use our tracking system to monitor your vehicle's transport progress.</p>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            <!-- Customer Support Section -->
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f0f4f8; border-radius: 10px; padding: 20px; margin: 20px 0; text-align: center;">
                                <tr>
                                    <td>
                                        <div style="font-size: 18px; font-weight: bold; color: #003366; margin-bottom: 10px;">QUESTIONS OR CONCERNS?</div>
                                        <p style="font-size: 14px; color: #666;">Your dedicated transport coordinator is here to help!</p>
                                        <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="margin: 20px auto;">
                                            <tr>
                                                <td style="padding: 10px;">
                                                    <a href="tel:+18332334447" style="color: #FF6600; text-decoration: none;">(833) 233-4447</a>
                                                </td>
                                                <td style="padding: 10px;">
                                                    <a href="mailto:info@rapidautoshipping.com" style="color: #FF6600; font-weight: bold; text-decoration: none;">info@rapidautoshipping.com</a>
                                                </td>
                                            </tr>
                                        </table>
                                        <p style="font-size: 14px; color: #666;">Office Hours: Monday-Sunday 6AM-6PM EST | 24/7 Emergency Support Available</p>
                                    </td>
                                </tr>
                            </table>
                            <!-- Trust Badges Section -->
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="text-align: center; margin: 20px 0; padding: 20px 0; border-top: 1px solid #eee; border-bottom: 1px solid #eee;">
                                <tr>
                                    <td>
                                        <div style="font-weight: bold; color: #003366; margin-bottom: 10px;">TRUSTED & VERIFIED</div>
                                        <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="margin: 10px auto;">
                                            <tr>
                                                <td style="padding: 5px;">
                                                    <a href="https://www.bbb.org/us/pa/horsham/profile/trucking-transportation-brokers/rapid-auto-shipping-0241-236092503" target="_blank">
                                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEA6ADJL9ERbuIbk98s5WjGh42VA2jCHuW3w&s" alt="BBB Accredited" style="height: 50px;">
                                                    </a>
                                                </td>
                                                <td style="padding: 5px;">
                                                    <a href="https://maps.app.goo.gl/ZB7nPKu5Fqw6zQ5u9" target="_blank">
                                                        <img src="https://logos-world.net/wp-content/uploads/2023/12/Google-Review-Logo.png" alt="Google Reviews" style="height: 50px;">
                                                    </a>
                                                </td>
                                                <td style="padding: 5px;">
                                                    <a href="https://www.fmcsa.dot.gov/" target="_blank">
                                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrvLSzEwf7-cletD1QKmU0OqUO2FVKRJf1iQ&s" alt="FMCSA Licensed" style="height: 50px;">
                                                    </a>
                                                </td>
                                            </tr>
                                        </table>
                                        <div style="font-weight: bold; color: #003366;">Bonded and Fully Insured as per FMCSA Guidelines</div>
                                    </td>
                                </tr>
                            </table>
                            <!-- Social Media Links -->
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="text-align: center; margin: 20px 0;">
                                <tr>
                                    <td>
                                        <div style="font-size: 14px; color: #666; margin-bottom: 10px;">CONNECT WITH US</div>
                                        <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="margin: 0 auto;">
                                            <tr>
                                                <td style="padding: 5px;">
                                                    <a href="https://www.facebook.com/rapidautoshipping">
                                                        <img src="https://cdn.pixabay.com/photo/2021/06/15/12/51/facebook-6338508_960_720.png" alt="Facebook" style="width: 32px; height: 32px;">
                                                    </a>
                                                </td>
                                                <td style="padding: 5px;">
                                                    <a href="https://x.com/ShippingRapid">
                                                        <img src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1746260803/social%20media%20icons/X.png" alt="Twitter" style="width: 32px; height: 32px;">
                                                    </a>
                                                </td>
                                                <td style="padding: 5px;">
                                                    <a href="https://www.instagram.com/rapidautoshipping">
                                                        <img src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1746260684/social%20media%20icons/insta.png" alt="Instagram" style="width: 32px; height: 32px;">
                                                    </a>
                                                </td>
                                                <td style="padding: 5px;">
                                                    <a href="https://www.linkedin.com/">
                                                        <img src="https://res.cloudinary.com/dz2zovmf1/image/upload/v1746260923/social%20media%20icons/Linkdin.png" alt="LinkedIn" style="width: 32px; height: 32px;">
                                                    </a>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #003366; color: #ffffff; text-align: center; padding: 15px; font-size: 14px;">
                            <div>© 2025 Rapid Auto Shipping. All Rights Reserved.</div>
                            <div style="margin-top: 5px;">USDOT: 4320359 | MC: 1685548</div>
                            <div style="margin-top: 10px;">
                                <a href="https://rapidautoshipping.com/privacy-policy" style="color: #ffffff; text-decoration: none; margin: 0 10px;">Privacy Policy</a> | 
                                <a href="https://rapidautoshipping.com/terms-and-conditions" style="color: #ffffff; text-decoration: none; margin: 0 10px;">Terms of Service</a> |
                                <a href="https://rapidautoshipping.com/contact-us" style="color: #ffffff; text-decoration: none; margin: 0 10px;">Contact Us</a>
                            </div>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
    `;

    try {
      // Send email via API
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/send-email`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            to: formData.email,
            subject: `Booking Confirmation for ${formData.make}  ${formData.model}  ${formData.year}`,
            message: emailHtml,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      // Redirect to thank you page after successful email
      router.push(`/confirmation?quote_id=${quote_id}`);
    } catch (err) {
      console.error("Error sending email:", err);
      setError("Failed to send confirmation email, but submission recorded.");
      // Optionally still redirect
      router.push(`/confirmation?quote_id=${quote_id}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const agreementText = `
Rapid Auto Shipping ( Rapid A Shipping LLC)
Effective Date: March 31, 2025
By engaging the services of Rapid A Shipping LLC  ("Company"), the customer ("Shipper") agrees to the following Terms and Conditions. These terms govern the transportation of the Shipper’s vehicle(s) and supersede any prior oral or written agreements unless expressly modified in writing by an authorised representative of the Company.

1. General Agreement
1.1 The Company is a licensed and bonded transportation broker or carrier (MC# 1685548) operating under the authority of the Federal Motor Carrier Safety Administration (FMCSA). The Company arranges or provides transportation services for the Shipper’s vehicle(s) from the designated pickup location to the delivery destination as specified in the shipping order.
1.2 The Shipper warrants that they are the registered legal owner of the vehicle(s) or have been duly authorised by the legal owner to enter into this agreement.
1.3 The Company reserves the right to refuse service to any Shipper for any reason, including but not limited to violations of these terms, threats, harassment, or fraudulent behaviour.

2. Payment Terms
2.1 Partial Payment on Pickup: A partial payment, as outlined in the shipping order, is due on the day of pickup. Credit Card/Zelle
2.2 Balance on Delivery: The remaining balance is due upon delivery of the vehicle(s) and must be paid in full via Cash, Zelle, CashApp, or certified check, payable directly to the assigned carrier/driver unless otherwise agreed in writing.
2.3 Failure to provide payment in the specified forms at delivery may result in the vehicle(s) being placed in storage at the Shipper’s expense until all outstanding amounts, including storage fees, are paid in full.
2.4 All payments are non-refundable except as provided under the cancellation policy in Section 3.
2.5 The Shipper agrees not to initiate chargebacks or stop payment on any transaction to offset disputes, including damage claims. Per Interstate Commerce Commission (ICC) regulations, all freight charges must be paid in full before any damage claim can be processed.

3. Cancellation Policy
3.1 The Shipper may cancel the order at any time prior to the vehicle being picked up by providing written notice (via email, or U.S. mail) to the Company.
3.2 A cancellation fee equal to 20% of the total quoted transport cost will be charged if the order is canceled after it has been confirmed 
3.3 If the Shipper cancels after the carrier has been dispatched to the pickup location, the Shipper will be liable for the full cancellation fee or any additional costs incurred by the Company, whichever is higher.
3.4 Refunds, if applicable, will be processed within 30 business days of receiving the cancellation notice.

4. Pickup and Delivery
4.1 Estimated Dates: The Company will provide estimated pickup and delivery dates based on carrier availability. These dates are not guaranteed, as delays may occur due to weather, road conditions, mechanical issues, or other factors beyond the Company’s control.
4.2 Trailer Availability: If the assigned trailer is unable to arrive on the scheduled pickup date, it is the Company’s responsibility to arrange the next available trailer at the earliest possible time at no additional cost to the Shipper, provided all details in the shipping order (e.g., vehicle condition, accessibility) are accurate, or if any additional amount is required for the earliest availability
4.3 Trailer Rearrangement Liability: If trailer rearrangement is required due to incorrect or incomplete information provided by the Shipper (e.g., inoperable vehicle not disclosed, inaccessible pickup location), the Shipper is liable to pay the additional costs determined by the Company or the cancellation fee (20% of the total quoted cost), whichever is higher.
4.4 The Company or its assigned carrier will attempt door-to-door service where feasible. If access is restricted (e.g., narrow streets, low-hanging trees, weight limits), the Shipper agrees to meet the carrier at a nearby accessible location (e.g., a parking lot).
4.5 The Shipper or an authorized agent must be present at pickup and delivery to sign the Bill of Lading (BOL).

5. Vehicle Condition and Preparation
5.1 The Shipper is responsible for preparing the vehicle(s) for transport, including:
	•	Removing or securing all loose parts, fragile accessories, low-hanging spoilers, antennas, etc.
	•	Ensuring the vehicle has no more than a quarter tank of fuel.
	•	Disabling alarms and providing keys or transmitters if applicable.
	•	Ensuring the vehicle is in operable condition unless disclosed as inoperable at the time of booking. 5.2 Inoperable vehicles must be disclosed prior to booking. An additional fee of $250 per inoperable vehicle will apply if not disclosed or if the vehicle becomes inoperable during transport. Inoperable vehicles must still steer, brake, and roll. 5.3 The Company is not responsible for damage caused by parts falling off during transit or pre-existing conditions (e.g., faulty tie-downs, mechanical issues). 5.4 Personal belongings are not permitted in the vehicle(s) unless explicitly allowed. Any such items are transported at the Shipper’s risk and are not covered by insurance.

6. Liability and Insurance
6.1 The Company, as a broker or carrier, is not liable for damage caused by acts of God (e.g., tornadoes, hurricanes), normal road exposure (e.g., minor dents or scratches not visible from 20 feet), or pre-existing vehicle conditions.
6.2 Damage claims must be noted on the Bill of Lading at delivery, signed by both the Shipper and the carrier, and reported to the Company in writing within 24 hours of delivery. Failure to comply voids any claim.
6.3 The assigned carrier’s insurance is responsible for damage caused by carrier negligence. The Company will provide carrier insurance details to assist the Shipper in filing a claim but is not liable for damages.
6.4 The Company is not responsible for incidental or consequential damages, including but not limited to rental car costs, lost profits, or lodging expenses due to delays.

7. Indemnification
7.1 The Shipper agrees to indemnify, defend, and hold harmless the Company, its affiliates, employees, and carriers from any claims, losses, damages, or expenses arising from the Shipper’s breach of this agreement or misrepresentation of vehicle condition or ownership.

8. Governing Law and Dispute Resolution
8.1 This agreement is governed by the laws of the State of [Insert State] and applicable federal regulations, including those of the FMCSA.
8.2 Any disputes arising from this agreement shall be resolved exclusively in the state or federal courts of [Insert County], [Insert State]. The Shipper waives the right to pursue legal action in any other jurisdiction.

9. Miscellaneous
9.1 Force Majeure: The Company is not liable for delays or failure to perform due to events beyond its control, including weather, road closures, or governmental actions.
9.2 Amendments: This agreement may only be amended in writing, signed by both parties.
9.3 Severability: If any provision is found invalid, the remaining provisions remain in full effect.
9.4 Entire Agreement: This document constitutes the entire agreement between the Company and the Shipper, superseding all prior negotiations or understandings.

Contact Information
For questions, cancellations, or claims, contact:
RAPID AUTO SHIPPING
817 Herman Rd, Horsham, PA 19044
833-233-4447
info@rapidautoshipping.com
Shipper Acknowledgment: By signing the shipping order or by confirming the order over the phone or via.email, the Shipper acknowledges they have read, understood, and agreed to these Terms and Conditions.
  `;

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto py-3 px-4 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="/images/rapidautoshipping-logo.webp"
              alt="Rapid Auto Shipping Logo"
              className="h-8 md:h-12 w-auto"
            />
          </div>
          <a
            href="tel:+18332334447"
            className="bg-white border-2 font-semibold border-orange-500 text-orange-500 flex items-center gap-2 px-3 py-2 rounded-full hover:bg-orange-500 hover:text-white transition-colors duration-300"
          >
            <MdOutlinePhone className="text-xl md:text-2xl text-green-500" />
            <span className="text-sm md:text-base hidden sm:inline">
              {" "}
              (833) 233-4447
            </span>
          </a>
        </div>
      </header>

      {/* Progress Stepper */}
      <div className="container mx-auto px-4 py-6">
        <DynamicStepper
          status={3}
          steps={[
            { title: "Reservation" },
            { title: "Pickup & Delivery" },
            { title: "Confirmation" },
          ]}
        />
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          {/* Title Section */}

          {/* Agreement Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Card Header */}
            <div className="bg-rapidcolor text-white py-4 px-6">
              <h2 className="text-xl font-semibold flex items-center">
                <span>Terms and Conditions</span>
                {quote_id && (
                  <span className="ml-2 text-sm bg-white text-rapidcolor px-2 py-1 rounded-full">
                    Quote #{quote_id}
                  </span>
                )}
              </h2>
            </div>

            {/* Card Content */}
            {isLoading ? (
              <div className="flex flex-col justify-center items-center h-64 p-6">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-rapidcolor"></div>
                <p className="mt-4 text-gray-600">Loading agreement...</p>
              </div>
            ) : error ? (
              <div className="flex flex-col justify-center items-center h-64 p-6">
                <div className="text-rapidcolor rounded-full bg-red-100 p-3">
                  <MdErrorOutline className="text-3xl" />
                </div>
                <p className="mt-4 text-rapidcolor">{error}</p>
                <button
                  onClick={() => window.location.reload()}
                  className="mt-4 px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors"
                >
                  Try Again
                </button>
              </div>
            ) : (
              <div className="p-6">
                {/* Agreement Text */}
                <div className="border border-gray-200 rounded-md p-4 h-64 overflow-y-auto mb-6 text-gray-700 bg-gray-50 custom-scrollbar">
                  <p className="whitespace-pre-wrap text-sm md:text-base leading-relaxed">
                    {agreementText}
                  </p>
                </div>

                {/* Checkbox Agreement */}
                <div className="flex items-start mb-6">
                  <div className="flex items-center h-5">
                    <input
                      type="checkbox"
                      id="agreement-checkbox"
                      checked={isChecked}
                      onChange={() => setIsChecked(!isChecked)}
                      className="w-5 h-5 text-rapidcolor border-gray-300 rounded focus:ring-rapidcolor"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="agreement-checkbox"
                      className="font-medium text-gray-700"
                    >
                      I have read and agree to the terms and conditions
                    </label>
                    <p className="text-gray-500 mt-1 text-xs md:text-sm">
                      By checking this box, you agree to be bound by our terms
                      and conditions.
                    </p>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                  <button
                    onClick={handleSubmit}
                    disabled={!isChecked || isSubmitting}
                    className={`w-full sm:w-2/3 md:w-1/2 px-6 py-3 rounded-md flex items-center justify-center gap-2 font-medium text-lg transition-colors duration-300 ${
                      isChecked && !isSubmitting
                        ? "bg-rapidcolor text-white hover:bg-rapidcolor"
                        : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white"></div>
                        <span>Processing...</span>
                      </>
                    ) : (
                      <>
                        <FaSignature />
                        <span>Accept & Continue</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Help Text */}
        </div>
      </main>

      {/* Custom scrollbar style */}
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #ddd;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #ccc;
        }
      `}</style>
    </div>
  );
}
