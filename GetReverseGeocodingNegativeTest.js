package com.capestart.geocodeapiv1test.negativetest;

import java.io.IOException;

import org.testng.annotations.BeforeSuite;
import org.testng.annotations.Test;

import com.capestart.assertwrapper.ResponseAssert;
import com.capestart.dataproviders.GeoCodeApiV1DataProvider;
import com.capestart.factory.ApiConfigFactory;
import com.capestart.logintest.LoginSetup;
import com.capestart.negativeapilayers.GeocodeApiV1NegativeService;
import com.fasterxml.jackson.core.exc.StreamReadException;
import com.fasterxml.jackson.databind.DatabindException;

import io.restassured.response.Response;

public class GetReverseGeocodingNegativeTest {

	public static String SESSION_TOKEN;

	private static final String INVALID_DATA = ApiConfigFactory.getGeocodeApiV1NegativeTestApiConfig().getInvalidCompanyId();

	private static final String GENERAL_INVALID_COMPANY_ID = ApiConfigFactory.getGeocodeApiV1NegativeTestApiConfig().getGeneralInvalidCompanyId();

	private static final String SPECIAL_INVALID_COMPANY_ID = ApiConfigFactory.getGeocodeApiV1NegativeTestApiConfig().getInvalidCompanyIdWithSpecialCharacters();

	private static final String INVALID_LAT = ApiConfigFactory.getGeocodeApiV1NegativeTestApiConfig().getInvalidLat();

	private static final String INVALID_LON = ApiConfigFactory.getGeocodeApiV1NegativeTestApiConfig().getInvalidLon();

	private static final String GENERAL_INVALID_LAT = ApiConfigFactory.getGeocodeApiV1NegativeTestApiConfig().getGeneralInvalidLat();

	private static final String GENERAL_INVALID_LON = ApiConfigFactory.getGeocodeApiV1NegativeTestApiConfig().getGeneralInvalidLon();

	private static final String SPECIAL_INVALID_LAT = ApiConfigFactory.getGeocodeApiV1NegativeTestApiConfig().getInvalidLatWithSpecialCharacters();

	private static final String SPECIAL_INVALID_LON = ApiConfigFactory.getGeocodeApiV1NegativeTestApiConfig().getInvalidLonWithSpecialCharacters();

	@BeforeSuite
	public void setUp() {
		LoginSetup.setUp();
		SESSION_TOKEN = LoginSetup.getSessionToken();
	}


	@Test(dataProvider = "Get Reverse Geocoding TestData",dataProviderClass = GeoCodeApiV1DataProvider.class)
	void getReverseGeocodingInvalidParameter(Object companyId,Object lat,Object lon) throws StreamReadException, DatabindException, IOException {
		Response response = GeocodeApiV1NegativeService.getReverseGeocoding(SESSION_TOKEN, companyId,lat,lon);
		String message = null;
		if(INVALID_DATA.equals(String.valueOf(companyId)) || SPECIAL_INVALID_COMPANY_ID.equals(String.valueOf(companyId))){
			message = "'query.company_id' must be a number";
		}else if (GENERAL_INVALID_COMPANY_ID.equals(String.valueOf(companyId))) {
			message = "'query.company_id' does not exist";
		} else if (INVALID_LAT.equals(String.valueOf(lat)) 
				|| (GENERAL_INVALID_LAT.equals(String.valueOf(lat))
						|| SPECIAL_INVALID_LAT.equals(String.valueOf(lat)))) {
			message = "lat does not exist";
		}else if (INVALID_LON.equals(String.valueOf(lon)) 
				|| (GENERAL_INVALID_LON.equals(String.valueOf(lon))
						|| SPECIAL_INVALID_LON.equals(String.valueOf(lon)))) {
			message = "lon does not exist";
		}

		ResponseAssert.assertthat(response)
		.statusCodeIs(400)
		.hasContentType("application/json; charset=utf-8")
		.hasKeyWithValue("message", message)
		.assertAll();

	}
	@Test
	void getReverseGeocodingWithInvalidResources() throws StreamReadException, DatabindException, IOException {
		Response response = GeocodeApiV1NegativeService.getReverseGeocodingInvalidEndpoint(SESSION_TOKEN);
		ResponseAssert.assertthat(response)
		.statusCodeIs(404)
		.hasContentType("application/json")
		.hasKeyWithValue("message", "Resource not found")
		.assertAll();

	}
	@Test
	void getReverseGeocodingWithInvalidHeader() throws StreamReadException, DatabindException, IOException {
		Response response = GeocodeApiV1NegativeService.getReverseGeocodingInvalidHeader(SESSION_TOKEN);
		ResponseAssert.assertthat(response)
		.statusCodeIs(401)
		.hasContentType("application/json")
		.hasKeyWithValue("message", "Access denied due to invalid subscription key. Make sure to provide a valid key for an active subscription.")
		.assertAll();

	}
}