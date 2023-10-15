package com.capestart.apilayers;
import com.capestart.factory.ApiConfigFactory;
import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.specification.RequestSpecification;
import java.util.Map;

public class BaseRequestSpecification {
private static final String BASE_URL = ApiConfigFactory.getConfig().apiBaseUrl();
	private static final String LOGIN_BASE_URL = ApiConfigFactory.getConfig().loginBaseUrl();
	private static final String CPQ_OCP_KEY = ApiConfigFactory.getConfig().cpqOcpKey();
	private static final String NETWORK_INTELLIGENCE_OCP_KEY = ApiConfigFactory.getConfig().getNetworkIntelligenceOcpKey();
	private static final String INVALID_OCP_KEY = ApiConfigFactory.getCpqNegativeTestApiConfig().getGeneralInvalidOcpKey();
	private static final String CONNECTED_WORLD_BUILDING__OCP_KEY = ApiConfigFactory.getConfig().getConnectedWorldBuildingOcpKey();
	private static final String CONNECTED_WORLD_BUILDING__INVALID_OCP_KEY =
			ApiConfigFactory.getConnectedWorldBuildingNegativeTestConfig().getInvalidOcpKey();
	private static final String ADDRESS_VALIDATION_OCPKEY = ApiConfigFactory.getConfig().getAddressValidationOcpKey();
	private static final String ADDRES_VALIDATION_INVALID_OCP_KEY =
			ApiConfigFactory.getAddressValidationNegativeTestApiConfig().getInvalidOcpKey();
	private static final String INTERNATIONAL_ADDRESS_VALIDATION_OCPKEY =
			ApiConfigFactory.getConfig().internationalAddressValidationOcpKey();
	private static final String INTERNATIONAL_ADDRESS_INVALID_OCPKEY =
			ApiConfigFactory.getInternationalAddressNegativeTestApiConfig().getInvalidOcpKey();
	private static final String STANDARD_ADDRESS_OCPKEY = ApiConfigFactory.getConfig().standardAddressOcpKey();
	private static final String STANDARD_ADDRESS_INVALID_OCPKEY =
			ApiConfigFactory.getStandardAddressV2NegativeTestApiConfig().getInvalidOcpKey();
	private static final String OTHER_USER_GEOCODE_OCP_KEY = ApiConfigFactory.getGeocodeApiV1NegativeTestApiConfig().getOtherUserGeocodeOcpKey();

	private static final String GEOCODE_INVALID_OCP_KEY = ApiConfigFactory.getGeocodeApiV1NegativeTestApiConfig().getGeneralGeocodeOcpKey();

	private static final String GEOCODE_V1_OCPKEY = ApiConfigFactory.getConfig().geocodeV1OcpKey();

	private BaseRequestSpecification() {
	}

	public static RequestSpecification getLoginRequestSpec() {
		return RestAssured
				.given()
				.log()
				.all()
				.baseUri(LOGIN_BASE_URL)
				.contentType("application/json; charset=utf-8");

	}


	public static RequestSpecification getHeader(String SESSIONTOKEN, boolean isPositive) {
		// Determine which Ocp key to use based on the 'isPositive' value
		String ocpKey = isPositive ? CPQ_OCP_KEY : INVALID_OCP_KEY;
		var headers = Map.of(
				"authorization", SESSIONTOKEN,
				"Cache-Control", "no-cache",
				"Ocp-Apim-Subscription-Key", ocpKey

				);

		return RestAssured.given()
				.log()
				.all()
				.baseUri(BASE_URL)
				.headers(headers)
				.contentType("application/json; charset=utf-8");
	}


	public static RequestSpecification getCpqDefaultRequestSpec(String SESSIONTOKEN) {
		return RestAssured.
				given()
				.log()
				.all()
				.baseUri(BASE_URL)
				.header("authorization", SESSIONTOKEN)
				.header("Ocp-Apim-Subscription-Key", CPQ_OCP_KEY)
				.header("Cache-Control", "no-cache")
				.contentType(ContentType.JSON);
	}

	public static RequestSpecification getNetworkIntelligenceDefaultRequestSpec(String SESSIONTOKEN) {
		return RestAssured
				.given()
				.log()
				.all()
				.baseUri(BASE_URL)
				.header("authorization", SESSIONTOKEN)
				.header("Ocp-Apim-Subscription-Key", NETWORK_INTELLIGENCE_OCP_KEY)
				.header("Cache-Control", "no-cache")
				.contentType(ContentType.JSON);
	}

	public static RequestSpecification getConnectedWorldBuildingDefaultRequestSpec(String SESSIONTOKEN) {
		return RestAssured
				.given()
				.log()
				.all()
				.baseUri(BASE_URL)
				.header("authorization", SESSIONTOKEN)
				.header("Ocp-Apim-Subscription-Key", CONNECTED_WORLD_BUILDING__OCP_KEY)
				.header("Cache-Control", "no-cache")
				.contentType(ContentType.JSON);
	}

	public static RequestSpecification getConnectedWorldBuildingHeaders(String SESSIONTOKEN) {
		return RestAssured
				.given()
				.log()
				.all()
				.baseUri(BASE_URL)
				.header("authorization", SESSIONTOKEN)
				.header("Ocp-Apim-Subscription-Key", CONNECTED_WORLD_BUILDING__INVALID_OCP_KEY)
				.header("Cache-Control", "no-cache")
				.contentType(ContentType.JSON);
	}


	public static RequestSpecification getAddressValidationDefaultRequestSpec(String SESSIONTOKEN) {
		return RestAssured
				.given()
				.log()
				.all()
				.baseUri(BASE_URL)
				.header("authorization", SESSIONTOKEN)
				.header("Ocp-Apim-Subscription-Key", ADDRESS_VALIDATION_OCPKEY)
				.header("Cache-Control", "no-cache")
				.contentType(ContentType.JSON);
	}

	public static RequestSpecification getAddressValidationHeaders(String SESSIONTOKEN) {
		return RestAssured
				.given()
				.log()
				.all()
				.baseUri(BASE_URL)
				.header("authorization", SESSIONTOKEN)
				.header("Ocp-Apim-Subscription-Key", ADDRES_VALIDATION_INVALID_OCP_KEY)
				.header("Cache-Control", "no-cache")
				.contentType(ContentType.JSON);
	}

	public static RequestSpecification getInternationalAddressValidationDefaultRequestSpec(String SESSIONTOKEN) {
		return RestAssured
				.given()
				.log()
				.all()
				.baseUri(BASE_URL)
				.header("authorization", SESSIONTOKEN)
				.header("Ocp-Apim-Subscription-Key", INTERNATIONAL_ADDRESS_VALIDATION_OCPKEY)
				.header("Cache-Control", "no-cache")
				.contentType(ContentType.JSON);
	}

	public static RequestSpecification getInternationalAddressValidationHeaders(String SESSIONTOKEN) {
		return RestAssured
				.given()
				.log()
				.all()
				.baseUri(BASE_URL)
				.header("authorization", SESSIONTOKEN)
				.header("Ocp-Apim-Subscription-Key", INTERNATIONAL_ADDRESS_INVALID_OCPKEY)
				.header("Cache-Control", "no-cache")
				.contentType(ContentType.JSON);
	}

	public static RequestSpecification getStandardAddressValidationDefaultRequestSpec(String SESSIONTOKEN) {
		return RestAssured
				.given()
				.log()
				.all()
				.baseUri(BASE_URL)
				.header("authorization", SESSIONTOKEN)
				.header("Ocp-Apim-Subscription-Key", STANDARD_ADDRESS_OCPKEY)
				.header("Cache-Control", "no-cache")
				.contentType(ContentType.JSON);
	}

	public static RequestSpecification getStandardAddressValidationHeaders(String SESSIONTOKEN) {
		return RestAssured
				.given()
				.log()
				.all()
				.baseUri(BASE_URL)
				.header("authorization", SESSIONTOKEN)
				.header("Ocp-Apim-Subscription-Key", STANDARD_ADDRESS_INVALID_OCPKEY)
				.header("Cache-Control", "no-cache")
				.contentType(ContentType.JSON);
	}

	public static RequestSpecification getGeocodeHeader(String SESSIONTOKEN, boolean isPositive ) {
		// Determine which Ocp key to use based on the 'isPositive' value
		String ocpKey = isPositive ? OTHER_USER_GEOCODE_OCP_KEY : GEOCODE_INVALID_OCP_KEY;
		var headers = Map.of(
				"authorization", SESSIONTOKEN,
				"Cache-Control", "no-cache",
				"Ocp-Apim-Subscription-Key", ocpKey

				);

		return RestAssured.given()
				.log()
				.all()
				.baseUri(BASE_URL)
				.headers(headers)
				.contentType("application/json; charset=utf-8");
	}

	public static RequestSpecification getGeocodeApiDefaultRequestSpec(String SESSIONTOKEN){
		return RestAssured
				.given()
				.log()
				.all()
				.baseUri(BASE_URL)
				.header("authorization", SESSIONTOKEN)
				.header("Ocp-Apim-Subscription-Key", GEOCODE_V1_OCPKEY)
				.header("Cache-Control", "no-cache")
				.contentType(ContentType.JSON);
	}

	public static RequestSpecification getGeocodeApiHeaders(String SESSIONTOKEN){
		return RestAssured
				.given()
				.log()
				.all()
				.baseUri(BASE_URL)
				.header("authorization", SESSIONTOKEN)
				.header("Ocp-Apim-Subscription-Key", GEOCODE_INVALID_OCP_KEY)
				.header("Cache-Control", "no-cache")
				.contentType(ContentType.JSON);
	}

	public static RequestSpecification getGeocodeApiOtherUserHeaders(String SESSIONTOKEN){
		return RestAssured
				.given()
				.log()
				.all()
				.baseUri(BASE_URL)
				.header("authorization", SESSIONTOKEN)
				.header("Ocp-Apim-Subscription-Key", OTHER_USER_GEOCODE_OCP_KEY)
				.header("Cache-Control", "no-cache")
				.contentType(ContentType.JSON);
	}


}