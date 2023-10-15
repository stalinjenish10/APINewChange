package com.capestart.geocodeapiv1test.negativetest;

import java.io.IOException;

import org.testng.annotations.BeforeSuite;
import org.testng.annotations.Test;

import com.capestart.assertwrapper.ResponseAssert;
import com.capestart.dataproviders.GeoCodeApiV1DataProvider;
import com.capestart.factory.ApiConfigFactory;
import com.capestart.logintest.LoginSetup;
import com.capestart.negativeapilayers.GeocodeApiV1NegativeService;
import com.capestart.pojos.geocodeapiv1.PostBulkReverseGeocodingDetails;
import com.capestart.pojos.geocodeapiv1.PostBulkReverseGeocodingInvalidLatDetails;
import com.capestart.pojos.geocodeapiv1.PostBulkReverseGeocodingInvalidLonDetails;
import com.capestart.pojos.geocodeapiv1.PostBulkReverseGeocodingWithoulatDetails;
import com.capestart.pojos.geocodeapiv1.PostBulkReverseGeocodingWithoutlonDetails;
import com.capestart.testdata.GeocodeApiV1TestData;

import io.restassured.response.Response;

public class PostBulkReverseAddressNegativeTest {

	public static String SESSION_TOKEN;

	private  static  final  String COMPANY_ID = (ApiConfigFactory.getConfig().companyId());

	private static final String INVALID_DATA = ApiConfigFactory.getGeocodeApiV1NegativeTestApiConfig().getInvalidCompanyId();

	private static final String GENERAL_INVALID_COMPANY_ID = ApiConfigFactory.getGeocodeApiV1NegativeTestApiConfig().getGeneralInvalidCompanyId();

	private static final String SPECIAL_INVALID_COMPANY_ID = ApiConfigFactory.getGeocodeApiV1NegativeTestApiConfig().getInvalidCompanyIdWithSpecialCharacters();



	@BeforeSuite
	public void setUp() {
		LoginSetup.setUp();
		SESSION_TOKEN = LoginSetup.getSessionToken();
	}

	@Test(dataProvider = "Post Bulk Reverse TestData", dataProviderClass = GeoCodeApiV1DataProvider.class, invocationCount = 1)
	void invalidParameterTest(Object companyId) throws IOException {
		PostBulkReverseGeocodingDetails postBulkReverseGeocodingDetails = GeocodeApiV1TestData.getPostBulkReverseGeocodingDetails();
		Response response = GeocodeApiV1NegativeService.postCreateAccount(postBulkReverseGeocodingDetails, SESSION_TOKEN, companyId, true, false);

		String message = null;
		if (INVALID_DATA.equals(companyId)) {
			message = "'query.company_id' must be a number";
		} else if (GENERAL_INVALID_COMPANY_ID.equals(String.valueOf(companyId))) {
			message = "Invalid companyid";
		}else if(SPECIAL_INVALID_COMPANY_ID.equals(String.valueOf(companyId))) {
			message = "'query.company_id' must be a number";
		}

		ResponseAssert.assertthat(response)
		.statusCodeIs(400)
		.hasContentType("application/json; charset=utf-8")
		.hasKeyWithValue("message", message)
		.assertAll();
	}

	@Test()
	void invalidHeaderTest() throws IOException {
		PostBulkReverseGeocodingDetails postBulkReverseGeocodingDetails = GeocodeApiV1TestData.getPostBulkReverseGeocodingDetails();
		Response response = GeocodeApiV1NegativeService.postCreateAccountInvalidHeaders(postBulkReverseGeocodingDetails, SESSION_TOKEN);

		ResponseAssert.assertthat(response)
		.statusCodeIs(401)
		.hasContentType("application/json")
		.hasKeyWithValue("message", "Access denied due to invalid subscription key. Make sure to provide a valid key for an active subscription.")
		.assertAll();
	}

	@Test
	void invalidHeaderWithOtheerOcpKey() throws IOException {
		PostBulkReverseGeocodingDetails postBulkReverseGeocodingDetails = GeocodeApiV1TestData.getPostBulkReverseGeocodingDetails();
		Response response = GeocodeApiV1NegativeService.postCreateAccountInvalidOtherUserHeaders(postBulkReverseGeocodingDetails, SESSION_TOKEN);

		ResponseAssert.assertthat(response)
		.statusCodeIs(401)
		.hasContentType("application/json")
		.hasKeyWithValue("message", "Access denied due to invalid subscription key. Make sure to provide a valid key for an active subscription.")
		.assertAll();
	}

	@Test(dataProvider = "Post Create Account InvalidBody", dataProviderClass = GeoCodeApiV1DataProvider.class, invocationCount = 1)
	void invalidLatBodyTest(Object companyId) throws IOException {
		PostBulkReverseGeocodingWithoulatDetails postBulkReverseWithoutlat0Details = GeocodeApiV1TestData.getPostBulkReverseWithoutlat0Details();

		Response response = GeocodeApiV1NegativeService.postCreateAccountInvalidBody(postBulkReverseWithoutlat0Details,SESSION_TOKEN, companyId);
		String message = null;
		if (COMPANY_ID.equals(String.valueOf(companyId))) {
			message = "'body.coordinates[0].lat' is required";
		} 

		ResponseAssert.assertthat(response)
		.statusCodeIs(400)
		.hasContentType("application/json; charset=utf-8")
		.hasKeyWithValue("message", message)
		.assertAll();
	}

	@Test(dataProvider = "Post Create Account InvalidBody", dataProviderClass = GeoCodeApiV1DataProvider.class, invocationCount = 1)
	void invalidLonBodyTest(Object companyId) throws IOException {
		PostBulkReverseGeocodingWithoutlonDetails postBulkReverseWithoutlat0Details = GeocodeApiV1TestData.getPostBulkReverseWithoutlan0Details();

		Response response = GeocodeApiV1NegativeService.postCreateAccountInvalidBodyWithoutLon(postBulkReverseWithoutlat0Details,SESSION_TOKEN, companyId);
		String message = null;
		if (COMPANY_ID.equals(String.valueOf(companyId))) {
			message = "'body.coordinates[0].lon' is required";
		} 

		ResponseAssert.assertthat(response)
		.statusCodeIs(400)
		.hasContentType("application/json; charset=utf-8")
		.hasKeyWithValue("message", message)
		.assertAll();
	}

	@Test
	void invalidResources() throws IOException {
		PostBulkReverseGeocodingDetails postBulkReverseGeocodingDetails = GeocodeApiV1TestData.getPostBulkReverseGeocodingDetails();  
		Response response = GeocodeApiV1NegativeService.getBulkReverseGeocodingInvalidEndpoint(postBulkReverseGeocodingDetails, SESSION_TOKEN);

		ResponseAssert.assertthat(response)
		.statusCodeIs(404)
		.hasContentType("application/json")
		.hasKeyWithValue("message","Resource not found")
		.assertAll();

	}

	@Test(dataProvider = "Post Create Account InvalidBody", dataProviderClass = GeoCodeApiV1DataProvider.class, invocationCount = 1)
	void invalidLat1Details(Object companyId) throws IOException {

		PostBulkReverseGeocodingInvalidLatDetails invalidlat0Details = GeocodeApiV1TestData.getPostBulkReverseGeocodingInvalidlat0Details();
		PostBulkReverseGeocodingInvalidLonDetails invalidLon0Details = GeocodeApiV1TestData.getPostBulkReverseGeocodingInvalidlon0Details();
		PostBulkReverseGeocodingInvalidLatDetails invalidLat1Details = GeocodeApiV1TestData.getPostBulkReverseGeocodingInvalidlat1Details();
		PostBulkReverseGeocodingInvalidLonDetails invalidLonDetails = GeocodeApiV1TestData.getPostBulkReverseGeocodingInvalidlon1Details();

		Response response = GeocodeApiV1NegativeService.postBulkReverseGeocodingInvalidLatDetails(invalidlat0Details, invalidLon0Details, 
				invalidLat1Details, invalidLonDetails, SESSION_TOKEN, companyId, true, false, false, false);	        
		String message = null;
		if (COMPANY_ID.equals(String.valueOf(companyId))) {
			message = "'body.coordinates[0].lat' must be a number";
		} 

		ResponseAssert.assertthat(response)
		.statusCodeIs(400)
		.hasContentType("application/json; charset=utf-8")
		.hasKeyWithValue("message", message)
		.assertAll();

	}

	@Test(dataProvider = "Post Create Account InvalidBody", dataProviderClass = GeoCodeApiV1DataProvider.class, invocationCount = 1)
	void invalidLon1Details(Object companyId) throws IOException {

		PostBulkReverseGeocodingInvalidLatDetails invalidlat0Details = GeocodeApiV1TestData.getPostBulkReverseGeocodingInvalidlat0Details();
		PostBulkReverseGeocodingInvalidLonDetails invalidLon0Details = GeocodeApiV1TestData.getPostBulkReverseGeocodingInvalidlon0Details();
		PostBulkReverseGeocodingInvalidLatDetails invalidLat1Details = GeocodeApiV1TestData.getPostBulkReverseGeocodingInvalidlat1Details();
		PostBulkReverseGeocodingInvalidLonDetails invalidLonDetails = GeocodeApiV1TestData.getPostBulkReverseGeocodingInvalidlon1Details();

		Response response = GeocodeApiV1NegativeService.postBulkReverseGeocodingInvalidLatDetails(invalidlat0Details, invalidLon0Details, 
				invalidLat1Details, invalidLonDetails, SESSION_TOKEN, companyId, false, true, false, false);	        
		String message = null;
		if (COMPANY_ID.equals(String.valueOf(companyId))) {
			message = "'body.coordinates[0].lon' must be a number";
		} 

		ResponseAssert.assertthat(response)
		.statusCodeIs(400)
		.hasContentType("application/json; charset=utf-8")
		.hasKeyWithValue("message", message)
		.assertAll();

	}

	@Test(dataProvider = "Post Create Account InvalidBody", dataProviderClass = GeoCodeApiV1DataProvider.class, invocationCount = 1)
	void invalidLat2Details(Object companyId) throws IOException {

		PostBulkReverseGeocodingInvalidLatDetails invalidlat0Details = GeocodeApiV1TestData.getPostBulkReverseGeocodingInvalidlat0Details();
		PostBulkReverseGeocodingInvalidLonDetails invalidLon0Details = GeocodeApiV1TestData.getPostBulkReverseGeocodingInvalidlon0Details();
		PostBulkReverseGeocodingInvalidLatDetails invalidLat1Details = GeocodeApiV1TestData.getPostBulkReverseGeocodingInvalidlat1Details();
		PostBulkReverseGeocodingInvalidLonDetails invalidLonDetails = GeocodeApiV1TestData.getPostBulkReverseGeocodingInvalidlon1Details();

		Response response = GeocodeApiV1NegativeService.postBulkReverseGeocodingInvalidLatDetails(invalidlat0Details, invalidLon0Details, 
				invalidLat1Details, invalidLonDetails, SESSION_TOKEN, companyId, false, false, true, false);	        
		String message = null;
		if (COMPANY_ID.equals(String.valueOf(companyId))) {
			message = "'body.coordinates[1].lat' must be a number";
		} 

		ResponseAssert.assertthat(response)
		.statusCodeIs(400)
		.hasContentType("application/json; charset=utf-8")
		.hasKeyWithValue("message", message)
		.assertAll();

	}

	@Test(dataProvider = "Post Create Account InvalidBody", dataProviderClass = GeoCodeApiV1DataProvider.class, invocationCount = 1)
	void invalidLon2Details(Object companyId) throws IOException {

		PostBulkReverseGeocodingInvalidLatDetails invalidlat0Details = GeocodeApiV1TestData.getPostBulkReverseGeocodingInvalidlat0Details();
		PostBulkReverseGeocodingInvalidLonDetails invalidLon0Details = GeocodeApiV1TestData.getPostBulkReverseGeocodingInvalidlon0Details();
		PostBulkReverseGeocodingInvalidLatDetails invalidLat1Details = GeocodeApiV1TestData.getPostBulkReverseGeocodingInvalidlat1Details();
		PostBulkReverseGeocodingInvalidLonDetails invalidLonDetails = GeocodeApiV1TestData.getPostBulkReverseGeocodingInvalidlon1Details();

		Response response = GeocodeApiV1NegativeService.postBulkReverseGeocodingInvalidLatDetails(invalidlat0Details, invalidLon0Details, 
				invalidLat1Details, invalidLonDetails, SESSION_TOKEN, companyId, false, false, false, true);	        
		String message = null;
		if (COMPANY_ID.equals(String.valueOf(companyId))) {
			message = "'body.coordinates[1].lon' must be a number";
		} 

		ResponseAssert.assertthat(response)
		.statusCodeIs(400)
		.hasContentType("application/json; charset=utf-8")
		.hasKeyWithValue("message", message)
		.assertAll();

	}
}