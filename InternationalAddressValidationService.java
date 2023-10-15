package com.capestart.apilayers;

import com.capestart.factory.ApiConfigFactory;
import io.restassured.response.Response;

public class InternationalAddressValidationService {

	public static final String INTERNATIONAL_ADDRESS =
			ApiConfigFactory.getInternationalAddressValidationApiConfig().internationalAddress();
	public static final String INTERNATIONAL_COUNTRY =
			ApiConfigFactory.getInternationalAddressValidationApiConfig().internationalCountry();
	private static final String INTERNATIONAL_ADDRESS_VALIDATION_ENDPOINT =
			ApiConfigFactory.getInternationalAddressValidationApiConfig().internationalAddressValidationVersionEndpoint();

	public InternationalAddressValidationService() {
	}

	public static Response getInternationalAddress(String SESSIONTOKEN) {
		return BaseRequestSpecification.getInternationalAddressValidationDefaultRequestSpec(SESSIONTOKEN)
				.queryParam("address", INTERNATIONAL_ADDRESS)
				.queryParam("country", INTERNATIONAL_COUNTRY)
				.get(INTERNATIONAL_ADDRESS_VALIDATION_ENDPOINT);
	}
}