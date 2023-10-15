package com.capestart.connectedworldbuildingv5test.positivetest;

import com.capestart.apilayers.ConnectedWorldBuildingV5Service;
import com.capestart.assertwrapper.ResponseAssert;
import com.capestart.extractingvalues.ConnectedWorldBuildingUtility;
import com.capestart.logintest.LoginSetup;
import com.capestart.pojos.connectedworldbuildingv5.*;
import com.capestart.testdata.ConnectedWorldBuildingV5TestData;
import com.fasterxml.jackson.core.exc.StreamReadException;
import com.fasterxml.jackson.databind.DatabindException;
import io.restassured.RestAssured;
import io.restassured.filter.log.RequestLoggingFilter;
import io.restassured.filter.log.ResponseLoggingFilter;
import io.restassured.response.Response;
import org.testng.annotations.BeforeSuite;
import org.testng.annotations.Listeners;
import org.testng.annotations.Test;
import java.io.IOException;
import static com.capestart.commonutils.CommonUtils.*;
import static com.capestart.commonutils.ConnectedWorldUtils.*;

@Listeners
public class ConnectedWorldBuildingV5Test {

	public static String SESSION_TOKEN;
	public static String POST_EXTRACTED_UNIQUEKEY;
	public static String REMOVE_EXTRACTED_UNIQUEKEY;
	public static String MULTIPLE_REMOVE_EXTRACTED_UNIQUEKEY;
	public static String PATCH_EXTRACTED_UNIQUEKEY;

	static {
		RestAssured.filters(new RequestLoggingFilter(), new ResponseLoggingFilter());
	}

	@BeforeSuite
	public void setUp() {
		// Ensure that the login setup runs only once for the entire suite
		LoginSetup.setUp();
		SESSION_TOKEN = LoginSetup.getSessionToken();
	}

	@Test(priority = 1)
	void postCreateBuilding() throws StreamReadException, DatabindException, IOException {
		CreateBuildingDetails createBuildingDetails = ConnectedWorldBuildingV5TestData.getCreateBuildingDetails();
		String keyPath1 = "building.uniqueKey";
		POST_EXTRACTED_UNIQUEKEY = testPostCreateAccount(createBuildingDetails, SESSION_TOKEN, keyPath1);

		CreateBuildingForDeleteDetails createBuildingForDeleteDetails =
				ConnectedWorldBuildingV5TestData.getCreateBuildingForDeleteDetails();
		String keyPath2 = "building.uniqueKey";
		REMOVE_EXTRACTED_UNIQUEKEY = testPostCreateAccountForDeleteBuilding(createBuildingForDeleteDetails, SESSION_TOKEN, keyPath2);

		CreateBuildingForDeleteMultipleBuildings createBuildingForDeleteMultipleBuildings =
				ConnectedWorldBuildingV5TestData.getCreateBuildingForDeleteMultipleDetails();
		String keyPath3 = "building.uniqueKey";
		MULTIPLE_REMOVE_EXTRACTED_UNIQUEKEY =
				testPostCreateAccountForDeleteMultipleBuildings(createBuildingForDeleteMultipleBuildings, SESSION_TOKEN, keyPath3);
	}

	private String testPostCreateAccount(CreateBuildingDetails createBuildingDetails, String SESSION_TOKEN, String keyPath) {
		Response response = ConnectedWorldBuildingV5Service.getPostCreateAccount(createBuildingDetails, SESSION_TOKEN);
		return testResponse(response, keyPath);
	}

	private String testPostCreateAccountForDeleteBuilding(CreateBuildingForDeleteDetails createBuildingForDeleteDetails, String SESSION_TOKEN, String keyPath) {
		Response response = ConnectedWorldBuildingV5Service.getPostCreateAccountForDeleteBuilding(createBuildingForDeleteDetails, SESSION_TOKEN);
		return testResponse(response, keyPath);
	}

	private String testPostCreateAccountForDeleteMultipleBuildings(
			CreateBuildingForDeleteMultipleBuildings createBuildingForDeleteMultipleBuildings, String SESSION_TOKEN, String keyPath) {
		Response response =
				ConnectedWorldBuildingV5Service.getPostCreateAccountForDeleteMultipleBuildings(createBuildingForDeleteMultipleBuildings,
						SESSION_TOKEN);
		return testResponse(response, keyPath);
	}

	private String testResponse(Response response, String keyPath) {
		String ResponseBody = response.then().log().all().extract().asPrettyString();
		ResponseAssert.assertthat(response)
		.statusCodeIs(EXPECTED_STATUS_CODE_CREATED)
		.hasContentType(DEFAULT_CONTENT_TYPE)
		.hasKeyWithValue("message", BUILDING_SUCCESS_MESSAGE)
		.assertAll();
		return ConnectedWorldBuildingUtility.extractuniquekey(ResponseBody, keyPath);
	}

	@Test(dependsOnMethods = "postCreateBuilding", priority = 2)
	void getBuilding() {
		Response response = ConnectedWorldBuildingV5Service.getGetBuilding(POST_EXTRACTED_UNIQUEKEY, SESSION_TOKEN);
		ResponseAssert.assertthat(response)
		.statusCodeIs(EXPECTED_STATUS_CODE_FOR_OK)
		.hasContentType(DEFAULT_CONTENT_TYPE)
		.hasKeyWithValue("uniqueKey", POST_EXTRACTED_UNIQUEKEY)
		.assertAll();
	}

	@Test(dependsOnMethods = "getBuilding", priority = 3)
	void patchUpdateBuilding() throws StreamReadException, DatabindException, IOException {
		PatchUpdateBuildingDetails patchUpdateBuildingDetails = ConnectedWorldBuildingV5TestData.getPatchUpdateBuildingDetails();
		Response response =
				ConnectedWorldBuildingV5Service.getPatchUpdateBuilding(patchUpdateBuildingDetails, SESSION_TOKEN, POST_EXTRACTED_UNIQUEKEY);
		String ResponseBody = response.then().log().all().extract().asPrettyString();

		ResponseAssert.assertthat(response)
		.statusCodeIs(EXPECTED_STATUS_CODE_FOR_OK)
		.hasContentType(DEFAULT_CONTENT_TYPE)
		.hasKeyWithValue("message", BUILDING_UPDATE_MESSAGE)
		.assertAll();

		String keyPath = "building.uniqueKey";
		PATCH_EXTRACTED_UNIQUEKEY = ConnectedWorldBuildingUtility.extractuniquekey(ResponseBody, keyPath);
		System.out.println("unique key is " + PATCH_EXTRACTED_UNIQUEKEY);
	}

	@Test(dependsOnMethods = "patchUpdateBuilding", priority = 4)
	void putUpdateBuilding() throws StreamReadException, DatabindException, IOException {
		PutUpdateBuildingDetails putUpdateBuildingDetails = ConnectedWorldBuildingV5TestData.getPutUpdateBuildingDetails();
		Response response =
				ConnectedWorldBuildingV5Service.getPutUpdateBuilding(putUpdateBuildingDetails, SESSION_TOKEN, PATCH_EXTRACTED_UNIQUEKEY);

		ResponseAssert.assertthat(response)
		.statusCodeIs(EXPECTED_STATUS_CODE_FOR_OK)
		.hasContentType(DEFAULT_CONTENT_TYPE)
		.hasKeyWithValue("message", BUILDING_UPDATE_MESSAGE)
		.assertAll();

	}

	@Test
	void getAllBuilding() {
		Response response = ConnectedWorldBuildingV5Service.getAllBuilding(SESSION_TOKEN);
		ResponseAssert.assertthat(response)
		.statusCodeIs(EXPECTED_STATUS_CODE_FOR_OK)
		.hasContentType(DEFAULT_CONTENT_TYPE)
		.assertAll();
	}

	@Test
	void getBuildingsByAddressComponent() {
		Response response = ConnectedWorldBuildingV5Service.getGetBuildingsByAddressComponent(SESSION_TOKEN);
		ResponseAssert.assertthat(response)
		.statusCodeIs(EXPECTED_STATUS_CODE_FOR_OK)
		.hasContentType(DEFAULT_CONTENT_TYPE)
		.assertAll();
	}

	@Test
	void getBuildingsCustomFields() {
		Response response = ConnectedWorldBuildingV5Service.getGetBuildingsCustomFields(SESSION_TOKEN);
		ResponseAssert.assertthat(response)
		.statusCodeIs(200)
		.hasContentType(DEFAULT_CONTENT_TYPE)
		.assertAll();
	}

	@Test(dependsOnMethods = "postCreateBuilding", priority = 5)
	void deleteBuilding() {
		Response response = ConnectedWorldBuildingV5Service.getDeleteBuilding(POST_EXTRACTED_UNIQUEKEY, SESSION_TOKEN);
		ResponseAssert.assertthat(response)
		.statusCodeIs(EXPECTED_STATUS_CODE_FOR_OK)
		.hasContentType(DEFAULT_CONTENT_TYPE)
		.hasKeyWithValue("message", BUILDING_DELETE_MESSAGE)
		.assertAll();
	}

	@Test(dependsOnMethods = "postCreateBuilding", priority = 6)
	void deleteMultipleBuilding() {
		Response response =
				ConnectedWorldBuildingV5Service.getDeleteMultipleBuilding(REMOVE_EXTRACTED_UNIQUEKEY, MULTIPLE_REMOVE_EXTRACTED_UNIQUEKEY,
						SESSION_TOKEN);
		ResponseAssert.assertthat(response)
		.statusCodeIs(EXPECTED_STATUS_CODE_FOR_OK)
		.hasContentType(DEFAULT_CONTENT_TYPE)
		.hasKeyWithValue("message", BUILDING_DELETE_MESSAGE)
		.assertAll();
	}
}