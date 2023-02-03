import React from "react";
import { useKeycloak } from "@react-keycloak/web";

const Nav = () => {
 const { keycloak, initialized } = useKeycloak();

 return (
  <div>

    {!keycloak.authenticated && (
      <button type="button" onClick={() => keycloak.login()}>
        LogIn
      </button>
    )}

    {!!keycloak.authenticated && (
      <button type="button" onClick={() => keycloak.logout()}>
        Logout
      </button>
    )}
</div>
 );
};

export { Nav };