package com.capestart.testdata;

import com.capestart.pojos.connectedworldbuildingv5.*;
import com.fasterxml.jackson.core.exc.StreamReadException;
import com.fasterxml.jackson.databind.DatabindException;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.SneakyThrows;
import java.io.File;
import java.io.IOException;

public class ConnectedWorldBuildingV5TestData {

	private static final String BASE_PATH = System.getProperty("user.dir") + "/src/test/resources/requests/connectedworldbuildingbody/";

	private ConnectedWorldBuildingV5TestData() {}

	@SneakyThrows
	public static CreateBuildingDetails getCreateBuildingDetails() throws StreamReadException, DatabindException, IOException {
		return new ObjectMapper()
				.readValue(
						new File(BASE_PATH + "post-createbuilding.json"),
						CreateBuildingDetails.class);
	}

	@SneakyThrows
	public static CreateBuildingWithInvalidBodyDetails getCreateBuildingWithInvalidBodyDetails()
			throws StreamReadException, DatabindException, IOException {
		return new ObjectMapper()
				.readValue(new File(BASE_PATH + "post-createbuildinginvalidbody.json"),
						CreateBuildingWithInvalidBodyDetails.class);
	}

	@SneakyThrows
	public static CreateBuildingWithInvalidInputDetails getCreateBuildingWithInvalidInputDetails()
			throws StreamReadException, DatabindException, IOException {
		return new ObjectMapper()
				.readValue(new File(BASE_PATH + "post-createbuildinginvalidinput.json"),
						CreateBuildingWithInvalidInputDetails.class);
	}


	@SneakyThrows
	public static CreateBuildingForDeleteDetails getCreateBuildingForDeleteDetails()
			throws StreamReadException, DatabindException, IOException {
		return new ObjectMapper()
				.readValue(new File(BASE_PATH + "post-createbuildingfordelete.json"),
						CreateBuildingForDeleteDetails.class);
	}

	@SneakyThrows
	public static CreateBuildingForDeleteMultipleBuildings getCreateBuildingForDeleteMultipleDetails()
			throws StreamReadException, DatabindException, IOException {
		return new ObjectMapper()
				.readValue(new File(BASE_PATH + "post-createbuildingformultipledelete.json"),
						CreateBuildingForDeleteMultipleBuildings.class);
	}

	@SneakyThrows
	public static PatchUpdateBuildingDetails getPatchUpdateBuildingDetails() throws StreamReadException, DatabindException, IOException {
		return new ObjectMapper()
				.readValue(
						new File(BASE_PATH + "patch-updatebuilding.json"),
						PatchUpdateBuildingDetails.class);
	}

	@SneakyThrows
	public static PatchUpdateBuildingInvalidInputDetails getPatchUpdateBuildingInvalidInputDetails()
			throws StreamReadException, DatabindException, IOException {
		return new ObjectMapper()
				.readValue(new File(BASE_PATH + "patch-updatebuildinginvalidinput.json"),
						PatchUpdateBuildingInvalidInputDetails.class);
	}

	@SneakyThrows
	public static PutUpdateBuildingDetails getPutUpdateBuildingDetails() throws StreamReadException, DatabindException, IOException {
		return new ObjectMapper()
				.readValue(
						new File(BASE_PATH + "put-updatebuilding.json"),
						PutUpdateBuildingDetails.class);
	}

	@SneakyThrows
	public static PutUpdateBuildingInvalidInputDetails getPutUpdateBuildingInvalidInputDetails()
			throws StreamReadException, DatabindException, IOException {
		return new ObjectMapper()
				.readValue(new File(BASE_PATH + "put-updatebuildinginvalidbody.json"),
						PutUpdateBuildingInvalidInputDetails.class);
	}
}