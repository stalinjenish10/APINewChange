package com.capestart.standardaddressv2test.negativetest;

import com.capestart.assertwrapper.ResponseAssert;
import static com.capestart.commonutils.StandardAddressV2Utils.*;
import com.capestart.logintest.LoginSetup;
import com.capestart.negativeapilayers.StandardAddressV2NegativeService;
import io.restassured.response.Response;
import org.testng.annotations.BeforeSuite;
import org.testng.annotations.Test;
import static com.capestart.commonutils.CommonUtils.*;

public class GetCoordsNegativeTest {

	public static String SESSION_TOKEN;

	@BeforeSuite
	public void setUp() {
		// Ensure that the login setup runs only once for the entire suite
		LoginSetup.setUp();
		SESSION_TOKEN = LoginSetup.getSessionToken();
	}

	@Test
	void getCoordsWithInvalidLat() {
		Response response = StandardAddressV2NegativeService.getCoordsStandardAddressCoordsWithInvalidLat(SESSION_TOKEN);
		ResponseAssert.assertthat(response)
		.statusCodeIs(EXPECTED_STATUS_CODE_FOR_BAD_REQUEST)
		.hasContentType(CONTENT_TYPE)
		.hasKeyWithValue("message", INVALID_LAT_MESSAGE)
		.assertAll();
	}

	@Test
	void getCoordsWithInvalidLon() {
		Response response = StandardAddressV2NegativeService.getCoordsStandardAddressCoordsWithInvalidLon(SESSION_TOKEN);
		ResponseAssert.assertthat(response)
		.statusCodeIs(EXPECTED_STATUS_CODE_FOR_BAD_REQUEST)
		.hasContentType(CONTENT_TYPE)
		.hasKeyWithValue("message", INVALID_LON_MESSAGE)
		.assertAll();
	}

	@Test
	void getCoordsWithInvalidHeader() {
		Response response = StandardAddressV2NegativeService.getCoordsStandardAddressCoordsWithInvalidHeader(SESSION_TOKEN);
		ResponseAssert.assertthat(response)
		.statusCodeIs(EXPECTED_STATUS_CODE_FOR_UNAUTHORIZED)
		.hasContentType(DEFAULT_CONTENT_TYPE)
		.hasKeyWithValue("message",
				EXPECTING_INVALID_OCP_KEY_MESSAGE)
		.assertAll();
	}

	@Test
	void getAddressValidationWithInvalidResources() {
		Response response = StandardAddressV2NegativeService.getCoordsStandardAddressCoordsWithInvalidResources(SESSION_TOKEN);
		ResponseAssert.assertthat(response)
		.statusCodeIs(EXPECTED_STATUS_CODE_FOR_RESOURCE_NOT_FOUND)
		.hasContentType(DEFAULT_CONTENT_TYPE)
		.hasKeyWithValue("message", EXPECTED_RESOURCE_NOT_FOUND_MESSAGE)
		.assertAll();
	}
}