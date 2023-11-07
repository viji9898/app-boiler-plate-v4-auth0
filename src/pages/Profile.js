import { useAuth0 } from "@auth0/auth0-react";
import React, { useContext } from "react";
import { PageLayout } from "../components/layout/pageLayout";
import Auth0Context from "../utils/auth0/auth0Context";
import { Divider } from "antd";

export const ProfilePage = () => {
  const { user } = useAuth0();
  const { userProfile } = useContext(Auth0Context);

  if (!user) {
    return null;
  }

  return (
    <PageLayout>
      <div className="content-layout">
        <br></br>
        <Divider />
        <h2>Profile Data from Auth0</h2>
        <div className="content__body">
          <p id="page-description">
            <span>
              You can use the <strong>ID Token</strong> to get the profile
              information of an authenticated user.
            </span>
            <br></br>
            <span>
              <strong>Only authenticated users can access this page.</strong>
            </span>
          </p>
          <div className="profile-grid">
            <div className="profile__header">
              <img
                src={user.picture}
                alt="Profile"
                className="profile__avatar"
              />
              <div className="profile__headline">
                <h2 className="profile__title">{user.name}</h2>
                <span className="profile__description">{user.email}</span>
              </div>
            </div>
            <br></br>
            <Divider />
            <h2 id="page-title" className="content__title">
              Profile Data from Fauna
            </h2>
            <p>Fauna Ref: {userProfile.ref}</p>
            <p>Auth0Id: {userProfile.userId}</p>
            <p>Email: {userProfile.userEmail}</p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
