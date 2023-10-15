package com.capestart.geocodeapiv1test.negativetest;

import java.io.IOException;

import org.testng.annotations.BeforeSuite;
import org.testng.annotations.Test;

import com.capestart.assertwrapper.ResponseAssert;
import com.capestart.logintest.LoginSetup;
import com.capestart.negativeapilayers.GeocodeApiV1NegativeService;
import com.capestart.pojos.geocodeapiv1.PostGeocodeAddressDetails;
import com.capestart.testdata.GeocodeApiV1TestData;
import com.fasterxml.jackson.core.exc.StreamReadException;
import com.fasterxml.jackson.databind.DatabindException;

import io.restassured.response.Response;

public class PostGeocodeAddressNegativeTest {

	public static String SESSION_TOKEN;

	@BeforeSuite
	public void setUp() {
		// Ensure that the login setup runs only once for the entire suite
		LoginSetup.setUp();
		SESSION_TOKEN = LoginSetup.getSessionToken();
	}


	@Test
	void postGeocodeInvalidBodyAddress() throws IOException {
		PostGeocodeAddressDetails withoutAddressDetails11 = GeocodeApiV1TestData.getPostGeocodeAddressWithoutAddressDetails();
		Response response1 = GeocodeApiV1NegativeService.postGeocodeAddressInvalidBody(withoutAddressDetails11, SESSION_TOKEN);
		ResponseAssert.assertthat(response1)
		.statusCodeIs(400)
		.hasContentType("application/json; charset=utf-8")
		.hasKeyWithValue("message", "'body.address' must be a string")
		.assertAll();
	}

	@Test
	void postGeocodeInvalidBodyCity() throws IOException {
		PostGeocodeAddressDetails withoutCityDetails = GeocodeApiV1TestData.getPostGeocodeAddressWithoutCityDetails();
		Response response = GeocodeApiV1NegativeService.postGeocodeAddressInvalidBody(withoutCityDetails, SESSION_TOKEN);
		ResponseAssert.assertthat(response)
		.statusCodeIs(400)
		.hasContentType("application/json; charset=utf-8")
		.hasKeyWithValue("message", "'body.city' must be a string")
		.assertAll();

	}
	@Test
	void postGeocodeInvalidBodyState() throws IOException {
		PostGeocodeAddressDetails withoutStateDetails = GeocodeApiV1TestData.getPostGeocodeAddressWithoutStateDetails();
		Response response = GeocodeApiV1NegativeService.postGeocodeAddressInvalidBody(withoutStateDetails, SESSION_TOKEN);
		ResponseAssert.assertthat(response)
		.statusCodeIs(400)
		.hasContentType("application/json; charset=utf-8")
		.hasKeyWithValue("message", "'body.state' must be a string")
		.assertAll();
	}

	@Test
	void postGeocodeInvalidBodyCountry() throws IOException {
		PostGeocodeAddressDetails withoutCountryDetails = GeocodeApiV1TestData.getPostGeocodeAddressWithoutCountryDetails();
		Response response = GeocodeApiV1NegativeService.postGeocodeAddressInvalidBody(withoutCountryDetails, SESSION_TOKEN);
		ResponseAssert.assertthat(response)
		.statusCodeIs(400)
		.hasContentType("application/json; charset=utf-8")
		.hasKeyWithValue("message", "Country cannot be empty and should be in the ISO3 format")
		.assertAll();
	}

	@Test
	void postGeocodeInvalidInputCity() throws IOException {
		PostGeocodeAddressDetails invalidcitydetails = GeocodeApiV1TestData.getPostGeocodeAddressWithInvalidCityDetails();
		Response response = GeocodeApiV1NegativeService.postGeocodeAddressInvalidBody(invalidcitydetails, SESSION_TOKEN);
		ResponseAssert.assertthat(response)
		.statusCodeIs(400)
		.hasContentType("application/json; charset=utf-8")
		.hasKeyWithValue("message", "Could not geocode address. State or city is required")
		.assertAll();

	}

	@Test
	void postGeocodeInvalidInputCountry() throws IOException {
		PostGeocodeAddressDetails invalidcitydetails = GeocodeApiV1TestData.getPostGeocodeAddressWithInvalidCountryDetails();
		Response response = GeocodeApiV1NegativeService.postGeocodeAddressInvalidBody(invalidcitydetails, SESSION_TOKEN);
		ResponseAssert.assertthat(response)
		.statusCodeIs(400)
		.hasContentType("application/json; charset=utf-8")
		.hasKeyWithValue("message", "Country cannot be empty and should be in the ISO3 format")
		.assertAll();

	}
	@Test
	void postGeocodeInvalidResources() throws StreamReadException, DatabindException, IOException {
		PostGeocodeAddressDetails postGeocodeAddressDetails = GeocodeApiV1TestData.getPostGeocodeAddressDetails();
		Response response = GeocodeApiV1NegativeService.postGeocodeAddressInvalidEndpoint(postGeocodeAddressDetails, SESSION_TOKEN);
		ResponseAssert.assertthat(response)
		.statusCodeIs(404)
		.hasContentType("application/json")
		.hasKeyWithValue("message", "Resource not found")
		.assertAll();

	}
	@Test
	void postGeocodeInvalidHeader() throws StreamReadException, DatabindException, IOException {
		PostGeocodeAddressDetails postGeocodeAddressDetails = GeocodeApiV1TestData.getPostGeocodeAddressDetails();
		Response response = GeocodeApiV1NegativeService.postGeocodeAddressInvalidHeaders(postGeocodeAddressDetails, SESSION_TOKEN);
		ResponseAssert.assertthat(response)
		.statusCodeIs(401)
		.hasContentType("application/json")
		.hasKeyWithValue("message", "Access denied due to invalid subscription key. Make sure to provide a valid key for an active subscription.")
		.assertAll();

	}
}