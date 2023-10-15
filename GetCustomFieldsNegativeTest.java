package com.capestart.connectedworldbuildingv5test.negativetest;

import com.capestart.assertwrapper.ResponseAssert;
import com.capestart.logintest.LoginSetup;
import com.capestart.negativeapilayers.ConnectedWorldBuildingV5NegativeService;
import io.restassured.response.Response;
import org.testng.annotations.BeforeSuite;
import org.testng.annotations.Test;
import static com.capestart.commonutils.CommonUtils.*;

public class GetCustomFieldsNegativeTest {
	public static String SESSION_TOKEN;

	@BeforeSuite
	public void setUp() {
		// Ensure that the login setup runs only once for the entire suite
		LoginSetup.setUp();
		SESSION_TOKEN = LoginSetup.getSessionToken();
	}

	@Test
	void getCustomFieldsWithInvalidHeader() {
		Response response = ConnectedWorldBuildingV5NegativeService.getGetBuildingsCustomFieldsInvalidHeader(SESSION_TOKEN);
		ResponseAssert.assertthat(response)
		.statusCodeIs(EXPECTED_STATUS_CODE_FOR_UNAUTHORIZED)
		.hasContentType(DEFAULT_CONTENT_TYPE)
		.hasKeyWithValue("message",
				EXPECTING_INVALID_OCP_KEY_MESSAGE)
		.assertAll();
	}

	@Test
	void getCustomFieldsInvalidResources() {
		Response response = ConnectedWorldBuildingV5NegativeService.getGetBuildingsCustomFieldsInvalidEndpoint(SESSION_TOKEN);
		ResponseAssert.assertthat(response)
		.statusCodeIs(EXPECTED_STATUS_CODE_FOR_RESOURCE_NOT_FOUND)
		.hasContentType(DEFAULT_CONTENT_TYPE)
		.hasKeyWithValue("message", EXPECTED_RESOURCE_NOT_FOUND_MESSAGE)
		.assertAll();
	}
}