import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { init, trackPages } from "insights-js";

import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient();

init("cq4j2L9M71P9oXCD");
trackPages();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
