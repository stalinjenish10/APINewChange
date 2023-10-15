package com.capestart.standardaddressv2test.positivetest;

import java.io.IOException;
import org.testng.annotations.BeforeSuite;
import org.testng.annotations.Test;
import com.capestart.apilayers.StandardAddressV2Service;
import com.capestart.assertwrapper.ResponseAssert;
import com.capestart.logintest.LoginSetup;
import com.capestart.pojos.standardaddressv2.PostStandardAddressDetails;
import com.capestart.pojos.standardaddressv2.PostStandardAddressStringDetails;
import com.capestart.testdata.StandardAddressV2TestData;
import com.fasterxml.jackson.core.exc.StreamReadException;
import com.fasterxml.jackson.databind.DatabindException;
import io.restassured.response.Response;
import static com.capestart.commonutils.CommonUtils.*;
import static com.capestart.commonutils.StandardAddressV2Utils.*;

public class StandardAddressV2Test {
	public static String SESSION_TOKEN;

	@BeforeSuite
	public void setUp() {
		// Ensure that the login setup runs only once for the entire suite
		LoginSetup.setUp();
		SESSION_TOKEN = LoginSetup.getSessionToken();
	}

	@Test
	void getCoordsStandardAddres() {
		Response response = StandardAddressV2Service.getCoordsStandardAddress(SESSION_TOKEN);
		String keyPath = "addresses[0].latitude";
		ResponseAssert.assertthat(response)
		.statusCodeIs(EXPECTED_STATUS_CODE_FOR_OK)
		.hasContentType(CONTENT_TYPE)
		.hasKeyWithValue(keyPath, POST_LAT_VALUE)
		.assertAll();
	}

	@Test
	void postStandardAddress() throws StreamReadException, DatabindException, IOException {
		PostStandardAddressDetails postStandardAddressDetails = StandardAddressV2TestData.getPostStandardAddressDetails();
		Response response = StandardAddressV2Service.getPostStandardAddress(postStandardAddressDetails, SESSION_TOKEN);
		String keyPath = "data[0].address";
		ResponseAssert.assertthat(response)
		.statusCodeIs(EXPECTED_STATUS_CODE_FOR_OK)
		.hasKeyWithValue(keyPath, POST_ADDRESS_SUCCESS_MESSAGE)
		.hasContentType(CONTENT_TYPE)
		.assertAll();
	}

	@Test
	void postStandardAddressString() throws StreamReadException, DatabindException, IOException {
		PostStandardAddressStringDetails postStandardAddressStringDetails = StandardAddressV2TestData.getPostStandardAddressStringDetails();
		Response response = StandardAddressV2Service.getPostStandardAddressString(postStandardAddressStringDetails, SESSION_TOKEN);
		ResponseAssert.assertthat(response)
		.statusCodeIs(EXPECTED_STATUS_CODE_FOR_OK)
		.hasContentType(CONTENT_TYPE)
		.assertAll();
	}
}