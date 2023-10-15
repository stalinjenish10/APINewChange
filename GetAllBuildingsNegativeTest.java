package com.capestart.connectedworldbuildingv5test.negativetest;

import com.capestart.assertwrapper.ResponseAssert;
import com.capestart.logintest.LoginSetup;
import com.capestart.negativeapilayers.ConnectedWorldBuildingV5NegativeService;
import io.restassured.response.Response;
import org.testng.annotations.BeforeSuite;
import org.testng.annotations.Test;
import static com.capestart.commonutils.CommonUtils.*;
import static com.capestart.commonutils.ConnectedWorldUtils.*;

public class GetAllBuildingsNegativeTest {

	public static String SESSION_TOKEN;

	@BeforeSuite
	public void setUp() {
		// Ensure that the login setup runs only once for the entire suite
		LoginSetup.setUp();
		SESSION_TOKEN = LoginSetup.getSessionToken();
	}

	@Test
	void getAllBuildingWithoutParameters() {
		Response response = ConnectedWorldBuildingV5NegativeService.getAllBuilding(SESSION_TOKEN);
		ResponseAssert.assertthat(response)
		.statusCodeIs(EXPECTED_STATUS_CODE_FOR_OK)
		.hasContentType(DEFAULT_CONTENT_TYPE)
		.assertAll();
	}

	@Test
	void getGetBuildingInvalidCompanyId() {
		Response response = ConnectedWorldBuildingV5NegativeService.getAllBuildingInvalidCompanyId(SESSION_TOKEN);
		ResponseAssert.assertthat(response)
		.statusCodeIs(EXPECTED_STATUS_CODE_FOR_UNAUTHORIZED)
		.hasContentType(DEFAULT_CONTENT_TYPE)
		.hasKeyWithValue("message",
				GET_BUILDING_INVALID_COMPANY_ID_MESSAGE)
		.assertAll();
	}

	@Test
	void getGetBuildingInvalidHeader() {
		Response response = ConnectedWorldBuildingV5NegativeService.getAllBuildingInvalidHeader(SESSION_TOKEN);
		ResponseAssert.assertthat(response)
		.statusCodeIs(EXPECTED_STATUS_CODE_FOR_UNAUTHORIZED)
		.hasContentType(DEFAULT_CONTENT_TYPE)
		.hasKeyWithValue("message",
				EXPECTING_INVALID_OCP_KEY_MESSAGE)
		.assertAll();
	}

	@Test
	void getGetBuildingInvalidResources() {
		Response response = ConnectedWorldBuildingV5NegativeService.getAllBuildingInvalidEndpoint(SESSION_TOKEN);
		ResponseAssert.assertthat(response)
		.statusCodeIs(EXPECTED_STATUS_CODE_FOR_RESOURCE_NOT_FOUND)
		.hasContentType(DEFAULT_CONTENT_TYPE)
		.hasKeyWithValue("message", EXPECTED_RESOURCE_NOT_FOUND_MESSAGE)
		.assertAll();
	}
}