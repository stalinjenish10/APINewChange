package com.capestart.internationaladdressvalidationtest.negativetest;

import com.capestart.assertwrapper.ResponseAssert;
import static com.capestart.commonutils.InternationalAddressUtils.*;
import com.capestart.logintest.LoginSetup;
import com.capestart.negativeapilayers.InternationalAddressValidationNegativeService;
import io.restassured.response.Response;
import org.testng.annotations.BeforeSuite;
import org.testng.annotations.Test;
import static com.capestart.commonutils.CommonUtils.*;

public class InternationalAddressValidationNegativeTest {

	public static String SESSION_TOKEN;

	@BeforeSuite
	public void setUp() {
		// Ensure that the login setup runs only once for the entire suite
		LoginSetup.setUp();
		SESSION_TOKEN = LoginSetup.getSessionToken();
	}

	@Test
	void getInternationalAddressValidationWithoutQueryParam() {
		Response response = InternationalAddressValidationNegativeService.getInternationalAddressWithoutQueryParam(SESSION_TOKEN);
		ResponseAssert.assertthat(response)
		.statusCodeIs(EXPECTED_STATUS_CODE_FOR_BAD_REQUEST)
		.hasContentType(CONTENT_TYPE)
		.hasKeyWithValue("status", EXPECTING_FAILED_STATUS_MESSAGE)
		.hasKeyWithValue("message", INTERNATIONAL_ADDRESS_WITHOUT_COUNTRY_MESSAGE)
		.assertAll();
	}

	@Test
	void getInternationalAddressValidationWithInvalidCountry() {
		Response response = InternationalAddressValidationNegativeService.getInternationalAddressWithInvalidAddress(SESSION_TOKEN);
		ResponseAssert.assertthat(response)
		.statusCodeIs(EXPECTED_STATUS_CODE_FOR_BAD_REQUEST)
		.hasContentType(CONTENT_TYPE)
		.hasKeyWithValue("status", EXPECTING_FAILED_STATUS_MESSAGE)
		.hasKeyWithValue("message", INTERNATIONAL_ADDRESS_INVALID_COUNTRY_MESSAGE)
		.assertAll();
	}

	@Test
	void getInternationalAddressWithInvalidHeader() {
		Response response = InternationalAddressValidationNegativeService.getInternationalAddressWithInvalidHeader(SESSION_TOKEN);
		ResponseAssert.assertthat(response)
		.statusCodeIs(EXPECTED_STATUS_CODE_FOR_UNAUTHORIZED)
		.hasContentType(DEFAULT_CONTENT_TYPE)
		.hasKeyWithValue("message",
				EXPECTING_INVALID_OCP_KEY_MESSAGE)
		.assertAll();
	}

	@Test
	void getAddressValidationWithInvalidResources() {
		Response response = InternationalAddressValidationNegativeService.getInternationalAddressWithInvalidResources(SESSION_TOKEN);
		ResponseAssert.assertthat(response)
		.statusCodeIs(EXPECTED_STATUS_CODE_FOR_RESOURCE_NOT_FOUND)
		.hasContentType(DEFAULT_CONTENT_TYPE)
		.hasKeyWithValue("message", EXPECTED_RESOURCE_NOT_FOUND_MESSAGE)
		.assertAll();
	}
}