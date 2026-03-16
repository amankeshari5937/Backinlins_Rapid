export default function AutoTransportSite() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Understanding Auto Transport Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-3xl font-bold text-center">
            Understanding Auto Transport
          </div>
          <div className="w-28 h-1 bg-orange-500 mx-auto my-2 mb-12"></div>

          <div className="md:px-20">
            {/* Card 1 */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300 my-10">
              <h3 className="text-xl font-semibold mb-4 text-orange-500">
                Brokers vs. Carriers
              </h3>
              <p>
                Carriers are companies that own and operate trucks that
                physically transport vehicles. Brokers are the companies that
                act as intermediaries and help shippers connect with carriers.
                Brokers handle the sales aspect of the transportation, such as
                dispatch, billing, and customer service. In contrast, carriers
                handle the transportation and are responsible for the vehicle's
                condition during transportation. Carriers offer limited service,
                and they may have limited access to routes and schedules, but
                Brokers have access to a vast channel of carriers, through which
                they help shippers in locating the right carrier and ensure they
                have the necessary equipment and routes for a specific shipment.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300 my-10">
              <h3 className="text-xl font-semibold mb-4 text-orange-500">
                What Is A Carrier?
              </h3>
              <p>
                The logistics or trucking company that carries out the actual
                transportation of the vehicles by using different mediums, such
                as trucks, trains, or ships, is known as a carrier. They may be
                a fully specialized auto transport company that offers complete
                transportation services, but carriers are primarily companies
                that carry out the transportation of vehicles. Different types
                of carriers are:
                <br />
                <strong>Road carriers: </strong>These carriers use specialized
                trailers in their trucks to transport vehicles over long
                distances, which is the most common method of auto transport.
                <br />
                <strong>Rail carriers:</strong> Rail transport is used for the
                transportation of multiple vehicles at once.
                <br />
                <strong>Sea carriers:</strong> International trade mainly uses
                the sea method to transport vehicles.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300 my-10">
              <h3 className="text-xl font-semibold mb-4 text-orange-500">
                Car Shipping Brokers Keep Your Costs Low
              </h3>
              <p>
                Car shipping brokers are companies that give you hassle-free
                transport services. They handle the entire shipping process,
                from booking to delivery, and utilize and optimize the shipping
                routes to reduce overall costs. Brokers have access to many
                carriers, and their deep understanding of the industry helps
                them negotiate rates and find the best transport solution for
                the shipment at a very competitive cost. Brokers work with many
                clients simultaneously, so they can negotiate lower rates with
                carriers to give them bulk business. In short, auto transport
                brokers deliver all kinds of advantages that a carrier cannot,
                so brokers help keep shipping costs lower.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
