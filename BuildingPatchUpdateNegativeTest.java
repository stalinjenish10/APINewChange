package com.capestart.connectedworldbuildingv5test.negativetest;

import com.capestart.assertwrapper.ResponseAssert;
import static com.capestart.commonutils.CommonUtils.*;
import static com.capestart.commonutils.ConnectedWorldUtils.*;
import com.capestart.logintest.LoginSetup;
import com.capestart.negativeapilayers.ConnectedWorldBuildingV5NegativeService;
import com.capestart.pojos.connectedworldbuildingv5.PatchUpdateBuildingDetails;
import com.capestart.pojos.connectedworldbuildingv5.PatchUpdateBuildingInvalidInputDetails;
import com.capestart.testdata.ConnectedWorldBuildingV5TestData;
import io.restassured.response.Response;
import org.testng.annotations.BeforeSuite;
import org.testng.annotations.Test;
import java.io.IOException;

public class BuildingPatchUpdateNegativeTest {

	public static String SESSION_TOKEN;

	@BeforeSuite
	public void setUp() {
		// Ensure that the login setup runs only once for the entire suite
		LoginSetup.setUp();
		SESSION_TOKEN = LoginSetup.getSessionToken();
	}

	@Test
	public void patchUpdateBuildingWithInvalidInputDetails() throws IOException {
		PatchUpdateBuildingInvalidInputDetails patchUpdateBuildingInvalidInputDetails =
				ConnectedWorldBuildingV5TestData.getPatchUpdateBuildingInvalidInputDetails();
		String uniqueKey = ConnectedWorldBuildingV5NegativeService.UNIQUEKEY;
		Response response =
				ConnectedWorldBuildingV5NegativeService.getPatchUpdateBuildingInvalidInputDetails(patchUpdateBuildingInvalidInputDetails,
						SESSION_TOKEN, uniqueKey);
		ResponseAssert.assertthat(response)
		.statusCodeIs(EXPECTED_STATUS_CODE_FOR_BAD_REQUEST)
		.hasContentType(DEFAULT_CONTENT_TYPE)
		.hasKeyWithValue("message", PATCH_INVALID_INPUT_DETAILS_MESSAGE)
		.assertAll();
	}

	@Test
	public void patchUpdateBuildingWithInvalidUniquekey() throws IOException {
		PatchUpdateBuildingInvalidInputDetails patchUpdateBuildingInvalidInputDetails =
				ConnectedWorldBuildingV5TestData.getPatchUpdateBuildingInvalidInputDetails();
		String uniqueKey = ConnectedWorldBuildingV5NegativeService.INVALID_UNIQUEKEY;
		Response response =
				ConnectedWorldBuildingV5NegativeService.getPatchUpdateBuildingInvalidInputDetails(patchUpdateBuildingInvalidInputDetails,
						SESSION_TOKEN, uniqueKey);
		ResponseAssert.assertthat(response)
		.statusCodeIs(EXPECTED_STATUS_CODE_FOR_BAD_REQUEST)
		.hasContentType(DEFAULT_CONTENT_TYPE)
		.hasKeyWithValue("message", PATCH_INVALID_INPUT_UNIQUEKEY_MESSAGE)
		.assertAll();
	}

	@Test
	public void patchUpdateBuildingWithInvalidOcpKey() throws IOException {
		PatchUpdateBuildingDetails patchUpdateBuildingDetails = ConnectedWorldBuildingV5TestData.getPatchUpdateBuildingDetails();
		String uniqueKey = ConnectedWorldBuildingV5NegativeService.UNIQUEKEY;
		Response response =
				ConnectedWorldBuildingV5NegativeService.getPatchUpdateBuildingInvalidOcpKey(patchUpdateBuildingDetails, SESSION_TOKEN, uniqueKey);
		ResponseAssert.assertthat(response)
		.statusCodeIs(EXPECTED_STATUS_CODE_FOR_UNAUTHORIZED)
		.hasContentType(DEFAULT_CONTENT_TYPE)
		.hasKeyWithValue("message",
				EXPECTING_INVALID_OCP_KEY_MESSAGE)
		.assertAll();
	}

	@Test
	public void patchUpdateBuildingWithInvalidResources() throws IOException {
		PatchUpdateBuildingDetails patchUpdateBuildingDetails = ConnectedWorldBuildingV5TestData.getPatchUpdateBuildingDetails();
		String uniqueKey = ConnectedWorldBuildingV5NegativeService.UNIQUEKEY;
		Response response =
				ConnectedWorldBuildingV5NegativeService.getPatchUpdateBuildingInvalidEndpoint(patchUpdateBuildingDetails, SESSION_TOKEN,
						uniqueKey);
		ResponseAssert.assertthat(response)
		.statusCodeIs(EXPECTED_STATUS_CODE_FOR_RESOURCE_NOT_FOUND)
		.hasContentType(DEFAULT_CONTENT_TYPE)
		.hasKeyWithValue("message", EXPECTED_RESOURCE_NOT_FOUND_MESSAGE)
		.assertAll();
	}
}