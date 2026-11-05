/*
this code is an example of retrieve satellite TLE data and 
using satellite.js to calculate geodesique coordinates
*/
import * as satellite from "satellite.js";

//const allows to define objects 
// URL to retrieve TLE data of ISS
const url: string = "https://celestrak.org/NORAD/elements/gp.php?CATNR=25544&FORMAT=TLE";

// Function to retrieve data
export async function getISS(url: string) {
    try {
        // Retrieve the HTTP response
        const response = await fetch(url);
        // Check if the HTTP request succeeded
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        // Convert the response into text
        const IssData: string = await response.text();

        // Cut the text in lines \n is for end of line
        const lines: string[] = IssData.trim().split(/\r?\n/);
        
        // Check that the TLE contains at least 3 lines
        if (lines.length < 3) {
            throw new Error("Invalid TLE: missing lines");
        }

        // define lines 1 & 2 of TLE
        const line1: string = lines[1];
        const line2: string = lines[2];

        // Check TLE line identifiers
        if (!line1.startsWith("1 ") || !line2.startsWith("2 ")) {
                throw new Error("Invalid TLE format");
        }

        // Create the sat element with all the informations (inclination, norad number..)
        const sat = satellite.twoline2satrec(line1,line2);

        if (sat.error !== 0) {
            throw new Error(`SGP4 initialization error: ${sat.error}`);
        }

        // define actual time to retrieve satellite actual position
        const date = new Date();

        // propagate orbit to actual position
        const pos_sat = satellite.propagate(sat, date);

        // Check that propagation returned a valid position
        if (!pos_sat.position) {
            throw new Error("Orbital propagation failed");
        }

        // get sideral time
        const gsdate = satellite.gstime(date);

        // converting in geographic coordinates
        const geo_coor = satellite.eciToGeodetic(
            pos_sat.position,
            gsdate
        );

        // convert coordinates in degrees
        const lat_deg: number = geo_coor.latitude*180/Math.PI;
        const lon_deg: number = geo_coor.longitude*180/Math.PI;

        // Display ISS coordinates
        console.log("ISS position:");
        console.log("Latitude:", lat_deg, "degrees");
        console.log("Longitude:", lon_deg, "degrees");
        console.log("Altitude:", geo_coor.height, "km");

        // export values
        return {
            latitude: lat_deg,
            longitude: lon_deg,
            altitude: geo_coor.height
        };

    } catch (error) {
    console.error("Error retrieving ISS position:", error);
    // throw error allows to send the error to app.tsx
    throw error;
}
} // close getISS()

// 
// call function
//getISS(url);

