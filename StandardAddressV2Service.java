package com.capestart.apilayers;

import com.capestart.factory.ApiConfigFactory;
import com.capestart.pojos.standardaddressv2.PostStandardAddressDetails;
import com.capestart.pojos.standardaddressv2.PostStandardAddressStringDetails;
import io.restassured.response.Response;

public class StandardAddressV2Service {

	private static final String STANDARD_ADDRESS_GET_ENDPOINT = ApiConfigFactory.getConfig().standardAddressGetCoordsEndpoint();
	private static final String STANDARD_ADDRESS_POST_ENDPOINT = ApiConfigFactory.getConfig().standardAddressPostEndpoint();
	private static final String STANDARD_ADDRESS_STRING_POST_ENDPOINT = ApiConfigFactory.getConfig().standardAddressStringPostEndpoint();
	private static final String LAT_VALUE = ApiConfigFactory.getStandardAddressApiConfig().standardAddressLatValue();
	private static final String LON_VALUE = ApiConfigFactory.getStandardAddressApiConfig().standardAddressLonValue();

	public StandardAddressV2Service() {
	}

	public static Response getCoordsStandardAddress(String SESSIONTOKEN) {
		return BaseRequestSpecification.getStandardAddressValidationDefaultRequestSpec(SESSIONTOKEN)
				.queryParam("lat", LAT_VALUE)
				.queryParam("lon", LON_VALUE)
				.get(STANDARD_ADDRESS_GET_ENDPOINT);
	}

	public static Response getPostStandardAddress(PostStandardAddressDetails postStandardAddressDetails, String SESSIONTOKEN) {
		return BaseRequestSpecification.getStandardAddressValidationDefaultRequestSpec(SESSIONTOKEN)
				.body(postStandardAddressDetails)
				.post(STANDARD_ADDRESS_POST_ENDPOINT);
	}

	public static Response getPostStandardAddressString(PostStandardAddressStringDetails postStandardAddressStringDetails,
			String SESSIONTOKEN) {
		return BaseRequestSpecification.getStandardAddressValidationDefaultRequestSpec(SESSIONTOKEN)
				.body(postStandardAddressStringDetails)
				.post(STANDARD_ADDRESS_STRING_POST_ENDPOINT);
	}
}