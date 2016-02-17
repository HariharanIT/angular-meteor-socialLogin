Meteor.startup(function () {
  // Client startup method.
  Meteor.absoluteUrl.defaultOptions.rootUrl = 'http://myapp.dev/';
});
/* Please add your app clientId and secret id
// first, remove configuration entry in case service is already configured
ServiceConfiguration.configurations.remove({
  service: "google"
});
ServiceConfiguration.configurations.insert({
  service: "google",
  clientId: "",
  secret: ""
});
// first, remove configuration entry in case service is already configured
ServiceConfiguration.configurations.remove({
  service: "twitter"
});
ServiceConfiguration.configurations.insert({
  service: "twitter",
  consumerKey: "",
  secret: ""
});

// first, remove configuration entry in case service is already configured
ServiceConfiguration.configurations.remove({
  service: "facebook"
});
ServiceConfiguration.configurations.insert({
  service: "facebook",
  appId: "",
  secret: ""
});*/