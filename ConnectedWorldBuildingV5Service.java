package com.capestart.apilayers;

import com.capestart.factory.ApiConfigFactory;
import com.capestart.pojos.connectedworldbuildingv5.*;
import io.restassured.response.Response;

public final class ConnectedWorldBuildingV5Service {

	private static final String CONNECTED_WORLD_BUILDING_VERSION_ENDPOINT =
			ApiConfigFactory.getConnectedWorldBuildingConfig().connectedWorldBuildingVersionEndpoint();
	private static final String CONNECTED_WORLD_GETBUILDING__ENDPOINT =
			ApiConfigFactory.getConnectedWorldBuildingConfig().connectedWorldGetBuildingEndpoint();
	private static final String CONNECTED_WORLD_BUILDING_PATCH_UPDATE_ENDPOINT =
			ApiConfigFactory.getConnectedWorldBuildingConfig().connectedWorldtBuildingPatchUpdateEndpoint();
	private static final String CONNECTED_WORLD_BUILDING_PUT_UPDATE_ENDPOINT =
			ApiConfigFactory.getConnectedWorldBuildingConfig().connectedWorldtBuildingPutUpdateEndpoint();
	private static final String CONNECTED_WORLD_BUILDING_ADDRESS_COMPONENT_ENDPOINT =
			ApiConfigFactory.getConnectedWorldBuildingConfig().connectedWorldBuildingAddressComponentEndpoint();
	private static final String CONNECTED_WORLD_BUILDING_CUSTOM_FIELDS_ENDPOINT =
			ApiConfigFactory.getConnectedWorldBuildingConfig().connectedWorldBuildingCustomFieldsEndpoint();
	private static final String COMPANY_ID = ApiConfigFactory.getConfig().companyId();
	private static final String PAGE = ApiConfigFactory.getConnectedWorldBuildingConfig().connectedWorldtBuildingPageValue();
	private static final String SIZE = ApiConfigFactory.getConnectedWorldBuildingConfig().connectedWorldtBuildingSizeValue();
	private static final String RADIUS = ApiConfigFactory.getConnectedWorldBuildingConfig().connectedWorldtBuildingRadiusValue();
	private static final String CITY = ApiConfigFactory.getConnectedWorldBuildingConfig().connectedWorldtBuildingCityValue();
	private static final String CONNECTED_WORLD_DELETE_BUILDING_ENDPOINT =
			ApiConfigFactory.getConnectedWorldBuildingConfig().connectedWorldDeleteBuildingEndpoint();

	private ConnectedWorldBuildingV5Service() {
	}

	public static Response getPostCreateAccount(CreateBuildingDetails createBuildingDetails, String SESSIONTOKEN) {
		return BaseRequestSpecification.getConnectedWorldBuildingDefaultRequestSpec(SESSIONTOKEN)
				.queryParam("companyId", COMPANY_ID)
				.body(createBuildingDetails)
				.post(CONNECTED_WORLD_BUILDING_VERSION_ENDPOINT);
	}

	public static Response getPostCreateAccountForDeleteBuilding(CreateBuildingForDeleteDetails createBuildingForDeleteDetails,
			String SESSIONTOKEN) {
		return BaseRequestSpecification.getConnectedWorldBuildingDefaultRequestSpec(SESSIONTOKEN)
				.queryParam("companyId", COMPANY_ID)
				.body(createBuildingForDeleteDetails)
				.post(CONNECTED_WORLD_BUILDING_VERSION_ENDPOINT);
	}

	public static Response getPostCreateAccountForDeleteMultipleBuildings(
			CreateBuildingForDeleteMultipleBuildings createBuildingDeleteMultipleBuildings, String SESSIONTOKEN) {
		return BaseRequestSpecification.getConnectedWorldBuildingDefaultRequestSpec(SESSIONTOKEN)
				.queryParam("companyId", COMPANY_ID)
				.body(createBuildingDeleteMultipleBuildings)
				.post(CONNECTED_WORLD_BUILDING_VERSION_ENDPOINT);
	}

	public static Response getGetBuilding(String UNIQUEKEY, String SESSIONTOKEN) {
		return BaseRequestSpecification.getConnectedWorldBuildingDefaultRequestSpec(SESSIONTOKEN)
				.pathParam("uniqueKey", UNIQUEKEY)
				.queryParam("companyId", COMPANY_ID)
				.get(CONNECTED_WORLD_BUILDING_VERSION_ENDPOINT + CONNECTED_WORLD_GETBUILDING__ENDPOINT);
	}

	public static Response getPatchUpdateBuilding(PatchUpdateBuildingDetails patchUpdateBuildingDetails, String SESSIONTOKEN,
			String UNIQUEKEY) {
		return BaseRequestSpecification.getConnectedWorldBuildingDefaultRequestSpec(SESSIONTOKEN)
				.pathParam("uniqueKey", UNIQUEKEY)
				.queryParam("companyId", COMPANY_ID)
				.body(patchUpdateBuildingDetails)
				.patch(CONNECTED_WORLD_BUILDING_VERSION_ENDPOINT + CONNECTED_WORLD_BUILDING_PATCH_UPDATE_ENDPOINT);
	}

	public static Response getPutUpdateBuilding(PutUpdateBuildingDetails putUpdateBuildingDetails, String SESSIONTOKEN,
			String UNIQUEKEY) {
		return BaseRequestSpecification.getConnectedWorldBuildingDefaultRequestSpec(SESSIONTOKEN)
				.pathParam("uniqueKey", UNIQUEKEY)
				.queryParam("companyId", COMPANY_ID)
				.body(putUpdateBuildingDetails)
				.put(CONNECTED_WORLD_BUILDING_VERSION_ENDPOINT + CONNECTED_WORLD_BUILDING_PUT_UPDATE_ENDPOINT);
	}

	public static Response getAllBuilding(String SESSIONTOKEN) {
		return BaseRequestSpecification.getConnectedWorldBuildingDefaultRequestSpec(SESSIONTOKEN)
				.queryParam("companyId", COMPANY_ID)
				.queryParam("page", PAGE)
				.queryParam("size", SIZE)
				.queryParam("radius", RADIUS)
				.get(CONNECTED_WORLD_BUILDING_VERSION_ENDPOINT);
	}

	public static Response getGetBuildingsByAddressComponent(String SESSIONTOKEN) {
		return BaseRequestSpecification.getConnectedWorldBuildingDefaultRequestSpec(SESSIONTOKEN)
				.queryParam("companyId", COMPANY_ID)
				.queryParam("city", CITY)
				.get(CONNECTED_WORLD_BUILDING_ADDRESS_COMPONENT_ENDPOINT);
	}

	public static Response getGetBuildingsCustomFields(String SESSIONTOKEN) {
		return BaseRequestSpecification.getConnectedWorldBuildingDefaultRequestSpec(SESSIONTOKEN)
				.queryParam("companyId", COMPANY_ID)
				.get(CONNECTED_WORLD_BUILDING_CUSTOM_FIELDS_ENDPOINT);
	}

	public static Response getDeleteBuilding(String UNIQUEKEY, String SESSIONTOKEN) {
		return BaseRequestSpecification.getConnectedWorldBuildingDefaultRequestSpec(SESSIONTOKEN)
				.pathParam("uniqueKey", UNIQUEKEY)
				.queryParam("companyId", COMPANY_ID)
				.delete(CONNECTED_WORLD_BUILDING_VERSION_ENDPOINT + CONNECTED_WORLD_DELETE_BUILDING_ENDPOINT);
	}

	public static Response getDeleteMultipleBuilding(String UNIQUEKEY1, String UNIQUEKEY2, String SESSIONTOKEN) {
		return BaseRequestSpecification.getConnectedWorldBuildingDefaultRequestSpec(SESSIONTOKEN)
				.queryParam("companyId", COMPANY_ID)
				.queryParam("uniqueKeys", UNIQUEKEY1, UNIQUEKEY2)
				.delete(CONNECTED_WORLD_BUILDING_VERSION_ENDPOINT);
	}
}