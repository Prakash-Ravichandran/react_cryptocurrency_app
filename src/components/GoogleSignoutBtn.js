import { GoogleLogout } from "react-google-login";

const clientId =
  "728562345073-fkrij7aekj2h2qgqjgsro44cjsovi4oi.apps.googleusercontent.com";

const responseGoogle = (response) => {
  console.log("Failed: " + response);
};

const onSuccess = (res) => {
  console.log("Logout success:" + res);
};

const GoogleSignoutButton = () => {
  return (
    <GoogleLogout
      clientId={clientId}
      buttonText="Logout"
      onLogoutSuccess={onSuccess}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
};
export default GoogleSignoutButton;
