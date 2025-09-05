import React from "react";

const policySections = [
  {
    title: "Privacy Policy",
    date: "Last Revision: 6-Feb-2024",
    content: `
RSquareSoft Technologies (“Business Name”) referred as ‘RSquareSoft’, ‘we’, ‘us’ or ‘our’ is committed to respect your privacy and choices. The privacy statement (hereinafter “Privacy Policy” or “Policy”) highlights our privacy practices regarding Personal Information that we collect and process in compliance to applicable data privacy regulations.

rsquaresoft.com recognises the importance of maintaining your privacy. We value your privacy and appreciate your trust in us. This Policy describes how we treat user information we collect on https://rsquaresoft.com and other offline sources. This Privacy Policy applies to current and former visitors to our website and to our online customers. By visiting and/or using our website, you agree to this Privacy Policy.

rsquaresoft.com is a property of RSquareSoft Technologies Private Limited, an Indian Company registered under the Companies Act, 2013 having its registered office at D502, Vista, The Woods, Wakad, Pune 411057.
`,
  },
  {
    title: "Information we collect",
    content: `
- Contact information: We might collect your name, email, mobile number, phone number, street, city, state, pincode, country and IP address.
- Payment and billing information: We might collect your billing name, billing address and payment method when you buy a ticket. We NEVER collect your credit card number or credit card expiry date or other details pertaining to your credit card on our website. Credit card information will be obtained and processed by our online payment partner gateways.
- Information you post: We collect information you post in a public space on our website or on a third-party social media site belonging to rsquaresoft.com.
- Demographic information: We may collect demographic information about you, events you like, events you intend to participate in, tickets you buy, or any other information provided by your during the use of our website. We might collect this as a part of a survey also.
- Other information: We collect info about your IP, browser, referring site, duration of visit, pages accessed, device type, OS version, etc.
`,
  },
  {
    title: "How we collect information",
    content: `
- Directly from you: when you register, buy tickets, post comments, or contact us.
- Passively: using tracking tools like Google Analytics, cookies, web beacons.
- From third parties: e.g., integrated social media features provide some info like your name and email.
`,
  },
  {
    title: "Use of your personal information",
    content: `
- To contact you for purchase confirmations and promotions.
- To respond to your requests or questions.
- To improve our products and services, customize experience.
- To analyze site trends and customer interests.
- For security purposes to protect company, customers, and websites.
- For marketing purposes like newsletters and special offers.
- To send transactional communications about accounts or tickets.
- As otherwise permitted by law.
`,
  },
  {
    title: "Sharing information with third-parties",
    content: `
- With vendors helping with registration, payment, messaging (may be outside India).
- With event organizers and parties fulfilling purchases.
- With business partners, event sponsors or venues.
- When required to comply with law, court orders, investigations.
- With successors in case of business sale or transfer.
- For reasons not described here, only after notifying you.
`,
  },
  {
    title: "Email Opt-Out",
    content: `
You can opt out of receiving marketing emails by emailing unsubscribe@rsquaresoft.com. Opt-out takes about 10 days to process. Transactional emails about purchases will still be sent.
`,
  },
  {
    title: "Third-party sites",
    content: `
Our site links to third-party services; we are not responsible for their privacy practices. Read the policies of external sites carefully.
`,
  },
  {
    title: "Grievance Officer",
    content: `
Rajneesh S, Data Privacy Office, D502, Vista The Woods, Wakad, Pune 411057

For questions about this Policy or privacy concerns, email privacy@rsquaresoft.com
`,
  },
  {
    title: "Updates to this policy",
    content: `
We may update this policy as needed; updates will be available on the website. Our commitment to protecting your privacy remains steadfast.
`,
  },
  {
    title: "Jurisdiction",
    content: `
Using the website constitutes acceptance of this Policy and its terms. Any disputes will be governed by Indian law.
`,
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="max-w-7xl py-20 mx-auto my-10 p-6 bg-white font-family-base text-gray-800">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-2">Privacy Policy</h1>
      <p className="text-center text-gray-600 mb-10 text-sm">{policySections[0].date}</p>

      {policySections.map(({ title, content }, index) => (
        <section key={index} className="mb-10 leading-relaxed">
          <h2 className="text-2xl font-semibold text-blue-800 border-b-2 border-blue-900 pb-2 mb-4">{title}</h2>
          <div className="text-base whitespace-pre-wrap text-gray-700">
            {content.split("\n\n").map((para, i) =>
              para.trim().startsWith("-") ? (
                <ul key={i} className="list-disc list-inside space-y-1 mb-4 text-gray-700">
                  {para
                    .split("\n")
                    .filter(line => line.startsWith("-"))
                    .map((item, idx) => (
                      <li key={idx}>{item.replace(/^- /, "")}</li>
                    ))}
                </ul>
              ) : (
                <p key={i} className="mb-4">{para.trim()}</p>
              )
            )}
          </div>
        </section>
      ))}
    </div>
  );
}
