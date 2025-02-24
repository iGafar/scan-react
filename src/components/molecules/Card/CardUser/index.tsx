import { useGetUserInfoQuery } from '@/api/controllers/account-controller/account-controller';
import {
  CardUserWrapper,
  UserCardLoader,
} from '@/components/molecules/Card/CardUser/styles';

export default function CardUser() {
  const { data, isLoading } = useGetUserInfoQuery();

  return (
    <CardUserWrapper vertical justify="center" align="center" gap={5}>
      {isLoading ? (
        <UserCardLoader>
          <img src="./icons/loader.png" />
        </UserCardLoader>
      ) : (
        <>
          <p>
            <span>Использовано компаний</span> {data?.usedCompanyCount}
          </p>
          <p>
            <span>Лимит по компаниям </span>
            {data?.companyLimit}
          </p>
        </>
      )}
    </CardUserWrapper>
  );
}
