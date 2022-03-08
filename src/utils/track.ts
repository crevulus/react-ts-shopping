import { parameters, track } from "insights-js";

export const trackEvent = (options: any, params: any) => {
  track({
    ...options,
    parameters: {
      locale: parameters.locale(),
      screenSize: parameters.screenType(),
      referrer: parameters.referrer(),
      search: true,
      ...params,
    },
  });
  // @ts-ignore
  window.gtag("event", "click", {
    event_category: "button",
    event_label: "local-storage",
    value: "test",
  });
};
