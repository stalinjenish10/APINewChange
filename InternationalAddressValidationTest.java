package com.capestart.internationaladdressvalidationtest.positivetest;

import org.testng.annotations.BeforeSuite;
import org.testng.annotations.Test;
import com.capestart.apilayers.InternationalAddressValidationService;
import com.capestart.assertwrapper.ResponseAssert;
import com.capestart.logintest.LoginSetup;
import io.restassured.response.Response;
import static com.capestart.commonutils.CommonUtils.*;

public class InternationalAddressValidationTest {
	public static String SESSION_TOKEN;

	@BeforeSuite
	public void setUp() {
		// Ensure that the login setup runs only once for the entire suite
		LoginSetup.setUp();
		SESSION_TOKEN = LoginSetup.getSessionToken();
	}

	@Test
	void getInternationalAddressValidation() {
		Response response = InternationalAddressValidationService.getInternationalAddress(SESSION_TOKEN);
		ResponseAssert.assertthat(response)
		.statusCodeIs(EXPECTED_STATUS_CODE_FOR_OK)
		.hasContentType(CONTENT_TYPE)
		.hasKeyWithValue("inputAddress", InternationalAddressValidationService.INTERNATIONAL_ADDRESS)
		.hasKeyWithValue("result", EXPECTING_RESULT_MESSAGE)
		.assertAll();
	}
}