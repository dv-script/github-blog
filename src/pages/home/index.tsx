import { useState, useEffect } from "react";
import { instance } from "../../lib/axios";
import * as S from "./styles";

import { ProfileCard } from "./components/ProfileCard";
import { SearchPost } from "./components/SearchPost";
import { PostList } from "./components/PostList";

interface IProfile {
  login: string
  avatar_url: string
  html_url: string
  name: string
  bio: string
  company: string
  followers: number
}

export function Home() {

  const [profile, setProfile] = useState({} as IProfile);

  async function getProfile() {
    const { data } = await instance.get(`/users/dv-script`);
    setProfile(data);
    return profile;
  }
  useEffect(() => {
    getProfile();
  }
    , []);

  return (
    <S.Container>
      <ProfileCard
        username={profile.login}
        avatarUrl={profile.avatar_url}
        name={profile.name}
        bio={profile.bio}
        company={profile.company}
        followers={profile.followers}
        htmlUrl={profile.html_url}
      />
      <SearchPost />
      <PostList />
    </S.Container>
  );
}