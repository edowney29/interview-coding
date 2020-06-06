/**
 * Eric Downey - 5/9/2020
 * Formatted with Prettier
 *
 * Lodash - For better syntax apperance and handling of objects (forOwn, cloneDeep, find, forEach)
 *
 * For this assignment I treated it as if I were writing a live backend api for Upside.
 * While I know that it is in fact not optimizied, I tried completing this assignment very quickly.
 * It took me about 3 hours to understand, develop, and test this solution.
 * Though my method is sort brute force-ish it gets the job done and should work in all cases
 * where there are reasonable assumptions
 */

"use strict";

const _ = require("lodash");

const apiAirlines = require("./api/airlines.service");
const apiProfiles = require("./api/profiles.service");
const apiTrips = require("./api/trip.service");

function getTravelersFlightInfo() {
  // Assuming all apis are successful; if error thorw error
  return Promise.all([apiTrips.get(), apiAirlines.get(), apiProfiles.get()])
    .then((res) => {
      const trip = res[0].trip;
      const airlines = res[1].airlines;
      const profiles = res[2].profiles;

      // Group travelers and their flights' legs by travelerId
      const travelerFlights = {};
      // Assuming flights will never be null; can be empty []
      _.forEach(trip.flights, (flight) => {
        // Assuming travelerIds will never be null; can be empty []
        _.forEach(flight.travelerIds, (travelerId) => {
          if (!travelerFlights[travelerId]) {
            travelerFlights[travelerId] = {
              id: travelerId,
              flights: [{ legs: flight.legs }],
            };
          } else {
            travelerFlights[travelerId].flights.push({ legs: flight.legs });
          }
        });
      });

      const travelers = [];
      _.forOwn(travelerFlights, (value, key) => {
        // Assuming profile should always be found based on id keys
        const profile = _.find(profiles, { personId: value.id });
        // Rebuild legs for flights with all traveler's info
        const flights = [];
        _.forEach(value.flights, (_flight) => {
          const legs = [];
          _.forEach(_flight.legs, (_leg) => {
            const leg = _.cloneDeep(_leg); // Clone deep for a new reference
            const airline = _.find(airlines, { code: leg.airlineCode });
            if (airline) {
              leg.airlineName = airline.name;
              leg.frequentFlyerNumber = profile.rewardPrograms.air[airline.code] || "";
            }
            legs.push(leg);
          });
          flights.push({ legs: legs });
        });

        travelers.push({
          id: value.id,
          name: profile.name,
          flights: flights,
        });
      });
      return { travelers: travelers };
    })
    .catch((err) => {
      throw err;
    });
}

module.exports = getTravelersFlightInfo;

// getTravelersFlightInfo()
//   .then((data) => {
//     console.log(JSON.stringify(data, null, 2));
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// return {
//   travelers: [
//     {
//       id: 1,
//       name: 'Neo', -> from profile
//       flights: [
//         {
//           legs: [
//             {
//               airlineCode: 'AA',
//               airlineName: 'American', -> from airline
//               flightNumber: 'AA456',
//               frequentFlyerNumber: '' -> from profile
//             }
//           ]
//         },
//         {
//           legs: [
//             {
//               airlineCode: 'VA',
//               airlineName: 'Virgin',
//               flightNumber: 'VA789',
//               frequentFlyerNumber: 'NVA123'
//             },
//             {
//               airlineCode: 'AK',
//               airlineName: 'Alaskan',
//               flightNumber: 'AK789',
//               frequentFlyerNumber: 'NAK123'
//             }
//           ]
//         }
//       ]
//     }
//   ]
// };
