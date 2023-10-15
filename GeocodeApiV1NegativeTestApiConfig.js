package com.capestart.config.negativeconfig;

import org.aeonbits.owner.Config;
import org.aeonbits.owner.Config.Key;

@Config.LoadPolicy(Config.LoadType.MERGE)
@Config.Sources({"system:properties",
        "system:env",
        "file:${user.dir}/src/test/resources/api-config.properties",
        "file:${user.dir}/src/test/resources/api-uat.config.properties",
        "file:${user.dir}/src/test/resources/api-production.config.properties",
        "file:${user.dir}/src/test/resources/api-negative.config.properties"})
public interface GeocodeApiV1NegativeTestApiConfig extends Config {

	  @Key("get.other.user.geocode.ocpkey")
	    String getOtherUserGeocodeOcpKey();

	  @Key("get.general.invalid.geocode.ocpkey")
	    String getGeneralGeocodeOcpKey();

	  @Key("get.invalid.geocode.company.id")
	    String getInvalidCompanyId();

	  @Key("get.invalid.geocode.company.id.special.charcaters")
	    String getInvalidCompanyIdWithSpecialCharacters();

	  @Key("get.genaral.invalid.geocode.company.id")
	    String getGeneralInvalidCompanyId();

	  @Key("get.invalid.geocode.company.id.fullstop")
	    String getInvalidCompanyIdFullStop();

	  @Key("get.invalid.geocode.lat")
	    String getInvalidLat();

	  @Key("get.invalid.geocode.lon")
	    String getInvalidLon();

	  @Key("get.general.invalid.geocode.lat")
	    String getGeneralInvalidLat();

	  @Key("get.general.invalid.geocode.lon")
	    String getGeneralInvalidLon();

	  @Key("get.invalid.geocode.lat.special.characters")
	    String getInvalidLatWithSpecialCharacters();

	  @Key("get.invalid.geocode.lon.special.characters")
	    String getInvalidLonWithSpecialCharacters();


}