import { useEffect } from "react";

import { gapi } from "gapi-script";
import { GoogleLogin } from "react-google-login";
import "./App.css";

const clientID =
  "728562345073-fkrij7aekj2h2qgqjgsro44cjsovi4oi.apps.googleusercontent.com";

const responseGoogle = (response) => {
  console.log(response);
};

const onSuccess = (res) => {
  console.log("Auth Sucess:" + JSON.stringify(res));
  console.log("Access Token:" + JSON.stringify(res.xc.access_token));
  gToken = res.xc.access_token;
};

const onFailure = (res) => {
  console.log("Auth Failed:" + res);
};

var gToken = "x";

const GoogleSignInButton = ({ googleSetToken }) => {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientID,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });

  return (
    <GoogleLogin
      clientId={clientID}
      buttonText="Sign in with Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={"single_host_origin"}
      className={"loginBtn--google"}
    />
  );
};
export default GoogleSignInButton;
