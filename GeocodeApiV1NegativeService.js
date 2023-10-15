package com.capestart.negativeapilayers;

import com.capestart.apilayers.BaseRequestSpecification;
import com.capestart.factory.ApiConfigFactory;
import com.capestart.pojos.geocodeapiv1.PostBulkReverseGeocodingDetails;
import com.capestart.pojos.geocodeapiv1.PostBulkReverseGeocodingInvalidLatDetails;
import com.capestart.pojos.geocodeapiv1.PostBulkReverseGeocodingInvalidLonDetails;
import com.capestart.pojos.geocodeapiv1.PostBulkReverseGeocodingWithoulatDetails;
import com.capestart.pojos.geocodeapiv1.PostBulkReverseGeocodingWithoutlonDetails;
import com.capestart.pojos.geocodeapiv1.PostGeocodeAddressDetails;

import io.restassured.response.Response;

public class GeocodeApiV1NegativeService {


	private static final String GEOCODE_V1_API_ENDPOINT = ApiConfigFactory.getConfig().geocodeV1BulkReverseEndpoint();

	private static final String GEOCODE_V1_API_INVALID_ENDPOINT = ApiConfigFactory.getConfig().geocodeV1BulkReverseInvalidEndpoint();

	private static final String GEOCODE_V1_API_ADDRESS_ENDPOINT = ApiConfigFactory.getConfig().geocodeV1AddressEndpoint();

	public static final String COMPANY_ID = ApiConfigFactory.getGeocodeApiV1ApiConfig().geocodeCompanyId();

	private static final String GEOCODE_V1_API_COORDS_ENDPOINT = ApiConfigFactory.getConfig().geocodeV1CoordsEndpoint();

	private static final String GEOCODE_V1_API_ADDRESS_INVALID_ENDPOINT = ApiConfigFactory.getConfig().geocodeV1AddressInvalidEndpoint();

	private static final String GEOCODE_V1_API_COORDS_INVALID_ENDPOINT = ApiConfigFactory.getConfig().geocodeV1CoordsInvalidEndpoint();

	private  static  final  String LAT = (ApiConfigFactory.getConfig().geocodeV1Lat());

	private  static  final  String LON = (ApiConfigFactory.getConfig().geocodeV1Lon());


	public static Response postCreateAccount(PostBulkReverseGeocodingDetails postBulkReverseGeocodingDetails, String SESSIONTOKEN, Object specificCompanyId, Boolean isPositive, boolean b) {
		if (isPositive) {
			return BaseRequestSpecification.getGeocodeApiDefaultRequestSpec(SESSIONTOKEN)
					.queryParam("company_id", specificCompanyId)
					.body(postBulkReverseGeocodingDetails)
					.post(GEOCODE_V1_API_ENDPOINT);
		} else {
			if (b) {
				return BaseRequestSpecification.getGeocodeHeader(SESSIONTOKEN, b)
						.queryParam("company_id", COMPANY_ID)
						.body(postBulkReverseGeocodingDetails)
						.post(GEOCODE_V1_API_ENDPOINT);
			}else {
				return BaseRequestSpecification.getGeocodeHeader(SESSIONTOKEN, b)
						.queryParam("company_id", COMPANY_ID)
						.body(postBulkReverseGeocodingDetails)
						.post(GEOCODE_V1_API_ENDPOINT);
			}
		}

	}

	public static Response postCreateAccountInvalidHeaders(PostBulkReverseGeocodingDetails postBulkReverseGeocodingDetails, String SESSIONTOKEN) {

		return BaseRequestSpecification.getGeocodeApiHeaders(SESSIONTOKEN)
				.queryParam("company_id", COMPANY_ID)
				.body(postBulkReverseGeocodingDetails)
				.post(GEOCODE_V1_API_ENDPOINT);
	}

	public static Response postCreateAccountInvalidOtherUserHeaders(PostBulkReverseGeocodingDetails postBulkReverseGeocodingDetails, String SESSIONTOKEN) {

		return BaseRequestSpecification.getGeocodeApiOtherUserHeaders(SESSIONTOKEN)
				.queryParam("company_id", COMPANY_ID)
				.body(postBulkReverseGeocodingDetails)
				.post(GEOCODE_V1_API_ENDPOINT);
	}


	public static Response postCreateAccountInvalidBody(PostBulkReverseGeocodingWithoulatDetails postBulkWithoutlat0, 
			String SESSIONTOKEN,Object specificCompanyId) {

		return BaseRequestSpecification.getGeocodeApiDefaultRequestSpec(SESSIONTOKEN)
				.queryParam("company_id", specificCompanyId)
				.body(postBulkWithoutlat0)
				.post(GEOCODE_V1_API_ENDPOINT);
	}

	public static Response postCreateAccountInvalidBodyWithoutLon(PostBulkReverseGeocodingWithoutlonDetails postBulkWithoutlat0, 
			String SESSIONTOKEN,Object specificCompanyId) {

		return BaseRequestSpecification.getGeocodeApiDefaultRequestSpec(SESSIONTOKEN)
				.queryParam("company_id", specificCompanyId)
				.body(postBulkWithoutlat0)
				.post(GEOCODE_V1_API_ENDPOINT);
	}

	public static Response postBulkReverseGeocodingWithoutlon(PostBulkReverseGeocodingWithoutlonDetails postBulkWithoutlat0, 
			PostBulkReverseGeocodingWithoutlonDetails postBulkWithoutlan0, PostBulkReverseGeocodingWithoutlonDetails potBulkWithoutLat1, 
			PostBulkReverseGeocodingWithoutlonDetails postBulkWithoutLan1, String SESSIONTOKEN, Object specificCompanyId, 
			Boolean isPositive, boolean b ,boolean c , boolean d ) {
		if (isPositive) {
			return BaseRequestSpecification.getGeocodeApiDefaultRequestSpec(SESSIONTOKEN)
					.queryParam("company_id", specificCompanyId)
					.body(postBulkWithoutlat0)
					.post(GEOCODE_V1_API_ENDPOINT);
		}else if (b) {
			return BaseRequestSpecification.getGeocodeApiDefaultRequestSpec(SESSIONTOKEN)
					.queryParam("company_id", specificCompanyId)
					.body(postBulkWithoutlan0)
					.post(GEOCODE_V1_API_ENDPOINT);
		}else if (c) {
			return BaseRequestSpecification.getGeocodeApiDefaultRequestSpec(SESSIONTOKEN)
					.queryParam("company_id", specificCompanyId)
					.body(potBulkWithoutLat1)
					.post(GEOCODE_V1_API_ENDPOINT);
		}else if(d) {
			return BaseRequestSpecification.getGeocodeApiDefaultRequestSpec(SESSIONTOKEN)
					.queryParam("company_id", specificCompanyId)
					.body(postBulkWithoutLan1)
					.post(GEOCODE_V1_API_ENDPOINT);
		}else {
			return null;
		}
	}

	public  static Response getBulkReverseGeocodingInvalidEndpoint(PostBulkReverseGeocodingDetails postBulkReverseGeocodingDetails, String SESSIONTOKEN){
		return BaseRequestSpecification.getGeocodeApiDefaultRequestSpec(SESSIONTOKEN)
				.queryParam("company_id", COMPANY_ID)
				.body(postBulkReverseGeocodingDetails)
				.post(GEOCODE_V1_API_INVALID_ENDPOINT);
	}

	public  static Response postBulkReverseGeocodingInvalidLatDetails(PostBulkReverseGeocodingInvalidLatDetails postBulkWithoutlat0, 
			PostBulkReverseGeocodingInvalidLonDetails postBulkWithoutlan0, PostBulkReverseGeocodingInvalidLatDetails potBulkWithoutLat1, 
			PostBulkReverseGeocodingInvalidLonDetails postBulkWithoutLan1, String SESSIONTOKEN, Object specificCompanyId, 
			Boolean isPositive, boolean b ,boolean c , boolean d){
		if (isPositive) {
			return BaseRequestSpecification.getGeocodeApiDefaultRequestSpec(SESSIONTOKEN)
					.queryParam("company_id", specificCompanyId)
					.body(postBulkWithoutlat0)
					.post(GEOCODE_V1_API_ENDPOINT);
		}else if (b) {
			return BaseRequestSpecification.getGeocodeApiDefaultRequestSpec(SESSIONTOKEN)
					.queryParam("company_id", specificCompanyId)
					.body(postBulkWithoutlan0)
					.post(GEOCODE_V1_API_ENDPOINT);
		}else if (c) {
			return BaseRequestSpecification.getGeocodeApiDefaultRequestSpec(SESSIONTOKEN)
					.queryParam("company_id", specificCompanyId)
					.body(potBulkWithoutLat1)
					.post(GEOCODE_V1_API_ENDPOINT);
		}else if(d) {
			return BaseRequestSpecification.getGeocodeApiDefaultRequestSpec(SESSIONTOKEN)
					.queryParam("company_id", specificCompanyId)
					.body(postBulkWithoutLan1)
					.post(GEOCODE_V1_API_ENDPOINT);
		}else {
			return null;
		}
	}

	public static Response postGeocodeAddressInvalidBody(PostGeocodeAddressDetails postBulkWithoutLan, String SESSIONTOKEN) {
		return BaseRequestSpecification.getGeocodeApiDefaultRequestSpec(SESSIONTOKEN)
				.body(postBulkWithoutLan)
				.post(GEOCODE_V1_API_ADDRESS_ENDPOINT);
	}

	public  static Response getReverseGeocoding(String SESSIONTOKEN,Object companyId,Object lat, Object lon){
		return BaseRequestSpecification.getGeocodeApiDefaultRequestSpec(SESSIONTOKEN)
				.queryParam("company_id", companyId)
				.queryParam("lat", lat)
				.queryParam("lon", lon)
				.get(GEOCODE_V1_API_COORDS_ENDPOINT);
	}

	public  static Response postGeocodeAddressInvalidEndpoint(PostGeocodeAddressDetails postGeocodeAddressDetails, String SESSIONTOKEN){
		return BaseRequestSpecification.getGeocodeApiDefaultRequestSpec(SESSIONTOKEN)
				.queryParam("company_id", COMPANY_ID)
				.body(postGeocodeAddressDetails)
				.post(GEOCODE_V1_API_ADDRESS_INVALID_ENDPOINT);
	}

	public  static Response postGeocodeAddressInvalidHeaders(PostGeocodeAddressDetails postGeocodeAddressDetails, String SESSIONTOKEN){
		return BaseRequestSpecification.getGeocodeApiHeaders(SESSIONTOKEN)
				.queryParam("company_id", COMPANY_ID)
				.body(postGeocodeAddressDetails)
				.post(GEOCODE_V1_API_ADDRESS_ENDPOINT);
	}

	public  static Response getReverseGeocodingInvalidEndpoint(String SESSIONTOKEN){
		return BaseRequestSpecification.getGeocodeApiDefaultRequestSpec(SESSIONTOKEN)
				.queryParam("company_id", COMPANY_ID)
				.queryParam("lat", LAT)
				.queryParam("lon", LON)
				.get(GEOCODE_V1_API_COORDS_INVALID_ENDPOINT);
	}

	public  static Response getReverseGeocodingInvalidHeader(String SESSIONTOKEN){
		return BaseRequestSpecification.getGeocodeApiHeaders(SESSIONTOKEN)
				.queryParam("company_id", COMPANY_ID)
				.queryParam("lat", LAT)
				.queryParam("lon", LON)
				.get(GEOCODE_V1_API_COORDS_ENDPOINT);
	}
}