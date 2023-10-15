package com.capestart.testdata;

import com.capestart.pojos.standardaddressv2.*;
import com.fasterxml.jackson.core.exc.StreamReadException;
import com.fasterxml.jackson.databind.DatabindException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.SneakyThrows;
import java.io.File;
import java.io.IOException;

public class StandardAddressV2TestData {

	private static final String BASE_PATH = System.getProperty("user.dir") + "/src/test/resources/requests/standardaddressbody/";

	private StandardAddressV2TestData() {}

	@SneakyThrows
	public static PostStandardAddressDetails getPostStandardAddressDetails() throws StreamReadException, DatabindException, IOException {
		return new ObjectMapper()
				.readValue(
						new File(BASE_PATH + "post-standardaddress.json"),
						PostStandardAddressDetails.class);
	}

	@SneakyThrows
	public static PostStandardAddressInvalidBodyDetails getPostStandardAddressInvalidBodyDetails()
			throws StreamReadException, DatabindException, IOException {
		return new ObjectMapper()
				.readValue(new File(
						BASE_PATH + "post-standardaddressinvalidbody.json"),
						PostStandardAddressInvalidBodyDetails.class);
	}

	@SneakyThrows
	public static PostStandardAddressInvalidInputBodyDetails getPostStandardAddressInvalidInputBodyDetails()
			throws StreamReadException, DatabindException, IOException {
		return new ObjectMapper()
				.readValue(new File(
						BASE_PATH + "post-standardaddressinvalidinputbody.json"),
						PostStandardAddressInvalidInputBodyDetails.class);
	}

	@SneakyThrows
	public static PostStandardAddressStringDetails getPostStandardAddressStringDetails()
			throws StreamReadException, DatabindException, IOException {
		return new ObjectMapper()
				.readValue(
						new File(BASE_PATH + "post-standardaddressstring.json"),
						PostStandardAddressStringDetails.class);
	}

	@SneakyThrows
	public static PostStandardAddressStringInvalidBodyDetails getPostStandardAddressStringInvalidBodyDetails()
			throws StreamReadException, DatabindException, IOException {
		return new ObjectMapper()
				.readValue(new File(
						BASE_PATH + "post-standardaddressstringinvalidbody.json"),
						PostStandardAddressStringInvalidBodyDetails.class);
	}
}