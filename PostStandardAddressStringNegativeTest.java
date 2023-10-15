package com.capestart.standardaddressv2test.negativetest;

import com.capestart.assertwrapper.ResponseAssert;
import com.capestart.logintest.LoginSetup;
import com.capestart.negativeapilayers.StandardAddressV2NegativeService;
import com.capestart.pojos.standardaddressv2.PostStandardAddressStringDetails;
import com.capestart.pojos.standardaddressv2.PostStandardAddressStringInvalidBodyDetails;
import com.capestart.testdata.StandardAddressV2TestData;
import io.restassured.response.Response;
import org.testng.annotations.BeforeSuite;
import org.testng.annotations.Test;
import java.io.IOException;
import static com.capestart.commonutils.CommonUtils.*;
import static com.capestart.commonutils.StandardAddressV2Utils.*;

public class PostStandardAddressStringNegativeTest {

	public static String SESSION_TOKEN;

	@BeforeSuite
	public void setUp() {
		// Ensure that the login setup runs only once for the entire suite
		LoginSetup.setUp();
		SESSION_TOKEN = LoginSetup.getSessionToken();
	}

	@Test
	void postStandardAddressStringWithInvalidBody() throws IOException {
		PostStandardAddressStringInvalidBodyDetails postStandardAddressStringInvalidBodyDetails =
				StandardAddressV2TestData.getPostStandardAddressStringInvalidBodyDetails();
		Response response =
				StandardAddressV2NegativeService.getPostStandardAddressStringWithInvalidBody(postStandardAddressStringInvalidBodyDetails,
						SESSION_TOKEN);
		ResponseAssert.assertthat(response)
		.statusCodeIs(EXPECTED_STATUS_CODE_FOR_BAD_REQUEST)
		.hasContentType(CONTENT_TYPE)
		.hasKeyWithValue("message", WITHOUT_ADDRESS_MESSAGE)
		.assertAll();
	}

	@Test
	void postStandardAddressStringWithInvalidHeader() throws IOException {
		PostStandardAddressStringDetails postStandardAddressStringDetails = StandardAddressV2TestData.getPostStandardAddressStringDetails();
		Response response =
				StandardAddressV2NegativeService.getPostStandardAddressStringWithInvalidHeader(postStandardAddressStringDetails, SESSION_TOKEN);
		ResponseAssert.assertthat(response)
		.statusCodeIs(EXPECTED_STATUS_CODE_FOR_UNAUTHORIZED)
		.hasContentType(DEFAULT_CONTENT_TYPE)
		.hasKeyWithValue("message",
				EXPECTING_INVALID_OCP_KEY_MESSAGE)
		.assertAll();
	}

	@Test
	void postStandardAddressStringWithInvalidResources() throws IOException {
		PostStandardAddressStringDetails postStandardAddressStringDetails = StandardAddressV2TestData.getPostStandardAddressStringDetails();
		Response response =
				StandardAddressV2NegativeService.getPostStandardAddressStringWithInvalidEndpoint(postStandardAddressStringDetails, SESSION_TOKEN);
		ResponseAssert.assertthat(response)
		.statusCodeIs(EXPECTED_STATUS_CODE_FOR_RESOURCE_NOT_FOUND)
		.hasContentType(DEFAULT_CONTENT_TYPE)
		.hasKeyWithValue("message", EXPECTED_RESOURCE_NOT_FOUND_MESSAGE)
		.assertAll();
	}
}