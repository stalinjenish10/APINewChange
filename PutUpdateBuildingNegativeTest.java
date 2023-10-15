package com.capestart.connectedworldbuildingv5test.negativetest;

import com.capestart.assertwrapper.ResponseAssert;
import com.capestart.logintest.LoginSetup;
import com.capestart.negativeapilayers.ConnectedWorldBuildingV5NegativeService;
import com.capestart.pojos.connectedworldbuildingv5.PutUpdateBuildingDetails;
import com.capestart.pojos.connectedworldbuildingv5.PutUpdateBuildingInvalidInputDetails;
import com.capestart.testdata.ConnectedWorldBuildingV5TestData;
import io.restassured.response.Response;
import org.testng.annotations.BeforeSuite;
import org.testng.annotations.Test;
import java.io.IOException;
import static com.capestart.commonutils.CommonUtils.*;

public class PutUpdateBuildingNegativeTest {
	public static String SESSION_TOKEN;

	@BeforeSuite
	public void setUp() {
		// Ensure that the login setup runs only once for the entire suite
		LoginSetup.setUp();
		SESSION_TOKEN = LoginSetup.getSessionToken();

	}

	@Test
	public void putUpdateBuildingWithInvalidInputDetails() throws IOException {
		PutUpdateBuildingInvalidInputDetails putUpdateBuildingInvalidInputDetails =
				ConnectedWorldBuildingV5TestData.getPutUpdateBuildingInvalidInputDetails();
		String uniqueKey = ConnectedWorldBuildingV5NegativeService.UNIQUEKEY;
		Response response =
				ConnectedWorldBuildingV5NegativeService.getPutUpdateBuildingInvalidInput(putUpdateBuildingInvalidInputDetails, SESSION_TOKEN,
						uniqueKey);
		ResponseAssert.assertthat(response)
		.statusCodeIs(EXPECTED_STATUS_CODE_FOR_BAD_REQUEST)
		.hasContentType(DEFAULT_CONTENT_TYPE)
		.assertAll();
	}

	@Test
	public void putUpdateBuildingWithInvalidHeader() throws IOException {
		PutUpdateBuildingDetails putUpdateBuildingDetails = ConnectedWorldBuildingV5TestData.getPutUpdateBuildingDetails();
		String uniqueKey = ConnectedWorldBuildingV5NegativeService.UNIQUEKEY;
		Response response =
				ConnectedWorldBuildingV5NegativeService.getPutUpdateBuildingInvalidHeader(putUpdateBuildingDetails, SESSION_TOKEN, uniqueKey);
		ResponseAssert.assertthat(response)
		.statusCodeIs(EXPECTED_STATUS_CODE_FOR_UNAUTHORIZED)
		.hasContentType(DEFAULT_CONTENT_TYPE)
		.hasKeyWithValue("message",
				EXPECTING_INVALID_OCP_KEY_MESSAGE)
		.assertAll();
	}

	@Test
	public void putUpdateBuildingWithInvalidResources() throws IOException {

		PutUpdateBuildingDetails putUpdateBuildingDetails = ConnectedWorldBuildingV5TestData.getPutUpdateBuildingDetails();
		String uniqueKey = ConnectedWorldBuildingV5NegativeService.UNIQUEKEY;
		Response response =
				ConnectedWorldBuildingV5NegativeService.getPutUpdateBuildingInvalidResources(putUpdateBuildingDetails, SESSION_TOKEN, uniqueKey);
		ResponseAssert.assertthat(response)
		.statusCodeIs(EXPECTED_STATUS_CODE_FOR_RESOURCE_NOT_FOUND)
		.hasContentType(DEFAULT_CONTENT_TYPE)
		.hasKeyWithValue("message", EXPECTED_RESOURCE_NOT_FOUND_MESSAGE)
		.assertAll();
	}
}