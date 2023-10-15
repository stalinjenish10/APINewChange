package com.capestart.testdata;

import java.io.File;
import java.io.IOException;

import com.capestart.pojos.geocodeapiv1.PostBulkReverseGeocodingDetails;
import com.capestart.pojos.geocodeapiv1.PostBulkReverseGeocodingInvalidLatDetails;
import com.capestart.pojos.geocodeapiv1.PostBulkReverseGeocodingInvalidLonDetails;
import com.capestart.pojos.geocodeapiv1.PostBulkReverseGeocodingWithoulatDetails;
import com.capestart.pojos.geocodeapiv1.PostBulkReverseGeocodingWithoutlonDetails;
import com.capestart.pojos.geocodeapiv1.PostGeocodeAddressDetails;
import com.fasterxml.jackson.databind.ObjectMapper;

import lombok.SneakyThrows;

public class GeocodeApiV1TestData {

	private GeocodeApiV1TestData() {}

	 @SneakyThrows
	    public  static PostBulkReverseGeocodingDetails getPostBulkReverseGeocodingDetails() throws IOException  {

	        return new ObjectMapper()
	                .readValue(new File(System.getProperty("user.dir")+ "/src/test/resources/requests/geocodeapibody/post-bulkreversegeocoding.json"), PostBulkReverseGeocodingDetails.class);

	    }

	 @SneakyThrows
	    public  static PostBulkReverseGeocodingInvalidLatDetails getPostBulkReverseGeocodingInvalidlat0Details() throws IOException  {

	        return new ObjectMapper()
	                .readValue(new File(System.getProperty("user.dir")+ "/src/test/resources/requests/geocodeapibody/post-bulkreversegeocodinginvalidlat0.json"), PostBulkReverseGeocodingInvalidLatDetails.class);

	    }

	 @SneakyThrows
	    public  static PostBulkReverseGeocodingInvalidLonDetails getPostBulkReverseGeocodingInvalidlon0Details() throws IOException  {

	        return new ObjectMapper()
	                .readValue(new File(System.getProperty("user.dir")+ "/src/test/resources/requests/geocodeapibody/post-bulkreversegeocodinginvalidlon0.json"), PostBulkReverseGeocodingInvalidLonDetails.class);

	    }

	 @SneakyThrows
	    public  static PostBulkReverseGeocodingInvalidLatDetails getPostBulkReverseGeocodingInvalidlat1Details() throws IOException  {

	        return new ObjectMapper()
	                .readValue(new File(System.getProperty("user.dir")+ "/src/test/resources/requests/geocodeapibody/post-bulkreversegeocodinginvalidlat1.json"), PostBulkReverseGeocodingInvalidLatDetails.class);

	    }

	 @SneakyThrows
	    public  static PostBulkReverseGeocodingInvalidLonDetails getPostBulkReverseGeocodingInvalidlon1Details() throws IOException  {

	        return new ObjectMapper()
	                .readValue(new File(System.getProperty("user.dir")+ "/src/test/resources/requests/geocodeapibody/post-bulkreversegeocodinginvalidlon1.json"), PostBulkReverseGeocodingInvalidLonDetails.class);

	    }

	 @SneakyThrows
	    public  static PostBulkReverseGeocodingWithoulatDetails getPostBulkReverseWithoutlat0Details() throws IOException  {

	        return new ObjectMapper()
	                .readValue(new File(System.getProperty("user.dir")+ "/src/test/resources/requests/geocodeapibody/post-bulkreversegeocodingwithoutlat0.json"), PostBulkReverseGeocodingWithoulatDetails.class);

	    }

	 @SneakyThrows
	    public  static PostBulkReverseGeocodingWithoutlonDetails getPostBulkReverseWithoutlan0Details() throws IOException  {

	        return new ObjectMapper()
	                .readValue(new File(System.getProperty("user.dir")+ "/src/test/resources/requests/geocodeapibody/post-bulkreversegeocodingwithoutlan0.json"), PostBulkReverseGeocodingWithoutlonDetails.class);

	    }

	 @SneakyThrows
	    public  static PostBulkReverseGeocodingDetails getPostBulkReverseWithoutlat1Details() throws IOException  {

	        return new ObjectMapper()
	                .readValue(new File(System.getProperty("user.dir")+ "/src/test/resources/requests/geocodeapibody/post-bulkreversegeocodingwithoutlat1.json"), PostBulkReverseGeocodingDetails.class);

	    }

	 @SneakyThrows
	    public  static PostBulkReverseGeocodingDetails getPostBulkReverseWithoutlan1Details() throws IOException  {

	        return new ObjectMapper()
	                .readValue(new File(System.getProperty("user.dir")+ "/src/test/resources/requests/geocodeapibody/post-bulkreversegeocodingwithoutlon1.json"), PostBulkReverseGeocodingDetails.class);

	    }

	 @SneakyThrows
		public  static PostGeocodeAddressDetails getPostGeocodeAddressDetails() throws IOException  {

			return new ObjectMapper()
					.readValue(new File(System.getProperty("user.dir")+ "/src/test/resources/requests/geocodeapibody/post-geocodeaddress.json"), PostGeocodeAddressDetails.class);

		}

		@SneakyThrows
		public  static PostGeocodeAddressDetails getPostGeocodeAddressWithoutAddressDetails() throws IOException  {

			return new ObjectMapper()
					.readValue(new File(System.getProperty("user.dir")+ "/src/test/resources/requests/geocodeapibody/post-geocodeaddresswithoutaddress.json"), PostGeocodeAddressDetails.class);

		}
		@SneakyThrows
		public  static PostGeocodeAddressDetails getPostGeocodeAddressWithoutCityDetails() throws IOException  {

			return new ObjectMapper()
					.readValue(new File(System.getProperty("user.dir")+ "/src/test/resources/requests/geocodeapibody/post-geocodeaddresswithoutcity.json"), PostGeocodeAddressDetails.class);

		}
		@SneakyThrows
		public  static PostGeocodeAddressDetails getPostGeocodeAddressWithoutStateDetails() throws IOException  {

			return new ObjectMapper()
					.readValue(new File(System.getProperty("user.dir")+ "/src/test/resources/requests/geocodeapibody/post-geocodeaddresswithoutstate.json"), PostGeocodeAddressDetails.class);

		}
		@SneakyThrows
		public  static PostGeocodeAddressDetails getPostGeocodeAddressWithoutCountryDetails() throws IOException  {

			return new ObjectMapper()
					.readValue(new File(System.getProperty("user.dir")+ "/src/test/resources/requests/geocodeapibody/post-geocodeaddresswithoutcountry.json"), PostGeocodeAddressDetails.class);

		}


		@SneakyThrows
		public  static PostGeocodeAddressDetails getPostGeocodeAddressWithInvalidCountryDetails() throws IOException  {

			return new ObjectMapper()
					.readValue(new File(System.getProperty("user.dir")+ "/src/test/resources/requests/geocodeapibody/post-geocodeaddresswithinvalidcountry.json"), PostGeocodeAddressDetails.class);

		}

		@SneakyThrows
		public  static PostGeocodeAddressDetails getPostGeocodeAddressWithInvalidCityDetails() throws IOException  {

			return new ObjectMapper()
					.readValue(new File(System.getProperty("user.dir")+ "/src/test/resources/requests/geocodeapibody/post-geocodeaddresswithinvalidcity.json"), PostGeocodeAddressDetails.class);

		}

}