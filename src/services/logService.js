import * as Sentry from "@sentry/browser";

function init() {
  Sentry.init({
    dsn: "https://49b1afe8e4544090b360f32556e67b8c@sentry.io/1405872",
    environment: "development",
    release: "1.0.0"
  });
}

function configure() {
  Sentry.configureScope(scope => {
    scope.setExtra("battery", 0.7);
    scope.setTag("user_mode", "admin");
    scope.setUser({ username: "abulhasanraju@gmail.com", id: "4711" });
  });
}

function log(error) {
  Sentry.captureException(error);
}

export default {
  init,
  configure,
  log
};
