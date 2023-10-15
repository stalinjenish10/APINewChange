package com.capestart.connectedworldbuildingv5test.negativetest;

import com.capestart.assertwrapper.ResponseAssert;
import com.capestart.logintest.LoginSetup;
import com.capestart.negativeapilayers.ConnectedWorldBuildingV5NegativeService;
import io.restassured.response.Response;
import org.testng.annotations.BeforeSuite;
import org.testng.annotations.Test;
import static com.capestart.commonutils.CommonUtils.*;

public class RemoveMultipleBuildingsNegativeTest {

	public static String SESSION_TOKEN;

	@BeforeSuite
	public void setUp() {
		// Ensure that the login setup runs only once for the entire suite
		LoginSetup.setUp();
		SESSION_TOKEN = LoginSetup.getSessionToken();
	}

	@Test
	void removeBuldingWithInvalidHeader() {
		String uniqueKey = ConnectedWorldBuildingV5NegativeService.UNIQUEKEY;
		String uniqueKey1 = ConnectedWorldBuildingV5NegativeService.INVALID_UNIQUEKEY;
		Response response =
				ConnectedWorldBuildingV5NegativeService.getDeleteMultipleBuildingInvalidHeader(SESSION_TOKEN, uniqueKey, uniqueKey1);
		ResponseAssert.assertthat(response)
		.statusCodeIs(EXPECTED_STATUS_CODE_FOR_UNAUTHORIZED)
		.hasContentType(DEFAULT_CONTENT_TYPE)
		.hasKeyWithValue("message",
				EXPECTING_INVALID_OCP_KEY_MESSAGE)
		.assertAll();
	}

	@Test
	void removeBuldingWithInvalidResources() {
		String uniqueKey = ConnectedWorldBuildingV5NegativeService.INVALID_UNIQUEKEY;
		String uniqueKey1 = ConnectedWorldBuildingV5NegativeService.UNIQUEKEY;
		Response response =
				ConnectedWorldBuildingV5NegativeService.getDeleteMultipleBuildingInvalidEndpoint(SESSION_TOKEN, uniqueKey, uniqueKey1);
		ResponseAssert.assertthat(response)
		.statusCodeIs(EXPECTED_STATUS_CODE_FOR_RESOURCE_NOT_FOUND)
		.hasContentType(DEFAULT_CONTENT_TYPE)
		.assertAll();
	}
}