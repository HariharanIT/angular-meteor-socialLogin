Meteor.startup(function () {
  // Client startup method.
  Meteor.absoluteUrl.defaultOptions.rootUrl = 'http://myapp.dev/';
});
// first, remove configuration entry in case service is already configured
ServiceConfiguration.configurations.remove({
  service: "google"
});
ServiceConfiguration.configurations.insert({
  service: "google",
  clientId: "808320176863-aipdvrl74i18gqlvhbu38k9hakjc8rpt.apps.googleusercontent.com",
  secret: "EdE3yeBti0Ney_tHztVdfpL8"
});
// first, remove configuration entry in case service is already configured
ServiceConfiguration.configurations.remove({
  service: "twitter"
});
ServiceConfiguration.configurations.insert({
  service: "twitter",
  consumerKey: "lcOfpDOnFpB1DnJQuBHweUKk5",
  secret: "AQWrrGYfR6COd9Zg5eCYMSWoOkcwUzzYHKvbEcLFXTJg5j141I"
});

// first, remove configuration entry in case service is already configured
ServiceConfiguration.configurations.remove({
  service: "facebook"
});
ServiceConfiguration.configurations.insert({
  service: "facebook",
  appId: "1127822400575380",
  secret: "48affbd0c0849015f97d020f560b0bb8"
});