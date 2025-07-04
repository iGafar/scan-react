import FadeInOnScroll from '@/components/atoms/FadeInOnScroll';
import Text from '@/components/atoms/Text';
import Title from '@/components/atoms/Title';
import FormSearch from '@/components/molecules/Form/FormSearch';
import { SearchSection, TextBlock } from '@/pages/Search/styles';
import { Container } from '@/style/global';

export default function SearchPage() {
  return (
    <>
      <SearchSection>
        <Container>
          <TextBlock>
            <FadeInOnScroll>
              <Title level={3} mb={25}>
                Найдите необходимые
                <br /> данные в пару кликов.
              </Title>
            </FadeInOnScroll>

            <FadeInOnScroll delay={0.3}>
              <Text>
                Задайте параметры поиска. <br /> Чем больше заполните, тем
                точнее поиск
              </Text>
            </FadeInOnScroll>
          </TextBlock>
          <FadeInOnScroll delay={0.6} threshold={0.1}>
            <FormSearch />
          </FadeInOnScroll>
        </Container>
      </SearchSection>
    </>
  );
}
