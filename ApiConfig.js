package com.capestart.config.positiveconfig;

import org.aeonbits.owner.Config;
import org.aeonbits.owner.Config.Key;


@Config.LoadPolicy(Config.LoadType.MERGE)
@Config.Sources({"system:properties",
  "system:env",
  "file:${user.dir}/src/test/resources/api-config.properties",
  "file:${user.dir}/src/test/resources/api-uat.config.properties",
  "file:${user.dir}/src/test/resources/api-production.config.properties"})
public interface ApiConfig extends Config {
  @DefaultValue("staging")
  String environment();
  @Key("${environment}.baseurl")
  String apiBaseUrl();
  @Key("${environment}.login-baseurl")
  String loginBaseUrl();
  @Key("version.login")
  String loginVersionEndpoint();
  @Key("version.cpq")
  String cpqVersionEndpoint();
  @Key("create.account")
  String createAccountEndpoint();
  @Key("company.id")
  String companyId();
  @Key("${environment}.cpq.ocp.key")
  String cpqOcpKey();
  @Key("account.id.endpoint")
  String accountIdEndpoint();
  @Key("create.billing.account.endpoint")
  String createBillingAccountEndpoint();
  @Key("create.deal.endpoint")
  String createDealAccountEndpoint();
  @Key("get.deal.id.endpoint")
  String getDealAccountByIdEndpoint();
  @Key("updated.deal.name")
  String getUpdatedDealName();
  @Key("update.account.endpoint")
  String getUpdateAccountEndPoint();
  @Key("add.location.endpoint")
  String getAddLocationEndPoint();
  @Key("get.list.of.quotes.endpoint")
  String getListOfQuotesEndPoint();
  @Key("delete.location.endpoint")
  String getDeleteLocationEndPoint();
  @Key("get.prices.endpoint")
  String getPricesEndPoint();
  @Key("get.quote.price.endpoint")
  String getQuotePriceEndPoint();
  @Key("get.quote.config.endpoint")
  String getQuoteConfigEndPoint();
  @Key("get.selected.prices.endpoint")
  String getSelectedPricesEndPoint();
  @Key("create.order.endpoint")
  String getCreateOrderEndPoint();
  @Key("delete.deal.endpoint")
  String getDeleteDealEndPoint();
  @Key("get.fallout.endpoint")
  String getFalloutEndPoint();
  @Key("get.users.company.endpoint")
  String getUsersCompaniesEndPoint();
  @Key("${environment}.network.intelligence.ocp.key")
  String getNetworkIntelligenceOcpKey();
  @Key("${environment}.connectedworldbuilding.ocpkey")
  String getConnectedWorldBuildingOcpKey();
  @Key("${environment}.address.validation.ocpkey")
  String getAddressValidationOcpKey();
  @Key("${environment}.international.address.validation.ocpkey")
  String internationalAddressValidationOcpKey();
  @Key("${environment}.standard.address.ocpkey")
  String standardAddressOcpKey();
  @Key("${environment}.standard.address.get.coords.endpoint")
  String standardAddressGetCoordsEndpoint();
  @Key("${environment}.standard.address.post.endpoint")
  String standardAddressPostEndpoint();
  @Key("${environment}.standard.address.string.post.endpoint")
  String standardAddressStringPostEndpoint();
  @Key("${environment}.connected.world.building.uniquekey")
  String getValidUniqueKey();

  @Key("${environment}.geocode.post.bulk.reverse.endpoint")
  String geocodeV1BulkReverseEndpoint();

  @Key("${environment}.geocode.post.bulk.reverse.invalid.endpoint")
  String geocodeV1BulkReverseInvalidEndpoint();

  @Key("${environment}.geocode.post.geocode.address.endpoint")
  String geocodeV1AddressEndpoint();

  @Key("${environment}.geocodev1api.ocpkey")
  String geocodeV1OcpKey();

  @Key("${environment}.geocode.get.geocode.reverse.address.endpoint")
  String geocodeV1CoordsEndpoint();

  @Key("${environment}.geocode.lat")
  String geocodeV1Lat();

  @Key("${environment}.geocode.lon")
  String geocodeV1Lon();

  @Key("${environment}.geocode.post.geocode.address.invalid.endpoint")
  String geocodeV1AddressInvalidEndpoint();

  @Key("${environment}.geocode.get.geocode.reverse.address.invalid.endpoint")
  String geocodeV1CoordsInvalidEndpoint();

}

