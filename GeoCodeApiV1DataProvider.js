package com.capestart.dataproviders;

import org.testng.annotations.DataProvider;

import com.capestart.factory.ApiConfigFactory;

public class GeoCodeApiV1DataProvider {


	private  static  final  String COMPANY_ID = (ApiConfigFactory.getConfig().companyId());

	private static final String INVALID_DATA = ApiConfigFactory.getGeocodeApiV1NegativeTestApiConfig().getInvalidCompanyId();

	private static final String GENERAL_INVALID_COMPANY_ID = ApiConfigFactory.getGeocodeApiV1NegativeTestApiConfig().getGeneralInvalidCompanyId();

	private static final String SPECIAL_INVALID_COMPANY_ID = ApiConfigFactory.getGeocodeApiV1NegativeTestApiConfig().getInvalidCompanyIdWithSpecialCharacters();

	private static final String INVALID_LAT = ApiConfigFactory.getGeocodeApiV1NegativeTestApiConfig().getInvalidLat();

	private static final String INVALID_LON = ApiConfigFactory.getGeocodeApiV1NegativeTestApiConfig().getInvalidLon();

	private static final String GENERAL_INVALID_LAT = ApiConfigFactory.getGeocodeApiV1NegativeTestApiConfig().getGeneralInvalidLat();

	private static final String GENERAL_INVALID_LON = ApiConfigFactory.getGeocodeApiV1NegativeTestApiConfig().getGeneralInvalidLon();

	private static final String SPECIAL_INVALID_LAT = ApiConfigFactory.getGeocodeApiV1NegativeTestApiConfig().getInvalidLatWithSpecialCharacters();

	private static final String SPECIAL_INVALID_LON = ApiConfigFactory.getGeocodeApiV1NegativeTestApiConfig().getInvalidLonWithSpecialCharacters();

	private  static  final  String LAT = (ApiConfigFactory.getConfig().geocodeV1Lat());

	private  static  final  String LON = (ApiConfigFactory.getConfig().geocodeV1Lon());


	@DataProvider(name = "Invalid Key")
	public static Object[][] testScenarios() {
		return new Object[][] {
			{ COMPANY_ID, true}
		};
	}

	@DataProvider(name = "Access Other Users Id")
	public static Object[][] testOtherUserId() {
		return new Object[][] {
			{ COMPANY_ID, false}
		};
	}

	@DataProvider(name = "Post Bulk Reverse TestData")
	public static Object[][] CreateAccountTestData() {
		return new Object[][] {
			{ INVALID_DATA },
			{GENERAL_INVALID_COMPANY_ID},
			{SPECIAL_INVALID_COMPANY_ID}
		};
	}

	@DataProvider(name = "Post Create Account InvalidBody")
	public static Object[][] CreateAccountInvalidBody() {
		return new Object[][] {
			{COMPANY_ID}
		};
	}

	@DataProvider(name = "Get Reverse Geocoding TestData")
	public static Object[][] TestData() {
		return new Object[][] {
			{ INVALID_DATA ,LAT,LON},
			{GENERAL_INVALID_COMPANY_ID,LAT,LON},
			{SPECIAL_INVALID_COMPANY_ID,LAT,LON},
			{COMPANY_ID,INVALID_LAT,LON},
			{COMPANY_ID,GENERAL_INVALID_LAT,LON},
			{COMPANY_ID,SPECIAL_INVALID_LAT,LON},
			{COMPANY_ID,LAT,INVALID_LON},
			{COMPANY_ID,LAT,GENERAL_INVALID_LON},
			{COMPANY_ID,LAT,SPECIAL_INVALID_LON}
		};
	}
}