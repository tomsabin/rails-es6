Teaspoon.configure do |config|
  config.suite do |suite|
    suite.boot_partial = "bundle_boot"
    suite.use_framework :mocha, "2.3.3"
    suite.javascripts += ["support/expect"]
  end
end
