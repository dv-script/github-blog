import * as S from './styles'
import { GithubLogo, Users, Buildings } from '@phosphor-icons/react';

export function ProfileCard() {
    return (
        <S.ProfileCardContainer>
            
            <S.ProfileCardImageContainer>
                <S.ProfileCardImage />
            </S.ProfileCardImageContainer>

            <div>
                <S.ProfileCardName>Davi Hasson Castro</S.ProfileCardName>
                <S.ProfileCardBio>ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</S.ProfileCardBio>
                <S.ProfileCardWrapper>
                    <S.ProfileCardInfoContainer>
                        <GithubLogo />
                        <S.ProfileCardInfo>dv-script</S.ProfileCardInfo>
                    </S.ProfileCardInfoContainer>
                    <S.ProfileCardInfoContainer>
                        <Buildings weight='fill'/>
                        <S.ProfileCardInfo>Rocketseat</S.ProfileCardInfo>
                    </S.ProfileCardInfoContainer>
                    <S.ProfileCardInfoContainer>
                        <Users weight='fill'/>
                        <S.ProfileCardInfo>32 seguidores</S.ProfileCardInfo>
                    </S.ProfileCardInfoContainer>
                </S.ProfileCardWrapper>
            </div>

        </S.ProfileCardContainer>
    )
}