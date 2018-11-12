# react-optimize

Integration with Google Optimize.

Docs:
 - Optimize Deploy with GTAG: https://support.google.com/optimize/answer/7513085
 - Optimize JS API: https://support.google.com/optimize/answer/9059383


## Instalation
```
yarn add react-optimize
```

## How to use
You first need to add the gtag snippet with the optimize container id in it. If you are using [create-react-app](https://github.com/facebook/create-react-app)
you can add the following to `public/index.html`
```
<script async src="https://www.googletagmanager.com/gtag/js?id=%REACT_APP_GA_ID%"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  gtag = function () { dataLayer.push(arguments); }
  gtag('js', new Date());

  gtag('config', '%REACT_APP_GA_ID%', { 'optimize_id': '%REACT_APP_OPTIMIZE_ID%'});
</script>
```

and define them in your `.env`
```
REACT_APP_GA_ID=UA-xyz
REACT_APP_OPTIMIZE_ID=GTM-abc
```

After that you can use the lib like the following:
```
import React from 'react';
import { Experiment, Variant } from "react-optimize";

class App extends React.Component {
  render() {
    return(
      <Experiment id="<experiment-id>">
        <Variant id="0">
          Original
        </Variant>
        <Variant id="1">
          Variant 1
        </Variant>
        <Variant id="2">
          Variant 2
        </Variant>
      </Experiment>
    )
  }
}
```