package com.capestart.apilayers;

import com.capestart.factory.ApiConfigFactory;
import com.capestart.pojos.geocodeapiv1.PostBulkReverseGeocodingDetails;
import com.capestart.pojos.geocodeapiv1.PostGeocodeAddressDetails;

import io.restassured.response.Response;

public class GeocodeAPIService {

	private static final String GEOCODE_V1_API_ENDPOINT = ApiConfigFactory.getConfig().geocodeV1BulkReverseEndpoint();

	private static final String GEOCODE_V1_API_ADDRESS_ENDPOINT = ApiConfigFactory.getConfig().geocodeV1AddressEndpoint();

	public static final String COMPANY_ID = ApiConfigFactory.getGeocodeApiV1ApiConfig().geocodeCompanyId();

	public static final String ADDRESS_VALIDATION_ADDRESS2 = ApiConfigFactory.getAddressValidationApiConfig().getAddressValidationAddress2();

	private static final String GEOCODE_V1_API_COORDS_ENDPOINT = ApiConfigFactory.getConfig().geocodeV1CoordsEndpoint();

	private static final String GEOCODE_V1_API_LAT = ApiConfigFactory.getConfig().geocodeV1Lat();

	private static final String GEOCODE_V1_API_LON = ApiConfigFactory.getConfig().geocodeV1Lon();

	public  static Response getBulkReverseGeocoding(PostBulkReverseGeocodingDetails postBulkReverseGeocodingDetails, String SESSIONTOKEN){
		return BaseRequestSpecification.getGeocodeApiDefaultRequestSpec(SESSIONTOKEN)
				.queryParam("company_id", COMPANY_ID)
				.body(postBulkReverseGeocodingDetails)
				.post(GEOCODE_V1_API_ENDPOINT);
	}

	public  static Response getGeocodeAddress(PostGeocodeAddressDetails postGeocodeAddressDetails , String SESSIONTOKEN){
		return BaseRequestSpecification.getGeocodeApiDefaultRequestSpec(SESSIONTOKEN)
				.body(postGeocodeAddressDetails)
				.post(GEOCODE_V1_API_ADDRESS_ENDPOINT);
	}

	public  static Response getReverseGeocoding(String SESSIONTOKEN){
		return BaseRequestSpecification.getGeocodeApiDefaultRequestSpec(SESSIONTOKEN)
				.queryParam("company_id", COMPANY_ID)
				.queryParam("lat", GEOCODE_V1_API_LAT)
				.queryParam("lon", GEOCODE_V1_API_LON)
				.get(GEOCODE_V1_API_COORDS_ENDPOINT);
	}
}