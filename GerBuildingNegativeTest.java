package com.capestart.connectedworldbuildingv5test.negativetest;

import com.capestart.assertwrapper.ResponseAssert;
import com.capestart.logintest.LoginSetup;
import com.capestart.negativeapilayers.ConnectedWorldBuildingV5NegativeService;
import io.restassured.response.Response;
import org.testng.annotations.BeforeSuite;
import org.testng.annotations.Test;
import static com.capestart.commonutils.CommonUtils.*;

public class GerBuildingNegativeTest {

	public static String SESSION_TOKEN;

	@BeforeSuite
	public void setUp() {
		// Ensure that the login setup runs only once for the entire suite
		LoginSetup.setUp();
		SESSION_TOKEN = LoginSetup.getSessionToken();
	}

	@Test
	void getBuildingInvalidData() {
		String uniqueKey = ConnectedWorldBuildingV5NegativeService.INVALID_UNIQUEKEY;
		Response response = ConnectedWorldBuildingV5NegativeService.getGetBuildingInvalidData(SESSION_TOKEN, uniqueKey);
		ResponseAssert.assertthat(response)
		.statusCodeIs(EXPECTED_STATUS_CODE_FOR_BAD_REQUEST)
		.hasContentType(DEFAULT_CONTENT_TYPE)
		.assertAll();
	}

	@Test
	void getBuildingInvalidHeader() {
		String uniqueKey = ConnectedWorldBuildingV5NegativeService.UNIQUEKEY;
		Response response = ConnectedWorldBuildingV5NegativeService.getGetBuildingInvalidHeader(SESSION_TOKEN, uniqueKey);
		ResponseAssert.assertthat(response)
		.statusCodeIs(EXPECTED_STATUS_CODE_FOR_UNAUTHORIZED)
		.hasContentType(DEFAULT_CONTENT_TYPE)
		.hasKeyWithValue("message",
				EXPECTING_INVALID_OCP_KEY_MESSAGE)
		.assertAll();
	}

	@Test
	void getBuildingInvalidResources() {
		String uniqueKey = ConnectedWorldBuildingV5NegativeService.UNIQUEKEY;
		Response response = ConnectedWorldBuildingV5NegativeService.getGetBuildingInvalidEndpoint(SESSION_TOKEN, uniqueKey);
		ResponseAssert.assertthat(response)
		.statusCodeIs(EXPECTED_STATUS_CODE_FOR_RESOURCE_NOT_FOUND)
		.hasContentType(DEFAULT_CONTENT_TYPE)
		.hasKeyWithValue("message", EXPECTED_RESOURCE_NOT_FOUND_MESSAGE)
		.assertAll();
	}
}