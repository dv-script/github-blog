import * as S from './styles'
import { GithubLogo, Users, Buildings, ArrowSquareOut } from '@phosphor-icons/react';

interface ProfileCardProps {
    username: string
    avatarUrl: string
    htmlUrl: string
    name: string
    bio: string
    company: string
    followers: number
}

export function ProfileCard({ username, avatarUrl, name, bio, company, followers, htmlUrl }: ProfileCardProps) {
    return (
        <S.ProfileCardContainer>

            <S.ProfileCardImageContainer>
                <S.ProfileCardImage src={avatarUrl} alt={name + 'image'} />
            </S.ProfileCardImageContainer>

            <S.ProfileCardContent>
                <S.ProfileCardTextContainer>
                    <S.ProfileCardName>{name}</S.ProfileCardName>
                    <S.ProfileCardBio>{bio}</S.ProfileCardBio>
                </S.ProfileCardTextContainer>

                <S.ProfileCardWrapper>
                    <S.ProfileCardInfoContainer>
                        <GithubLogo />
                        <S.ProfileCardInfo>{username}</S.ProfileCardInfo>
                    </S.ProfileCardInfoContainer>

                    <S.ProfileCardInfoContainer>
                        <Buildings weight='fill' />
                        <S.ProfileCardInfo>{company === null ? 'Nenhuma empresa' : company}
                        </S.ProfileCardInfo>
                    </S.ProfileCardInfoContainer>

                    <S.ProfileCardInfoContainer>
                        <Users weight='fill' />
                        <S.ProfileCardInfo>{followers} seguidores</S.ProfileCardInfo>
                    </S.ProfileCardInfoContainer>
                </S.ProfileCardWrapper>
            </S.ProfileCardContent>

            <S.ProfileCardLink to={htmlUrl}>Github <ArrowSquareOut weight='bold' /></S.ProfileCardLink>

        </S.ProfileCardContainer>
    )
}