import { useEffect } from "react";
import { GoogleLogout } from "react-google-login";

import { gapi } from "gapi-script";

// const { signOut, loaded } = useGoogleLogout({
//   jsSrc,
//   onFailure,
//   clientId,
//   cookiePolicy,
//   loginHint,
//   hostedDomain,
//   fetchBasicProfile,
//   discoveryDocs,
//   uxMode,
//   redirectUri,
//   scope,
//   accessType,
//   onLogoutSuccess,
// });

const clientId =
  "728562345073-fkrij7aekj2h2qgqjgsro44cjsovi4oi.apps.googleusercontent.com";

const responseGoogle = (response) => {
  console.log("Failed: " + response);
};

const GoogleSignoutButton = ({ setToken, user }) => {
  const onSuccess = (res) => {
    console.log("Logout success:" + res);

    alert("are you sure you want to logout ?");
    setToken(null);
  };

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });
  return (
    <>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
        onSuccess={onSuccess}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </>
  );
};
export default GoogleSignoutButton;
