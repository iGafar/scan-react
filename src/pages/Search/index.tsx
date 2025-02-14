import Text from '@/components/atoms/Text';
import Title from '@/components/atoms/Title';
import FormSearch from '@/components/molecules/Form/FormSearch';
import { SearchSection, TextBlock } from '@/pages/Search/styles';
import { Container } from '@/style/global';

export default function SearchPage() {
  return (
    <main>
      <SearchSection>
        <Container>
          <TextBlock>
            <Title level={3} mb={25}>
              Найдите необходимые
              <br /> данные в пару кликов.
            </Title>

            <Text>
              Задайте параметры поиска. <br /> Чем больше заполните, тем точнее
              поиск
            </Text>
          </TextBlock>

          <FormSearch />
        </Container>
      </SearchSection>
    </main>
  );
}
